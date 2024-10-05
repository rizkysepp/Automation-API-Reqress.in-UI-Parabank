require ('cypress-xpath')

describe('Visit to Website Parabank', ()=> {
    it('Login with account credentials', ()=> {

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.wait(3000)
        cy.url()
        .should('include','/parabank')

        //Try to Login with credentials : adminQu but failed because username and password could not be verified
        cy.xpath('//h2[text()="Customer Login"]')
        .should('have.text','Customer Login')
        cy.xpath('//input[@class="input" and @name="username"]')
        .type('adminQu')
        .should('have.value','adminQu')
        cy.xpath('//input[@class="input" and @name="password"]')
        .type('adminQu')
        .should('have.value','adminQu')
        cy.xpath('//input[@type="submit" and @class="button"]')
        .should('be.enabled')
        .click()

    /*
        //Try Create New account

        cy.xpath('//a[text()="Register"]')
        .should('be.visible')
        .click()
        cy.url()
        .should('include','/register')

        cy.xpath('//b[text()="First Name:"]').then(($text) => {
            expect($text).to.have.text('First Name:');
        })
            cy.xpath('//input[@id="customer.firstName"]')
            .should('be.visible')
            .type('David')
            .should('have.value','David')

        cy.xpath('//b[text()="Last Name:"]').then(($text) => {
            expect($text).to.have.text('Last Name:');
        })
            cy.xpath('//input[@id="customer.lastName"]')
            .should('be.visible')
            .type('Washington')
            .should('have.value','Washington')

        cy.xpath('//b[text()="Address:"]').then(($text) => {
            expect($text).to.have.text('Address:');
        })
            cy.xpath('//input[@id="customer.address.street"]')
            .should('be.visible')
            .type('Melati Street')
            .should('have.value','Melati Street')

        cy.xpath('//b[text()="City:"]').then(($text) => {
            expect($text).to.have.text('City:');
        })
            cy.xpath('//input[@id="customer.address.city"]')
            .should('be.visible')
            .type('Jakarta')
            .should('have.value','Jakarta')

        cy.xpath('//b[text()="State:"]').then(($text) => {
            expect($text).to.have.text('State:');
        })
            cy.xpath('//input[@id="customer.address.state"]')
            .should('be.visible')
            .type('Indonesia')
            .should('have.value','Indonesia')

        cy.xpath('//b[text()="Zip Code:"]').then(($text) => {
            expect($text).to.have.text('Zip Code:');
        })
            cy.xpath('//input[@id="customer.address.zipCode"]')
            .should('be.visible')
            .type('19680')
            .should('have.value','19680')

        cy.xpath('//b[text()="Phone #:"]').then(($text) => {
            expect($text).to.have.text('Phone #:');
        })
            cy.xpath('//input[@id="customer.phoneNumber"]')
            .should('be.visible')
            .type('0812345678')
            .should('have.value','0812345678')

        cy.xpath('//b[text()="SSN:"]').then(($text) => {
            expect($text).to.have.text('SSN:');
        })
            cy.xpath('//input[@id="customer.ssn"]')
            .should('be.visible')
            .type('-')
            .should('have.value','-')

        cy.xpath('//b[text()="Username:"]').then(($text) => {
            expect($text).to.have.text('Username:');
        })
            cy.xpath('//input[@id="customer.username"]')
            .should('be.visible')
            .type('adminQu')
            .should('have.value','adminKu')

        cy.xpath('//b[text()="Password:"]').then(($text) => {
            expect($text).to.have.text('Password:');
        })
            cy.xpath('//input[@id="customer.password"]')
            .should('be.visible')
            .type('adminQu')
            .should('have.value','adminKu')

        cy.xpath('//b[text()="Confirm:"]').then(($text) => {
            expect($text).to.have.text('Confirm:');
        })
            cy.xpath('//input[@id="repeatedPassword"]')
            .should('be.visible')
            .type('adminQu')
            .should('have.value','adminKu')

        cy.xpath('//input[@type="submit" and @class="button" and @value="Register"]')
        .should('be.enabled')
        .click()
        cy.wait(2000)
        cy.xpath('//p[text()="Your account was created successfully. You are now logged in."]')
        .should('have.text','Your account was created successfully. You are now logged in.')
        */

        //Select Account Overview

        cy.xpath('//a[text()="Accounts Overview"]')
        .should('be.visible')
        .click()
        cy.url()
        .should('include','/overview')
        cy.xpath('//a[@href="activity.htm?id=26109"]')
        .should('be.visible')
        .click()
    })
})