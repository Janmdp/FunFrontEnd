/// <reference types="cypress" />

describe('user', () => {
    const Email = "test@test.nl";
    const Password = "test123";


    beforeEach(() => {
        cy.login(Email,Password)
    })
    
    it('trades', () => {
        cy.get('#trades').click();
        cy.contains('Create trade');
        cy.get('select[name=Shift]').select('Jun 27, 2020');//.select('apples').should('have.value', '456')
        cy.get('select[name=ReworkShift]').select('Jun 14, 2020');
        cy.get('button[type=submit]').click();
    })

    it('deleteTrade', () => {
        cy.get('#trades').click();
        cy.contains('Create trade');
        cy.get('#myTrades').click();
        cy.get('#deleteTrade').click();
    })
})