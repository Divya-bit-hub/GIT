
import homePage from "../pageObjects/homePage" 
import productPage from "../pageObjects/productPage"


describe('Framework Concepts', function(){

    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data
        })
    })

    
    it('To handle before hook',function(){

        const home = new homePage();
        const product = new productPage();


     cy.visit(Cypress.env('url')+'/angularpractice/')

     home.getEditBox().type(this.data.name)
     home.getGender().select(this.data.gender)
     home.getPassword().type(this.data.password)
     home.getEmail().type(this.data.email)    


     //Assertion

     home.getTwowayDataBinding().should('have.value',this.data.name)
            //the above (:nth-child(1) > .form-control) this code is taken from tester by clicking dots circle which is above 
     home.getEditBox().should('have.attr','minlength','2')
     home.getEntrepreneur().should('be.disabled')


     // Cypress.config('defaultcommandtimeout',8000) // this code is used when we wait the below code to wait for sometime. this is used only for single line line. For all the codes to run a little late we will use the cypress config file.


     home.getShoptab().click()   //------click shop button
     
     this.data.productName.forEach((element)=>{
        cy.selectProduct(element)   // parameterisation
     })
     

     // to click on checkout button which is nothing but cart which will have the details of products selected
     product.getCheckoutButton().click()
            
     // next step is to total up the amount of the products which is selected in cart
     //Productsum
     var sum = 0  //declaration of variable i.e., sum is known as variable
     cy.get('tr td:nth-child(4) strong').each(($e1,index,$list)=>{       //tr-row ; td-data ; child(4)-4th row under same parent tr
     
        const eachamount = $e1.text() 
        var res = eachamount.split(" ") 
         res = res[1].trim()
        


    }).then(()=>{
        cy.log(sum)
    })


    //Expected total

    cy.get('h3 strong').then((element)=>{
        const amount = element.text()
        var total = amount.split(" ")
        total = total[1].trim() 

      expect(Number(total)).to.equal(sum) 
    })

    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions').click() //my method mam's method is cy.get('.suggestions > ul >li >a').click()
    cy.get('#checkbox2').check({force: true})
    cy.get('[type="submit"]').click()

    cy.get('.alert').then((text)=>{

        const actualText = text.text()
        expect(actualText.includes('Success')).to.be.true
    })
    
    })
})