import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd();


Given('I am on the My Account page', async ({page}) => {
  // Step: Given I am on the My Account page
  // From: features\myAccount.feature:4:5
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.getByPlaceholder('E-Mail Address').fill("kali.patil.f@gmail.com");
    await page.getByPlaceholder('Password').fill("Simple11!");
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
});

Then('the title should be {string}', async ({page}, arg) => {
  // Step: Then the title should be "My Account"
  // From: features\myAccount.feature:5:5
  await expect(page).toHaveTitle(arg);
});

Then('I should see the {string} link', async ({page}, arg) => {
  // Step: Then I should see the "Edit your account information" link
  // From: features\myAccount.feature:9:5
  await expect(page.getByRole('link', { name: arg })).toBeVisible();
});