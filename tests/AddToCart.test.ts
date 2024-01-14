import { test, expect } from '@playwright/test';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';
import LoginPage from '../pages/LoginPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';

test.describe('Add to Cart Tests', () => {

  test('TC21 Add Product to Cart (Product page) @smoke @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);
    const productPage = new ProductPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    await loginPage.successfulLogin();

    // Click on random product and navigates to the random product paged
    await productListPage.clickRandomProduct();

    // Click on Add to cart button
    await productPage.clickAddToCart();

    const shoppingCartBadgeText = await shoppingCartPage.getShoppingCartBadgeText();
    expect(shoppingCartBadgeText).toBe('1');
  });

  test('TC22 Add Product to Cart (Product list page) @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    await loginPage.successfulLogin();

    // Click on random product Add to cart button
    await productListPage.clickAddToCartOnRandomProduct();

    const shoppingCartBadgeText = await shoppingCartPage.getShoppingCartBadgeText();
    expect(shoppingCartBadgeText).toBe('1');
  });
  
  test('TC23 Add Multiple Products to Cart @smoke @regression', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productListPage = new ProductListPage(page);
    const shoppingCartPage = new ShoppingCartPage(page);

    await loginPage.successfulLogin();

    // Click on random product Add to cart button
    await productListPage.clickAddToCartOnRandomProduct();
    await productListPage.clickAddToCartOnRandomProduct();

    const shoppingCartBadgeText = await shoppingCartPage.getShoppingCartBadgeText();
    expect(shoppingCartBadgeText).toBe('2');
  });
});
