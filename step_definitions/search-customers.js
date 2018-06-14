'use strict';

const assert = require('assert');
const Nino = require('../pages/search-customers');

module.exports = function () {

    this.When(/^they enter the nino number that doesn't exist$/, function () {
        Nino.searchNino();
    });

    this.Then(/^it should display the message and a button to add new customer record$/, function () {
        Nino.ninoNotFound();
    });

    this.Then(/^it should be redirected to the (.*) page$/, function (heading) {
        browser.waitForExist(`h1=${heading}`);
    });

    this.When(/^allow the user to add the customer personal information$/, function () {
        Nino.addCustomerPersonalInfo();
    });

    this.When(/^they click on Add New Customer Record button$/, function () {
        browser.waitForVisible('#customer-button');
        browser.click('#customer-button');
    });

    this.When(/^they click on Next section button$/, function () {
        browser.waitForVisible('button[type=submit]');
        browser.click('button[type=submit]');
    });

    this.When(/^they click on Save button$/, function () {
        browser.waitForVisible('button[type=submit]');
        browser.click('button[type=submit]');
    });

    this.Then(/^it should allow the user to add customer benefit details$/, function () {
        Nino.addCustomerBenefitDetails();
    });

    this.Then(/^it should allow the user to add customer contact details$/, function () {
        Nino.addCustomerContactDetails();
    });

    this.Then(/^it should allow the user to tick the customer special markers$/, function () {
        Nino.tickSpecialMarkers();
    });

};
