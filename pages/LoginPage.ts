import { Page } from 'playwright';
import BasePage from './BasePage';
import LoginTestData from '../data/loginTestData';

export default class LoginPage extends BasePage {
  usernameInputSelector: string;
  passwordInputSelector: string;
  loginButtonSelector: string;
  errorMessage: string;

  constructor(page: Page) {
    super(page);
    this.usernameInputSelector = '[data-test="username"]';
    this.passwordInputSelector = '[data-test="password"]';
    this.loginButtonSelector = '#login-button';
    this.errorMessage = '[data-test="error"]';
  }

  async successfulLogin(username: string = LoginTestData.validUsername, password: string = LoginTestData.validPassword): Promise<void> {
    await this.navigateTo(''); // Navigate to the base URL
    await this.page.type(this.usernameInputSelector, username);
    await this.page.type(this.passwordInputSelector, password);
    await this.page.click(this.loginButtonSelector);

  }async unsuccessfulLogin(username: string = LoginTestData.invalidUsername, password: string = LoginTestData.invalidPassword): Promise<void> {
    await this.navigateTo(''); // Navigate to the base URL
    await this.page.type(this.usernameInputSelector, username);
    await this.page.type(this.passwordInputSelector, password);
    await this.page.click(this.loginButtonSelector);
  }
}
