/// <reference types="Cypress" />

describe('Web table Analysis',function(){
    it('previous sibling',function(){
        
         cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
         cy.get('table.table-display tr td:nth-child(3)').each(($e1,index,$list)=>{
           const pricetext = $e1.text()
           if(pricetext.includes('35')){

            cy.get('table.table-display tr td:nth-child(3)').eq(index).prev().then((course)=>{
                const a = course.text()
                expect(a).to.equal('WebServices / REST API Testing with SoapUI')
                
            })
           }


         })

    })
})