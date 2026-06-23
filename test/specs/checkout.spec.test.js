const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutCompletePage = require('../pages/CheckoutCompletePage');
const users = require('../data/users');
const activeUser = users.find((u) => u.username === 'standard_user');

describe('UC-1 Checkout Flow', () => {
  const productName = 'Sauce Labs Bike Light';
  it('should complete checkout successfully', async () => {
    await LoginPage.open();
    await LoginPage.login(activeUser.username, activeUser.password);
    await InventoryPage.addItem(productName);
    await InventoryPage.openCart();
    await expect(await CartPage.isItemDisplayed(productName)).toBe(true);
    await CartPage.checkout();
    await CheckoutPage.fillInformation('John', 'Doe', '12345');
    await CheckoutPage.finishCheckout();
    await expect(await CheckoutCompletePage.getSuccessMessage()).toEqual(
      'Thank you for your order!',
    );
  });
});
