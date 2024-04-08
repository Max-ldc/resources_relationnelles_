//npx cypress open  

// test connecte client
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.icon-menu-open').click() //via menu
    cy.contains('Se connecter').click()

    cy.get('input[type="text"]').type('123')
    cy.get('input[type="password"]').type('pass')

    cy.contains('Valider').click()
  })
})