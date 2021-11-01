///<reference types="cypress" />

describe('Select Product', () => {

    it('Product add to cart', () => {
    
        cy.visit("https://www.amazon.in/")

        cy.get("#nav-signin-tooltip > .nav-action-button > .nav-action-inner").click()
       

       cy.get("#ap_email").type("neelamdhurpate@gmail.com")
       cy.get("[type='submit']").click()
       cy.get("#ap_password").type("Amazon_12")
       cy.get("#signInSubmit").click()
       cy.get(".nav-line-1-container").should('have.text','Hello, Neelam')

        cy.get(".nav-a[href='/mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles_9292c6cb7b394d30b2467b8f631090a7']").click()
        cy.title().should("be.equal","Mobile Phones: Buy New Mobiles Online at Best Prices in India | Buy Cell Phones Online - Amazon.in")
        cy.get("body > div:nth-child(1) > div:nth-child(30) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > ul:nth-child(2) > li:nth-child(6) > span:nth-child(1) > a:nth-child(1) > div:nth-child(1) > label:nth-child(1) > i:nth-child(2)").click()
       
        cy.wait(500)
        cy.get("[name='low-price']").type("100000")
        cy.get("[name='high-price']").type("200000")
        cy.get("input.a-button-input").click()
        cy.get("[class='a-link-normal a-text-normal']").invoke('removeAttr','target')
        cy.get("span[class='celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_3'] span[class='a-size-base a-color-base a-text-normal']").click()
    
        cy.get("#add-to-cart-button").click() 
        cy.get("#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading").should('have.text','Added to Cart')
        
      
    })

  

  })