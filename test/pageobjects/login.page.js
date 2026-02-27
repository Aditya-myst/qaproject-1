class LoginPage{
    get usernameInput(){
        return $('#user-name')
    }
    get passwordInput(){
        return $('#password')
    }
    get loginButton(){
        return $('#login-button')
    }
    get errorMessage(){
        return $('[data-test="error"]')
    }

    async open(){
        await browser.url('https://saucedemo.com')
    }

    async login(username,password){
        await this.usernameInput.setValue(username)
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
    }

    async getErrorMessage(){
        return await this.errorMessage.getText()
    }

}

module.exports = new LoginPage()