Feature: Send bulk letters

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
    When they Click the Send Letters on the menu
    Then they will be navigated to the Send Letters page

  Scenario: send letters
    Given the user should be on the Send Letters page
    And  they select Invitation Letter for the letter type
    And  selects Main for the customer type
    And selects No letter issued for the Audience Type
    When they click on Search button
    Then they should be redirected to Send Letters page
    When they provide number of letters and letter type
    And  click on Send Letters button
    Then they should see the success message on the screen:Operation has been completed successfully.
    When they Click the Export Data on the menu
    Then the user should be on the Export Data page
    And  the customer record should appear on the table with download option
    When the user downloaded the file the status of the file should be downloaded
    And  the user clicks on the confirmation button the message should be displayed on the page and the status of the file should be confirmed
