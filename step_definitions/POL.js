'use strict';

const assert = require('assert');
const home = require('../pages/home');

module.exports = function () {

    this.Given(/^user clicks on POL Export on the menu$/, function () {
        browser.pause(2000);
        browser.click('#pocaMainMenuItem_genericExport');
    });

    this.When(/^they enter a valid nino which is in application and click on Search$/, function () {
        browser.pause(2000);
        browser.waitForVisible('#NINO');
        browser.setValue('#NINO', "hk000001");
        browser.click('#search-records-button');
    });

    this.When(/^they click on benefits tab and update the benefits outcome to converted revised mop to bank$/, function () {
        browser.waitForVisible('a=Benefits');
        browser.click('=Benefits');
        browser.waitForVisible(`select[name="benefitOutcome${0}"]`);
        browser.selectByVisibleText(`select[name="benefitOutcome${0}"]`, 'Converted');
        browser.waitForVisible(`select[name="revisedMop${0}"]`);
        browser.selectByVisibleText(`select[name="revisedMop${0}"]`, 'Bank');
        browser.click('#benefitModalSave');
    });

    this.When(/^they click on benefits tab and update the benefits outcome to reverted$/, function () {
        browser.waitForVisible('a=Benefits');
        browser.click('a=Benefits');
        browser.waitForVisible(`select[name="benefitOutcome${0}"]`);
        browser.selectByVisibleText(`select[name="benefitOutcome${0}"]`, 'Reverted');
        browser.click('#benefitModalSave');
    });

    this.When(/^click on Create button to generate a file for POL$/, function (item) {
        browser.waitForVisible('#createButton');
        browser.click("#createButton");
    });

    this.When(/^click Reversion tab and click Create button to generate a file for POL$/, function (item) {
        browser.pause(2000);
        browser.waitForVisible('a=Reversion');
        browser.click('a=Reversion');
        browser.waitForVisible('#createButton');
        browser.click("#createButton");
   });

    this.When(/^they come back to the page they can download the file and confirm$/, function () {
        browser.pause(10000);
        browser.url(browser.getUrl());
        browser.waitForVisible('.//table');
        var statusCreated = browser.getText(".//*[@id='export-data-area']/table/tbody/tr[1]/td[6]");
        assert.equal(statusCreated,"Created", `status is not created - ${statusCreated}`);
        browser.pause(5000);
        browser.url(browser.getUrl());
        browser.waitForVisible('#exportDataDownloadButton_0');
        browser.click('#exportDataDownloadButton_0');
        browser.pause(10000);
        browser.url(browser.getUrl());
        browser.pause(10000);
        var statusDownloaded = browser.getText(".//*[@id='export-data-area']/table/tbody/tr[1]/td[6]");
        assert.equal(statusDownloaded,"Downloaded");
        browser.click('#exportDataConfirmButton_0');
    });

    this.Then(/^the status of the file should be changed to confirmed$/, function () {
        browser.pause(10000);
        browser.url(browser.getUrl());
        browser.pause(10000);
        var statusConfirmed = browser.getText(".//*[@id='export-data-area']/table/tbody/tr[1]/td[6]");
        assert.equal(statusConfirmed,"Confirmed");
    });

};
