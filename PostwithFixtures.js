///<reference types="cypress" />
const Jsondata=require('../../fixtures/create.json')
describe('API Program Post', () => {

    it('Post API test', () => {

     cy.request({
      method: 'POST',
      url : 'https://reqres.in/api/users',
      body : {
            "name": Jsondata.name,
            "job": Jsondata.job
        
      }

     }).then((res)=>{
         cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name',Jsondata.name)
        expect(res.body).has.property('job',Jsondata.job)

     })

    })


})