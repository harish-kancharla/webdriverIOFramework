Feature: Cleansing
  As an Admin or Audit or QA or Team Leader or Agent
  I want to import a file to the POCA system
  So that I can contribute to migrating customers from POCA accounts

  Background:
    Given that an Admin or Audit or Team Leader or QA or Agent has Successfully logon
    And they should be on the Financial Inclusion Home page
    When they Click the Import Data on the menu
    Then they will be navigated to the Import Data page
    And provide file name
    And select default customer type
    When  they import a valid csv file
    And click on the Import button
    Then they need to refresh the page to view the file progress
    When they Click the Cleansing on the menu
    Then they will be navigated to the Cleansing page


  Scenario:  Cleansing
    Given the user should be on the Cleansing page
    And   click on the Cleanse button
    Then  they should see the customer details page with warning message
    When  they update the postcode in the personal information field
    And   they clicks on save button
    Then  they should see the success message on the screen:Customer details were updated successfully.
    When  they Click the Cleansing on the menu
    And   click on the Cleanse button
    Then  they should see the message on the screen:We could not find any matching records to cleanse