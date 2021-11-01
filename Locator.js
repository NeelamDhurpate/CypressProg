///<reference types="cypress" />

describe('Locator Program', () => {

    it('Title validation positive', () => {
    
        cy.visit('https://www.google.com/')
        cy.get("[name='q']").type("neelam dhurpate")
        cy.get("[name='q']").type('{enter}') 
       
      
    })

  

  })