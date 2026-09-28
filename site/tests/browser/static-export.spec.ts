import { test, expect } from "@playwright/test";

// Catch accidental reintroduction of /_next/image and oversized source images.
test("editorial and case-study images are small static assets", async ({ page, request }) => {
  const optimizerRequests: string[] = [];
  page.on("request", (req) => {
    if (new URL(req.url()).pathname === "/_next/image") optimizerRequests.push(req.url());
  });
  const checked = new Set<string>();
  for (const route of ["/", "/about", "/concerns/uneven-tone-sun-damage", "/portfolio-concept"]) {
    await page.goto(route);
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
      const src = await image.evaluate((img: HTMLImageElement) => img.currentSrc);
      expect(new URL(src).pathname).toMatch(/^\/images\/.+\.webp$/);
      if (checked.has(src)) continue;
      checked.add(src);
      const response = await request.get(src);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("image/webp");
      expect((await response.body()).length).toBeLessThan(160_000);
    }
  }
  expect(checked.size).toBe(8);
  expect(optimizerRequests).toEqual([]);
});

test("static navigation hydrates and retains the hero animation", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", error => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator(".hero-glass span").first()).toHaveCSS("animation-name", "jh-flute-clear");
  await expect(page.locator("html")).toHaveAttribute("data-hero-resolved", "true");
  await page.locator("main").getByRole("link", { name: "Book a consultation", exact: true }).first().click();
  await expect(page).toHaveURL(/\/book$/);
  await page.getByRole("button", { name: "Continue to provider", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Choose a provider preference" })).toBeFocused();
  await page.goBack();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator(".hero-glass")).toBeHidden();
  expect(errors).toEqual([]);
});
