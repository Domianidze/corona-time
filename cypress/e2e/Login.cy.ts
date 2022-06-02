describe('login page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('user should get error if username does not exist', () => {
    cy.intercept('POST', 'https://coronatime-api.devtest.ge/api/login', {
      statusCode: 422,
      fixture: 'username-invalid.json',
    }).as('usernameInvalid');
    cy.logIn();
    cy.contains('There is no user with such username').should('be.visible');
  });

  it('user should get error if password is not valid', () => {
    cy.intercept('POST', 'https://coronatime-api.devtest.ge/api/login', {
      statusCode: 422,
      fixture: 'password-invalid.json',
    }).as('passwordInvalid');
    cy.logIn();
    cy.contains('Password is not valid').should('be.visible');
  });

  it('error should be logged to console if response has no message', () => {
    cy.intercept('POST', 'https://coronatime-api.devtest.ge/api/login', {
      forceNetworkError: true,
    }).as('networkError');
    cy.logIn();
  });

  it('user can login and stay logged in', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('successful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/countries`, {
      statusCode: 200,
      fixture: 'countries-successful.json',
    }).as('countriesSuccessful');
    cy.logIn();
    cy.url().should('include', 'landing');

    cy.reload();
    cy.url().should('include', 'landing');
  });
});
