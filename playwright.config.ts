import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: [['html', { open: 'never' }]], // only for API tests
  projects: [
    {
      name: 'UI Tests',
      testMatch: /.*ui\/.*\.feature/
    },
    {
      name: 'API Tests',
      testMatch: /.*api\/.*\.spec\.ts/,
      use: {
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: {
          'Content-Type': 'application/json'
        }
      },
      
    }
  ]
});
