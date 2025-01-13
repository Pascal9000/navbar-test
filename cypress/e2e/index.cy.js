describe("Navbar Menu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4321/navbar-test/");
  });

  it("should open menu on mobile only", () => {
    // Set mobile viewport
    cy.viewport(360, 800);

    // Ensure hamburger menu is visible
    cy.get(`label[for="btn"]`).should("be.visible");
  })

  it("should not show menu toggle on desktop", () => {
    // Set desktop viewport
    cy.viewport(1200, 800);

    // Ensure hamburger is hidden
    cy.get(`label[for="btn"]`).should("not.be.visible");

    // Ensure desktop navigation is visible
    cy.get("nav.md\\:flex").should("be.visible") // Tailwind "md:flex" selector
  })
})