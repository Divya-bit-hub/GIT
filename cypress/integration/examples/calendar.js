/// <reference types="cypress" />

describe('Greenkart',function(){
    it('To change the date',function(){

        const monthNumber='6';
        const date='15';
        const year='2027';
        const expectedlist = ['monthNumber', 'date', 'year']

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
    cy.get('.react-date-picker__inputGroup').click()  //---this is used to click on the calendar button
    cy.get('.react-calendar__navigation__label').click()  //--this is used to click on the (month year) option which is above so that we will get all the months in rows and columns
    cy.get('.react-calendar__navigation__label').click()  // we will click on the (year) option so that we will get list of years 
    cy.contains('button',year).click();
    cy.get('.react-calendar__year-view__months__month').eq(Number(monthNumber)-1).click()  //to convert from string to integer
    cy.contains('abbr',date).click()

     //Assertion (As per classmate's idea)

    // cy.get('.react-date-picker__inputGroup input').each(($e1,index,$list)=>{
    //  cy.wrap($e1).invoke('val').then((text)=>{
    //     cy.log(text)
    //     console.log(text)
    //  })

    // })

    //Assertion (As per mam's method)

    cy.get('react-date-picker__inputGroup__input').each(($e1,index)=>{

        // cy.wrap('$e1').invoke('val').then(text)=>{    // line 33 and 34 mam showed is the data updated in webpage
          // console.log(text)  
        //})
        cy.wrap($e1).invoke('val').should('eq',expectedlist[index]) // this line will validate like whether left side is equal to right side
         //(the above is left side)              (this is right side)
         // we give cy.wrap and invoke in case when the text (black color) is not available in the code instead it is 3 dots.
    })

    

    })
})