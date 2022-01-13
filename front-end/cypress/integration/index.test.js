const url = "http://localhost:3000";

describe("index page", () => {
  before(() => {
    cy.visit(`${url}/songs`);
  });

  it("can load index page and has navigation to New page", () => {
    cy.get("a").contains("New Song").should("have.attr", "href", `/songs/new`);
  });

  // it("has list snack cards that are coming from the back-end seed data", () => {
  //   cy.contains("h4", "Strawberries");
  //   cy.contains("h4", "Healthy Birthday Cake Square");
  // });

  // it("has a link to each snack's show page", () => {
  //   const regex = /songs\/(\d+)/;
  //   cy.get(".Snack a").each(($item) => {
  //     cy.wrap($item).invoke("attr", "href").should("match", regex);
  //   });
  // });

  // it("has a solid heart, if the snack is healthy", () => {
  //   cy.contains("Strawberries")
  //     .find("h4 img")
  //     .should("have.attr", "alt", "healthy food");
  // });
  // it("has a heart outline, if the snack is unhealthy", () => {
  //   cy.contains("Healthy Birthday Cake Square")
  //     .find("h4 img")
  //     .should("have.attr", "alt", "unhealthy food");
  // });
});

// CSS testing
// https://www.codegrepper.com/code-examples/css/cypress+element+css
