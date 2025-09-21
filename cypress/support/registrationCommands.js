// Custom command for registration form
Cypress.Commands.add('fillRegistrationForm', (fullname, username, email, phone, country, password) => {
  cy.get('[data-cy="fullname"]').type(fullname);
  cy.get('[data-cy="username"]').type(username);
  cy.get('[data-cy="email"]').type(email);
  cy.get('[data-cy="phone"]').type(phone);
  cy.get('[data-cy="country"]').select(country);
  cy.get('[data-cy="password"]').type(password);
});
