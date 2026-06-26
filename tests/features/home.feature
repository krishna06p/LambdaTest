Feature: Home Page

  Scenario: Verify the title of the home page
    Given I am on the home page
    Then the home page title should be "Your Store"

  Scenario: Verify the presence of the main banner
    Given I am on the home page
    Then I should see the main banner

  Scenario: Verify the navigation menu
    Given I am on the home page
    Then I should see the navigation menu with options "Home", "Special", "Blog", "Mega Menu", "Addons", "My Account" 