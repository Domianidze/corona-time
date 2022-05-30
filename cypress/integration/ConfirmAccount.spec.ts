describe('confirm account page', () => {
  beforeEach(() => {
    cy.visit('/notification/confirm-account');
  });

  it('error should be logged to console if hash is invalid', () => {
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/confirm-account',
      {
        statusCode: 401,
      }
    );
  });

  it('user should be able confirm account', () => {
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/confirm-account',
      {
        statusCode: 201,
      }
    );
  });
});
