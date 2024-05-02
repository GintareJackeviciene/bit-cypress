describe('Double click on like', () => {
    it('should be able to like 2 times', () => {
        cy.visit('https://www.testingmarathon.com/testing/bugbook/');
        cy.get('h1').contains('BugBook');
        cy.get('#demo1').click();
        cy.get('#demo1').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains("You've already liked this post!");
        });
    });
});
