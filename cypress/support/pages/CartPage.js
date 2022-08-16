export class CartPage {
    deleteAllItems() {
        for (let i = 0; i < 1; i++) {
            cy.get('[data-action="quantity"]').first().click();
            cy.get('#quantity_0').click({ force: true });
            cy.wait(5000)
            cy.get('[data-action="delete"]').last().click({ force: true });
        };
    };
};
export const cartPage = new CartPage();