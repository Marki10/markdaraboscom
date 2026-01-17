import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  use: {
    baseURL: "http://localhost:8080",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev -- --host",
    url: "http://localhost:8080",
    reuseExistingServer: true,
  },
});
