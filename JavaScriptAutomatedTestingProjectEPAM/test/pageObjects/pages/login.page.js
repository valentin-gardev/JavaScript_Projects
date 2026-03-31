const LoginPageComponents = require('../components/logincomponents/login.component')

class LoginPage {
    constructor() {
        this.components = new LoginPageComponents();
    }
    // Fetch webiste
    async open() {
        await browser.url("https://www.saucedemo.com");
    };
};

module.exports = LoginPage;