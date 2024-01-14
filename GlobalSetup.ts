// global-setup.ts

import { chromium, firefox, webkit, Browser, Page, BrowserContext } from 'playwright';

let browser: Browser;
let page: Page;

export const setup = async (browserType: 'chromium' | 'firefox' | 'webkit'): Promise<void> => {
  browser = await getBrowserInstance(browserType);
  const context = await browser.newContext();
  page = await context.newPage();
};

export const teardown = async (): Promise<void> => {
  // Perform cleanup actions here
  await page.close();
  await browser.close();
};

const getBrowserInstance = async (browserType: 'chromium' | 'firefox' | 'webkit'): Promise<Browser> => {
  switch (browserType) {
    case 'chromium':
      return chromium.launch();
    case 'firefox':
      return firefox.launch();
    case 'webkit':
      return webkit.launch();
    default:
      throw new Error(`Unsupported browser type: ${browserType}`);
  }
};
