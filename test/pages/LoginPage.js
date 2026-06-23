const BasePage = require('./BasePage');
class LoginPage extends BasePage {
  get username() {
    return $('[data-test="username"]');
  }
  get password() {
    return $('[data-test="password"]');
  }
  get loginBtn() {
    return $('[data-test="login-button"]');
  }
  get errorMessage() {
    return $('h3[data-test="error"]');
  }
  async open() {
    await browser.url('/');
  }
  async login(user, pass) {
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
  async getErrorMessage() {
    return this.errorMessage.getText();
  }
}
module.exports = new LoginPage();