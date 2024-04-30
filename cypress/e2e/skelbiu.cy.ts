describe('skelbimu test', () => {
    it('alio.lt', () => {
        cy.visit('https://www.alio.lt/paieska/apple/?top_search=1');
        cy.get('h1').contains('Apple');
        cy.get('#listviewphotoover_56571634').click();
        cy.get('h1').contains('Apple Visi, Kaunas');
    });
});
