/// <reference.types="cypress" />


describe('Add Product to Cart', () => {
    it('Validate that a user can add a product to the shopping cart from the product details page.', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click() 
        cy.get('a[href="/products"]').click()
        cy.get('.add-to-cart').eq(0).click()
        cy.contains('View Cart').click();
        cy.get('a[href="/product_details/1"]').should('be.visible');
        
    });
    
    
});