describe('Bank Account Age Calculator spec', () => {
    it('should be able to posible to calculate correct age', () => {
        cy.visit('https://testingmarathon.com/testing/Y2K_Bank_Account_Age_Calculator/');
        cy.get('#firstName').type('Jonas');
        cy.get('#lastName').type('Jonaitis');
        cy.get('#dob').type('1995-01-01');
        cy.get('button').click();
        cy.contains(/Jonas Jonaitis, Your age: 29 years/i);
    });
});
