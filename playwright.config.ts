import { devices } from '@playwright/test';

export default {
  projects: [
    // Configuration for Chrome (Desktop)
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], browserName: 'chromium' },
    },
    // Configuration for Safari (Desktop)
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], browserName: 'webkit'},
    },
    // Configuration for iPhone 12 (Mobile)
    {
      name: 'webkit',
      use: { ...devices['iPhone 12'], browserName: 'webkit'},
    },
    // Configuration for Galaxy S21 (Mobile)
    {
      name: 'chromium',
      use: { ...devices['Galaxy S21'], browserName: 'chromium' },
    },
  ],
};
