describe('Robot or Human spec', () => {
    it('Robot typingt', () => {
        cy.visit('https://www.testingmarathon.com/testing/HumanOrRobot/');
        cy.get('#typingInput').click();
        cy.get('input').type('As esu robotas');
        cy.get('#detectionResult').contains('Robot typing detected').should('be.visible');
    });
    it('Human typing', () => {
        cy.visit('https://www.testingmarathon.com/testing/HumanOrRobot/');
        cy.get('#typingInput').click();
        cy.get('input').type('As', { delay: 5 });
        cy.get('input').type(' esu', { delay: 50 });
        cy.get('input').type(' robotas', { delay: 5 });
        cy.get('#detectionResult').contains('Human typing detected').should('be.visible');
    });
});
