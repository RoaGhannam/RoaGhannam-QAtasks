Feature: Logout functionality

  Background:
    Given The user navigate to the login page
    And The user logs in with valid credentials

  Scenario: Validate that the user can logout successfully
    When The user clicks on menu icon
    And The user clicks on logout link
    Then The user should be redirected to login page