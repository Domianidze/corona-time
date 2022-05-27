describe('header component', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('POST', 'https://coronatime-api.devtest.ge/api/login', {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.intercept('GET', 'https://coronatime-api.devtest.ge/api/countries', {
      forceNetworkError: true,
    }).as('networkError');
    cy.login();
    cy.wait('@loginSuccessful');
    cy.wait('@networkError');
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
