describe("App", () => {
  it("works", () => {
    cy.visit("http://localhost:3000/movie");

    // fetch movies works
    cy.get(
      ":nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root",
      { timeout: 30000 }
    ).contains("Earth");
    cy.get(
      ":nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    ).contains("Neptune");
    cy.get(
      ":nth-child(3) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root"
    )
      .contains("Mercury")
      .click();

    // movie details work
    cy.get(
      '[style="font-size: 3rem; font-family: Roboto, Helvetica, Arial, sans-serif; font-weight: 300; line-height: 1.2;"]'
    ).contains("Mercury");

    // search works
    cy.get('[style="display: flex;"] > a').click();
    cy.get('[style="display: flex; justify-content: space-between;"]').within(
      () => {
        cy.get(".MuiSvgIcon-root").click({ multiple: true });
      }
    );
    cy.get("form > .MuiInputBase-input").type("Nept");
    cy.get(
      ":nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root",
      { timeout: 30000 }
    ).contains("Neptune");
  });
});
