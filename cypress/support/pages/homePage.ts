class HomePage {
  public open(): void {
    cy.visit("");
  }

  private get articleButton() {
    return cy.get('a[routerlink="/editor"]');
  }

  public clickArticleButton() {
    this.articleButton.click();
  }
}

export const homePage = new HomePage();
