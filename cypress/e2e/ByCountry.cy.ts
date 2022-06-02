describe('by country tab', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/countries`, {
      statusCode: 200,
      fixture: 'countries-successful.json',
    }).as('countriesSuccessful');
    cy.logIn();
    cy.get('#by-country-button').click();
  });

  it('user should be able to change language', () => {
    cy.get('#language').click();
    cy.contains('ქართული').click();
    cy.contains('ლოკაცია').should('be.visible');
  });

  it('user should be able to sort data', () => {
    cy.contains('Location').click();
    cy.contains('New Cases').click();
    cy.contains('New Cases').click();
  });

  it('user should be able to search', () => {
    cy.get('#table-search').type('Canada');
    cy.contains('Fiji').should('not.exist');
  });
});
