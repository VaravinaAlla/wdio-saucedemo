class CheckoutCompletePage {
  get successMessage() {
    return $('[data-test="complete-header"]');
  }

  async getSuccessMessage() {
    return this.successMessage.getText();
  }
}

module.exports = new CheckoutCompletePage();
