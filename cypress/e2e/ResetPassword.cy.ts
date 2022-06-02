describe('reset password page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#forgot-password-button').click();
  });

  it('user should get error if user does not exist', () => {
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/password/send-recovery-link',
      {
        statusCode: 422,
        fixture: 'no-user.json',
      }
    ).as('noUser');
    cy.get('#email').type('testeruser@gmail.com');
    cy.get('#reset-password-button').click();
    cy.contains('There is no user with such email').should('be.visible');
  });

  it('error should be logged to console if response has no message', () => {
    cy.intercept(
      'POST',
      'https://coronatime-api.devtest.ge/api/password/send-recovery-link',
      {
        forceNetworkError: true,
      }
    ).as('networkError');
    cy.get('#email').type('testeruser@gmail.com');
    cy.get('#reset-password-button').click();
  });

  it('user should be able get recovery email', () => {
    cy.intercept(
      'POST',
      `${Cypress.env('API_URL')}/password/send-recovery-link`,
      {
        statusCode: 201,
      }
    ).as('success');
    cy.get('#email').type('testeruser@gmail.com');
    cy.get('#reset-password-button').click();
    cy.wait(500);
  });
});
