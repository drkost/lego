import { Page } from 'playwright';

export default class BasePage {
  baseUrl: string;
  page: Page;

  constructor(page: Page) {
    this.baseUrl = 'https://www.saucedemo.com/v1/';
    this.page = page;
  }

  async navigateTo(relativePath: string): Promise<void> {
    const fullUrl = `${this.baseUrl}${relativePath}`;
    console.log(`Navigating to: ${fullUrl}`);
    await this.page.goto(fullUrl);
  }

  async setLocale(language: string): Promise<void> {
    // Put a logic that change the language
    console.log(`Changing locale to ${language}`);
  }

  async getCurrentLocale(): Promise<string> {
    console.log('Retrieving current locale');
    return 'en'; // Placeholder value, put a logic to get the current language
  }
}
