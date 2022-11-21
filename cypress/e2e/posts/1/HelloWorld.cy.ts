describe('Hello, World', () => {
  before(() => {
    cy.visit('/blog/posts/1/hello-world.html')
  })

  describe('header', () => {
    it('should be visible', () => {
      cy.get('header').should('be.visible')
    })
  })

  describe('blog section', () => {
    it('should be visible', () => {
      cy.getByTestId('post-section').should('be.visible')
    })
  })

  describe('footer', () => {
    it('should be visible', () => {
      cy.get('footer').should('be.visible')
    })
  })
})
