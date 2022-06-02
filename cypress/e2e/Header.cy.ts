describe('header component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/countries`, {
      forceNetworkError: true,
    }).as('networkError');
    cy.logIn();
  });

  it('mobile user should be able to open and close menu', () => {
    cy.viewport('iphone-xr');
    cy.get('#menu-button').click();
    cy.wait(500);
    cy.get('#logout-button').should('be.visible');

    cy.get('#menu-button').click();
    cy.wait(500);
    cy.get('#logout-button').should('not.exist');
  });
});
