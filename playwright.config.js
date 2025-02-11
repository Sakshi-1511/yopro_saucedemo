// playwright.config.js
import { defineConfig ,devices } from '@playwright/test';

export default defineConfig({
    use: {
        headless: false, // Set false for debugging
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
    },
    reporter: [['html', { open: 'never' }]], // Generates an HTML report
    projects: [
        /* Test against desktop browsers */
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        }
    ],
});
