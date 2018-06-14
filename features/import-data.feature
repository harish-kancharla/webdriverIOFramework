Feature: Import
  As an Admin or Audit or QA or Team Leader or Agent
  I want to import a file to the POCA system
  So that I can contribute to migrating customers from POCA accounts

  Background:
    Given that an Admin or Audit or Team Leader or QA or Agent has Successfully logon
    And they should be on the Financial Inclusion Home page
    When they Click the Import Data on the menu
    Then they will be navigated to the Import Data page

  Scenario: 1 Import Data
    Given the user should be on the Import Data page
    And provide file name
    And select default customer type
    When  they import a valid csv file
    And click on the Import button
    Then they need to refresh the page to view the file progress

