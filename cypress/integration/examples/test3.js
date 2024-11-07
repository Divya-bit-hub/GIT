/// <reference types="Cypress" />

describe('this is my third suite',function(){

it('This is my third case',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#opentab').invoke('removeAttr','target').click()

    cy.origin('https://www.qaclickacademy.com/',()=>{
        cy.get('#navbarSupportedContent [href*="about"]').click()

    })

})


})