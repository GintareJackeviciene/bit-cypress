describe('Bank Account Age Calculator spec', () => {
    const parameter = [
        ['1995-01-01', 'Jonas Jonaitis, Your age: 29 years'],
        ['1996-01-01', 'Jonas Jonaitis, Your age: 28 years'],
        ['1997-01-01', 'Jonas Jonaitis, Your age: 27 years'],
        ['1998-01-01', 'Jonas Jonaitis, Your age: 26 years'],
        ['1999-01-01', 'Jonas Jonaitis, Your age: 25 years'],
        ['2000-01-01', 'Jonas Jonaitis, Your age (with Y2K bug): 124 years']
    ];
    for (const testCase of parameter) {
        it(`should be able to posible to calculate correct age for ${testCase[0]} `, () => {
            cy.visit('https://testingmarathon.com/testing/Y2K_Bank_Account_Age_Calculator/');
            cy.get('#firstName').type('Jonas');
            cy.get('#lastName').type('Jonaitis');
            cy.get('#dob').type(testCase[0]);
            cy.get('button').click();
            cy.get('#result').contains(testCase[1]);
        });
    }
});

// describe('Bank Account Age Calculator spec', () => {
//     it('should be able to posible to calculate correct age', () => {
//         cy.visit('https://testingmarathon.com/testing/Y2K_Bank_Account_Age_Calculator/');
//         cy.get('#firstName').type('Jonas');
//         cy.get('#lastName').type('Jonaitis');
//         cy.get('#dob').type('1995-01-01');
//         cy.get('button').click();
//         cy.contains(/Jonas Jonaitis, Your age: 29 years/i);
//     });
// });
