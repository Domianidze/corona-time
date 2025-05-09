describe('signup page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#signup-free-button').click();
  });

  it('user should get error if passwords dont match', () => {
    cy.get('#password').type('asd');
    cy.get('#repeat-password').type('as');
    cy.get('#password').click();
    cy.contains('Passwords must match').should('be.visible');
  });

  it('user should get error if username is taken', () => {
    cy.intercept('POST', 'https://coronatime-api.devtest.ge/api/register', {
      statusCode: 422,
      fixture: 'username-taken.json',
    }).as('usernameTaken');
    cy.signUp();
    cy.contains('Username is already taken').should('be.visible');
  });

  it('user should get error if email is taken', () => {
    cy.intercept('POST', 'https://coronatime-api.devtest.ge/api/register', {
      statusCode: 422,
      fixture: 'email-taken.json',
    }).as('emailTaken');
    cy.signUp();
    cy.contains('Email is already taken').should('be.visible');
  });

  it('error should be logged to console if response has no message', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/register`, {
      forceNetworkError: true,
    }).as('networkError');
    cy.signUp();
  });

  it('user should be able to signup', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/register`, {
      statusCode: 201,
    }).as('successful');
    cy.signUp();
  });
});
