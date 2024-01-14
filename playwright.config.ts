import { devices } from '@playwright/test';

export default {
  projects: [
    // Configuration for Chrome (Desktop)
    {
      name: 'chrome-desktop',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    // Configuration for Mozilla (Desktop)
    {
      name: 'mozilla-desktop',
      use: { ...devices['Desktop Firefox'], channel: 'firefox' },
    },
    // Configuration for Safari (Desktop)
    {
      name: 'safari-desktop',
      use: { ...devices['Desktop Safari']},
    },
    // Configuration for iPhone 12 (Mobile)
    {
      name: 'iphone12',
      use: { ...devices['iPhone 12']},
    },
    // Configuration for Galaxy S21 (Mobile)
    {
      name: 'galaxyS21',
      use: { ...devices['Galaxy S21'], channel: 'chrome' },
    },
  ],
};
