Feature: Login

  Scenario: Successful login
    Given the user is on login page
    When the user logs in with username "standard_user" and password "secret_sauce"
    Then the inventory page is displayed

  Scenario: Unsuccessful login
    Given the user is on login page
    When the user logs in with username "locked_out_user" and password "secret_sauce"
    Then an error message "Epic sadface" is shown