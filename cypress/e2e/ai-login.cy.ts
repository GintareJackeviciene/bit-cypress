describe('Login Test forWebIssues', () => {
    it('successfully logs into the app', () => {
        cy.visit('https://www.testingmarathon.com/register/index.php');
        cy.get('#field-login-login').clear().type('jgintare01@gmail.com');
        cy.get('#field-login-password').clear().type('jgintare01@gmail.com');
        cy.get('#field-login-loginSubmit').click();
        cy.contains('Log Out').should('exist');
    });

    it('does not log in with an invalid username', () => {
        cy.visit('https://www.testingmarathon.com/register/index.php');
        cy.get('#field-login-login').clear().type('1111jgintare01@gmail.com');
        cy.get('#field-login-password').clear().type('jgintare01@gmail.com');
        cy.get('#field-login-loginSubmit').click();
        cy.get('.error').contains('Incorrect value: Invalid login or password').should('exist');
    });
});
