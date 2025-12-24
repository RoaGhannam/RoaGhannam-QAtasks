/// <reference.types="cypress" />

describe('', () => {
      it('Validate that the user can update a product in the shopping cart', () => {
        cy.visit('https://sauce-demo.myshopify.com/collections/all')
        cy.contains("Black heels").click();
        cy.get('#product-select-option-0').select('M');
        cy.get('#add').click(); 
        cy.wait(2500)
        cy.get(".checkout").click();
        cy.get('#updates_611942549').clear().type('3');
        cy.wait(2500)
        cy.get('#update').should('be.visible').and('be.enabled').click();
        ///cy.wait(2500)
        //cy.contains('h2', 'Total £135.00').should('be.visible');
    });
});