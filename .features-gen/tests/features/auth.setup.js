import { test as setup, expect } from '@playwright/test';
//import path from 'path';
//import fs from 'fs';

export const authFile = 'auth/user.json';
//export const authFile = path.resolve(__dirname, '.auth/user.json');

setup('authenticate user and save storage state', async ({ page}) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    //await page.getByRole('dropdown', { name: 'My Account' }).click();
    await expect(page.getByRole('heading', { name: 'Returning Customer'})).toBeVisible();
    await page.getByPlaceholder('E-Mail Address').fill('kali.patil.f@gmail.com');
    await page.getByPlaceholder('Password').fill('Simple11!');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();

    //fs.mkdirSync(path.dirname(authFile), { recursive: true });
    await page.context().storageState({ path: authFile });
})