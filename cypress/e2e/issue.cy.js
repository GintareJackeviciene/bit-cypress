import { faker } from "@faker-js/faker";

describe("Login spec", () => {
  let createIssueTitle;
  let deleteIssueTitle;

  beforeEach(() => {
    cy.visit(`${Cypress.env("url")}/register`);
    cy.contains(/log in to webIssues/i);
    cy.get('input[id="field-login-login"]').type(Cypress.env("username"));
    cy.get('input[id="field-login-password"]').type(Cypress.env("password"));
    cy.get('input[id="field-login-loginSubmit"]').click();
    cy.contains(/Administration Panel/i);
    cy.get(`a[href='${Cypress.env("url")}/register/index.php']`).contains(
      /Log Out/i
    );

    cy.visit(`${Cypress.env("url")}/register/client/index.php?folder=1`);
  });

  after(() => {
    //delete create issue
    cy.visit(`${Cypress.env("url")}/register/client/index.php?folder=1`);
    //search
    cy.get('[name="searchBox"]').type(createIssueTitle);
    cy.get("#field-search-searchSubmit").click();
    cy.get(`[title="${createIssueTitle}"]`);

    cy.get('[title="Delete Issue"]').click();
    cy.get("#field-issues-okSubmit").click();
    cy.contains(createIssueTitle).should("not.exist");
  });

  before(() => {
    cy.visit(`${Cypress.env("url")}/register/client/index.php?folder=1`);
  });

  it("should be able to create and delete issue", () => {
    cy.get('[title="Add Issue"]').click();
    cy.get("#field-issues-issueName").type("Gintares cypress title");
    cy.get("#field-issues-descriptionText").type("Gintares issue description");
    cy.get("#field-issues-okSubmit").click();
    cy.get("#infobar-left")
      .contains(/Gintares cypress title/i)
      .should("be.visible");

    cy.get('[title="Delete Issue"]').click();
    cy.get("#field-issues-okSubmit").click();
    cy.contains(/Gintares cypress title/i).should("not.exist");
  });

  it("should not be able to issue with empty title", () => {
    cy.get('[title="Add Issue"]').click();
    cy.get("#field-issues-issueName").type(" ");
    cy.get("#field-issues-descriptionText").type("Gintares issue description");
    cy.get("#field-issues-okSubmit").click();
    cy.get('[class="error"]')
      .contains(/Incorrect value: Required value is missing./i)
      .should("be.visible");
  });

  it("should be able to create issue", () => {
    cy.get('[title="Add Issue"]').click();
    cy.get("#field-issues-issueName").type(createIssueTitle);
    cy.get("#field-issues-descriptionText").type("Gintares issue description");
    cy.get("#field-issues-okSubmit").click();
    cy.get("#infobar-left").contains(createIssueTitle).should("be.visible");
  });

  it("should be able to delte issue", () => {
    cy.get('[title="Add Issue"]').click();
    cy.get("#field-issues-issueName").type(createIssueTitle);
    cy.get("#field-issues-descriptionText").type();
    cy.get("#field-issues-okSubmit").click();
    cy.get("#infobar-left").contains(deleteIssueTitle).should("be.visible");
  });
});
