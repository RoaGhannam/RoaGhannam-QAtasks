/// <reference.types="cypress" />


describe('Tasks', () => {
    it('Task1', () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".navbar-brand").click()
    });
    
});