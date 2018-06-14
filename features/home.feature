Feature: Home
  As an Admin or Audit or QA or Team Leader or Agent
  I want to view the menu in the POCA system
  So that I can select the required field and take actions

  Scenario Outline: 1 Home page display
    Given that an Admin or Audit or Team Leader or QA or Agent has Successfully logon
    And they should be on the Financial Inclusion Home page
    When they Click the <menu item> on the menu
    Then they will be navigated to the <corresponding> page
    And they click on browser back button
    Then they will be navigated to the POCA homepage

    Examples:
    | menu item               | corresponding             |
    | Search Customers        | Search Customers          |
    | Send Letters            | Send Letters              |
    | Export Data             | Export Data               |
    | User Administration     | User Administration       |
    | Reports                 | Reports                   |
    | Import Data             | Import Data               |
    | Lookups                 | Reference Data Lookups    |
    | Migration               | Check Clerical File       |
    | POL Export              | Post Office Export        |
    | Cleansing               | Cleanse Nino              |
