/// <reference types="Cypress" />
describe('This is my second suite',function(){
    it('This is my second case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()


        cy.on('window:alert',(str)=>

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        
        )

        cy.on('window:confirm',(str)=>{

        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    
    })



    })
})