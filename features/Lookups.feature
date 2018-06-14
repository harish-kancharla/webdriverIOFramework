Feature: Lookups

  Background:
    Given that an Admin or Audit or Team Leader or QA or Agent has Successfully logon
    And they should be on the Financial Inclusion Home page
    When they Click the Lookups on the menu
    Then they will be navigated to the Reference Data Lookups page

  Scenario: 1 Bi-lingual postcodes
    Given the user should be on the Reference Data Lookups page
    When  they select Bi-lingual postcodes from lookup dropdown
    And click on the browse button to select postcode file
    When they click on the Upload button
    Then the file should be uploaded successfully