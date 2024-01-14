import { test, expect, TestInfo  } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';
import LoginTestData from '../data/loginTestData';
import { setup, teardown } from '../GlobalSetup';

test.beforeEach(async ({}, testInfo: TestInfo) => {
  const browserType = testInfo.project.name as 'chromium' | 'firefox' | 'webkit';
  await setup(browserType);
});

test.afterEach(teardown);

test.describe('Login Tests', () => {
  const locales = ['en', 'fr']; 

  //add some before, after, before & after each logic to be added (close browser/clear cookies after each, etc.)

  test('TC11 Successful Login @smoke @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);
  
    // Login with valid credentials
    await loginPage.successfulLogin();
  
    // Assertion
    expect(page.url()).toBe(productListPage.expectedUrl);
  });

  locales.forEach(locale => {
    test(`TC12 Unsuccessful Login @regression - ${locale}`, async ({ page }) => {
      // Perform the login with invalid credentials
      const loginPage = new LoginPage(page);
  
    // Login with valid credentials
    await loginPage.unsuccessfulLogin();
  
    // Set the locale
    await loginPage.setLocale(locale);
    const localeData = (LoginTestData.locales as any)[locale];

    // get the error message
    const errorMessage = await page.textContent(loginPage.errorMessage);

    // Check if localeData is defined and contains the expected property
    if (localeData && 'wrongPasswordMessage' in localeData) {
      // Assert that wrongPasswordMessage is displayed
      expect(errorMessage).toContain(localeData.wrongPasswordMessage);
    } else {
      console.warn('Locale data or the expected property is undefined.');
    }

    // Assert the current locale after changing it
    const currentLocale = await loginPage.getCurrentLocale();
    expect(currentLocale).toBe(locale);
    });
  });

});
