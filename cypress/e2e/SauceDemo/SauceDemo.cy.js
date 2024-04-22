describe('Sauce Demo', () => {
    it('User Journey - Item Purchase', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.location('protocol').should('eq','https:')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.contains('Products').should('be.visible')


        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="title"]').should('be.visible')
        cy.get('[data-test="checkout"]').click()


        cy.get('[data-test="firstName"]').type('Dame')
        cy.get('[data-test="lastName"]').type('Dash')
        cy.get('[data-test="postalCode"]').type('1098')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="title"]').should('be.visible')
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="title"]').should('be.visible')
        cy.get('[data-test="back-to-products"]').click()


    })

})