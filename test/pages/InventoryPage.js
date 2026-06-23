class InventoryPage {
  get cartLink() {
    return $('[data-test="shopping-cart-link"]');
  }

  addProductToCart(name) {
    return $('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  async addItem(productName) {
    await this.addProductToCart(productName).click();
  }
  async openCart() {
    await this.cartLink.click();
  }
}
module.exports = new InventoryPage();
