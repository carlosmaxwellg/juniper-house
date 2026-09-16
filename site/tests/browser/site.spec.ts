import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { treatments } from "../../src/content/treatments";
import { concerns } from "../../src/content/concerns";
const routes = [
  "/",
  "/concerns",
  "/treatments",
  "/consultation",
  "/approach",
  "/about",
  "/visit",
  "/portfolio-concept",
  "/medical-disclaimer",
  "/privacy",
  "/terms",
  "/accessibility",
  "/book",
  "/book/confirmation",
  ...concerns.map((c) => `/concerns/${c.slug}`),
  ...treatments.map((t) => `/treatments/${t.slug}`),
];
async function audit(page: Page) {
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(result.violations).toEqual([]);
}
async function toDetails(page: Page) {
  await page.goto("/book");
  await page
    .getByRole("button", { name: "Continue to provider", exact: true })
    .click();
  await page.getByText("First available", { exact: true }).click();
  await page
    .getByRole("button", { name: "Continue to time", exact: true })
    .click();
  await page
    .getByRole("combobox", { name: "Select a date", exact: true })
    .selectOption("2026-10-06");
  await page.getByText("10:30 a.m.", { exact: true }).click();
  await page
    .getByRole("button", { name: "Continue to details", exact: true })
    .click();
}
for (const route of routes)
  test(`page and accessibility: ${route}`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      "content",
      /noindex/,
    );
    await audit(page);
  });
