class InventoryPage { 
    addFirstProductToCart(){
        cy.get('.inventory_item').first().find('button').click()
    }
    verifyCartCount(count){
        cy.get('.shopping_cart_badge').should('be.visible').and('contain',count)
    }
    openCart(){
        cy.get('.shopping_cart_link').click()
    }
    verifyProductInCart(){
        cy.get('.cart_item').should('have.length.at.least',1)
    }
}

export default InventoryPage