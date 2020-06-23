/// <reference types="cypress" />

describe('user', () => {
    const Email = "test@test.nl";
    const Password = "test123";


    beforeEach(() => {
        cy.login(Email,Password)
    })
    
    it('logout', () => {
        cy.url().should('include', 'home');
        cy.wait(5000);
        cy.get('#logout').click();
        cy.contains("Login");
    })
})