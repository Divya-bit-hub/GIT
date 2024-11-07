/// <reference types="cypress" />

describe('This is my first test suite',function(){

    it ('This is my first case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('[type="checkbox"]').check()

        cy.get('select').select('option3').should('have.value','option3')

        cy.get('#autocomplete').type('united')
        cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
            if($e1.text()==='United States (USA)'){
                cy.wrap($e1).click()
        
            }
        })

        cy.get('[value="radio3"]').check().should('be.checked').and('have.value','radio3')

        
    })
})
