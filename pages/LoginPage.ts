import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private readonly usernameInputSelector = '[data-testid="username-input"]';
  private readonly passwordInputSelector = '[data-testid="password-input"]';
  private readonly loginButtonSelector = '[data-testid="login-button"]';
  private readonly errorMessageSelector = '[data-testid="error-message"]';

  async enterUsername(username: string) {
    await this.page.fill(this.usernameInputSelector, username);
  }

  async enterPassword(password: string) {
    await this.page.fill(this.passwordInputSelector, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButtonSelector);
  }

  async getErrorMessage() {
    return this.page.textContent(this.errorMessageSelector);
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginButton();
  }
}