/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('iframe concept',function(){

    it('iframe',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('courses-iframe')
        cy.iframe().find('[href="mentorship"]').eq(0),click()
        cy.wait(2000)
        cy.iframe().find('[class*="pricing-title"]').should('have.length',2)
        
    })
})