test("internal links resolve, unknown content gets 404, no clinic schema", async ({
  page,
  request,
}) => {
  const checked = new Set<string>();
  for (const path of routes) {
    await page.goto(path);
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((links) => links.map((a) => a.getAttribute("href")!));
    for (const href of hrefs) {
      if (checked.has(href) || href.includes("#")) continue;
      checked.add(href);
      expect((await request.get(href)).status(), href).toBeLessThan(400);
    }
    expect(
      (
        await page
          .locator('script[type="application/ld+json"]')
          .allTextContents()
      ).join(" "),
    ).not.toMatch(/MedicalClinic|LocalBusiness/);
  }
  expect((await request.get("/concerns/not-real")).status()).toBe(404);
  expect((await request.get("/treatments/not-real")).status()).toBe(404);
});
test("mobile menu is contained, closes with Escape, and restores focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await menu.click();
  const dialog = page.getByRole("dialog", { name: "Site menu" });
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("button", { name: "Close", exact: true }),
  ).toBeFocused();
  await audit(page);
  await dialog
    .getByRole("link", { name: "Book a consultation", exact: true })
    .focus();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("link", { name: "Juniper House", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(menu).toBeFocused();
  await menu.click();
  await page
    .getByRole("dialog")
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(page.locator("main")).not.toHaveAttribute("inert", "");
});
test("desktop menus and skip link work by keyboard", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  const summary = page.locator("#desktop-primary-navigation summary").first();
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.locator("#desktop-primary-navigation details[open]"),
  ).toHaveCount(1);
  await page.keyboard.press("Escape");
  await expect(summary).toBeFocused();
  await expect(
    page.locator("#desktop-primary-navigation details[open]"),
  ).toHaveCount(0);
});
test("desktop concerns separator clears every link at wide and narrow desktop widths", async ({ page }) => {
  for (const width of [1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.locator("#desktop-primary-navigation summary").first().click();
    const menu = page.locator("#desktop-primary-navigation details[open]");
    const last = menu.getByRole("link", { name: "Fine lines & facial balance", exact: true });
    const all = menu.getByRole("link", { name: "View all concerns" });
    await last.hover();
    await expect(last).toHaveCSS("text-decoration-line", "underline");
    const lastBox = await last.boundingBox();
    const allBox = await all.boundingBox();
    expect(allBox!.y).toBeGreaterThanOrEqual(lastBox!.y + lastBox!.height + 8);
    await last.focus();
    await page.keyboard.press("Tab");
    await expect(all).toBeFocused();
  }
});

for (const route of ["/concerns/fine-lines-facial-balance", "/treatments/medical-microneedling", "/approach", "/about", "/consultation", "/visit"]) {
  test(`interior imagery and accessible reflow: ${route}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    for (const width of [320, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(route);
      for (const image of await page.locator("main img").all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    }
    await page.setViewportSize({ width: 320, height: 740 });
    await page.addStyleTag({ content: "* { line-height:1.5 !important; letter-spacing:.12em !important; word-spacing:.16em !important; } p { margin-bottom:2em !important; }" });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await audit(page);
  });
}

test("booking errors, no availability, editing, completion, privacy", async ({
  page,
  context,
}) => {
  const requests: string[] = [];
  page.on("request", (r) => requests.push(`${r.url()} ${r.postData() ?? ""}`));
  await page.goto("/book");
  await page
    .getByRole("button", { name: "Continue to provider", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Choose a provider preference" }),
  ).toBeFocused();
  await audit(page);
  await page
    .getByRole("button", { name: "Continue to time", exact: true })
    .click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    "Choose a provider preference",
  );
  await page.getByText("First available", { exact: true }).click();
  await page
    .getByRole("button", { name: "Continue to time", exact: true })
    .click();
  await page
    .getByRole("combobox", { name: "Select a date", exact: true })
    .selectOption("2026-10-08");
  await expect(
    page.getByRole("status").filter({ hasText: "No times" }),
  ).toBeVisible();
  await page
    .getByRole("combobox", { name: "Select a date", exact: true })
    .selectOption("2026-10-06");
  await page.getByText("10:30 a.m.", { exact: true }).click();
  await audit(page);
  await page
    .getByRole("button", { name: "Continue to details", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Review booking", exact: true })
    .click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    "Enter a first name",
  );
  await audit(page);
  await page.getByRole("button", { name: "Use sample details" }).click();
  await page
    .getByLabel("First name", { exact: true })
    .fill("TestSentinelJuniper");
  await page.getByLabel(/I understand this is a fictional/).check();
  await page
    .getByRole("button", { name: "Review booking", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Review your simulated booking" }),
  ).toBeFocused();
  await audit(page);
  await page
    .getByRole("button", { name: "Change details", exact: true })
    .click();
  await expect(page.getByLabel("First name", { exact: true })).toHaveValue(
    "TestSentinelJuniper",
  );
  await page
    .getByRole("button", { name: "Review booking", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Complete simulated booking", exact: true })
    .click();
  await expect(
    page.getByRole("heading", {
      name: "Your mock appointment is confirmed—on this screen only.",
    }),
  ).toBeFocused();
  await expect(page.locator("main")).not.toContainText("TestSentinelJuniper");
  await audit(page);
  expect(requests.join("\n")).not.toMatch(
    /TestSentinelJuniper|taylor%40|taylor@example/,
  );
  expect(await context.cookies()).toEqual([]);
  expect(
    await page.evaluate(() => ({
      local: localStorage.length,
      session: sessionStorage.length,
    })),
  ).toEqual({ local: 0, session: 0 });
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Confirm your appointment type" }),
  ).toBeVisible();
});
test("exiting and refreshing clear the booking", async ({ page }) => {
  await toDetails(page);
  await page.getByRole("button", { name: "Use sample details" }).click();
  await page.getByRole("button", { name: "Exit booking", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Leave the booking demonstration?" }),
  ).toBeFocused();
  await page.getByRole("button", { name: "Stay in booking" }).click();
  await expect(
    page.getByRole("heading", { name: "Add demonstration details" }),
  ).toBeFocused();
  await expect(page.getByLabel("First name", { exact: true })).toHaveValue(
    "Taylor",
  );
  await page.reload();
  await expect(
    page.getByRole("heading", { name: "Confirm your appointment type" }),
  ).toBeVisible();
});
test("inquiry errors and completion never send or retain data", async ({
  page,
}) => {
  const requests: string[] = [];
  page.on("request", (r) =>
    requests.push(r.url() + " " + (r.postData() ?? "")),
  );
  await page.goto("/visit");
  await page.getByRole("button", { name: "Send simulated message" }).click();
  await expect(page.locator("main").getByRole("alert")).toContainText(
    "Enter a first name",
  );
  await page
    .getByLabel("First name", { exact: true })
    .fill("InquirySentinelJuniper");
  await page.getByLabel("Last name", { exact: true }).fill("Morgan");
  await page.getByLabel("Email", { exact: true }).fill("inquiry@example.com");
  await page
    .getByRole("combobox", { name: "Topic", exact: true })
    .selectOption("Portfolio project");
  await page
    .getByLabel("Message", { exact: true })
    .fill("A general demonstration question.");
  await page.getByRole("button", { name: "Send simulated message" }).click();
  await expect(
    page.getByRole("heading", { name: "Demonstration complete", exact: true }),
  ).toBeFocused();
  await expect(page.locator("main")).not.toContainText(
    "InquirySentinelJuniper",
  );
  expect(requests.join("\n")).not.toContain("InquirySentinelJuniper");
  await audit(page);
  await page.getByRole("button", { name: "Return to Visit", exact: true }).click();
  await expect(page.getByText("Use this demonstration form for non-medical questions", { exact: false })).toBeFocused();
  await expect(page.getByLabel("First name", { exact: true })).toHaveValue("");
});
test("responsive reflow and mobile booking action", async ({ page }) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/treatments/hyaluronic-acid-filler",
      "/book",
      "/visit",
    ]) {
      await page.goto(path);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${path} at ${width}`,
      ).toBe(true);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".mobile-booking")).toHaveCount(0);
  await page
    .getByRole("heading", { name: "Leave with a plan, not a sales pitch." })
    .scrollIntoViewIfNeeded();
  await expect(page.locator(".mobile-booking")).toBeVisible();
});

