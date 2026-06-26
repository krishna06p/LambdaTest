// Generated from: tests\features\loginPage.feature
import { test } from "playwright-bdd";

test.describe('Login Test', () => {

  test('Verify the title of the login page', async ({ Given, page, Then }) => { 
    await Given('I am on the login page', null, { page }); 
    await Then('the login page title should be "Account Login"'); 
  });

  test('Verify the presence of the login form', async ({ Given, page, Then }) => { 
    await Given('I am on the login page', null, { page }); 
    await Then('I should see the login form', null, { page }); 
  });

  test('Verify the presence of the "Forgotten Password" link', async ({ Given, page, Then }) => { 
    await Given('I am on the login page', null, { page }); 
    await Then('I should see the "Forgotten Password" link on login page', null, { page }); 
  });

  test('Verify the presence of the "Register Account" link', async ({ Given, page, Then }) => { 
    await Given('I am on the login page', null, { page }); 
    await Then('I should see the "Continue" button', null, { page }); 
  });

  test.describe('Verify the presence of the column-right menu "<menuOption>"', () => {

    test('Verify the presence of the column-right menu "Login"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Login" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Register"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Register" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "My Account"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "My Account" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Address Book"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Address Book" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Wish List"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Wish List" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Order History"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Order History" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Downloads"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Downloads" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Recurring payments"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Recurring payments" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Reward Points"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Reward Points" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Returns"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Returns" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Transactions"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Transactions" option in the column-right menu', null, { page }); 
    });

    test('Verify the presence of the column-right menu "Newsletter"', async ({ Given, page, Then }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I should see the "Newsletter" option in the column-right menu', null, { page }); 
    });

  });

  test.describe('Test invalid login for "<condition>"', () => {

    test('Test invalid login for "Blank email & password"', async ({ Given, page, Then, When }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I enter email "" and password "" in login form', null, { page }); 
      await When('I click on the "Login" button', null, { page }); 
      await Then('I should see the error message "Warning: No match for E-Mail Address and/or Password."', null, { page }); 
    });

    test('Test invalid login for "Blank email"', async ({ Given, page, Then, When }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I enter email "" and password "invalidpass" in login form', null, { page }); 
      await When('I click on the "Login" button', null, { page }); 
      await Then('I should see the error message "Warning: No match for E-Mail Address and/or Password."', null, { page }); 
    });

    test('Test invalid login for "Blank password"', async ({ Given, page, Then, When }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I enter email "invalid@example.com" and password "" in login form', null, { page }); 
      await When('I click on the "Login" button', null, { page }); 
      await Then('I should see the error message "Warning: No match for E-Mail Address and/or Password."', null, { page }); 
    });

    test('Test invalid login for "Invalid credentials"', async ({ Given, page, Then, When }) => { 
      await Given('I am on the login page', null, { page }); 
      await Then('I enter email "another@example.com" and password "anotherpass" in login form', null, { page }); 
      await When('I click on the "Login" button', null, { page }); 
      await Then('I should see the error message "Warning: No match for E-Mail Address and/or Password."', null, { page }); 
    });

  });

  test('Valid user login', async ({ Given, page, Then, When }) => { 
    await Given('I am on the login page', null, { page }); 
    await Then('I enter email "kali.patil.f@gmail.com" and password "Simple11!" in login form', null, { page }); 
    await When('I click on the "Login" button', null, { page }); 
    await Then('I should be redirected to the account page', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\loginPage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the login page title should be \"Account Login\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Account Login\"","children":[{"start":32,"value":"Account Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the login form","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Forgotten Password\" link on login page","stepMatchArguments":[{"group":{"start":17,"value":"\"Forgotten Password\"","children":[{"start":18,"value":"Forgotten Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":22,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Continue\" button","stepMatchArguments":[{"group":{"start":17,"value":"\"Continue\"","children":[{"start":18,"value":"Continue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Login\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Login\"","children":[{"start":18,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":33,"pickleLine":26,"tags":[],"steps":[{"pwStepLine":34,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Register\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Register\"","children":[{"start":18,"value":"Register","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":38,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":39,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"My Account\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"My Account\"","children":[{"start":18,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":43,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":44,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Address Book\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Address Book\"","children":[{"start":18,"value":"Address Book","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":48,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Wish List\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Wish List\"","children":[{"start":18,"value":"Wish List","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":53,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":54,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":55,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Order History\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Order History\"","children":[{"start":18,"value":"Order History","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":58,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":59,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Downloads\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Downloads\"","children":[{"start":18,"value":"Downloads","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":63,"pickleLine":32,"tags":[],"steps":[{"pwStepLine":64,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Recurring payments\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Recurring payments\"","children":[{"start":18,"value":"Recurring payments","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":68,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":69,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Reward Points\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Reward Points\"","children":[{"start":18,"value":"Reward Points","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":73,"pickleLine":34,"tags":[],"steps":[{"pwStepLine":74,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Returns\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Returns\"","children":[{"start":18,"value":"Returns","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":35,"tags":[],"steps":[{"pwStepLine":79,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Transactions\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Transactions\"","children":[{"start":18,"value":"Transactions","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":83,"pickleLine":36,"tags":[],"steps":[{"pwStepLine":84,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then I should see the \"Newsletter\" option in the column-right menu","stepMatchArguments":[{"group":{"start":17,"value":"\"Newsletter\"","children":[{"start":18,"value":"Newsletter","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":92,"pickleLine":46,"tags":[],"steps":[{"pwStepLine":93,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I enter email \"\" and password \"\" in login form","stepMatchArguments":[{"group":{"start":14,"value":"\"\"","children":[{"start":15,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"\"","children":[{"start":31,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":95,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When I click on the \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":96,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Warning: No match for E-Mail Address and/or Password.\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Warning: No match for E-Mail Address and/or Password.\"","children":[{"start":32,"value":"Warning: No match for E-Mail Address and/or Password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":99,"pickleLine":47,"tags":[],"steps":[{"pwStepLine":100,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I enter email \"\" and password \"invalidpass\" in login form","stepMatchArguments":[{"group":{"start":14,"value":"\"\"","children":[{"start":15,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":30,"value":"\"invalidpass\"","children":[{"start":31,"value":"invalidpass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":102,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When I click on the \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":103,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Warning: No match for E-Mail Address and/or Password.\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Warning: No match for E-Mail Address and/or Password.\"","children":[{"start":32,"value":"Warning: No match for E-Mail Address and/or Password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":106,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":107,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I enter email \"invalid@example.com\" and password \"\" in login form","stepMatchArguments":[{"group":{"start":14,"value":"\"invalid@example.com\"","children":[{"start":15,"value":"invalid@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"\"","children":[{"start":50,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":109,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When I click on the \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":110,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Warning: No match for E-Mail Address and/or Password.\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Warning: No match for E-Mail Address and/or Password.\"","children":[{"start":32,"value":"Warning: No match for E-Mail Address and/or Password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":113,"pickleLine":49,"tags":[],"steps":[{"pwStepLine":114,"gherkinStepLine":39,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then I enter email \"another@example.com\" and password \"anotherpass\" in login form","stepMatchArguments":[{"group":{"start":14,"value":"\"another@example.com\"","children":[{"start":15,"value":"another@example.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"anotherpass\"","children":[{"start":50,"value":"anotherpass","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":116,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When I click on the \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":117,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then I should see the error message \"Warning: No match for E-Mail Address and/or Password.\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Warning: No match for E-Mail Address and/or Password.\"","children":[{"start":32,"value":"Warning: No match for E-Mail Address and/or Password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":122,"pickleLine":52,"tags":[],"steps":[{"pwStepLine":123,"gherkinStepLine":53,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":54,"keywordType":"Outcome","textWithKeyword":"Then I enter email \"kali.patil.f@gmail.com\" and password \"Simple11!\" in login form","stepMatchArguments":[{"group":{"start":14,"value":"\"kali.patil.f@gmail.com\"","children":[{"start":15,"value":"kali.patil.f@gmail.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":52,"value":"\"Simple11!\"","children":[{"start":53,"value":"Simple11!","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":125,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When I click on the \"Login\" button","stepMatchArguments":[{"group":{"start":15,"value":"\"Login\"","children":[{"start":16,"value":"Login","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":126,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then I should be redirected to the account page","stepMatchArguments":[]}]},
]; // bdd-data-end