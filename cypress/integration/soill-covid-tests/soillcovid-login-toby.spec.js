/// <reference types="cypress" />

context('Window', () => {

  
    it('sets auth cookie when logging in via form submission', function () {
        // destructuring assignment of the this.currentUser object
        const username = 'toby.samples@gmail.com';
        const password = 'testpass';
    
        cy.visit('https://soillcovid.github.io/login.html')
    
        cy.get('#inputEmail').type(username)
    
        // {enter} causes the form to submit
        cy.get('#inputPassword').type(`${password}{enter}`)
    
        // we should be redirected to /dashboard
        cy.url().should('include', 'index.html')

    
        // UI should reflect this user being logged in
        cy.get('#welcome-msg').should('contain', 'Toby')
      })
  })
  