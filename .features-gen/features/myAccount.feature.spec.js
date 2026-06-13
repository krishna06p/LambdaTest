// Generated from: features\myAccount.feature
import { test } from "playwright-bdd";

test.describe('Test My Account Page', () => {

  test('Verify the title of the My Account page', async ({ Given, page, Then }) => { 
    await Given('I am on the My Account page', null, { page }); 
    await Then('the title should be "My Account"', null, { page }); 
  });

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

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('features\\myAccount.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the title should be \"My Account\"","stepMatchArguments":[{"group":{"start":20,"value":"\"My Account\"","children":[{"start":21,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Edit your account information\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Edit your account information\"","children":[{"start":18,"value":"Edit your account information","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Change your password\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Change your password\"","children":[{"start":18,"value":"Change your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Modify your address book entries\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Modify your address book entries\"","children":[{"start":18,"value":"Modify your address book entries","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":26,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":27,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Modify your wish list\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Modify your wish list\"","children":[{"start":18,"value":"Modify your wish list","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":23,"tags":[],"steps":[{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Subscribe / unsubscribe to newsletter\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Subscribe / unsubscribe to newsletter\"","children":[{"start":18,"value":"Subscribe / unsubscribe to newsletter","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"View your order history\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"View your order history\"","children":[{"start":18,"value":"View your order history","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":41,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":42,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Downloads\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Downloads\"","children":[{"start":18,"value":"Downloads","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":36,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Your Reward Points\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Your Reward Points\"","children":[{"start":18,"value":"Your Reward Points","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":51,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":52,"gherkinStepLine":40,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"View your return requests\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"View your return requests\"","children":[{"start":18,"value":"View your return requests","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":56,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":57,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Your Transactions\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Your Transactions\"","children":[{"start":18,"value":"Your Transactions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":61,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":62,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Recurring payments\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Recurring payments\"","children":[{"start":18,"value":"Recurring payments","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":66,"pickleLine":51,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":52,"keywordType":"Context","textWithKeyword":"Given I am on the My Account page","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Register for an affiliate account\" link","stepMatchArguments":[{"group":{"start":17,"value":"\"Register for an affiliate account\"","children":[{"start":18,"value":"Register for an affiliate account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end