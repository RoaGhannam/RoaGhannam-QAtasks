/// <reference.types="cypress" />

describe('Create New User Account', () => {
    it('Validate that a new user can successfully register using the "Signup / Login" page.', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("signup-name").type("Roaaagh")
        cy.findByDataQa("signup-email").type("Roaaagh@Gh.com")
        cy.findByDataQa("signup-button").click()   
        cy.get('#id_gender2').check()
        cy.findByDataQa("password").type("1234")
        cy.get('#days').select('29')
        cy.get('#months').select('March')
        cy.get('#years').select('2003')
        cy.get('#newsletter').check()
        cy.findByDataQa("first_name").type("Roa")
        cy.findByDataQa("last_name").type("Ghannam")
        cy.findByDataQa("company").type("Asal")
        cy.findByDataQa("address").type("Tubas")
        cy.get('#country').select('Israel')
        cy.findByDataQa("state").type("single")
        cy.findByDataQa("city").type("Tubas")
        cy.findByDataQa("zipcode").type("123456")
        cy.findByDataQa("mobile_number").type("0599147852")
        cy.findByDataQa("create-account").click()   
    });
    
});