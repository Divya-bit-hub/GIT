describe('This is for my practice',function(){
    it('Practice session',function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get('[name="name"]:nth-child(2)').type('James')
        cy.get('[name="email"]').type('james@2024')
        cy.get('#exampleInputPassword1').type('James')
        cy.get('#exampleCheck1').check()

        cy.get('#exampleFormControlSelect1').select('Female')
        //cy.get('#inlineRadio2').check()
        cy.get('#inlineRadio3').check()
    })
})