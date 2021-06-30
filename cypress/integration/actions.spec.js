/// <reference types="Cypress" />

it('url entring',()=>{
 cy.visit('http://automationpractice.com/index.php')
 cy.get('.login').click()
 cy.get('#email').type('12jayant12@gmail.com')
 cy.get('#passwd').type('Delt@123')
 cy.get('.icon-lock').click()
 cy.get('.logo').click()
 cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
 cy.get('.button-medium > span').click()
 cy.get('.cart_navigation > .button > span').click()
 cy.get('.cart_navigation > .button > span').click()
 cy.get('#cgv').click()
 cy.get('.cart_navigation > .button > span').click()
 cy.get('.bankwire').click()
 cy.get('#cart_navigation > .button > span').should('have.text','I confirm my order').click()
 cy.get('.cheque-indent > .dark').should('have.text','Your order on My Store is complete2.')
 }
)