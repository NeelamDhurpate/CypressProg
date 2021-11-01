///<reference types="cypress" />
const Jsondata=require('../../fixtures/login.json')
describe("Fixtures program",()=>{

     it("login with fixtures",()=>{
     
           cy.visit("https://github.com/login");
           cy.get("#login_field").type(Jsondata.username)
           cy.get("#password").type(Jsondata.password)
           cy.get("[type='submit']").click()
           

    })
})