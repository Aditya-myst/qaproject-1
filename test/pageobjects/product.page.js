class ProductsPage {
    // Locators
    get pageTitle()      { return $('.title') }
    get addToCartBtn()   { return $('[data-test="add-to-cart-sauce-labs-backpack"]') }
    get cartBadge()      { return $('.shopping_cart_badge') }
    get cartIcon()       { return $('.shopping_cart_link') }

    // Actions
    async getTitle() {
        return await this.pageTitle.getText()
    }

    async addFirstProductToCart() {
        await this.addToCartBtn.click()
    }

    async getCartCount() {
        return await this.cartBadge.getText()
    }

    async goToCart() {
        await this.cartIcon.click()
    }
}

module.exports = new ProductsPage()