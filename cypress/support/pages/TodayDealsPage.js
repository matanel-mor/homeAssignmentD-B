import { HomePage } from "./HomePage";

export class TodayDealsPage extends HomePage {
    deals() {
        return cy.get('[data-testid="grid-deals-container"] > div');
    };
    selectedDealOptions() {
        return cy.get('li.a-list-normal');
    };
    addToCartBTN() {
        return cy.get('#add-to-cart-button');
    };

    add2ItemsToCart() {
        for (let i = 0; i < 2; i++) {
            this.clickOnTodayDealsBTN()
            todayDealsPage.deals().first().click()
            todayDealsPage.selectedDealOptions().eq(i).click()
            todayDealsPage.addToCartBTN().click()
        }
    };
    filterByAmazonDevices() {
        cy.contains("Amazon Devices").click()
    };
    clearFilters() {
        cy.get('[aria-label="Clear departments filter"]').click()
        cy.get('div> div[class *= "CheckboxFilter"] > div > label > input[type="checkbox"]').first().should('not.be.checked')
    }
};
export const todayDealsPage = new TodayDealsPage();