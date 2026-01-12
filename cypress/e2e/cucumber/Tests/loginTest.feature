Feature: login functionality

    Background:
        Given The user navigate to the login page

        Scenario: Validate that the user can login with valid users 
        When The user enter "<username>" in username field
        And The user enter "<password>" in password field
        And The user clicks on login button
        Then The user will be redirected to the Swag Labs page


       Examples:
       | username      | password     |
       | standard_user | secret_sauce |
       | problem_user  | secret_sauce |
       | visual_user   | secret_sauce |
