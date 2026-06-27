import {page, locator} from '@playwright/test';

class HomePage {
    constructor(page) {
        this.page = page;
        this.banner = page.locator('a[title="Poco Electro"]');
        this.navMenu = page.locator('nav-item').locator('a');
    }

    async navigate() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/');
    } 

    async mainBanner() {
        return this.banner;
    } 

    async navMenuItem(itemName) {
        return this.navMenu.filter({ hasText: itemName });
        //expect(menuItem).toBeTruthy();
    }

}

module.exports = {HomePage};