class EditorPage {
  public open(): void {
    cy.visit("/editor");
  }

  private get titleField() {
    return cy.get('input[placeholder="Article Title"]');
  }

  private get aboutField() {
    return cy.get('input[placeholder="What\'s this article about?"]');
  }

  private get articleField() {
    return cy.get('textarea[placeholder="Write your article (in markdown)"]');
  }

  private get publishButton() {
    return cy.get('button[type="button"]');
  }

  public createArticle(title: string, about: string, article: string): void {
    if (title == "" && about == "" && article == "") {
      this.publishButton.click();
    } else {
      this.titleField.type(title);
      this.aboutField.type(about);
      this.articleField.type(article);
      this.publishButton.click();
    }
  }
}

export const editorPage = new EditorPage();
