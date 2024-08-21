import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { editorPage } from "../pages/editorPage";
import { generateRandomString } from "cypress/utils/random";
import { homePage } from "../pages/homePage";

let randomTitle = generateRandomString(7);
let randomAbout = generateRandomString(10);
let randomArticle = generateRandomString(50);

When("User clicks on article button", () => {
  homePage.clickArticleButton();
});

When("User creates {string} article", (articleType: string) => {
  if (articleType == "valid" || articleType == "notUnique") {
    editorPage.createArticle(randomTitle, randomAbout, randomArticle);
  } else if (articleType == "empty") {
    editorPage.createArticle("", "", "");
  } else if (articleType == "unique") {
    randomTitle = generateRandomString(7);
    randomAbout = generateRandomString(10);
    randomArticle = generateRandomString(50);
    editorPage.createArticle(randomTitle, randomAbout, randomArticle);
  }
});

When("User clicks on delete article button", () => {
  cy.deleteArticle();
});

When("User edits article", () => {
  editorPage.createArticle(randomTitle, randomAbout, randomArticle);
});

When("User clicks on edit article button", () => {
  cy.editArticle();
});

Then("User should be on editor page", () => {
  cy.url().should("include", "/editor/");
});

Then("User should see {string} article", (articleType: string) => {
  if (articleType == "created") {
    cy.getArticleTitle().should("eq", randomTitle);
  } else if (articleType == "edited") {
    cy.getArticleTitle().should("eq", randomTitle + randomTitle);
  }
});

Then("User should not see the deleted article", () => {
  cy.get(".preview-link h1").should("not.have.text", randomTitle);
});
