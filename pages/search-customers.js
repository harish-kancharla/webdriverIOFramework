const assert = require('assert');
var searchedNino = '';

var generateRandomString = function (len, charSet) {
    var randomString = '';
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
};
var generateNino = function () {
    searchedNino = generateRandomString(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') + generateRandomString(6, '0123456789');
    return searchedNino;
};

module.exports = {
    searchNino: function () {
        browser.setValue('#NINO', generateNino());
    },

    ninoNotFound: function () {
        browser.waitForText('.ng-scope', 'Please check NINO. This customer does not exist on the application. Would you like to add this customer?');
        browser.isExisting('=Add New Customer Record');
    },
    addCustomerPersonalInfo: function () {
        var displayedNino = browser.getValue('#nino');
        assert.equal(searchedNino, displayedNino);
        browser.setValue('#dob', '01/01/2000');
        browser.setValue('#firstName', 'bujji');
        browser.setValue('#surname', 't');
    },

    addCustomerBenefitDetails: function () {
        browser.waitForVisible(`select[name="benefitName${0}"]`);
        browser.selectByVisibleText(`select[name="benefitName${0}"]`, 'Attendance Allowance');
        browser.waitForVisible(`select[name="benefitOutcome${0}"]`);
        browser.selectByVisibleText(`select[name="benefitOutcome${0}"]`, 'Converted');
        browser.waitForVisible(`select[name="revisedMop${0}"]`);
        browser.selectByVisibleText(`select[name="revisedMop${0}"]`, 'Building Society');
    },
    addCustomerContactDetails: function () {
        browser.waitForVisible('select[name=ContactCategory]');
        browser.selectByVisibleText('select[name=ContactCategory]','Inbound');
        browser.waitForVisible('select[name=ContactEvent]');
        browser.selectByVisibleText('select[name=ContactEvent]','Inbound Call');
    },
    tickSpecialMarkers: function () {
        browser.waitForVisible('#largeprint');
        browser.click('#largeprint');
        browser.waitForVisible('#DLO');
        browser.click('#DLO');
        browser.waitForVisible('#audiocd');
        browser.click('#audiocd');
    }

};
