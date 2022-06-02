describe('set password page', () => {
  beforeEach(() => {
    cy.visit('/reset/set-password');
  });

  it('user should get error if passwords dont match', () => {
    cy.get('#password').type('asd');
    cy.get('#repeat-password').type('as');
    cy.get('#password').click();
    cy.contains('Passwords must match').should('be.visible');
  });

  it('error should be logged to console if hash is invalid', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/password/recover`, {
      statusCode: 401,
    });
    cy.get('#password').type('asd');
    cy.get('#repeat-password').type('asd');
    cy.get('#set-password-button').click();
  });

  it('user can set new password', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/password/recover`, {
      statusCode: 200,
    });
    cy.get('#password').type('asd');
    cy.get('#repeat-password').type('asd');
    cy.get('#set-password-button').click();
  });
});
