import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../pages/loginPage";
import { registerPage } from "../pages/registerPage";
import { generateRandomString } from "cypress/utils/random";

Given(
  "User is located on the {string} page of Conduit website",
  (page: string) => {
    if (page == "login") {
      loginPage.open();
    } else if (page == "register") {
      registerPage.open();
    }
  }
);

When(
  "User registers with username {string}, email {string} and password {string}",
  (username: string, email: string, password: string) => {
    if (username == "<random_username>") {
      username = generateRandomString(8);
    }
    if (email == "<random_email>") {
      email = generateRandomString(8);
    }
    if (password == "<random_password>") {
      password = generateRandomString(8);
    }

    cy.register(username, email, password);
  }
);

When(
  "User logins with {string} and {string}",
  (username: string, password: string) => {
    cy.login(username, password);
  }
);

Then("User should see {string} error message", (message: string) => {
  cy.getErrorMessage().should("eq", message);
});

Then("User should be on {string}", function (expectedPage: string) {
  cy.fixture("pages.json").then((pages) => {
    const pageData = pages[expectedPage];
    cy.url().should("eq", pageData.url);
    cy.title().should("eq", pageData.title);
  });
});

Then("User should see profile picture", () => {
  cy.getProfilePicture().should("be.visible");
});

When("User navigates to profile page", () => {
  cy.get("ul.navbar-nav").find("li.nav-item").eq(3).click();
  cy.url().should("include", "/profile/");
});
