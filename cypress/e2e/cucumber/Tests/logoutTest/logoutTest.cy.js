import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("The user navigate to the login page", () => {
  cy.visit("https://www.saucedemo.com/");
});

Given("The user logs in with valid credentials", () => {
  cy.get("#user-name").should("be.visible").type("standard_user");
  cy.get("#password").should("be.visible").type("secret_sauce");
  cy.get("#login-button").should("be.visible").click();
});

When("The user clicks on menu icon", () => {
  cy.get("#react-burger-menu-btn").click();
});

When("The user clicks on logout link", () => {
  cy.get("#logout_sidebar_link").click();
});


Then("The user should be redirected to login page", () => {
  cy.get("#login-button").should("be.visible");
});
