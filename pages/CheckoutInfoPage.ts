import BasePage from './BasePage';

const CheckoutInfoUrl = {
  expectedUrl: 'https://www.saucedemo.com/v1/checkout-step-one.html',
};

export default class CheckoutInfoPage extends BasePage {

  get expectedUrl(): string {
    return CheckoutInfoUrl.expectedUrl;
  }
  
}
