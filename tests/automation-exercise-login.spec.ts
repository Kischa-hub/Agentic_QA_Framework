import { randomUUID } from 'node:crypto';
import { expect, test } from '@playwright/test';
import { AuthPage } from '../pages/auth.page';
import cases from '../test-cases/automation-exercise-login.json';

const approved = new Map(
  cases.filter(item => item.status === 'approved').map(item => [item.id, item]),
);

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value?.trim()) throw new Error(`Set ${name} for this login test.`);
  return value;
}

const validLogin = approved.get('LOGIN-01');
if (validLogin) {
  test(`${validLogin.id} · ${validLogin.title}`, async ({ page }) => {
    const email = requiredEnv('AUTOMATION_EXERCISE_EMAIL');
    const password = requiredEnv('AUTOMATION_EXERCISE_PASSWORD');
    const name = requiredEnv('AUTOMATION_EXERCISE_DISPLAY_NAME');
    if (email.trim().toLowerCase() === process.env.AUTOMATION_EXERCISE_LOGOUT_EMAIL?.trim().toLowerCase()) {
      throw new Error('Use separate test accounts for LOGIN-01 and LOGIN-03.');
    }

    const auth = new AuthPage(page);
    await auth.openFromHome();
    await expect(auth.loginHeading).toBeVisible();
    await auth.signIn(email, password);
    await expect(auth.signedInAs(name)).toBeVisible();

    await auth.deleteAccount();
    await expect(auth.accountDeleted).toBeVisible();
  });
}

const invalidLogin = approved.get('LOGIN-02');
if (invalidLogin) {
  test(`${invalidLogin.id} · ${invalidLogin.title}`, async ({ page }) => {
    const password = requiredEnv('AUTOMATION_EXERCISE_INVALID_PASSWORD');
    const email = `qa-invalid-${randomUUID()}@example.com`;
    const auth = new AuthPage(page);
    await auth.openFromHome();
    await expect(auth.loginHeading).toBeVisible();
    await auth.signIn(email, password);

    await expect(auth.loginHeading).toBeVisible();
    await expect(auth.loginError).toBeVisible();
  });
}

const logout = approved.get('LOGIN-03');
if (logout) {
  test(`${logout.id} · ${logout.title}`, async ({ page }) => {
    const email = requiredEnv('AUTOMATION_EXERCISE_LOGOUT_EMAIL');
    const password = requiredEnv('AUTOMATION_EXERCISE_LOGOUT_PASSWORD');
    const name = requiredEnv('AUTOMATION_EXERCISE_LOGOUT_DISPLAY_NAME');
    const auth = new AuthPage(page);
    await auth.openFromHome();
    await expect(auth.loginHeading).toBeVisible();
    await auth.signIn(email, password);
    await expect(auth.signedInAs(name)).toBeVisible();

    await auth.logout();
    await expect(page).toHaveURL(url => url.pathname === '/login');
    await expect(auth.loginHeading).toBeVisible();
    await expect(auth.signedInAs(name)).toHaveCount(0);
  });
}
