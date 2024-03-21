describe("API contacts spec", () => {
  beforeEach(() => {});

  it("should be able to create contact", () => {
    cy.createContactByEmail("createdjustwithemailfgfng@dfjj.com")
      .then((response) => {
        //cy.log(JSON.stringify(response.body));
        expect(response.body.email).eql("createdjustwithemailfgfng@dfjj.com");
        expect(response.body.contactID).exist;
        expect(response.body.password).not.exist;
        expect(response.status).eq(200);
        expect(response.body.contactID).lengthOf(24);
        return response.body.contactID;
      })
      .then((contactID) => {
        cy.GETcontact(contactID).then((response) => {
          expect(response.body.email).eql("createdjustwithemailfgfng@dfjj.com");
        });
      });
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

  it("should not be able to update contact", () => {
    cy.createContactByEmail("createdjustwithemailfgfng@dfjj.com")
      .then((response) => {
        expect(response.body.email).eql("createdjustwithemailfgfng@dfjj.com");
        expect(response.body.contactID).exist;
        expect(response.body.password).not.exist;
        expect(response.status).eq(200);
        expect(response.body.contactID).lengthOf(24);
        return response.body.contactID;
      })
      .then((contactID) => {
        cy.GETcontact(contactID).then((response) => {
          expect(response.body.email).eql("createdjustwithemailfgfng@dfjj.com");
        });
      });
    cy.GETcontacts(undefined, 10).then((response) => {
      expect(response.status).eq(200);
    });
  });
});
