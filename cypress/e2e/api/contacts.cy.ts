import { faker } from "@faker-js/faker";

const contact = {
  contactID: "",
  firstName: `Jonas ${faker.string.uuid()}@lokalus.lt`,
  lastName: `Jonaitis ${faker.string.uuid()}@lokalus.lt`,
  identifiers: [
    {
      type: "email",
      channels: {
        email: {
          status: "subscribed",
        },
      },
      id: `${faker.string.uuid()}@lokalus.lt`,
    },
  ],
};

describe("API contacts spec", () => {
  before(() => {
    cy.createContactByEmail(contact.identifiers[0].id).then((response) => {
      contact.contactID = response.body.contactID;
      cy.log(`before ${contact.contactID}`);
    });
  });

  it("should be able to create contact", () => {
    cy.log(`teste ${contact.contactID}`);
    cy.createContactByEmail("createdjustwithemailfgfng@dfjj.com").then(
      (response) => {
        // cy.log(JSON.stringify(response.body));
        expect(response.body.email).eql("createdjustwithemailfgfng@dfjj.com");
        expect(response.body.contactID).exist;
        expect(response.body.password).not.exist;
        expect(response.status).eq(200);
        expect(response.body.contactID).lengthOf(24);
      }
    );
  });

  it("should be able to create contacts with invalid email", () => {
    cy.createContactByEmail("gdngdfgnodfn.com", false).then((response) => {
      expect(response.status).eq(400);
    });
  });

  it("should not be able to get contact list of 10 contact", () => {
    cy.GETcontacts(undefined, 10).then((response) => {
      expect(response.status).eq(200);
      cy.log(response.body);
      expect(response.body.contacts).lengthOf(10);
    });
  });

  it("should  be able to get contact by id", () => {
    cy.GETcontact(contact.contactID).then((response) => {
      expect(response.status).eq(200);
      expect(response.body.email).eq(contact.identifiers[0].id);
      expect(response.body.contactID).eq(contact.contactID);
    });
  });

  it("should  be able to get contact by email", () => {
    cy.GETcontacts(contact.identifiers[0].id, 10).then((response) => {
      expect(response.status).eq(200);
      expect(response.body.contacts[0].email).eq(contact.identifiers[0].id);
      expect(response.body.contacts[0].contactID).eq(contact.contactID);
      expect(response.body.contacts).lengthOf(1);
    });
  });

  it("should  be able to  update contact", () => {
    (contact.firstName = "Petras"),
      (contact.lastName = "Petraitis"),
      cy.PATCHcontact(contact.contactID, contact).then((response) => {
        expect(response.status).eq(200);
        expect(response.body.email).eq(contact.identifiers[0].id);
        expect(response.body.contactID).eq(contact.contactID);
        expect(response.body.firstName).eq(contact.firstName);
        expect(response.body.lastName).eq(contact.lastName);
      });
  });
});
