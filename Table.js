///<reference types="cypress" />
describe('Handling Tables', () => {

    it('Fetch value from table', () => {
    
        cy.visit('https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics')
        cy.get("article[class='main-page-content'] div table").contains('td','To gain basic familiarity with HTML tables.').should('be.visible')
        

    })


})