/// <reference types="Cypress" />

describe ('This is my fifth suite',function(){
    it('this is my fifth case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('table.table-display tr td:nth-child(2)').each(($e1,index,$list)=>{

            const text = $e1.text()
            if(text.includes('Python')){
                
                cy.get('table.table-display tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const pricetext = price.text()
                    expect(pricetext).to.equal('25')
                })
            }
        })

    })
})
