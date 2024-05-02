describe('click display:none button', () => {
    it('Force click', () => {
        cy.visit('https://eviltester.github.io/TestingApp/apps/testwith/version/1/testwith.html');
        cy.get('#w1lw0').type('t');
        cy.get('#w1lw1').type('e');
        cy.get('#w1lw2').type('s');
        cy.get('#w1lw3').type('t');
        cy.get('#w2lw0').type('a');
        cy.get('#w2lw1').type('t');
        cy.get('#w2lw2').type('t');
        cy.get('#w2lw3').type('i');
        cy.get('#w2lw4').type('t');
        cy.get('#w2lw5').type('u');
        cy.get('#w2lw6').type('d');
        cy.get('#w2lw7').type('e');

        cy.contains('button', 'Header').click({ force: true });
        cy.get('#result').contains('I t.e.s.t with a.t.t.i.t.u.d.e');
        cy.contains('button', 'Render').click({ force: true });
        cy.get('#canvas').should('be.visible');
    });
});
