describe('Calculator test', () => {
    it('should be posible to reproduce pentium bug', () => {
        cy.visit('https://testingmarathon.com/testing/pentium_fdiv_bug/');
        cy.get('button').contains('4').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('9').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('8').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('/').click();
        cy.get('button').contains('3').click();
        cy.get('button').contains('1').click();
        cy.get('button').contains('4').click();
        cy.get('button').contains('5').click();
        cy.get('button').contains('7').click();
        cy.get('button').contains('2').click();
        cy.get('button').contains('7').click();
        cy.get('button').contains('=').click();

        cy.get('#message').contains('1.333820449136241').should('be.visible');
    });
});
