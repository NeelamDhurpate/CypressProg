///<reference types="cypress" />

describe('API Program', () => {
  let str="e8d4f6095dde817f4d5a657971cb529da536c1b7c3e1c152b82a4d16b8921b6c"
    it('Get API test', () => {
    
      cy.request({
          method : 'GET',
          url : 'https://gorest.co.in/public/v1/users',
          Headers : {
           'authorization': "Bearer" + str
          }

      }).then((res)=>{
          expect(res.status).to.eq(200)
          expect(res.body.meta.pagination.limit).to.eq(20)
      })
             
    })
})