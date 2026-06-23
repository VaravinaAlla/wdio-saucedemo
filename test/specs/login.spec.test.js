const LoginPage = require('../pages/LoginPage');
const users = require('../data/users');
describe('UC-2 Data Driven Login', () => {
  users.forEach((user) => {
    it(`Login validation for ${user.username}`, async () => {
      await LoginPage.open();
      await LoginPage.login(user.username, user.password);
      if (user.expected === 'success') {
        await expect(browser).toHaveUrlContaining('inventory');
      } else {
        await expect(await LoginPage.getErrorMessage()).toContain(
          user.expected,
        );
      }
    });
  });
});
