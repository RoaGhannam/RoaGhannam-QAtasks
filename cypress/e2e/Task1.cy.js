/// <reference.types="cypress" />


describe('', () => {
    it.only('validate that the user will be redirected to the correct page when click on conduit', () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".navbar-brand").click()
    });

    describe('', () => {
        it('validate that the user will be redirected to the correct page when click on Home', () => {
            cy.visit("https://demo.productionready.io/#/register")
            cy.contains("a","Home").click()
        });
    });

    describe('', () => {
       it('validate that the user will be redirected to the correct page when click on Sign up', () => {
           cy.visit("https://demo.productionready.io/#/register")
           cy.get('nav').find('a').contains('Sign up')
       }); 
    });
    
    describe('', () => {
        it.only('', () => {
            cy.visit("https://demo.productionready.io/#/register")
            cy.contains("h1","Sign up")
            cy.get(".logo-font")
            cy.get(".attribution")
        });
    });
    describe('', () => {
        it.only('Validate that the user can sign up to the system', () => {
            cy.visit("https://demo.productionready.io/#/register")
            cy.get('input').eq(0).type('RoaGhannam')
            cy.get('input').filter('[type="email"]').type('roaghannam@gmail.com')
            cy.get('input[type="password"]').last().type('123456')
            cy.get(".btn-lg").click()
        
        });
    });

    describe('', () => {
        it.only('validate that the user will be redirected to the correct page when click on Have an account?', () => {
            cy.visit("https://demo.productionready.io/#/register")
            cy.contains('a', 'Have an account?').click();
        });
    });


});