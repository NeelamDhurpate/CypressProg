///<reference types="cypress" />
describe('My Test Suit', () => {

  it('Login successful', () => {
    
        cy.visit("https://www.amazon.in/")
        cy.get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner").click()
       

       cy.get("#ap_email").type("neelamdhurpate@gmail.com")
       cy.get("[type='submit']").click()
       cy.get("#ap_password").type("Amazon_12")
       cy.get("#signInSubmit").click()
       cy.get(".nav-line-1-container").should('have.text','Hello, Neelam')
      
    }) 

    it('Account not found', () => {
    
        cy.visit("https://www.amazon.in/")
        cy.get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner").click()
       // cy.title().should('eq','Google')

       cy.get("#ap_email").type("xyz")
       cy.get("[type='submit']").click()
       cy.get(".a-list-item").should('have.text','\n            We cannot find an account with that email address\n          ')
       cy.wait(2000)
      
    })
    

    it('Not entered Mail Id or Mobile number', () => {
    
      cy.visit("https://www.amazon.in/")
      cy.get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner").click()
     cy.get("#ap_email").type(" ")
     cy.get("[type='submit']").click()
     cy.get(".a-alert-content").should('have.text','\n        \n          \n            \n          \n        \n      \n  Enter your email or mobile phone number\n')
     cy.wait(2000)
  })
    
  it('Password not entered', () => {
    
    cy.visit("https://www.amazon.in/")
    cy.get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner").click()
    cy.get("#ap_email").type("neelamdhurpate@gmail.com")
    cy.get("[type='submit']").click()
    cy.get("#signInSubmit").click()
    cy.get(".a-alert-content").should('have.text','\n        \n          \n            \n          \n        \n      \n  Enter your password\n')
    cy.wait(2000)
})

it('Incorrect password', () => {
    
    cy.visit("https://www.amazon.in/")
    cy.get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner").click()
   

   cy.get("#ap_email").type("neelamdhurpate@gmail.com")
   cy.get("[type='submit']").click()
   cy.get("#ap_password").type("xx")
   cy.get("#signInSubmit").click()
   cy.get(".a-list-item").should('have.text','\n            To better protect your account, please re-enter your password and then enter the characters as they are shown in the image below.\n          ')
   cy.wait(2000)
})

  })