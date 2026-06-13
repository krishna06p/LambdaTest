Feature: Test My Account Page

  Scenario: Verify the title of the My Account page
    Given I am on the My Account page
    Then the title should be "My Account"

  Scenario Outline: Verify the presence of the "<menuOption>" link
    Given I am on the My Account page
    Then I should see the "<menuOption>" link

    Examples:
      | menuOption |
      | Edit your account information |
      | Change your password |
      | Modify your address book entries |
      | Modify your wish list |
      | Subscribe / unsubscribe to newsletter |
      | View your order history |
      | Downloads |
      | Your Reward Points |
      | View your return requests |
      | Your Transactions |
      | Recurring payments |
      | Register for an affiliate account |

