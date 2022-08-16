export class CustomerServicePage {
    // Selectors
    helpInputField() {
        return cy.get('#hubHelpSearchInput');
    };

    // Methods
    typeToHelpInputField() {
        this.helpInputField().type("where is My Stuff{enter}");
    };
};
export const customerServicePage = new CustomerServicePage();