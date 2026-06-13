import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
const { Given, Then, When } = createBdd();

Given('I am on the login page', async ({page}) => {
  // Step: Given I am on the login page
  // From: features\loginPage.feature:4:5
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
});

Then('I should see the login form', async ({page}) => {
  // Step: Then I should see the login form
  // From: features\loginPage.feature:9:5
  await 
  await expect(page.locator('#content').locator('form')).toBeVisible();
});

Then('I should see the {string} link', async ({page}, arg) => {
  // Step: Then I should see the "Forgotten Password" link
  // From: features\loginPage.feature:13:5
  await expect(page.locator('form').locator(`a:text("${arg}")`)).toBeVisible();
});

Then('I should see the {string} button', async ({page}, arg) => {
  // Step: Then I should see the "Continue" button
  // From: features\loginPage.feature:13:5
  await expect(page.locator(`a:text("${arg}")`)).toBeVisible();
});

Then('I should see the {string} option in the column-right menu', async ({page}, arg) => {
  // Step: Then I should see the Register link
  // From: features\loginPage.feature:21:5
  await expect(page.locator(`a:text("${arg}")`)).toBeVisible();
});

Then('I enter email {string} and password {string} in login form', async ({page}, email, password) => {
  // Step: Then I enter email "" and password "" in login form
  // From: features\loginPage.feature:40:5
  //await page.locator('form').locator('input[name="email"]').fill(email);
  //await page.locator('form').locator('input[name="password"]').fill(password);
  await page.getByPlaceholder('E-Mail Address').fill(email);
  await page.getByPlaceholder('Password').fill(password);
});

When('I click on the {string} button', async ({page}, arg) => {
  // Step: When I click on the "Login" button
  // From: features\loginPage.feature:41:5
    await page.getByRole('button', { name: arg }).click();
});

Then('I should see the error message {string}', async ({page}, arg) => {
  // Step: Then I should see the error message "Warning: No match for E-Mail Address and/or Password."
  // From: features\loginPage.feature:42:5
    await expect(page.locator('.alert.alert-danger')).toHaveText(arg);
});

Then('I should be redirected to the account page', async ({page}) => {
  // Step: Then I should be redirected to the account page
  // From: features\loginPage.feature:56:5
    await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
});
