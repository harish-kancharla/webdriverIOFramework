Feature: Migration
  As an Admin or Audit or QA or Team Leader or Agent
  I want to import a clerical file to the POCA system
  So that I can contribute to migrating customers from POCA accounts

  Background:
    Given that an Admin or Audit or Team Leader or QA or Agent has Successfully logon
    And they should be on the Financial Inclusion Home page
    When they Click the Migration on the menu
    Then they will be navigated to the Check Clerical File page

  Scenario: 1 check clerical file
    Given the user should be on the Check Clerical File page
    When  they click on browse button and select clerical file
    And click on the Check File button to import
    Then the file details should appear on the page
    When they click on the Import File button
    Then the file should be imported
    When they Click the Import Data on the menu
    Then the file should appear on the import log