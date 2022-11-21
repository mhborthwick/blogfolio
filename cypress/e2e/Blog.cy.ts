describe('Blog', () => {
  before(() => {
    cy.visit('/blog/')
  })

  describe('header', () => {
    it('should be visible', () => {
      cy.get('header').should('be.visible')
    })
  })

  describe('blog section', () => {
    it('should be visible', () => {
      cy.getByTestId('blog-section').should('be.visible')
    })
  })

  describe('footer', () => {
    it('should be visible', () => {
      cy.get('footer').should('be.visible')
    })
  })
})
