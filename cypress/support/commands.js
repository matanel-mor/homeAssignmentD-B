// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { homePage } from "./pages/HomePage";

Cypress.Commands.add("changeLanguage", () => {
    homePage.clickOnHamburgerMenu();
    cy.get('#hmenu-icp-language').click();
    cy.get('[value="en_US"]').check({ force: true });
    cy.get('#icp-save-button-announce').click({ force: true });
    cy.wait(3000)
});