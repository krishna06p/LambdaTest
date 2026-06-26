import {page, locator} from '@playwright/test';

export class homePage {
    constructor(page) {
        this.page = page;
        this.mainBanner = page.locator('a[title="Poco Electro"]');
        this.navMenu = page.locator('nav-item').locator('a');
    }

    async navigate() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/');
    }

    async clickMainBanner() {
        await this.mainBanner.click();
    }   

    async mainBanner() {
        const banner = await this.mainBanner;
        expect(banner).toBeTruthy();
    } 

    async clickNavMenuItem(itemName) {
        const menuItem = await this.navMenu.filter({ hasText: itemName });
        await menuItem.click();
    }

    async navMenuItem(itemName) {
        const menuItem = await this.navMenu.filter({ hasText: itemName });
        expect(menuItem).toBeTruthy();
    }

}

module.exports = {homePage};