import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { generateRandomEmail } from "../helper/common";

Given("I am on the Udemy signup page", () => {
  cy.visit("/join/passwordless-auth/?action=signup&mode=marketplace-sign");
});

When("I enter {string} in the Full Name field", (fullName: string) => {
  cy.get('input[name="full-name"]').type(fullName);
});

When("I enter a random email in the Email field", () => {
  cy.get('input[name="email"]').type(generateRandomEmail());
});

When("I check the promotional email checkbox", () => {
  cy.get('input[name="subscribeToEmails"]').check();
});

When("I click the Sign Up button", () => {
  cy.get('button[type="submit"]').click();
});

Then("i should be redirected to the input verification code page", () => {
  cy.get('[data-testid="auth-form-row"] input').should("exist");
});

Then("i input the verification code {string}", (verificationCode: string) => {
  cy.get('div[data-purpose="otp-text-area"] input').type(verificationCode);
});

Then("i click the Verify button", () => {
  cy.contains("button", "Sign up").click();
});

When("I enter {string} in the Email field", (email: string) => {
  cy.get('input[name="email"]').type(email);
});

Then("i should see the error message {string}", (errorMessage: string) => {
  cy.get("#email-error-field")
    .should("be.visible")
    .and("contain.text", errorMessage);
});
