describe('ping pong test', () => {
    it('should be able see Game Over! Your score:0', () => {
        cy.visit('https://testingmarathon.com/testing/PingPong/');
        cy.get('#startButton').click();
        cy.on('window:alert', (message) => {
            expect(message).to.equal('Game Over! Your score: 0');
        });
    });
    it('should be able see that ball is moving', () => {
        cy.visit('https://testingmarathon.com/testing/PingPong/');
        cy.get('#startButton').click();
        cy.get('#ball').should('be.visible');
    });
});
