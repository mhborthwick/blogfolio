/// <reference types="cypress" />

Cypress.Commands.add('getByTestId', (id: string) => {
  cy.get(`[data-test-id="${id}"]`)
})
