class productPage{

getCheckoutButton(){
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link') //this locator is taken from test runner
}

}

export default productPage
