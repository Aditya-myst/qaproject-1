const LoginPage = require('../pageobjects/login.page')
const ProductsPage = require('../pageobjects/product.page')

describe('Login-Feature',()=>{
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        
        const title = await ProductsPage.getTitle()
        expect(title).toBe('Products')
    })
    it('should show error for wrong password', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'wrongpassword')
        
        const error = await LoginPage.getErrorMessage()
        expect(error).toContain('Username and password do not match')
    })
    it('should show error for empty fields', async () => {
        await LoginPage.open()
        await LoginPage.login('', '')
        
        const error = await LoginPage.getErrorMessage()
        expect(error).toContain('Username is required')
    })

    it('should show error for locked out user', async () => {
        await LoginPage.open()
        await LoginPage.login('locked_out_user', 'secret_sauce')
        
        const error = await LoginPage.getErrorMessage()
        expect(error).toContain('locked out')
    })

})