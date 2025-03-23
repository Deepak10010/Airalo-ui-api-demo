import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { testContext } from './SharedState';

let browser: any;
let context: any;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  testContext.page = await context.newPage();
});

After(async () => {
  await testContext.page?.close();
  await context?.close();         
  await browser?.close();         
});
