Feature: Checkout functionality

  Background:
    Given The user navigate to the login page
    And The user logs in with valid credentials

  Scenario: Validate that the user can add product to cart
    When The user adds a product to the cart
    And The user clicks on the cart icon
    Then The product should be added to the cart successfully

  Scenario: Validate that the user can start checkout
    When The user adds a product to the cart
    And The user clicks on the cart icon
    And The user clicks on checkout button
    And The user enters first name in input field
    And The user enters last name in input field
    And The user enters postal code in input field
    And The user clicks on continue button
    And The user clicks on finish button
    Then The user should see the checkout complete page
