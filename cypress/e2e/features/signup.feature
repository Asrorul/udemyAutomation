Feature: User signup through Udemy Passwordless signup
As a new visitor to Udemy
I want to sign up using the passwordless form
So that I can create a new Udemy account

  @test
  Scenario: Signup with an already registered email
    Given I am on the Udemy signup page
    When I enter "Asrorul Umam" in the Full Name field
    And I enter "umamasrorul@gmail.com" in the Email field
    And I check the promotional email checkbox
    And I click the Sign Up button
    Then i should see the error message "The email you entered is already in use"
  
  @test
  Scenario: Successful signup with valid details
    Given I am on the Udemy signup page
    When I enter "test name" in the Full Name field
    And I enter a random email in the Email field
    And I check the promotional email checkbox
    And I click the Sign Up button
    Then i should be redirected to the input verification code page