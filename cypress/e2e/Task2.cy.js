/// <reference.types="cypress" />

describe('Create New User Account', () => {
    it('Validate that a new user can successfully register using the "Signup / Login" page.', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("signup-name").type("Roaagh")
        cy.findByDataQa("signup-email").type("Roaagh@Gh.com")
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

describe('User Login', () => {
    it('Validate that an existing user can log in using valid credentials.', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click()    
    });
    
});

describe('Search for a Product', () => {
    it('Validate that the correct results appear when using search bar using valid and invalid product names', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click() 
        cy.get('a[href="/products"]').click()
        cy.get('#search_product').type("Blue Top") 
        cy.get('#submit_search').click() 
        cy.get('#search_product').type("Blue Toop") 
        cy.get('#submit_search').click() 
    });
    
});
describe('Add Product to Cart', () => {
    it('Validate that a user can add a product to the shopping cart from the product details page.', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.fa-lock').click()
        cy.findByDataQa("login-email").type("Roa@Gh.com") 
        cy.findByDataQa("login-password").type("1234")
        cy.findByDataQa("login-button").click() 
        cy.get('a[href="/products"]').click()
        cy.get('.add-to-cart').eq(0).click()
        cy.get('.btn-success').click()
        cy.get('.add-to-cart').eq(2).click()
    });
    
});

describe('Add a Product Review', () => {
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
    });
    
});