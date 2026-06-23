class CheckoutPage {
  get firstName() {
    return $('[data-test="firstName"]');
  }
  get lastName() {
    return $('[data-test="lastName"]');
  }
  get zipCode() {
    return $('[data-test="postalCode"]');
  }
  get continueBtn() {
    return $('[data-test="continue"]');
  }
  get finishBtn() {
    return $('[data-test="finish"]');
  }
  async fillInformation(first, last, zip) {
    await this.firstName.setValue(first);
    await this.lastName.setValue(last);
    await this.zipCode.setValue(zip);
    await this.continueBtn.click();
  }
  async finishCheckout() {
    await this.finishBtn.click();
  }
}
module.exports = new CheckoutPage();
