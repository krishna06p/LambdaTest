Feature: Login Test

  Scenario: Verify the title of the login page
    Given I am on the login page
    Then the login page title should be "Account Login"

  Scenario: Verify the presence of the login form
    Given I am on the login page
    Then I should see the login form

  Scenario: Verify the presence of the "Forgotten Password" link
    Given I am on the login page
    Then I should see the "Forgotten Password" link on login page

Scenario: Verify the presence of the "Register Account" link
    Given I am on the login page
    Then I should see the "Continue" button

Scenario Outline: Verify the presence of the column-right menu "<menuOption>"
    Given I am on the login page
    Then I should see the "<menuOption>" option in the column-right menu

    Examples:
      | menuOption         |
      | Login              |
      | Register           |
      | My Account         |
      | Address Book       |
      | Wish List          |
      | Order History      |
      | Downloads          |
      | Recurring payments |
      | Reward Points      |
      | Returns            |
      | Transactions       |
      | Newsletter         |

Scenario Outline: Test invalid login for "<condition>"
    Given I am on the login page
    Then I enter email "<email>" and password "<password>" in login form
    When I click on the "Login" button
    Then I should see the error message "Warning: No match for E-Mail Address and/or Password."

    Examples:
      | email              | password  | condition  |
      |  |  | Blank email & password  |
      |  | invalidpass | Blank email  |   
      | invalid@example.com |  | Blank password  |  
      | another@example.com | anotherpass | Invalid credentials  |


Scenario: Valid user login
    Given I am on the login page
    Then I enter email "kali.patil.f@gmail.com" and password "Simple11!" in login form
    When I click on the "Login" button
    Then I should be redirected to the account page