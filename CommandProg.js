///<reference types="cypress" />
describe('My Test Suit', () => {

    it('Login successful', () => {
      
        cy.login("neelamdhurpate@gmail.com","Amazon_12")
         cy.get(".nav-line-1-container").should('have.text','Hello, Neelam')
        
      }) 

      it('Search element', () => {
      
        
       cy.login("neelamdhurpate@gmail.com","Amazon_12")
       cy.get(".nav-line-1-container").should('have.text','Hello, Neelam')
       cy.log("__________search item_________________-")
      
    }) 

    })