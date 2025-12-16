import LoginPage from "../pages/LoginPage";
 
describe('SauceDemo Login Tests(POM + Fixture)', ()=>{
    const loginpage = new LoginPage();
    beforeEach(()=>{
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.fixture('LoginData').as('data')
        loginpage.visit();
    })
    it('Login with valid credentials', function(){
        loginpage.enterUsername(this.data.validUser.username)
        loginpage.enterPassword(this.data.validUser.password)
        loginpage.clickLogin()
        loginpage.verifyLoginSuccess()
    })
   it("Login with invalid credentials", function(){
    loginpage.enterUsername(this.data.invalidUser.username)
    loginpage.enterPassword(this.data.invalidUser.password)
    loginpage.clickLogin()
    loginpage.verifyLoginError()
   })
})