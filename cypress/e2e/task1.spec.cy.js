import { customerServicePage } from "../support/pages/CustomerServicePage";
import { homePage } from "../support/pages/HomePage";

describe("first task", () => {
    before(() => {
        cy.visit('/');
        cy.changeLanguage();
    });
    it("customer service help", () => {
        homePage.clickOnHamburgerMenu();
        homePage.clickOnCustomerServiceBTN();
        customerServicePage.typeToHelpInputField();
    });
});