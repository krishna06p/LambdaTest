// Generated from: tests\features\myAccount.feature
import { test } from "playwright-bdd";

test.describe('Test My Account Page', () => {

  test('Verify the title of the My Account page', async ({ Given, page, Then }) => { 
    await Given('I am on the My Account page', null, { page }); 
    await Then('the account page title should be "My Account"', null, { page }); 
  });

  test.describe('Verify the presence of the "<menuOption>" link', () => {

    test('Verify the presence of the "Edit your account information" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Edit your account information" link', null, { page }); 
    });

    test('Verify the presence of the "Change your password" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Change your password" link', null, { page }); 
    });

    test('Verify the presence of the "Modify your address book entries" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Modify your address book entries" link', null, { page }); 
    });

    test('Verify the presence of the "Modify your wish list" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Modify your wish list" link', null, { page }); 
    });

    test('Verify the presence of the "Subscribe / unsubscribe to newsletter" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Subscribe / unsubscribe to newsletter" link', null, { page }); 
    });

    test('Verify the presence of the "View your order history" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "View your order history" link', null, { page }); 
    });

    test('Verify the presence of the "Downloads" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Downloads" link', null, { page }); 
    });

    test('Verify the presence of the "Your Reward Points" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Your Reward Points" link', null, { page }); 
    });

    test('Verify the presence of the "View your return requests" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "View your return requests" link', null, { page }); 
    });

    test('Verify the presence of the "Your Transactions" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Your Transactions" link', null, { page }); 
    });

    test('Verify the presence of the "Recurring payments" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Recurring payments" link', null, { page }); 
    });

    test('Verify the presence of the "Register for an affiliate account" link', async ({ Given, page, Then }) => { 
      await Given('I am on the My Account page', null, { page }); 
      await Then('I should see the "Register for an affiliate account" link', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\myAccount.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the account page title should be \"My Account\"","stepMatchArguments":[{"group":{"start":33,"value":"\"My Account\"","children":[{"start":34,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":13,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Edit your account information\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Edit your account information\"","children":[{"start":18,"value":"Edit your account information","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Change your password\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Change your password\"","children":[{"start":18,"value":"Change your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Modify your address book entries\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Modify your address book entries\"","children":[{"start":18,"value":"Modify your address book entries","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Modify your wish list\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Modify your wish list\"","children":[{"start":18,"value":"Modify your wish list","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":34,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Subscribe / unsubscribe to newsletter\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Subscribe / unsubscribe to newsletter\"","children":[{"start":18,"value":"Subscribe / unsubscribe to newsletter","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"View your order history\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"View your order history\"","children":[{"start":18,"value":"View your order history","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Downloads\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Downloads\"","children":[{"start":18,"value":"Downloads","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Your Reward Points\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Your Reward Points\"","children":[{"start":18,"value":"Your Reward Points","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":54,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"View your return requests\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"View your return requests\"","children":[{"start":18,"value":"View your return requests","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":58,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":59,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Your Transactions\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Your Transactions\"","children":[{"start":18,"value":"Your Transactions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":64,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Recurring payments\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Recurring payments\"","children":[{"start":18,"value":"Recurring payments","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":68,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":69,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Register for an affiliate account\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Register for an affiliate account\"","children":[{"start":18,"value":"Register for an affiliate account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end