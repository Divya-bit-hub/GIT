describe('It is related to API',function(){

it('HTTPS methods', function(){

    cy.request('POST', 'https://reqres.in/api/users',{

    }).then((Response)=>{
       
        expect(Response.body).to.have.property('name','morpheus')
        expect(Response.body).to.have.property('job','leader')
        expect(Response.status).to.eq(201)

    })
    // cy.request('GET','https://reqres.in/api/users?page=2',{}).then((response)=>{
    //     expect(response.status).to.eq(200)
    //     //expect(response.body.statusText).to.eq('OK')

    //    expect(response.body.data.id).to.eq(2)

    // })


})

})