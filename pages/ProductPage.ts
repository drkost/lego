import BasePage from './BasePage';

export default class ProductPage extends BasePage {
  private addToCartButton = '.btn_primary.btn_inventory';
  private shoppingCartIcon = '[data-icon="shopping-cart"]';
  private shoppingCartBadge = '.fa-layers-counter.shopping_cart_badge';
  private RemovefromCart = '.btn_secondary.btn_inventory';

  async clickAddToCart(): Promise<void> {
    await this.page.click(this.addToCartButton);
  }

  async clickRemove(): Promise<void> {
    await this.page.click(this.RemovefromCart);
  }

  async getShoppingCartBadgeText(): Promise<string | null> {
    const textContent = await this.page.textContent(this.shoppingCartBadge);
    return textContent !== null ? textContent : '';
  }
}
