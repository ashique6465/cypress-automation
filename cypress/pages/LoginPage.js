class LoginPage{
    visit(){
        cy.visit('https://www.saucedemo.com/')
    }
    enterUsername(username){
        cy.get('#user-name').clear().type(username)
    }
    enterPassword(password){
        cy.get('#password').clear().type(password)
    }
    clickLogin(){
        cy.get('#login-button').click()
    }
    verifyLoginSuccess(){
        cy.url().should('include','inventory')
    }
    verifyLoginError(){
        cy.get('[data-test="error"]', { timeout: 10000 })
          .should('be.visible')
          .and('contain', 'Username and password do not match')
    }
}

export default LoginPage;