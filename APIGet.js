///<reference types="cypress" />

describe('API Program', () => {

    it('Get API - Sigle user', () => {
    
      cy.request({
          method : 'GET',
          url : 'https://reqres.in/api/users/2'

      }).then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body.data.id).to.eq(2)
          expect(res.body.data.first_name).to.eq('Janet')
          cy.log(JSON.stringify(res))
      })
             
    })

    it('Get API - List of users', () => {
    
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2'
  
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data[1].id).to.eq(8)
            expect(res.body.data[1].first_name).to.eq('Lindsay')
            cy.log(JSON.stringify(res))
        })
               
      })
  
  })