Feature: Edit Account Information

Scenario: Verify the user account information
    Given I am on My Account page
    When I click on the "Edit your account information" link
    Then I redirected to the "My Account Information" page
    Then I should see the "First Name" field
    Then I should see the "Last Name" field
    Then I should see the "E-Mail" field
    Then I should see the "Telephone" field

Scenario: Verify the mandatory fields in the account information page
    Given I am on My Account Information page
    When I clear the "First Name" field
    And I clear the "Last Name" field
    And I clear the "E-Mail" field
    And I clear the "Telephone" field
    And I click on the "Continue" button
    Then I should see the error message for "First Name"
    Then I should see the error message for "Last Name"
    Then I should see the error message for "E-Mail"
    Then I should see the error message for "Telephone"

Scenario: Update my account information
    Given I am on My Account Information page
    When I update the "Fist Name" field
    And I update the "Last Name" field
    And I update the "E-Mail" field
    And I update the "Telephone" field
    And I click on the "Continue" button
    Then I should see the success message "Success: Your account has been successfully updated."