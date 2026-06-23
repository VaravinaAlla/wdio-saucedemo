class CartPage {
  cartItem(productName) {
    return $(`//div[@class='inventory_item_name' and text()='${productName}']`);
  }
  get checkoutBtn() {
    return $('[data-test="checkout"]');
  }
  async isItemDisplayed(productName) {
    return this.cartItem(productName).isDisplayed();
  }
  async checkout() {
    await this.checkoutBtn.click();
  }
}
module.exports = new CartPage();
