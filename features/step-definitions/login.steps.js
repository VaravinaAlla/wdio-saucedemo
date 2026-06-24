const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../test/pages/LoginPage');

Given('the user is on login page', async () => {
  await LoginPage.open();
});

When(
  'the user logs in with username {string} and password {string}',
  async (username, password) => {
    await LoginPage.login(username, password);
  },
);

Then('the inventory page is displayed', async () => {
  await expect(browser).toHaveUrlContaining('inventory');
});

Then('an error message {string} is shown', async (message) => {
  await expect(await LoginPage.getErrorMessage()).toContain(message);
});
