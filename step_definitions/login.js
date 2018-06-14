'use strict';

const assert = require('assert');

module.exports = function () {

    this.Given(/^that an Admin or Audit or Team Leader or QA or Agent has opened the POCA system$/, function () {
        browser.url('/');
    });

    this.Given(/^that an Admin or Audit or Team Leader or QA or Agent has Successfully logon$/, function () {
        browser.url('/');
        browser.waitForVisible('#Username');
        browser.setValue('#Username', 'test17.admin@dwp.gsi.gov.uk');
        browser.waitForVisible('#Password');
        browser.setValue('#Password', 'Password.143!!!');
        browser.waitForVisible('#YubiKey');
        browser.setValue('#YubiKey', 'b');
        browser.waitForVisible('#login_form_submit_button');
        browser.click('#login_form_submit_button');
    });

    this.Given(/^they are on the POCA log on screen$/, function () {
        browser.waitForExist('h1=Financial Inclusion Login');
    });

    this.When(/^they enter their username as (.*)$/, function (username) {
        browser.setValue('#Username', username);
    });

    this.Given(/^they enter their password as (.*)$/, function (password) {
        browser.setValue('#Password', password);
    });

    this.Given(/^they enter their YubiKey as (.*)$/, function (yubiKey) {
        browser.setValue('#YubiKey', yubiKey);
    });

    this.Given(/^they click the ‘login’ button$/, function () {
        browser.click('#login_form_submit_button');
    });

    this.Given(/^their password is not a temporary password$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.Given(/^their password is not expired$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.Then(/^they will be navigated to the POCA homepage$/, function () {
        browser.waitForExist('h1=Financial Inclusion Home');
    });

    this.Given(/^the username, password and YubiKey information do not match the user’s stored authentication credentials$/, function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback();
    });

    this.Then(/^an error message will be displayed as (.*)$/, function (errorMessage, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback.pending();
    });
};
