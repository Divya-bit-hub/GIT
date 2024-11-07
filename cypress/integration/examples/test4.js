/// <reference types="Cypress" />

describe('This is my fourth suite',function(){
    it('This is my fourth test case',function(){

     cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
     cy.get('#opentab').then((e1)=>{

        const url=e1.prop('href')
        cy.visit(url)

        cy.origin(url,()=>{
            cy.get('.sub-menu-bar [href*="about"]').click()
            cy.get('.mt-50 h2').should('contain','QAClick Academy')
        })


     })   


    })
})