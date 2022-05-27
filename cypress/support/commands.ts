Cypress.Commands.add('login', () => {
  cy.get('#username').type('testeruser');
  cy.get('#password').type('asdasd');
  cy.get('#remember-device').click();
  cy.get('#login-button').click();
});

Cypress.Commands.add('signup', () => {
  cy.get('#username').type('testeruser');
  cy.get('#email').type('testeruser@gmail.com');
  cy.get('#password').type('asdasd');
  cy.get('#repeat-password').type('asdasd');
  cy.get('#signup-button').click();
});
