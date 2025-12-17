import LoginPage from "../pages/LoginPage";
import InventoryPage from "../pages/InventoryPage";
import CheckoutPage from "../pages/CheckoutPage";

describe('SauceDemo Login Tests(POM + Fixture)', ()=>{
    const loginpage = new LoginPage();
    const inventorypage = new InventoryPage();
    const checkoutpage = new CheckoutPage();
    beforeEach(()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.fixture('LoginData').as('data')
        cy.fixture('checkoutData').as('checkout')
        loginpage.visit();
    })
    it('Login with valid credentials', function(){
        loginpage.enterUsername(this.data.validUser.username)
        loginpage.enterPassword(this.data.validUser.password)
        loginpage.clickLogin()
        loginpage.verifyLoginSuccess()


        // Inventroy actions
        inventorypage.addFirstProductToCart()
        inventorypage.verifyCartCount(1)
        inventorypage.openCart()
        inventorypage.verifyProductInCart()

        //checkout 
        checkoutpage.clickCheckout()
        checkoutpage.fillCustomerDetails(this.checkout.customer.firstName, this.checkout.customer.lastName, this.checkout.customer.postalCode)
        checkoutpage.continueCheckout()
        checkoutpage.finishCheckout()
        checkoutpage.verifyOrderSuccess()
    })
   it("Login with invalid credentials", function(){
    loginpage.enterUsername(this.data.invalidUser.username)
    loginpage.enterPassword(this.data.invalidUser.password)
    loginpage.clickLogin()
    loginpage.verifyLoginError()
   })
})