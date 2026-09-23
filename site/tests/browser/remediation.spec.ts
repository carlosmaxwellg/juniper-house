import { test, expect } from "@playwright/test";

const routes = ["/", "/concerns", "/treatments", "/concerns/uneven-tone-sun-damage", "/treatments/medical-microneedling", "/about", "/approach", "/consultation", "/visit", "/portfolio-concept", "/book"];
for (const width of [320, 390, 768, 1024, 1440]) {
  test(`final remediation visual and reflow review at ${width}px`, async ({ page }, testInfo) => {
    test.setTimeout(120000);
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      const slug = route.replaceAll("/", "-") || "home";
      await page.screenshot({ path: testInfo.outputPath(`${slug}-top.png`) });
      // Exercise lazy images and every section, including the unchanged lower page.
      for (const section of await page.locator("main section").all()) {
        await section.scrollIntoViewIfNeeded();
        expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `${route} at ${width}`).toBe(true);
      }
      for (const image of await page.locator("main img").all()) {
        await expect(image).toHaveJSProperty("complete", true);
        expect(await image.evaluate((el: HTMLImageElement) => el.naturalWidth)).toBeGreaterThan(0);
      }
      const detail = page.locator(route === "/" ? ".home-provider" : route === "/portfolio-concept" ? '[data-section="Decisions that shaped the site"]' : route.startsWith("/concerns/") ? ".related-editorial-list" : route.startsWith("/treatments/") ? ".related-editorial-list" : route === "/approach" ? ".care-plan-artifact" : route === "/about" ? ".narrative-pause" : route === "/visit" ? '[data-section="Hours"]' : "main section").first();
      if (await detail.count()) {
        await detail.scrollIntoViewIfNeeded();
        await page.screenshot({ path: testInfo.outputPath(`${slug}-detail.png`) });
      }
    }
  });
}
