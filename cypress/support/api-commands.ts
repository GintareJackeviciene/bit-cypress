/* eslint-disable no-undef */
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

Cypress.Commands.add("POSTcontact", (contact, failOnStatusCode = true) =>
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/v3/contacts`,
    failOnStatusCode,
    body: contact,
    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  })
);

Cypress.Commands.add("createContactByEmail", (email, failOnStatusCode = true) =>
  cy.request({
    method: "POST",
    url: `${Cypress.env("apiUrl")}/v3/contacts`,
    failOnStatusCode,
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
  })
);

Cypress.Commands.add("GETcontact", (contactID, failOnStatusCode = true) =>
  cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}/v3/contacts/${contactID}`,
    failOnStatusCode,

    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  })
);

Cypress.Commands.add("GETcontacts", (email, limit, failOnStatusCode = true) => {
  let queryParams = `limit=${limit}`;

  if (email) {
    queryParams = `${queryParams}&email=${email}`;
  }
  return cy.request({
    method: "GET",
    url: `${Cypress.env("apiUrl")}/v3/contacts?${queryParams}`,
    failOnStatusCode,

    headers: {
      "X-API-KEY": `${Cypress.env("apiKey")}`,
    },
  });
});

Cypress.Commands.add(
  "PATCHcontact",
  (contactID, contact, failOnStatusCode = true) =>
    cy.request({
      method: "PATCH",
      url: `${Cypress.env("apiUrl")}/v3/contacts/${contactID}`,
      failOnStatusCode,
      body: contact,
      headers: {
        "X-API-KEY": `${Cypress.env("apiKey")}`,
      },
    })
);


declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to create contact by email.
     * @example cy.createContactByEmail('greeting@example.com')
     */
    createContactByEmail(email: string, failOnStatusCode?: boolean): Chainable<Response<any>>

    /**
    * Custom command to create contact by contact object.
    * @example cy.POSTcontact(contact, true)
    */
    POSTcontact(email: string, failOnStatusCode?: boolean): Chainable<Response<any>>

    /**
* Custom command to get contact by contact id.
* @example cy.GETcontact(id, true)
*/
    GETcontact(email: string, failOnStatusCode?: boolean): Chainable<Response<any>>

    /**
  * Custom command to get contacts by email and limit.
  * @example cy.GETcontacts(dfdtf@hvjh.com,12, true)
  */
    GETcontacts(email: string, limit: number, failOnStatusCode?: boolean): Chainable<Response<any>>

    /**
   * Custom command to update contact by id and limit.
   * @example cy.PATCHcontact(id,contact object, true)
   */
    PATCHcontact(email: string, failOnStatusCode?: boolean): Chainable<Response<any>>
  }
}

