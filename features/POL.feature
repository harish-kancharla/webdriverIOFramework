Feature: POL
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
    When they Click the Search Customers on the menu
    And they will be navigated to the Search Customers page
    When they enter a valid nino which is in application and click on Search
    Then they will be navigated to the Customer Details page
    When they click on benefits tab and update the benefits outcome to converted revised mop to bank
    Then they should see the success message on the screen:Customer Benefit saved successfully


  Scenario: 1 POL export create Conversion
    Given user clicks on POL Export on the menu
    And click on Create button to generate a file for POL
    Then they should see the success message on the screen:Operation has been completed successfully.
    When they come back to the page they can download the file and confirm
    Then the status of the file should be changed to confirmed

