describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("https://www.testingmarathon.com/register");
    cy.contains(/Log in to WebIssues/i);
  });

  it("should be able to login", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
    cy.contains(/Administration Panel/i);
    cy.get(
      `a[href="https://www.testingmarathon.com/register/index.php"]`
    ).contains(/Log Out/i);
  });

  it("should not be able to login whith invalid user name", () => {
    cy.login("blogas", Cypress.env("password"));
    cy.contains(/Incorrect value: Invalid login or password./i);
  });

  it("should not be able to login whith invalid password", () => {
    cy.login(Cypress.env("username"), "blogas");
    cy.contains(/Incorrect value: Invalid login or password./i);
  });

  it("should not be able to login whith empty username and password", () => {
    cy.login(" ", " ");
    cy.get('[class="error"]').contains(
      /Incorrect value: Required value is missing./i
    );
  });
});
