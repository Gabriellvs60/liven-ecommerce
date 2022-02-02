
Given(/^I visit ProductsPage$/, () => {
  cy.visit('localhost:3000')

  // cy.intercept({
  //   method: 'GET',
  //   url: 'https://fakestoreapi.com/products',
  // }).as('products')
  // cy.wait(16000)
  // cy.wait('@products').then((interception) => {
  //   assert.isNotNull(interception.response.body, '1st API call has data')
  // })
  // cy.intercept('https://fakestoreapi.com/products', { fixture: 'products.json' })
});

When(/^I click on add item badge button on card$/, () => {
  cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container').first().trigger('mouseover');
  cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container > #actionsBox > .MuiBadge-root > .MuiButtonBase-root')
    .click({ force: true });
    cy.wait(300)
});

When(/^I click on add item badge button on second card$/, () => {
  cy.get(':nth-child(2) > [data-cy="product-grid-card"] > #title-container').first().trigger('mouseover');
  cy.get(':nth-child(2) > [data-cy="product-grid-card"] > #title-container > #actionsBox > .MuiBadge-root > .MuiButtonBase-root')
    .click({ force: true });
    cy.wait(300)
});

Then(/^Must have one item on cart$/, () => {
  cy.get('#appbar-actions > .MuiBadge-root > .MuiBadge-anchorOriginTopRightRectangular').should(($badge) => {
    expect($badge).contain('1')
  })
});

Then(/^Must have two items on cart$/, () => {

  cy.get('#appbar-actions > .MuiBadge-root > .MuiBadge-anchorOriginTopRightRectangular').should(($badge) => {
    expect($badge).contain('2')
  })
});

When(/^I open the sideview by Fab$/, () => {
  cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container').first().trigger('mouseover');
  cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container > #actionsBox > .MuiBadge-root > .MuiButtonBase-root')
    .click({ force: true });
  cy.get('.MuiFab-root').click({ force: true });
});

Then(/^The sideview should be open$/, () => {
  cy.get('[data-cy="product-drawer"]')
  .should('be.visible')
});

Then(/^I close the sideview$/, () => {
  cy.get('.MuiFab-root').click({ force: true });
  cy.get('[data-cy="product-drawer"]')
    .should('be.visible')
  cy.get('#drawer-title > .MuiBadge-root > .MuiButtonBase-root').click({ force: true }).should("not.be.visible")
});