import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

When("The user enter {string} in username field", (username) => {
  cy.get("#user-name").should("be.visible").type(username);
});

When("The user enter {string} in password field", (password) => {
  cy.get("#password").should("be.visible").type(password);
});

When("The user clicks on login button", () => {
  cy.get("#login-button").should("be.visible").click();
});

Then("The user will be redirected to the Swag Labs page", () => {
  cy.get(".inventory_list").should("be.visible");
});