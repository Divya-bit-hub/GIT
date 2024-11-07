
describe('Framework Concepts', function(){

    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data
        })
    })

    
    it('To handle before hook',function(){

     cy.visit('https://rahulshettyacademy.com/angularpractice/')

     cy.get('[name="name"]:nth-child(2)').type(this.data.name)  // [name="name"]:nth-child(2) in this locator we should not give any spaces before or after colon
     cy.get('select').select(this.data.gender)
     cy.get('#exampleInputPassword1').type(this.data.password)
     cy.get('[name="email"]').type(this.data.email)    // email didn't print completely

     //Assertion

     cy.get(':nth-child(1) > .form-control').should('have.value',this.data.name)
            //the above (:nth-child(1) > .form-control) this code is taken from tester by clicking dots circle which is above 
     cy.get('[name="name"]:nth-child(2)').should('have.attr','minlength','2')
     cy.get('#inlineRadio3').should('be.disabled')


     cy.get(':nth-child(2) > .nav-link').click()   //------click shop button
            //the above (:nth-child(2) > .nav-link) this code is taken from tester by clicking dots circle which is above 
     
            // card title is taken for the name of the mobile Blackberry ---- this is related to below row 31
    cy.get('.card-title').each(($e1,index,$list)=>{      
         if($e1.text().includes('Blackberry')){

            cy.get('.btn.btn-info').eq(index).click()
         }
     })

    cy.selectProduct('Blackberry')   //-----this is from command.js
            
    })
})