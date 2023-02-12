describe("Navigation", () => {
  it("should navigate to the merge page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="merge"]').click();
    cy.url().should("include", "/merge");
    cy.get("h1").contains("Merge");
  });

  it("should navigate to the insertion page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="insertion"]').click();
    cy.url().should("include", "/insertion");
    cy.get("h1").contains("Insertion");
  });

  it("should navigate to the merge page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="counting"]').click();
    cy.url().should("include", "/counting");
    cy.get("h1").contains("Counting");
  });

  it("should navigate to the merge page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="bubble"]').click();
    cy.url().should("include", "/bubble");
    cy.get("h1").contains("Bubble");
  });

  it("should navigate to the merge page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="quicksort"]').click();
    cy.url().should("include", "/quicksort");
    cy.get("h1").contains("Quicksort");
  });

  it("should navigate to the merge page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="selection"]').click();
    cy.url().should("include", "/selection");
    cy.get("h1").contains("Selection");
  });

  it("should navigate to the merge page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="shell"]').click();
    cy.url().should("include", "/shell");
    cy.get("h1").contains("Shell");
  });
});

export {};
