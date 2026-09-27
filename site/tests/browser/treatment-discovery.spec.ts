import { test, expect } from "@playwright/test";

test("treatment discovery retains keyboard links and responsive layout", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.locator(".home-treatments").scrollIntoViewIfNeeded();
    await expect(page.locator(".treatment-row")).toHaveCount(4);
    await expect(page.locator(".treatment-preview")).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if ([375, 1440].includes(width)) await page.locator(".home-treatments").screenshot({ path: testInfo.outputPath(`treatment-${width}.png`) });
  }
  await page.getByRole("link", { name: "Compare treatments", exact: true }).focus();
  for (const row of await page.locator(".treatment-row").all()) {
    await page.keyboard.press("Tab");
    await expect(row).toBeFocused();
    expect(await row.evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe("none");
  }
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/treatments#soften-and-balance$/);
  await expect(page.locator("#soften-and-balance")).toBeVisible();
});
