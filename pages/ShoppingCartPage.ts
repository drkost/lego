import BasePage from './BasePage';

export default class ShoppingCartPage extends BasePage {
  private shoppingCartBadge = '.fa-layers-counter.shopping_cart_badge';

  async getShoppingCartBadgeText(): Promise<string | null> {
    const textContent = await this.page.textContent(this.shoppingCartBadge);
    return textContent !== null ? textContent : '';
  }
}
