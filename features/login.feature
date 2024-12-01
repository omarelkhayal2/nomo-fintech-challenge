Feature: Login functionality
  As a user
  I want to log in to the application
  So that I can access the dashboard

  Scenario: Successful login with valid credentials
    Given the user is on the login screen
    When the user logs in with "bob@example.com" and "10203040"
    Then the user should see the products page
    Then the user logs out
    Then the user should see the login page

  Scenario: Login with locked user credentials
    Given the user is on the login screen
    When the user logs in with "alice@example.com" and "10203040"
    Then an error message should be displayed

  Scenario Outline: Invalid login attempts
    Given the user is on the login screen
    When the user logs in with "<username>" and "<password>"
    Then an error message should be displayed

    Examples:
      | username           | password  |
      | 1@2.com            | f-o-o     |
      | bob@example.com    |           |
      |                    |           |
