declare namespace Cypress {
  interface Chainable {
    login(): void;
    signup(): void;
  }
}

module.exports = (on, config) => {
  require('@cypress/code-coverage/task')(on, config);

  return config;
};
