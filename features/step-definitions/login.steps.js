const { Given, When, Then, Before } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');
const ProductsPage = require('../../pages/ProductsPage');
const assert = require('assert');

Given('the user is on the login screen', async () => {
    await LoginPage.openSideMenu();
    await LoginPage.openLoginPage();
    await LoginPage.verifyLoginPage();
});

When('the user logs in with {string} and {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('the user should see the products page', async () => {
    const isDisplayed = await ProductsPage.isProductsDisplayed();
    assert.ok(isDisplayed, 'Products page is not displayed');
});

Then('the user logs out', async () => {
    await LoginPage.openSideMenu();
    await LoginPage.openLogoutPopup();
    await LoginPage.logout();
    await LoginPage.verifyLogout();
});
Then ('the user should see the login page', async () => {
    const isDisplayed = await LoginPage.isLoginButtonDisplayed();
    assert.ok(isDisplayed, 'Login page is not displayed');
});

Then('an error message should be displayed', async () => {
    const errorText = await LoginPage.getErrorMessageText();
    console.log(`Error message displayed: ${errorText}`);
    assert.ok(
        errorText === "Sorry, this user has been locked out." || 
        errorText === "Password is required" || 
        errorText === "Username is required",
        `Unexpected error message: ${errorText}`
    );
});
