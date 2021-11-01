///<reference types="cypress" />

describe('API Program Delete', () => {

    it('Delet API test', () => {

     cy.request({
      method: 'POST',
      url : 'https://gorest.co.in/public/v1/users',
      headers : {
        'authorization': 'Bearer e8d4f6095dde817f4d5a657971cb529da536c1b7c3e1c152b82a4d16b8921b6c'
       },
      body : { 
        "name":"Neelam Dhurpate",
        "email":"Myemail8@haha.info",
        "gender":"female",
        "status":"active"
        }

     }).then((res)=>{
         cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
        expect(res.body.data).has.property('name','Neelam Dhurpate')
        expect(res.body.data).has.property('gender','female')

     }).then((res)=>{
         const userID=res.body.data.id
         cy.log("user id is"+ userID)
         cy.request({
             method: 'DELETE',
             url : 'https://gorest.co.in/public/v1/users/'+userID,
            headers : {
             'authorization': 'Bearer e8d4f6095dde817f4d5a657971cb529da536c1b7c3e1c152b82a4d16b8921b6c'
               }
         }).then((res)=>{
            expect(res.status).to.eq(204)
            cy.log(JSON.stringify(res))
         })


     })

    })


})