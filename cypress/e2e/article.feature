Feature: Working with articles

    Scenario: TC11 - Creating valid article
        Given User is located on the 'login' page of Conduit website
        When User logins with 'testKaren@test.com' and 'adgjadgj'
        And User clicks on article button
        And User creates 'valid' article
        Then User should see 'created' article

    Scenario: TC12 - Creating article with empty fields
        Given User is located on the 'login' page of Conduit website
        When User logins with 'testKaren@test.com' and 'adgjadgj'
        And User clicks on article button
        And User creates 'empty' article
        Then User should see 'title can\'t be blank' error message

    Scenario: TC13 - Creating article with not unique title
        Given User is located on the 'login' page of Conduit website
        When User logins with 'testKaren@test.com' and 'adgjadgj'
        And User clicks on article button
        And User creates 'unique' article
        Then User should see 'created' article
        And User clicks on article button
        And User creates 'notUnique' article
        Then User should see 'title must be unique' error message

    Scenario: TC14 - Deleting created article
        Given User is located on the 'login' page of Conduit website
        When User logins with 'testKaren@test.com' and 'adgjadgj'
        And User clicks on article button
        And User creates 'unique' article
        And User clicks on delete article button
        Then User should be on 'homePage'
        And User navigates to profile page
        Then User should not see the deleted article

    Scenario: TC15 - Editing created article
        Given User is located on the 'login' page of Conduit website
        When User logins with 'testKaren@test.com' and 'adgjadgj'
        And User clicks on article button
        And User creates 'unique' article
        And User clicks on edit article button
        Then User should be on editor page
        And User edits article
        And User should see 'edited' article