test("homepage disclosure, motion and enlarged editorial text remain accessible", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("region", { name: "Portfolio concept notice" })).toHaveCount(0);
  await expect(page.locator("footer").getByText("Juniper House is a fictional clinic created as a portfolio concept.", { exact: false })).toBeVisible();
  await expect(page.locator("footer").getByRole("link", { name: "Read the full disclosure" })).toHaveAttribute("href", "/portfolio-concept");
  await expect(page.locator(".home-hero .model-image")).toHaveCSS("animation-name", "none");
  await page.addStyleTag({ content: "* { line-height:1.5 !important; letter-spacing:.12em !important; word-spacing:.16em !important; } p { margin-bottom:2em !important; }" });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await audit(page);
});

test("production images, fonts, metadata and headers load without browser errors", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  for (const image of await page.locator("main img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toBeVisible();
    await expect
      .poll(() =>
        image.evaluate(
          (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  const response = await request.get("/");
  expect(response.headers()["content-security-policy"]).toContain(
    "form-action 'none'",
  );
  expect(response.headers()["x-content-type-options"]).toBe("nosniff");
  expect(response.headers()["x-frame-options"]).toBe("DENY");
  const loadedFonts = await page.evaluate(async () => {
    await document.fonts.ready;
    return Array.from(document.fonts)
      .filter((font) => font.status === "loaded")
      .map((font) => font.family);
  });
  expect(loadedFonts.join(" ")).toMatch(/Manrope/i);
  expect(loadedFonts.join(" ")).toMatch(/Newsreader/i);
  expect(
    (await request.get("/opengraph-image")).headers()["content-type"],
  ).toContain("image/png");
  expect((await request.get("/icon.svg")).status()).toBe(200);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("<loc>");
  expect(await (await request.get("/robots.txt")).text()).toContain("Allow: /");
  expect(errors).toEqual([]);
});
test("reduced motion, text spacing, forced colors and narrow booking details", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await toDetails(page);
  await audit(page);
  await page.addStyleTag({
    content:
      "* { line-height:1.5 !important; letter-spacing:.12em !important; word-spacing:.16em !important; } p { margin-bottom:2em !important; }",
  });
  const overflow = await page.locator("body *").evaluateAll((elements) =>
    elements
      .filter(
        (el) =>
          el.getBoundingClientRect().right > innerWidth ||
          el.scrollWidth > el.clientWidth,
      )
      .map(
        (el) =>
          `${el.tagName}.${el.className}: right=${el.getBoundingClientRect().right}, scroll=${el.scrollWidth}, client=${el.clientWidth}`,
      ),
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    overflow.join("\n"),
  ).toBe(true);
  await page.getByRole("button", { name: "Use sample details" }).click();
  await page.getByLabel(/I understand this is a fictional/).check();
  await page
    .getByRole("button", { name: "Review booking", exact: true })
    .click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.emulateMedia({ forcedColors: "active" });
  await page
    .getByRole("button", { name: "Complete simulated booking", exact: true })
    .focus();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Shift+Tab");
  await expect(
    page.getByRole("button", {
      name: "Complete simulated booking",
      exact: true,
    }),
  ).toBeFocused();
  expect(
    await page
      .getByRole("button", { name: "Complete simulated booking", exact: true })
      .evaluate((el) => getComputedStyle(el).outlineStyle),
  ).not.toBe("none");
});
test("desktop dropdown fits at its smallest breakpoint and closes after selection", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto("/");
  await page
    .locator("#desktop-primary-navigation summary")
    .filter({ hasText: "Treatments" })
    .click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const panel = page.locator("#desktop-primary-navigation details[open] > div");
  const bounds = await panel.boundingBox();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(1024);
  await panel
    .getByRole("link", { name: "IPL Photofacial", exact: true })
    .click();
  await expect(page).toHaveURL(/\/treatments\/ipl-photofacial$/);
  await expect(
    page.locator("#desktop-primary-navigation details[open]"),
  ).toHaveCount(0);
});
test("content remains readable without JavaScript and no forms can submit", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:3100/treatments/hyaluronic-acid-filler");
  await expect(
    page.getByRole("heading", { name: "Risks and limitations", exact: true }),
  ).toBeVisible();
  await page.goto("http://127.0.0.1:3100/book");
  await expect(
    page.locator("noscript p"),
  ).toBeVisible();
  await expect(page.locator("noscript p")).toContainText("This demonstration needs JavaScript.");
  await expect(page.locator("form")).toHaveCount(0);
  await context.close();
});
