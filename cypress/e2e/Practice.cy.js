/// <reference.types="cypress" />

describe('', () => {
    it('', () => {
       cy.visit('https://sauce-demo.myshopify.com/account/register')
        cy.contains('h1', 'Create Account').should('be.visible');

        cy.get('label[for="first_name"]').should('be.visible');
        cy.get('#first_name').should('be.visible');

        cy.get('label[for="last_name"]').should('be.visible');
        cy.get('#last_name').should('be.visible');

        cy.get('label[for="email"]').should('be.visible');
        cy.get('#email').should('be.visible');

        cy.get('label[for="password"]').should('be.visible');
        cy.get('#password').should('be.visible');
        
        cy.contains('input', 'Create').should('be.visible');
    });
    it('', () => {
        cy.visit('https://sauce-demo.myshopify.com/account/register')
        cy.get('#first_name').type('roa');
        cy.get('#last_name').type('ghannam');
        cy.get('#email').type('roa@g.com');
        cy.get('#password').type('123');
        cy.contains('input', 'Create').click();
    });
});