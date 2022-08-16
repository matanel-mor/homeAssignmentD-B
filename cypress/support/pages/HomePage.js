/// <reference types ="Cypress" />
export class HomePage {
    // Selectors
    hamburgerMenu() {
        return cy.get('#nav-hamburger-menu');
    };
    customerServiceBTN() {
        return cy.get('.hmenu-item').contains("Customer Service");
    };
    todayDealsBTN() {
        return cy.contains("Today's Deals");
    };
    goToCartBTN() {
        return cy.get('#nav-cart')
    };

    // Methods
    clickOnHamburgerMenu() {
        this.hamburgerMenu().click();
    };
    clickOnCustomerServiceBTN() {
        this.customerServiceBTN().click();
    };
    clickOnTodayDealsBTN() {
        this.todayDealsBTN().click();
    };
    goToCart() {
        this.goToCartBTN().click()
    };
}
export const homePage = new HomePage();