class ProductsPage {
    get productsTitle() {
        return $('//android.widget.TextView[@text="Products"]');
    }
    async isProductsDisplayed() {
        await this.productsTitle.waitForDisplayed({timeout:5000});
        return await this.productsTitle.isDisplayed();
    }
}

module.exports = new ProductsPage();
