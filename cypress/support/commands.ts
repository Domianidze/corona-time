Cypress.Commands.add('logIn', () => {
  cy.get('#username').type('testeruser');
  cy.get('#password').type('asdasd');
  cy.get('#remember-device').click();
  cy.get('#logIn-button').click();
});

Cypress.Commands.add('signUp', () => {
  cy.get('#username').type('testeruser');
  cy.get('#email').type('testeruser@gmail.com');
  cy.get('#password').type('asdasd');
  cy.get('#repeat-password').type('asdasd');
  cy.get('#signUp-button').click();
});
