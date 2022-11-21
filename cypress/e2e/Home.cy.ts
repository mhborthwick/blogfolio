describe('Homepage', () => {
  before(() => {
    cy.visit('/')
  })

  describe('header', () => {
    it('should be visible', () => {
      cy.get('header').should('be.visible')
    })
  })

  describe('about section', () => {
    it('should be visible', () => {
      cy.getByTestId('about-section').should('be.visible')
    })
  })

  describe('portfolio section', () => {
    it('should be visible', () => {
      cy.getByTestId('portfolio-section').should('be.visible')
    })
  })

  describe('footer', () => {
    it('should be visible', () => {
      cy.get('footer').should('be.visible')
    })
  })
})
