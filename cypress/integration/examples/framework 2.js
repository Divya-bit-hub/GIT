import homePage from "../pageObjects/homePage" //when we import and export b/w packages when the webpages are like 3000 and we create test case for each webpage
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


     cy.visit('https://rahulshettyacademy.com/angularpractice/')

     home.getEditBox().type(this.data.name)
     home.getGender().select(this.data.gender)
     home.getPassword().type(this.data.password)
     home.getEmail().type(this.data.email)    

     // cy.pause()  ---this method is used to stop and it can be resumed manually

     //Assertion

     home.getTwowayDataBinding().should('have.value',this.data.name)
            //the above (:nth-child(1) > .form-control) this code is taken from tester by clicking dots circle which is above 
     home.getEditBox().should('have.attr','minlength','2')
     home.getEntrepreneur().should('be.disabled')


     home.getShoptab().click()   //------click shop button
            //the above (:nth-child(2) > .nav-link) this code is taken from tester by clicking dots circle which is above 
     
            // card title is taken for the name of the mobile Blackberry ---- this is related to below row 31
    // cy.get('.card-title').each(($e1,index,$list)=>{      
    //      if($e1.text().includes('Blackberry')){

    //         cy.get('.btn.btn-info').eq(index).click()
    //      }
    //  })



    // cy.selectProduct('Blackberry')   //-----this is from command.js to select the single product

     //On top of above row line 41 we can follow below method to select multiple products

     this.data.productName.forEach((element)=>{
        cy.selectProduct(element)   // parameterisation
     })

     product.getCheckoutButton().click() //this is related to productpage


    
            
    })
})