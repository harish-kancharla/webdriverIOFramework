'use strict';

const assert = require('assert');

module.exports = function () {

    this.When(/^they click on Add New User button$/, function () {
        browser.click('#add-new-user-button-1');
    });

    this.Then(/^they should be redirected to Add New User page$/, function () {
        browser.waitForExist('h1=Add New User');
    });

    this.When(/^they add the personal details of the user$/, function () {
        browser.setValue('#UAEmail', 'testme@dwp.gsi.gov.uk');
        browser.setValue('#UAName', 'testme');
        browser.setValue('#UAPassword', 'Password.123!');
        browser.setValue('#UAPasswordConfirm', 'Password.123!');
        browser.setValue('#UAYubiKey', 'b');
    });

    this.When(/^they click on the Save button$/, function () {
        browser.click('#userAdminSaveButton');
    });
};
