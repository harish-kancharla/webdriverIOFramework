'use strict';

const assert = require('assert');
const home = require('../pages/home');

module.exports = function () {

    this.When(/^they select Invitation Letter for the letter type$/, function () {
        browser.waitForVisible('input[name=exportType]');
        browser.click('input[name=exportType]');
    });

    this.When(/^selects Main for the customer type$/, function () {
        browser.waitForVisible(".//*[@id='form-views']/div/div[1]/fieldset/div/label[2]/input");
        browser.click(".//*[@id='form-views']/div/div[1]/fieldset/div/label[2]/input");
    });

    this.When(/^selects Auto for the customer type$/, function () {
        browser.waitForVisible(".//*[@id='form-views']/div/div[1]/fieldset/div/label[1]/input");
        browser.click(".//*[@id='form-views']/div/div[1]/fieldset/div/label[1]/input");
    });

    this.When(/^selects No letter issued for the Audience Type$/, function () {
        browser.waitForVisible('#audienceTypes_1');
        browser.click('#audienceTypes_1');
    });

    this.When(/^they click on Search button$/, function () {
        browser.waitForVisible('#send-bulk-letters-search-button');
        browser.click('#send-bulk-letters-search-button');
    });

    this.Then(/^they should be redirected to Send Letters page$/, function () {
        browser.waitForExist('h1*=Send Letters');
        browser.pause(15000);
    });

    this.When(/^they provide number of letters and letter type$/, function () {
        browser.waitForVisible('#BulkLettersToSend');
        browser.setValue('#BulkLettersToSend', '1');
        browser.waitForVisible('select[name=BulkLettersToSendLetter]');
        browser.selectByVisibleText('select[name=BulkLettersToSendLetter]',"Letter Type 1");
    });

    this.When(/^click on Send Letters button$/, function () {
        browser.waitForEnabled('#sendBulkLettersSubmitButton');
        browser.click('#sendBulkLettersSubmitButton');
    });

    this.Then(/^they should see the success message on the screen:(.*)$/, function (msg) {
        browser.waitForText('#main-notification-message', msg);
    });

    this.Then(/^they should see the message on the screen:(.*)$/, function (msg) {
        browser.waitForText('#main-notification-message', msg);
    });

    this.Then(/^the customer record should appear on the table with download option$/, function () {
        browser.pause(10000);
        browser.url(browser.getUrl());
        browser.waitForVisible('//tbody', 10000);
        var statusCreated = browser.getText(".//*[@id='export-data-area']/table/tbody/tr[1]/td[6]/span");
        assert.equal(statusCreated,"Created");
    });

    this.When(/^the user downloaded the file the status of the file should be downloaded$/, function () {
        browser.click(".//*[@id='exportDataDownloadButton_0']");
        browser.pause(10000);
        browser.url(browser.getUrl());
        browser.waitForVisible('//tbody', 10000);
        var statusDownload = browser.getText(".//*[@id='export-data-area']/table/tbody/tr[1]/td[6]/span");
        assert.equal(statusDownload,"Downloaded");
    });

    this.Then(/^the user clicks on the confirmation button the message should be displayed on the page and the status of the file should be confirmed$/, function () {
        browser.click(".//*[@id='exportDataConfirmButton_0']")
        browser.waitForText('#main-notification-message', "Confirmed 10 letters were sent. Records have been BF'd where appropriate");
        browser.pause(10000);
        browser.url(browser.getUrl());
        browser.waitForVisible('//tbody', 10000);
        var statusConfirm = browser.getText(".//*[@id='export-data-area']/table/tbody/tr[1]/td[6]/span");
        assert.equal(statusConfirm,"Confirmed");
    });

    this.Then(/^the user clicks on the confirmation button$/, function () {
        browser.click(".//*[@id='exportDataConfirmButton_0']");
        browser.pause(10000);
        browser.url(browser.getUrl());
    });

};
