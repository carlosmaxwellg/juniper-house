import { test, expect } from "@playwright/test";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Request-only checks run against Wrangler Pages, never a Next.js server.
test("all exported pages, links and assets resolve with security headers", async ({ request }) => {
  const files = readdirSync("out", { recursive: true }).map(String);
  const pages = files.filter(file => file.endsWith(".html") && !file.startsWith("404") && !file.startsWith("_"));
  expect(pages.length).toBe(25);
  const checked = new Set<string>();
  for (const file of pages) {
    const path = file === "index.html" ? "/" : `/${file.slice(0, -5)}`;
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()["content-type"]).toContain("text/html");
    expect(response.headers()["content-security-policy"]).toContain("form-action 'none'");
    expect(response.headers()["x-frame-options"]).toBe("DENY");
    expect(response.headers()["x-content-type-options"]).toBe("nosniff");
    expect(response.headers()["referrer-policy"]).toBe("strict-origin-when-cross-origin");
    expect(response.headers()["permissions-policy"]).toBe("camera=(), microphone=(), geolocation=()");
    const html = await response.text();
    expect(html).not.toContain("/_next/image?");
    expect(html).toMatch(/<meta name="robots" content="noindex/);
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    expect(canonical, path).toBeTruthy();
    expect(new URL(canonical!).href).toBe(new URL(path, process.env.NEXT_PUBLIC_SITE_URL || "https://juniper-house.example").href);
    for (const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"#]*)(?:#[^"]*)?"/g)) {
      const asset = match[1].replaceAll("&amp;", "&");
      if (!asset || checked.has(asset)) continue;
      checked.add(asset);
      expect((await request.get(asset)).status(), asset).toBe(200);
    }
  }
  for (const path of ["/not-a-page", "/concerns/not-real", "/treatments/not-real", "/_next/image?url=test&w=640&q=75"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(404);
    expect(await response.text()).toContain("<html");
  }
  // Fonts referenced only by generated CSS must also resolve.
  for (const file of files.filter(file => file.endsWith(".css"))) {
    const css = readFileSync(join("out", file), "utf8");
    for (const match of css.matchAll(/url\((?:["'])?(\.\.\/media\/[^)"']+)/g)) {
      const path = new URL(match[1], `http://127.0.0.1:3100/${file}`).pathname;
      expect((await request.get(path)).status(), path).toBe(200);
    }
  }
});

test("exported social image has an image MIME type and metadata stays preview-safe", async ({ request }) => {
  const image = await request.get("/opengraph-image");
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toBe("image/png");
  expect((await image.body()).subarray(1,4).toString()).toBe("PNG");
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Allow: /");
  expect(await robots.text()).not.toContain("Sitemap:");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(sitemap.headers()["content-type"]).toContain("xml");
  expect(await sitemap.text()).not.toContain("<loc>");
});
