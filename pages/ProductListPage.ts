import BasePage from './BasePage';

const ProductListPageData = {
  expectedUrl: 'https://www.saucedemo.com/v1/inventory.html',
};

export default class ProductListPage extends BasePage {
  private productSelector = '.inventory_item';
  private addToCartButton = '.btn_primary.btn_inventory';


  get expectedUrl(): string {
    return ProductListPageData.expectedUrl;
  }

  async clickRandomProduct(): Promise<void> {
    const productElements = await this.page.$$(this.productSelector);
    const randomIndex = Math.floor(Math.random() * productElements.length);
    await productElements[randomIndex].click();
  }

  async clickAddToCartOnRandomProduct(): Promise<void> {
    const addToCartButtons = await this.page.$$(this.addToCartButton);
    const randomIndex = Math.floor(Math.random() * addToCartButtons.length);

    // Click on the "Add to Cart" button of the random product
    const randomAddToCartButton = addToCartButtons[randomIndex];
    await randomAddToCartButton.click();
  }
}
