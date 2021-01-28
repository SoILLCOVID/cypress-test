/// <reference types="cypress" />

context('Window', () => {

  
    it('sets auth cookie when logging in via form submission', function () {
        // destructuring assignment of the this.currentUser object
        const username = 'tsamples';
        const password = 's51#';
    
        cy.visit('https://github.com/login')
    
        cy.get('input[name=login]').type(username)
    
        // {enter} causes the form to submit
        cy.get('input[name=password]').type(`${password}{enter}`)
    
        // we should be redirected to /dashboard
        cy.url().should('include', 'github.com')

    
        // UI should reflect this user being logged in
        cy.get('span.css-truncate-target').should('contain', 'tsamples')
      })
  

  })
  