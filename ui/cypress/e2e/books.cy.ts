describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/books");
  });

  it("should navigate to correct url", () => {
    cy.url().should("contains", "/books");
  });

  it("should add a new book", () => {
    cy.get('[data-testid="open-dialog"]').click();

    cy.get('[data-testid="title-input"]').type("Sample Book Title");
    cy.get('[data-testid="author-input"]').type("Sample Author Name");

    cy.get('[data-testid="add-book-button"]').click();

    cy.get('[data-testid="add-success-message"]').should(
      "contain",
      "Book Successfully Added"
    );
  });

  it("should delete a book", () => {
    // Click the delete button on the first book in the list
    cy.get('[data-testid="delete-button"]').first().click();

    cy.get('[data-testid="delete-success-message"]').should(
      "contain",
      "Book Successfully Deleted"
    );
  });
});
