Feature: user administration

  Background:
    Given that an Admin or Audit or Team Leader or QA or Agent has Successfully logon
    And they should be on the Financial Inclusion Home page
    When they Click the User Administration on the menu
    Then they will be navigated to the User Administration page

  Scenario: Add new user
    Given the user should be on the User Administration page
    When they click on Add New User button
    Then they should be redirected to Add New User page
    When they add the personal details of the user
    And they click on the Save button
    Then they should see the success message on the screen:User saved successfully.