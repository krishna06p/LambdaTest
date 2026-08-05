// Generated from: tests\features\home.feature
import { test } from "playwright-bdd";

test.describe('Home Page', () => {

  test('Verify the title of the home page', async ({ Given, homePage, Then }) => { 
    await Given('I am on the home page', null, { homePage }); 
    await Then('the home page title should be "Your Store"', null, { homePage }); 
  });

  test('Verify the presence of the main banner', async ({ Given, homePage, Then }) => { 
    await Given('I am on the home page', null, { homePage }); 
    await Then('I should see the main banner', null, { homePage }); 
  });

  test('Verify the navigation menu', async ({ Given, homePage, Then }) => { 
    await Given('I am on the home page', null, { homePage }); 
    await Then('I should see the navigation menu with options "Home", "Special", "Blog", "Mega Menu", "Addons", "My Account"', null, { homePage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\home.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then the home page title should be \"Your Store\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Your Store\"","children":[{"start":31,"value":"Your Store","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then I should see the main banner","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the home page","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then I should see the navigation menu with options \"Home\", \"Special\", \"Blog\", \"Mega Menu\", \"Addons\", \"My Account\"","stepMatchArguments":[{"group":{"start":46,"value":"\"Home\"","children":[{"start":47,"value":"Home","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":54,"value":"\"Special\"","children":[{"start":55,"value":"Special","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":65,"value":"\"Blog\"","children":[{"start":66,"value":"Blog","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":73,"value":"\"Mega Menu\"","children":[{"start":74,"value":"Mega Menu","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":86,"value":"\"Addons\"","children":[{"start":87,"value":"Addons","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":96,"value":"\"My Account\"","children":[{"start":97,"value":"My Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end