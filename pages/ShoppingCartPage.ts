import BasePage from './BasePage';

export default class ShoppingCartPage extends BasePage {
    private shoppingCartBadge = '.fa-layers-counter.shopping_cart_badge';
    private shoppingCart = '.fa-shopping-cart';
    private cartQuantity = '.cart_quantity';
    private checkoutButton = '.checkout_button';

  async getShoppingCartBadgeText(): Promise<string | null> {
    const textContent = await this.page.textContent(this.shoppingCartBadge);
    return textContent !== null ? textContent : '';
  }

  async enterShoppingCart(): Promise<void> {
    await this.page.click(this.shoppingCart);
  }

  async getShoppingCartQuantity(): Promise<string | null> {
    const textContent = await this.page.textContent(this.cartQuantity);
    return textContent !== null ? textContent : '';
  }

  async Checkout(): Promise<void> {
    await this.page.click(this.checkoutButton);
  }
}
