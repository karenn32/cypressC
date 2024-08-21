Feature: The Conduit website login

  Scenario: TC1 - User logs in with invalid credentials
    Given User is located on the 'login' page of Conduit website
    When User logins with 'asd' and 'asdgdf'
    Then User should see 'email or password is invalid' error message

  Scenario: TC2 - User logs in with blank email
    Given User is located on the 'login' page of Conduit website
    When User logins with ' ' and 'asdgdf'
    Then User should see 'email can\'t be blank' error message

  Scenario: TC3 - User logs in with blank password
    Given User is located on the 'login' page of Conduit website
    When User logins with 'asdgdf' and ' '
    Then User should see 'password can\'t be blank' error message

  Scenario: TC4 - User logs in with valid credentials
    Given User is located on the 'login' page of Conduit website
    When User logins with 'testKaren@test.com' and 'adgjadgj'
    Then User should be on 'homePage'
    And User should see profile picture
