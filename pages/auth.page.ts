import { errors, type Page } from '@playwright/test';

export class AuthPage {
  constructor(private readonly page: Page) {}

  get loginHeading() {
    return this.page.getByRole('heading', { name: 'Login to your account' });
  }

  get loginError() {
    return this.loginForm.getByText('Your email or password is incorrect!', { exact: true });
  }

  get accountDeleted() {
    return this.page.getByText('Account Deleted!', { exact: true });
  }

  private get loginForm() {
    return this.page.locator('form').filter({
      has: this.page.locator('[data-qa="login-email"]'),
    });
  }

  signedInAs(name: string) {
    return this.page.locator('header').getByText(`Logged in as ${name}`, { exact: true });
  }

  async openFromHome() {
    await this.page.goto('/');
    const consent = this.page.getByRole('button', { name: 'Consent', exact: true });
    try {
      await consent.waitFor({ state: 'visible', timeout: 4000 });
      await consent.click();
    } catch (error) {
      if (!(error instanceof errors.TimeoutError)) throw error;
    }
    await this.page.locator('header').getByRole('link', { name: /Signup \/ Login$/ }).click();
  }

  async signIn(email: string, password: string) {
    await this.loginForm.locator('[data-qa="login-email"]').fill(email);
    await this.loginForm.locator('[data-qa="login-password"]').fill(password);
    await this.loginForm.getByRole('button', { name: 'Login', exact: true }).click();
  }

  async deleteAccount() {
    await this.page.locator('header').getByRole('link', { name: /Delete Account$/ }).click();
  }

  async logout() {
    await this.page.locator('header').getByRole('link', { name: /Logout$/ }).click();
  }
}
