'use strict';

const assert = require('assert');
const home = require('../pages/home');

module.exports = function () {

    this.When(/^they navigate to POCA test tools and update the customer NINO with auto convert date$/, function () {
        browser.url('http://pocafe.itsbeta.net/dbtools/');
        browser.waitForExist('h1=POCA Test tools');
        browser.click('=Update Customers');
        browser.setValue('input[name=nino]', 'HD000002');
        browser.selectByVisibleText('select[name=property]','Auto Convert Date');
        browser.setValue('#date-value', '02/08/2017 10:39 PM');
        browser.click('=Update');
    });

    this.When(/^they navigate back to POCA$/, function () {
        browser.url('/');
        browser.waitForVisible('#Username');
        browser.setValue('#Username', 'test17.admin@dwp.gsi.gov.uk');
        browser.waitForVisible('#Password');
        browser.setValue('#Password', 'Password.431!!');
        browser.waitForVisible('#YubiKey');
        browser.setValue('#YubiKey', 'b');
        browser.waitForVisible('#login_form_submit_button');
        browser.click('#login_form_submit_button');
        browser.waitForExist('h1=Financial Inclusion Login');
    });

    this.When(/^they click on Find records button$/, function () {
        browser.click('#autosBtn');
    });


};
