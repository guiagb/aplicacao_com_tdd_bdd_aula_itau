/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Deve preencher um CPF e verificar como válido', () => {
    cy.get('input').type('351.455.030-16')
    //cy.wait(1000)
    cy.get('form button').click()
    //cy.wait(1000)
    cy.get('.alert-success').should("to.have.length", 1)
    cy.get('.alert-danger').should("to.have.length", 0)
    //cy.wait(1000)
  })

  it('Deve preencher um CPF e verificar como válido', () => {
    cy.get('input').type('351.455.030-17')
    //cy.wait(1000)
    cy.get('form button').click()
    //cy.wait(1000)
    cy.get('.alert-success').should("to.have.length", 0)
    cy.get('.alert-danger').should("to.have.length", 1)
    //cy.wait(1000)
  })
})
