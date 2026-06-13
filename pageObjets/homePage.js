class homePage {
    constructor(page) {
        this.page = page;
        this.mainBanner = page.locator('a[title="Poco Electro"]');
        this.navMenu = await page.locator('nav-item').locator('a');
    }

    async navigate() {
        await this.page.goto('https://ecommerce-playground.lambdatest.io/');
    }

    async clickMainBanner() {
        await this.mainBanner.click();
    }   

    async clickNavMenuItem(itemName) {
        const menuItem = this.navMenu.filter({ hasText: itemName });
        await menuItem.click();
    }

}

module.exports = {homePage};