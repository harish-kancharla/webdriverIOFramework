'use strict';

const assert = require('assert');
const home = require('../pages/home');

module.exports = function () {

    this.Given(/^user clicks on Cleansing on the menu$/, function () {
        browser.pause(2000);
        browser.click('#pocaMainMenuItem_cleansing');
    });

    this.Given(/^click on the Cleanse button$/, function () {
        browser.pause(2000);
        browser.click('#cleanseBtn');
    });

    this.When(/^they should see the customer details page with warning message$/, function () {
        browser.waitForExist('h1*=Customer Details');
        //var warningMsg = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/create-new-record-menu/div/create-new-record-customer/article/div/div/b/span");
        //assert.equal(warningMsg,"Warning: The following record fields have missing or invalid data. This will prevent letters being issued");
    });

    this.When(/^they update the postcode in the personal information field$/, function () {
        browser.waitForVisible('#postcode');
        browser.setValue('#postcode', 'NE7 7TL');
    });

    this.When(/^they clicks on save button/, function () {
        browser.waitForVisible('#createNewCustomerSubmitButton');
        browser.click('#createNewCustomerSubmitButton');
    });
};