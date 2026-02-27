const LoginPage = require('../pageobjects/login.page.js')
const ProductsPage = require('../pageobjects/product.page.jsgit push -u origin main')

describe('Cart Feature', () => {

    beforeEach(async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    })

    it('should add product to cart', async () => {
        await ProductsPage.addFirstProductToCart()
        
        const count = await ProductsPage.getCartCount()
        expect(count).toBe('1')
    })

    it('should navigate to cart on clicking cart icon', async () => {
        await ProductsPage.goToCart()
        
        const url = await browser.getUrl()
        expect(url).toContain('/cart')
    })

})