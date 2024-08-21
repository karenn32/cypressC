Cypress.Commands.add("login", (email: string, password: string) => {
  cy.get('input[placeholder="Email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add(
  "register",
  (username: string, email: string, password: string) => {
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.get('button[type="submit"]').click();
  }
);

Cypress.Commands.add("getErrorMessage", () => {
  cy.get('ul[class="error-messages"]').invoke("text");
});

Cypress.Commands.add("getArticleTitle", () => {
  cy.get("h1").invoke("text");
});

Cypress.Commands.add("getProfilePicture", () => {
  cy.get("img[class=user-pic]");
});

Cypress.Commands.add("deleteArticle", () => {
  cy.contains('Delete Article').click();
});

Cypress.Commands.add("editArticle", () => {
  cy.contains('Edit Article').click();
});
