declare namespace Cypress {
  interface Chainable<Subject> {
    login(email: string, password: string): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable<Subject> {
    register(
      email: string,
      username: string,
      password: string
    ): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable<Subject> {
    getErrorMessage(): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable<Subject> {
    getProfilePicture(): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable<Subject> {
    getArticleTitle(): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable<Subject> {
    deleteArticle(): Chainable<void>;
  }
}

declare namespace Cypress {
  interface Chainable<Subject> {
    editArticle(): Chainable<void>;
  }
}
