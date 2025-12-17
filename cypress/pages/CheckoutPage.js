class CheckoutPage{
    clickCheckout(){
        cy.get("#checkout").click()
    }
    fillCustomerDetails(firstName, lastName, postalCode){
        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type(lastName)
        cy.get("#postal-code").type(postalCode)
    }
    continueCheckout(){
        cy.get("#continue").click()
    }
    finishCheckout(){
        cy.get("#finish").click()
    }
    verifyOrderSuccess(){
        cy.get('.complete-header', { timeout: 10000 })
          .should('be.visible')
          .invoke('text')
          .then((text) => {
            expect(text.trim()).to.match(/thank\s*you/i)
          })
    }
}

export default CheckoutPage;