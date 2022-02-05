
Given(/^I visit ProductsPage$/, () => {
  cy.visit('/')
});

When(/^I click on add item badge button on card$/, () => {
  cy.get(':nth-child(1) > [data-cy="product-grid-card"]').first().trigger('mouseover');
  cy.get(':nth-child(1) > [data-cy="product-grid-card"] > [data-cy="title-container"] > [data-cy="actions-container"] > [data-cy="badge"] > [data-cy="button-add"]').click({ force: true });
});

When(/^I click on add item badge button on second card$/, () => {
  cy.get(':nth-child(2) > [data-cy="product-grid-card"]').first().trigger('mouseover');
  cy.get(':nth-child(2) > [data-cy="product-grid-card"] > [data-cy="title-container"] > [data-cy="actions-container"] > [data-cy="badge"] > [data-cy="button-add"]').click({ force: true });
});

Then(/^Must have one item on cart$/, () => {
  cy.get('#appbar-actions > [data-cy="badge"]').should(($badge) => {
    expect($badge).contain('1')
  })
});

Then(/^Must have two items on cart$/, () => {
  cy.get('#appbar-actions > [data-cy="badge"]').should(($badge) => {
    expect($badge).contain('2')
  })
});

When(/^I open the sideview by Fab$/, () => {
  cy.get('[data-cy="fab-open-drawer-cart"]').click({ force: true });
});

Then(/^The sideview should be open$/, () => {
  cy.get('[data-cy="product-drawer"]')
    .should('be.visible')
});

Then(/^I close the sideview$/, () => {
  cy.get('[data-cy="button-close-drawer"]').click({ force: true }).should("not.be.visible")
});