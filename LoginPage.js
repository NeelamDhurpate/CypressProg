///<reference types="cypress"/>

import LoginPage from "../PageObjectModel/LoginPage"

describe("Test Suite",function(){

    it("Login Test case",function(){
        const lp=new LoginPage()
        lp.visit()
        lp.fillUserName("neelamdhurpate12@gmail.com")
        lp.fillPassword("Github_12")
        lp.Submit()
        cy.title().should("be.equal","GitHub")
        
    })

})