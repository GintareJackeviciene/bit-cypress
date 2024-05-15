describe('robodam test', () => {
    it('robodam.com', () => {
        cy.visit('https://robodam.com/#book-demo');
        cy.contains('Accept').should('be.visible').click();
        cy.get('h1').contains('New level of productivity');
        cy.get('button.block').click();
        cy.contains('.mobile-menu-background a', 'About').click();
        cy.get('h2').contains('Meet the team');
        cy.get('button.block').click();
        cy.contains('.mobile-menu-background a', 'Pricing').click();
        cy.get('h3').contains('Demo call');
        cy.get('button.block').click();
        cy.contains('.mobile-menu-background a', 'Library').click();
    });
});
