describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("https://www.testingmarathon.com/register");
    cy.contains(/log in to webIssues/i);
  });

  it.only("should be able to login", () => {
    cy.get('input[id="field-login-login"]').type(Cypress.env("username"));
    cy.get('input[id="field-login-password"]').type("jgintare01@gmail.com");
    cy.get('input[id="field-login-loginSubmit"]').click();
    //cy.get()('#field-login-loginSubmit').click()
    //cy.get()('[id="field-login-loginSubmit"]').click()
    cy.contains(/Administration Panel/i);
    cy.get(
      'a[href="https://www.testingmarathon.com/register/index.php"]'
    ).contains(/Log Out/i);
  });

  it("should not be able to login whith invalid user name", () => {
    cy.get('input[id="field-login-login"]').type("blogas-jgintare01@gmail.com");
    cy.get('input[id="field-login-password"]').type("jgintare01@gmail.com");
    cy.get('input[id="field-login-loginSubmit"]').click();
    cy.contains(/Incorrect value: Invalid login or password./i);
  });

  it("should not be able to login whith invalid password", () => {
    cy.get('input[id="field-login-login"]').type("jgintare01@gmail.com");
    cy.get('input[id="field-login-password"]').type(
      "blogas-jgintare01@gmail.com"
    );
    cy.get('input[id="field-login-loginSubmit"]').click();
    cy.contains(/Incorrect value: Invalid login or password./i);
  });

  it("should not be able to login whith empty username and password", () => {
    cy.get('input[id="field-login-login"]').type(" ");
    cy.get('input[id="field-login-password"]').type(" ");
    cy.get('input[id="field-login-loginSubmit"]').click();
    cy.get('[class="error"]').contains(
      /Incorrect value: Required value is missing./i
    );
  });
});
