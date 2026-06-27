//import { Given, Then } from '@playwright-bdd/steps';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd'; 
import { HomePage } from '../pageObjets/HomePage.js';

const { Given, Then } = createBdd();

let homePage;

Given('I am on the home page', async ({page}) => {
homePage = new HomePage(page);
  // Step: Given I am on the home page
  // From: features\home.feature:4:5
  //  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await homePage.navigate();
});

Then('the home page title should be {string}', async ({page}, arg) => {
  // Step: Then the home page title should be "Welcome to Our Website"
  // From: features\home.feature:5:5
    const title = await page.title();
    expect(title).toBe(arg);

});

Then('I should see the main banner', async ({page}) => {
  // Step: Then I should see the main banner
  // From: features\home.feature:9:5
   // const mainBanner = await page.locator('a[title="Poco Electro"]');
   
    const banner = await homePage.mainBanner();
    expect(banner).toBeVisible();
});

Then('I should see the navigation menu with options {string}, {string}, {string}, {string}, {string}, {string}', async ({page}, arg, arg1, arg2, arg3, arg4, arg5) => {
  // Step: Then I should see the navigation menu with options "Home", "Special", "Blog", "Mega Menu", "Addons", "My Account"
  // From: features\home.feature:13:5
    //const navMenu = await page.locator('nav-item').locator('a').filter({ hasText: arg }).first()  ;
    const navMenu = await homePage.navMenuItem(arg);
    expect(navMenu).toBeVisible();  
});