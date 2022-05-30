declare namespace Cypress {
  interface Chainable {
    logIn(): void;
    signUp(): void;
  }
}

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);

  return config;
};
