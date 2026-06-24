const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../../test/pages/LoginPage');
const InventoryPage = require('../../test/pages/InventoryPage');
const CartPage = require('../../test/pages/CartPage');
const CheckoutPage = require('../../test/pages/CheckoutPage');
const CheckoutCompletePage = require('../../test/pages/CheckoutCompletePage');
const users = require('../../test/data/users');

const activeUser = users.find((u) => u.username === 'standard_user');
const productName = 'Sauce Labs Bike Light';

Given('user is logged in as standard user', async () => {
  await LoginPage.open();
  await LoginPage.login(activeUser.username, activeUser.password);
});

When('user adds {string} to cart', async (item) => {
  await InventoryPage.addItem(item);
});

When('user opens cart', async () => {
  await InventoryPage.openCart();
});

When('user proceeds to checkout', async () => {
  await CartPage.checkout();
});

When('user fills checkout information', async () => {
  await CheckoutPage.fillInformation('John', 'Doe', '12345');
});

When('user finishes checkout', async () => {
  await CheckoutPage.finishCheckout();
});

Then('success message should be shown', async () => {
  await expect(await CheckoutCompletePage.getSuccessMessage()).toEqual(
    'Thank you for your order!',
  );
});
