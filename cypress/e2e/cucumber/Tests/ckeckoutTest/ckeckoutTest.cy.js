import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

Given("The user logs in with valid credentials", () => {
  cy.get("#user-name").should("be.visible").type("standard_user");
  cy.get("#password").should("be.visible").type("secret_sauce");
  cy.get("#login-button").should("be.visible").click();
});

When("The user adds a product to the cart", () => {
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
});

When("The user clicks on the cart icon", () => {
  cy.get(".shopping_cart_link").click();
});

Then("The product should be added to the cart successfully", () => {
  cy.get(".inventory_item_name").should("contain.text", "Sauce Labs Backpack");
});


When("The user clicks on checkout button", () => {
  cy.get('[data-test="checkout"]').click();
});

When("The user enters first name in input field", () => {
  cy.get('[data-test="firstName"]').type("Roa");
});

When("The user enters last name in input field", () => {
  cy.get('[data-test="lastName"]').type("Ghannam");
});

When("The user enters postal code in input field", () => {
  cy.get('[data-test="postalCode"]').type("12345");
});

When("The user clicks on continue button", () => {
  cy.get('[data-test="continue"]').click();
});

When("The user clicks on finish button", () => {
  cy.get('[data-test="finish"]').click();
});

Then("The user should see the checkout complete page", () => {
  cy.get(".complete-header").should("contain.text", "Thank you for your order!");
});
