class LoginPage {
    get sideMenuButton() {
        return $('//android.view.ViewGroup[@content-desc="open menu"]/android.widget.ImageView');
    }

    get loginButtonSideMenu() {
        return $('//android.view.ViewGroup[@content-desc="menu item log in"]');
    }

    get loginTitle() {
        return $('(//android.widget.TextView[@text="Login"])[1]');
    }
    get usernameField() {
        return $('//android.widget.EditText[@content-desc="Username input field"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@content-desc="Password input field"]');
    }

    get loginButton() {
        return $('//android.view.ViewGroup[@content-desc="Login button"]');
    }
    get logoutButtonSideMenu(){
        return $('//android.view.ViewGroup[@content-desc="menu item log out"]');
    }
    get logoutButton(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }
    get okButton(){
        return $('//android.widget.Button[@resource-id="android:id/button1"]');
    }

    get errorMessageLogin() {
        // Generic selector for any error message
        return $('//android.widget.TextView[contains(@text, "Sorry") or contains(@text, "Password is required") or contains(@text, "Username is required")]');
    }
    
    async getErrorMessageText() {
        // Wait for the error message to be displayed
        await this.errorMessageLogin.waitForDisplayed({ timeout: 5000 }); 
        // Get the text of the displayed error message
        const errorText = await this.errorMessageLogin.getText();
        return errorText;
    }
    

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.loginButton.click();
    }
    async logout() {
        
        await this.logoutButton.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
        await this.logoutButton.click();
    }
    async openSideMenu() {
        console.log('App launched successfully!');
        // Open side menu
        await this.sideMenuButton.click();
    }
    async isLoginButtonDisplayed(){
        return await this.loginButton.isDisplayed();
    }
    async openLoginPage() {
        // Click on the "Log In" button
        await this.loginButtonSideMenu.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
        await this.loginButtonSideMenu.click();
    }
    async openLogoutPopup() {
        // Click on the "Log In" button
        await this.logoutButtonSideMenu.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
        await this.logoutButtonSideMenu.click();
    }
    async verifyLogout(){
        await this.okButton.waitForDisplayed({timeout:5000});
        await this.okButton.click();
    }
    // Method to verify if the login page loaded successfully
    async verifyLoginPage() {
        const title = await this.loginTitle;
        if (title.length > 0) {
            console.log('Login page opened successfully');
        } else {
            console.error('Failed to open login page');
        }
    }
}

module.exports = new LoginPage();
