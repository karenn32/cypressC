Feature: The Conduit registration page

    Scenario Outline: TC5 - User registers with already taken username
        Given User is located on the 'register' page of Conduit website
        When User registers with username 'asd', email '<random_email>' and password 'asd'
        Then User should see 'username has already been taken' error message

    Scenario Outline: TC6 -  User registers with already taken email
        Given User is located on the 'register' page of Conduit website
        When User registers with username '<random_username>', email 'asd' and password 'sdas'
        Then User should see 'email has already been taken' error message

    Scenario Outline: TC7 - User registers with blank email
        Given User is located on the 'register' page of Conduit website
        When User registers with username '<random_username>', email ' ' and password '<random_password>'
        Then User should see 'email can\'t be blank' error message

    Scenario Outline: TC8 - User registers with blank password
        Given User is located on the 'register' page of Conduit website
        When User registers with username '<random_username>', email '<random_email>' and password ' '
        Then User should see 'password can\'t be blank' error message

    Scenario Outline: TC9 - User registers with blank username
        Given User is located on the 'register' page of Conduit website
        When User registers with username ' ', email '<random_email>' and password '<random_password>'
        Then User should see 'username can\'t be blank' error message

    Scenario Outline: TC10 - User registers with valid random credentials
        Given User is located on the 'register' page of Conduit website
        When User registers with username '<random_username>', email '<random_email>' and password '<random_password>'
        Then User should be on 'homePage'
        And User should see profile picture