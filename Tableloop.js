///<reference types="cypress" />
describe('Handling Tables', () => {

    it('Fetch value from table', () => {
    
        cy.visit('https://datatables.net/')
        cy.get("table[id='example']").contains('td','Integration Specialist').should('be.visible')
        cy.get("table[id='example']>tbody>tr td:nth-child(3)").each(($e,index,$list) =>{
         const text=$e.text()
         if(text.includes("Edinburgh"))
        {
            cy.get("table[id='example']>tbody>tr td:nth-child(1)").eq(index).then(function(person)
            {
             const personName=person.text()
             expect(personName).to.eq("Cedric Kelly")
            })
        }

        })
        

    })


})