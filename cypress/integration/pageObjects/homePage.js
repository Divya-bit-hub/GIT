class homePage{

    getEditBox(){
        return cy.get('[name="name"]:nth-child(2)')
    }

    getGender(){
        return cy.get('select')
    }

    getTwowayDataBinding(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getPassword(){
        return cy.get('#exampleInputPassword1')
    }

    getEntrepreneur(){
        return cy.get('#inlineRadio3')
    }

    getEmail(){
        return cy.get('[name="email"]')
    }

    getShoptab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default homePage