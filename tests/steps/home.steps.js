//import { Given, Then } from '@playwright-bdd/steps';
//import { test , expect } from '../fixture/fixture';
//import { createBdd } from 'playwright-bdd'; 
//import { HomePage } from '../pageObjets/HomePage.js';
const { test, expect, Given, Then } = require('../fixture/fixture');
//const { Given, Then } = createBdd(test);

//let homePage;

Given('I am on the home page', async ({homePage}) => {
//homePage = new HomePage(page);
  // Step: Given I am on the home page
  // From: features\home.feature:4:5
  //  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await homePage.navigate();
  await homePage.waitForLoadState('networkidle');
});

Then('the home page title should be {string}', async ({homePage}, arg) => {
  // Step: Then the home page title should be "Welcome to Our Website"
  // From: features\home.feature:5:5
    const title = await homePage.title();
    expect(title).toBe(arg);

});

Then('I should see the main banner', async ({homePage}) => {
  // Step: Then I should see the main banner
  // From: features\home.feature:9:5
   // const mainBanner = await page.locator('a[title="Poco Electro"]');
   
    //const banner = await homePage.isBannerVisible();
    await expect(homePage.isBannerVisible()).toBeTruthy();
});

Then('I should see the navigation menu with options {string}, {string}, {string}, {string}, {string}, {string}', async ({homePage}, arg, arg1, arg2, arg3, arg4, arg5) => {
  // Step: Then I should see the navigation menu with options "Home", "Special", "Blog", "Mega Menu", "Addons", "My Account"
  // From: features\home.feature:13:5
    //const navMenu = await page.locator('.nav-item').locator('a').filter({ hasText: arg }).first()  ;
    const navMenu = await homePage.navMenuItem(arg);
    expect(navMenu).toBeVisible();  
});