/// <reference.types="cypress" />


describe('Search for a Product', () => {
    it('Verify that all mandatory field should be visible on search form', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click() 
        cy.get('a[href="/products"]').click()
        cy.get('#search_product').should('be.visible');
        cy.get('#submit_search').should('be.visible');


    });
    it('Validate that the correct results appear when using search bar using valid and invalid product names', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click() 
        cy.get('a[href="/products"]').click()
        cy.get('#search_product').type("Blue Top") 
        cy.get('#submit_search').click() 
        cy.contains('p', 'Blue Top').should('be.visible');
        cy.get('#search_product').type("Blue Toop") 
        cy.get('#submit_search').click() 
    });
    
});