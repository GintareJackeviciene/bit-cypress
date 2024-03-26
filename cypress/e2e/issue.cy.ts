import { faker } from '@faker-js/faker';

describe('Login spec', () => {
  let createIssueTitle;
  let deleteIssueTitle;

  // tai ko reikia visiems testams
  beforeEach(() => {
    cy.goTo('/register');
    cy.contains(/log in to webIssues/i);
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.contains(/Administration Panel/i);
    cy.get(
      'a[href="https://www.testingmarathon.com/register/index.php"]',
    ).contains(/Log Out/i);

    cy.goTo('/register/client/index.php?folder=1');

    cy.issuePageElements();
  });

  // vieno testo dalykas
  after(() => {
    // delete create issue
    if (createIssueTitle !== undefined) {
      cy.goTo('/register/client/index.php?folder=1');
      // search
      cy.get('[name="searchBox"]').type(createIssueTitle);
      cy.get('#field-search-searchSubmit').click();
      cy.get(`[title="${createIssueTitle}"]`).click();

      cy.get('[title="Delete Issue"]').click();
      cy.get('#field-issues-okSubmit').click();
    }
  });

  before(() => {
    deleteIssueTitle = faker.string.uuid();
    cy.goTo('/register');
    cy.contains(/log in to webIssues/i);
    cy.login(Cypress.env('username'), Cypress.env('password'));
    cy.contains(/Administration Panel/i);
    cy.get(
      'a[href="https://www.testingmarathon.com/register/index.php"]',
    ).contains(/Log Out/i);

    cy.goTo('/register/client/index.php?folder=1');

    cy.issuePageElements();
    cy.get('@add-issue-button').click();
    cy.get('#field-issues-issueName').type(deleteIssueTitle);
    cy.get('#field-issues-descriptionText').type(
      `Cypress issue description ${deleteIssueTitle}`,
    );
    cy.get('#field-issues-okSubmit').click();
  });

  it.only('should be able to create and delete issue', () => {
    cy.get('@add-issue-button').click();

    cy.get('#field-issues-issueName').type('Gintares cypress title');
    cy.get('#field-issues-descriptionText').type('Gintares issue description');
    cy.get('#field-issues-okSubmit').click();
    cy.get('#infobar-left')
      .contains(/Gintares cypress title/i)
      .should('be.visible');

    cy.get('[title="Delete Issue"]').click();
    cy.get('#field-issues-okSubmit').click();
    cy.contains(/Gintares cypress title/i).should('not.exist');
  });

  it('should not be able to issue with empty title', () => {
    cy.get('@add-issue-button').click();
    cy.get('#field-issues-issueName').type(' ');
    cy.get('#field-issues-descriptionText').type('Gintares issue description');
    cy.get('#field-issues-okSubmit').click();
    cy.get('[class="error"]')
      .contains(/Incorrect value: Required value is missing./i)
      .should('be.visible');
  });

  it('should be able to create issue', () => {
    const createIssueTitle = faker.string.uuid();
    cy.get('@add-issue-button').click();
    cy.get('#field-issues-issueName').type(createIssueTitle);
    cy.get('#field-issues-descriptionText').type(
      `Cypress issue description ${createIssueTitle}`,
    );
    cy.get('#field-issues-okSubmit').click();
    cy.get('#infobar-left').contains(createIssueTitle).should('be.visible');
  });

  it('should be able to delete issue', () => {
    cy.get('[name="searchBox"]').type(deleteIssueTitle);
    cy.get('#field-search-searchSubmit').click();
    cy.get(`[title="${deleteIssueTitle}"]`).click();

    cy.get('[title="Delete Issue"]').click();
    cy.get('#field-issues-okSubmit').click();
    cy.contains(deleteIssueTitle).should('not.exist');
  });
});
