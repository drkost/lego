import { test, expect, TestInfo } from '@playwright/test';
import ProductListPage from '../pages/ProductListPage';
import CheckoutInfoPage from '../pages/CheckoutInfoPage'
import LoginPage from '../pages/LoginPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import { setup, teardown } from '../GlobalSetup';

test.beforeEach(async ({}, testInfo: TestInfo) => {
  const browserType = testInfo.project.name as 'chromium' | 'firefox' | 'webkit';
  await setup(browserType);
});

test.afterEach(teardown);

test.describe('Checkout tests', () => {

  test('TC31 Proceed to Checkout info page @smoke @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkoutInfoPage = new CheckoutInfoPage(page);

    await loginPage.successfulLogin();

    // Click on Add to cart button on random product
    await productListPage.clickAddToCartOnRandomProduct();

    // Click on Shopping cart to enter it
    await shoppingCartPage.enterShoppingCart();

    // Assert Shopping Cart has 1 item
    const shoppingCartQuantity = await shoppingCartPage.getShoppingCartQuantity();
    expect(shoppingCartQuantity).toBe('1');

    // Click Checkout and assert navigation to checkout Info page
    await shoppingCartPage.Checkout();
    expect(page.url()).toBe(checkoutInfoPage.expectedUrl);

  });
  
});
