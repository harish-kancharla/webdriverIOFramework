Feature: Login
 As an Admin or Audit or QA or Team Leader or Agent
  I want to logon to the POCA system
  So that I can contribute to migrating customers from POCA accounts

  Scenario Outline1: 1 Successful user logon
    Given that an Admin or Audit or Team Leader or QA or Agent has opened the POCA system
    And they are on the POCA log on screen
    When they enter their username as <username>
    And they enter their password as <password>
    And they enter their YubiKey as <yubiKey>
    And they click the ‘login’ button
    And their password is not a temporary password
    And their password is not expired
    Then they will be navigated to the POCA homepage

    Examples:
      |         username            | password        | yubiKey |
      | test17.admin@dwp.gsi.gov.uk | Password.143!!!   |  b      |

  Scenario Outline2: 2 Failed user logon
    Given that an Admin or Audit or Team Leader or QA or Agent has opened the POCA system
    And they are on the POCA log on screen
    When they enter their username as <username>
    And they enter their password as <password>
    And they enter their YubiKey as <yubiKey>
    And they click the ‘login’ button
    And the username, password and YubiKey information do not match the user’s stored authentication credentials
    Then an error message will be displayed as <error message>

    Examples:
      | username | password | yubiKey | error message |
      |  |  |                         | Login failed |
