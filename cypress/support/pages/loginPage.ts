class LoginPage {
  public open(): void {
    cy.visit("/login");
  }
}

export const loginPage = new LoginPage();
