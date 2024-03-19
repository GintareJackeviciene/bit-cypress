describe("API contacts spec", () => {
  beforeEach(() => {});

  it("should be able to create contacts", () => {
    const response = cy.request({
      method: "POST",
      url: "https://api.omnisend.com/v3/contacts",
      failOnStatusCode: false,
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
            id: "ėnf41yzšųcar@sdgfg.com",
          },
        ],
      },
      headers: {
        "X-API-KEY":
          "65ccf894e9bd2c2733699321-75rHuOjM7wop3DJrV88yOaYQUo6oHl29Kf5CJQWZXisg1Awp4m",
      },
    });

    //expect(response.status).equal(400);
  });
});
