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

Cypress.Commands.add("POSTcontact", (contact, failOnStatusCode) => {
  if (failOnStatusCode == undefined) {
    failOnStatusCode = failOnStatusCode || true;
  }
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/v3/contacts`,
    failOnStatusCode: failOnStatusCode,
    body: contact,
    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  });
});

Cypress.Commands.add("createContactByEmail", (email, failOnStatusCode) => {
  if (failOnStatusCode == undefined) {
    failOnStatusCode = failOnStatusCode || true;
  }
  return cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/v3/contacts`,
    failOnStatusCode: failOnStatusCode,
    body: {
      firstName: "7ė3zpšsųjęh2",
      lastName: "0šxųxįh52kgt",
      identifiers: [
        {
          type: "email",
          channels: {
            email: {
              status: "subscribed",
            },
          },
          id: email,
        },
      ],
    },
    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  });
});

Cypress.Commands.add("GETcontact", (contactID, failOnStatusCode) => {
  if (failOnStatusCode == undefined) {
    failOnStatusCode = failOnStatusCode || true;
  }
  return cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}/v3/contacts/${contactID}`,
    failOnStatusCode: failOnStatusCode,

    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  });
});

Cypress.Commands.add("GETcontacts", (email, limit, failOnStatusCode) => {
  let searchByEmail = "";

  if (failOnStatusCode == undefined) {
    failOnStatusCode = true;
  }

  if (email !== undefined) {
    searchByEmail = `email=${email}&`;
  }
  return cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}/v3/contacts?${searchByEmail}&limit=${limit}`,
    failOnStatusCode: failOnStatusCode,

    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  });
});

Cypress.Commands.add("PATCHcontact", (contact, contactID, failOnStatusCode) => {
  if (failOnStatusCode == undefined) {
    failOnStatusCode = true;
  }
  return cy.request({
    method: "PATCH",
    url: `${Cypress.env("apiUrl")}/v3/contacts/${contactID}`,
    failOnStatusCode: failOnStatusCode,
    body: contact,
    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  });
});
