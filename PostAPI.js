///<reference types="cypress" />
describe('API Program Post', () => {

    it('Post API test', () => {

     cy.request({
      method: 'POST',
      url : 'https://reqres.in/api/users',
      body : {
            "name": "morpheus",
            "job": "leader"
        
      }

     }).then((res)=>{
         cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name','morpheus')
        expect(res.body).has.property('job','leader')

     })

    })


})