describe("Guest can create cards", () => {
  it("", () => {
    cy.visit("http://localhost:3000/");
    cy.get(`[data-testid="create-a-card-button"]`).click();
    cy.get(`[data-testid="element-image"]`).each(($img) => {
      cy.wrap($img).click();
    });
    cy.get(`[data-testid="element-descriptor"]`).contains("geo");
  });
});
