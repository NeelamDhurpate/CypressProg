///<reference types="cypress"/>
describe("Hooks practice program",()=>{

   
    before(function(){
        cy.log("---------------------start up block----------------")
    })
 
    after(function(){
     cy.log("---------------------tear down block----------------")
    })
 
     beforeEach(function(){
       /* cy.visit("https://www.amazon.in/")
        cy.get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner").click()
       

       cy.get("#ap_email").type("neelamdhurpate@gmail.com")
       cy.get("[type='submit']").click()
       cy.get("#ap_password").type("Amazon_12")
       cy.get("#signInSubmit").click()
       cy.get(".nav-line-1-container").should('have.text','Hello, Neelam')*/
     })
 
    afterEach(function(){
     /* cy.get("span[class='nav-line-2 '] span[class='nav-icon nav-arrow']").trigger('mouseover')
      cy.get("#nav-item-signout").click()*/

     })
 
     it("Select Node JS Book",()=>{
         cy.visit("https://www.amazon.in/")
         cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Books',{force: true})
         cy.get("#twotabsearchtextbox").type("Node Js")
         cy.get("#nav-search-submit-button").click()
         cy.title().should('eq', 'Amazon.in : Node Js')
             
        })
 
     it("second test case",()=>{
         cy.log("**********Add item verification*******************")
     })
 
     it("third test case",()=>{
         cy.log("***********Search item verification******************")
     })
 
     it("fourth test case",()=>{
         cy.log("**********Payments verification*******************")
     })
 })