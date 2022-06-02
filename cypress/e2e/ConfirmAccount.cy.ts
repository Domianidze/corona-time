describe('confirm account page', () => {
  beforeEach(() => {
    cy.visit('/notification/confirm-account');
  });

  it('error should be logged to console if hash is invalid', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/confirm-account`, {
      statusCode: 401,
    });
  });

  it('user should be able confirm account', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/confirm-account`, {
      statusCode: 201,
    });
  });
});
