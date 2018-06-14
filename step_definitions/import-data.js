'use strict';

const assert = require('assert');
const fileImport = require('../pages/import-data');

module.exports = function () {

    this.Given(/^provide file name$/, function () {
        browser.setValue('#importName', 'regression');
    });

    this.Given(/^select default customer type$/, function () {
        browser.waitForVisible('select[name=customerTypes]');
        browser.selectByVisibleText('select[name=customerTypes]', 'MAIN');
    });

    this.Given(/^select default customer type as Auto$/, function () {
        browser.waitForVisible('select[name=customerTypes]');
        browser.selectByVisibleText('select[name=customerTypes]', 'AUTO');
    });

    this.When(/^they import a valid csv file$/, function () {
        fileImport.uploadCSV();
    });

    this.Then(/^click on the (.*) button$/, function (button) {
        if (button == 'Search') {
            browser.click('#search-records-button');
        }
        else if (button == 'Import') {
            browser.click('#importFileSubmitButton');
        }
    });

    this.Then(/^they need to refresh the page to view the file progress$/, function () {
        fileImport.checkImportedData();
    });

};
