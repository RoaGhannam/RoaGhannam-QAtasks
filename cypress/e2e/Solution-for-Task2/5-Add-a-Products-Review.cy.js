/// <reference.types="cypress" />


describe('Add a Product Review', () => {
    it('', () => {
        cy.visit('https://automationexercise.com/product_details/1')
        cy.contains('h2', 'Blue Top').should('be.visible');
        cy.contains('a', 'Write Your Review').should('be.visible');
        cy.get('#name').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('#review').should('be.visible');
        cy.get('#button-review').should('be.visible');
    });
    it('Validate that a logged-in user can add a review to a product', () => {
cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click() 
        cy.get('a[href="/products"]').click()
        cy.get('a[href="/product_details/1"]').click()
        cy.get('#name').type('Roa Ghannam')
        cy.get('#email').type('Roa@Gh.com')
        cy.get('#review').type('Beautiful and wonderful')
        cy.get('#button-review').click()
        cy.get('.alert-success.alert').contains('Thank you for your review.').should('be.visible');

    });
    
});