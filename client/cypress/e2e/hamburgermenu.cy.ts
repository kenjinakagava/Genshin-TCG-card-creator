describe("Hamburger Menu Functions Normally", () => {
  beforeEach(() => {
    cy.viewport("iphone-se2");
    cy.visit("http://localhost:3000");
  });
  it("Toggles Correctly", () => {
    cy.get(`[data-testid="hamburgerOpen"]`).click();
    cy.get(`[data-testid="hamburgerClose"]`).click();
  });
  it("Closes when changing page", () => {
    cy.get(`[data-testid="hamburgerOpen"]`).click();
    cy.get(`[data-testid="hamburgerLink"]`).click();
  });
});
