/// <reference types="cypress" />

describe('visit modules products grid list', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
  })

  it('Should add a product on card, and a second', () => {
    cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container').first().trigger('mouseover');
    cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container > #actionsBox > .MuiBadge-root > .MuiButtonBase-root')
      .click({ force: true });
    cy.get('#appbar-actions > .MuiBadge-root > .MuiBadge-anchorOriginTopRightRectangular').should(($badge) => {
      expect($badge).contain('1')
    })
    cy.get(':nth-child(2) > [data-cy="product-grid-card"] > #title-container').first().trigger('mouseover');
    cy.get(':nth-child(2) > [data-cy="product-grid-card"] > #title-container > #actionsBox > .MuiBadge-root > .MuiButtonBase-root')
      .click({ force: true });
    cy.get('#appbar-actions > .MuiBadge-root > .MuiBadge-anchorOriginTopRightRectangular').should(($badge) => {
      expect($badge).contain('2')
    })
  });

  it('Should add a product and open the drawer', () => {
    cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container').first().trigger('mouseover');
    cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container > #actionsBox > .MuiBadge-root > .MuiButtonBase-root')
      .click({ force: true });
    cy.get('.MuiFab-root').click();
    cy.get('[data-cy="product-drawer"]')
      .should('be.visible')
  });

  it('Should close the drawer', () => {
    cy.get('.MuiFab-root').click();
    cy.get('[data-cy="product-drawer"]')
      .should('be.visible')
    cy.get('#drawer-title > .MuiBadge-root > .MuiButtonBase-root').click().should("not.be.visible")
  });
})

