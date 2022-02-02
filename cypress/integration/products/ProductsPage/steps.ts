
Given(/^I visit Products ProductsPage$/, () => {
  cy.visit('localhost:3000')
});

When(/^I click on add item badge button on card$/, () => {
  cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container').first().trigger('mouseover');
  cy.get(':nth-child(1) > [data-cy="product-grid-card"] > #title-container > #actionsBox > .MuiBadge-root > .MuiButtonBase-root')
    .click({ force: true });
});

When(/^Must have one item on cart$/, () => {
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
  cy.get('.MuiFab-root').click();
});


Then(/^the sideview should be open$/, () => {
  cy.get('[data-cy="product-drawer"]')
  .should('be.visible')
});


Then(/^i close the sideview$/, () => {
  cy.get('.MuiFab-root').click();
  cy.get('[data-cy="product-drawer"]')
    .should('be.visible')
  cy.get('#drawer-title > .MuiBadge-root > .MuiButtonBase-root').click().should("not.be.visible")
});