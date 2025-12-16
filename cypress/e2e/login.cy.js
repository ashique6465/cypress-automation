describe('SauceDemo Login Test', () =>{
    it('Login with valid credentials', () =>{
        cy.visit('https://www.saucedemo.com/',{timeout: 60000})
        cy.get('#user-name', {timeout:10000}).should('be.visible').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include','inventory')
    })
})