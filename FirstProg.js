describe('My Test Suit', () => {

    it('Title validation positive', () => {
    
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
      
    })

    it('Title validation negative', () => {
    
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google Neelam')
      
    })

  })