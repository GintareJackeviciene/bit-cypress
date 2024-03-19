// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("goTo", (path) => {
  cy.visit(`https://www.testingmarathon.com${path}`);
});

Cypress.Commands.add("login", (user, password) => {
  cy.get('input[id="field-login-login"]').type(user);
  cy.get('input[id="field-login-password"]').type(password);
  cy.get('input[id="field-login-loginSubmit"]').click();
});

Cypress.Commands.add("getElement", (element) => {
  return cy.get(`[title="${element}"]`);
});

Cypress.Commands.add("issuePageElements", () => {
  cy.get('[title="Add Issue"]').as("add-issue-button");
});