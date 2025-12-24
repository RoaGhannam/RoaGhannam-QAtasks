/// <reference.types="cypress" />



describe('User Login', () => {
    it('Verify that all mandatory field should be visible on login form', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.contains('h2', 'Login to your account').should('be.visible');
        cy.get('input[data-qa="login-email"]').should('be.visible');
        cy.get('input[data-qa="login-password"]').should('be.visible');
        cy.get('button[data-qa="login-button"]').should('be.visible');
    });
    it('Validate that an existing user can log in using valid credentials.', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click()    
    });
    
});