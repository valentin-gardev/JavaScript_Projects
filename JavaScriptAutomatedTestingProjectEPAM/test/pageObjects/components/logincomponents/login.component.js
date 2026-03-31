// Creating login page components and setting them as a child on login page
class LoginPageComponents {
    
    get loginContainer() {
        return $$(".input_error.form_input")
    };
    get userNameWindow() {
        return this.loginContainer[0]
    };

    get userNamePassword() {
        return this.loginContainer[1]
    };

    get loginButton() {
        return $(".submit-button.btn_action")
    };
};

module.exports = LoginPageComponents