/// <reference types="cypress" />


describe('Registration Form Selectors Practice', () => {
  beforeEach(() => {
    cy.visit('registration-form/index.html');
  });

  it('Selects elements by ID', () => {
    cy.get('#fullname').type('NameById');
    cy.get('#username').type('userById');
    cy.get('#email').type('emailById@example.com');
    cy.get('#phone').type('1112223333');
    cy.get('#country').select('Canada');
    cy.get('#password').type('passById');
    cy.get('.btn.primary').click();
    cy.get('#message').should('contain', 'Registration successful!');
  });

  it('Selects elements by name attribute', () => {
    cy.get('input[name="fullname"]').type('NameByName');
    cy.get('input[name="username"]').type('userByName');
    cy.get('input[name="email"]').type('emailByName@example.com');
    cy.get('input[name="phone"]').type('2223334444');
    cy.get('select[name="country"]').select('UK');
    cy.get('input[name="password"]').type('passByName');
    cy.get('.btn.primary').click();
    cy.get('#message').should('contain', 'Registration successful!');
  });

  it('Selects elements by type attribute', () => {
    cy.get('input[type="text"]').first().type('NameByType');
    cy.get('input[type="text"]').last().type('userByType');
    cy.get('input[type="email"]').type('emailByType@example.com');
    cy.get('input[type="tel"]').type('3334445555');
  cy.get('select').select('Bangladesh');
    cy.get('input[type="password"]').type('passByType');
    cy.get('.btn.primary').click();
    cy.get('#message').should('contain', 'Registration successful!');
  });

  it('Selects elements by class', () => {
    cy.get('.container input[type="text"]').first().type('ClassName');
    cy.get('.container input[type="text"]').last().type('ClassUser');
    cy.get('.container input[type="email"]').type('class@email.com');
    cy.get('.container input[type="tel"]').type('5556667777');
    cy.get('.container select').select('UK');
    cy.get('.container input[type="password"]').type('ClassPass');
    cy.get('.btn.primary').click();
    cy.get('#message').should('contain', 'Registration successful!');
  });

  it('Selects elements by label text', () => {
    cy.contains('label', 'Username').should('exist');
    cy.contains('label', 'Email').should('exist');
    cy.contains('label', 'Password').should('exist');
  });

  it('Selects elements by button text', () => {
    cy.get('[data-cy="fullname"]').type('ButtonName');
    cy.get('[data-cy="username"]').type('ButtonUser');
    cy.get('[data-cy="email"]').type('button@email.com');
    cy.get('[data-cy="phone"]').type('6667778888');
    cy.get('[data-cy="country"]').select('Canada');
    cy.get('[data-cy="password"]').type('ButtonPass');
    cy.contains('button', 'Register').click();
    cy.get('#message').should('contain', 'Registration successful!');
  });

  it('Uses custom command to fill form', () => {
    cy.fillRegistrationForm(
      'Custom Name',
      'customUser',
      'custom@example.com',
      '1234567890',
      'USA',
      'customPass'
    );
    cy.get('[data-cy="submit-login"]').click();
    cy.get('#message').should('contain', 'Registration successful!');
  });

  it('fills and submits the form using data-cy selectors', () => {
    cy.get('[data-cy="fullname"]').type('DataCy Name');
    cy.get('[data-cy="username"]').type('userDataCy');
    cy.get('[data-cy="email"]').type('emailDataCy@example.com');
    cy.get('[data-cy="phone"]').type('9876543210');
  cy.get('[data-cy="country"]').select('Bangladesh');
    cy.get('[data-cy="password"]').type('passDataCy');
    cy.get('[data-cy="submit-login"]').click();
    cy.get('#message').should('contain', 'Registration successful!');
  });
});
