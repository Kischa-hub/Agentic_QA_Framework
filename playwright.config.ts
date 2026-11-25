import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadEnvFile } from 'node:process';
import { defineConfig } from '@playwright/test';

const envFile = resolve(__dirname, '.env');
if (existsSync(envFile)) loadEnvFile(envFile);

export default defineConfig({
  testDir: './tests',
  retries: 0,
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
  ],
  use: {
    baseURL: process.env.WEBSITE_URL ?? 'https://automationexercise.com/',
    browserName: 'chromium',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
});
