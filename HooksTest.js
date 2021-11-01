///<reference types="cypress"/>
describe("Hooks practice program",()=>{

   
   before(function(){
       cy.log("---------------------start up block----------------")
   })

   after(function(){
    cy.log("---------------------tear down block----------------")
   })

    beforeEach(function(){
    cy.log("____________________Login______________________")
    })

   afterEach(function(){
   cy.log("_____________________Logout__________________")
    })

    it("first test case",()=>{
        cy.log("**********Product list verification*******************")
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