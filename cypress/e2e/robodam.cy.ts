describe('robodam test', () => {
    it('should navigate through the site', () => {
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
    Cypress.on('uncaught:exception', (err) => {
        if (err.message.includes('d is not a function')) {
            return false;
        }
        return true;
    });
    it('should be able to login for demo call', () => {
        cy.visit('https://robodam.com/#book-demo');
        cy.contains('Accept').should('be.visible').click();
        cy.get('li.w-16 > a[href="/#book-demo"]').click();
        cy.contains('h2', 'Book a free demo call').should('be.visible');
        cy.get('input[placeholder="Name and Surname"]').type('Vardas');
        cy.get('input[placeholder="Company"]').type('rimta kompanija');
        cy.get('input[placeholder="Phone"]').type('1');
        cy.get('input[placeholder="Email"]').type('V@ggg.com');
        cy.get('button').contains('Book').click();
        cy.contains('Booked').should('be.visible');
    });
});
