import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: false,
  workers: 2,
  timeout: 30000,
  use: {
    baseURL: "http://127.0.0.1:3100",
    // Use Playwright Chromium by default; PLAYWRIGHT_CHANNEL=chrome opts into local Chrome.
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    headless: true,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  reporter: [["list"], ["html", { open: "never" }]],
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
    timeout: 60000,
    env: { WRANGLER_SEND_METRICS: "false" },
  },
});
