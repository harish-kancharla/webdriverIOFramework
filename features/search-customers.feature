Feature: Search customer

  Background:
    Given that an Admin or Audit or Team Leader or QA or Agent has Successfully logon
    And they should be on the Financial Inclusion Home page
    When they Click the Search Customers on the menu
    Then they will be navigated to the Search Customers page

  Scenario: 1 search customer and add a new one
    Given the user should be on the Search Customers page
    When they enter the nino number that doesn't exist
    And  click on the Search button
    Then it should display the message and a button to add new customer record
    When they click on Add New Customer Record button
    Then it should be redirected to the Add New Customer page
    And  allow the user to add the customer personal information
    When they click on Next section button
    Then it should allow the user to add customer benefit details
    When they click on Next section button
    Then it should allow the user to add customer contact details
    When they click on Next section button
    Then it should allow the user to tick the customer special markers
    When they click on Save button
     Then they should see the success message on the screen:Save Successful. Customer has been successfully added to application.

