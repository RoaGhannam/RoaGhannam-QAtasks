/// <reference.types="cypress" />



describe('User Login', () => {
    it('Validate that an existing user can log in using valid credentials.', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click()    
    });
    
});