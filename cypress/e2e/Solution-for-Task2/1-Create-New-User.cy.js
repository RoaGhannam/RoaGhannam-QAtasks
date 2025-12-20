/// <reference.types="cypress" />

describe('Create New User Account', () => {
    it('Verify that all mandatory field should be visible on signup form', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.contains('h2', 'New User Signup!').should('be.visible');
        cy.findByDataQa("signup-name").should('be.visible');
        cy.findByDataQa("signup-email").should('be.visible');
        cy.findByDataQa("signup-button").should('be.visible');
        cy.findByDataQa("signup-name").type("Roaaaagh")
        cy.findByDataQa("signup-email").type("Roaaaagh@GH.com")
        cy.findByDataQa("signup-button").click()   
        cy.contains('b', 'Enter Account Information').should('be.visible');
        cy.get('#id_gender2').should('be.visible');
        cy.get('label[for="name"]').should('be.visible');
        cy.get('#name').should('be.visible');
        cy.get('label[for="email"]').should('be.visible');
        cy.get('#email').should('be.visible');
        cy.get('label[for="password"]').should('be.visible');
        cy.get('#password').should('be.visible');
        cy.contains('label', 'Date of Birth').should('be.visible');
        cy.get('#days').should('be.visible');
        cy.get('#months').should('be.visible');
        cy.get('#years').should('be.visible');
        cy.get('label[for="newsletter"]').should('be.visible');
        cy.contains('b', 'Address Information').should('be.visible');
        cy.get('label[for="first_name"]').should('be.visible');
        cy.get('#first_name').should('be.visible');
        cy.get('label[for="last_name"]').should('be.visible');
        cy.get('#last_name').should('be.visible');
        cy.get('label[for="company"]').should('be.visible');
        cy.get('#company').should('be.visible');
        cy.get('label[for="address1"]').should('be.visible');
        cy.get('#address1').should('be.visible');
        cy.get('label[for="country"]').should('be.visible');
        cy.get('#country').should('be.visible');
        cy.get('label[for="state"]').should('be.visible');
        cy.get('#state').should('be.visible');
        cy.get('label[for="city"]').should('be.visible');
        cy.get('#city').should('be.visible');
        cy.get('label[for="city"]').contains('Zipcode').should('be.visible');
        cy.get('#zipcode').should('be.visible');
        cy.get('label[for="mobile_number"]').should('be.visible');
        cy.get('#mobile_number').should('be.visible');
        cy.findByDataQa("create-account").should('be.visible');
    });

    it('Validate that a new user can successfully register using the "Signup / Login" page.', () => {
        cy.visit('https://automationexercise.com/login')
        cy.findByDataQa("signup-name").type("Roaaaagh")
        cy.findByDataQa("signup-email").type("Roaaaagh@GH.com")
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