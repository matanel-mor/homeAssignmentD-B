import { cartPage } from "../support/pages/CartPage";
import { homePage } from "../support/pages/HomePage";
import { todayDealsPage } from "../support/pages/TodayDealsPage";

describe("Second task", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    });
    beforeEach(() => {
        cy.visit('/');
        cy.changeLanguage();
        // todayDealsPage.add2ItemsToCart();
    });
    it("filters in today's deals page", () => {
        homePage.clickOnTodayDealsBTN()
        todayDealsPage.filterByAmazonDevices()
        todayDealsPage.clearFilters()
    });
    it("changing the scissors color", () => {
        cy.visit('https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z')
        cy.get('[alt="Red, Black, Blue"]').click()
        cy.get('#variation_color_name > div > span').then((el) => {
            expect(el.text()).to.equal("Red, Black, Blue")
        })
    });
    it.only("adding scissors to cart", () => {
        cy.visit('https://www.amazon.com/Scissors-iBayam-Crafting-Scrapbooking-Knitting/dp/B07H3QKN2Z')
        todayDealsPage.addToCartBTN().click()
        cy.wait(5000)
        cy.get('#attach-accessory-pane > div > div.a-section.a-spacing-none.a-padding-base.attach-primary-atc-confirm-box').contains(" Added to Cart")
    });
    // afterEach(() => {
    //     homePage.goToCart();
    //     cartPage.deleteAllItems();
    // });
});