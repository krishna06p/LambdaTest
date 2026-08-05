import { expect } from '@playwright/test';

import { test, Given, When, Then, And } from '../fixture/fixture';


Given('I am on My Account page', async ({}) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
  await expect(page).toHaveURL(/.*account\/account/);
});

When('I click on the {string} link', async ({}, arg) => {
  await page.locator('#content').filter( {has: page.getByRole('link', {name: arg})}).click();
  
});

Then('I redirected to the {string} page', async ({}, arg) => {
  await expect (page.getByRole('heading', {name: arg })).toBeVisible();
});

Then('I should see the {string} field', async ({}, arg) => {
  await page.getByLabel(arg).isVisible();
});

Given('I am on My Account Information page', async ({}) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');
  await expect(page).toHaveURL(/.*account\/edit/);
});

When('I clear the {string} field', async ({}, arg) => {
  await page.getByLabel(arg).clear();
});

Then('I should see the error message for {string}', async ({}, arg) => {
  const fieldGroup = page.locator('.form-group', { hasText: arg });
  await expect(fieldGroup.locator('.text-danger')).toBeVisible();
});

When('I update the {string} field', async ({}, arg) => {
  // Step: When I update the "Fist Name" field
  // From: tests\features\editAccount.feature:26:5
});

Then('I should see the success message {string}', async ({}, arg) => {
  // Step: Then I should see the success message "Success: Your account has been successfully updated."
  // From: tests\features\editAccount.feature:31:5
});