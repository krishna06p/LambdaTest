const { test : base } = require('@playwright/test');
const { createBdd } = require('playwright-bdd');
const { HomePage } = require('../pageObjects/HomePage');

const {test , expect} = base.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    }


})

const { Given, When, Then } = createBdd(test);

//exports.expect = test.expect;
module.exports = { Given, When, Then, test };