class RegisterPage {
  public open(): void {
    cy.visit("/register");
  }
}

export const registerPage = new RegisterPage();
