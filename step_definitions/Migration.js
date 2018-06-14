'use strict';

const assert = require('assert');

module.exports = function () {

    this.When(/^they click on browse button and select clerical file$/, function () {
        browser.click('#findMigrationFileButton');
        browser.chooseFile('input[name=migrationFile]', '/users/harish.kancharla/Downloads/clerical-file-valid-windows50.csv');
    });

    this.Then(/^click on the Check File button to import$/, function () {
        browser.waitForEnabled('#migrationFileSubmit');
        browser.click('#migrationFileSubmit');
    });

    this.Then(/^the file details should appear on the page$/, function () {
        browser.waitForText('#main-notification-message', 'Your file has been uploaded successfully.');
        browser.waitForVisible('//tbody', 10000);
        var displayFileName = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/div/table/tbody/tr/td[2]/span");
        assert.equal(displayFileName,"clerical-file-valid-windows50.csv");
        var successCheck = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/div/table/tbody/tr/td[4]/span");
        browser.waitForVisible('//tbody', 10000);
        browser.url(browser.getUrl());
        assert.equal(successCheck,"success");
        browser.waitForExist(".//*[@id='main-site-section']/div/div/div[2]/div/table/tbody/tr/td[7]/button");
    });

    this.When(/^they click on the Import File button$/, function () {
        browser.click(".//*[@id='main-site-section']/div/div/div[2]/div/table/tbody/tr/td[7]/button");
    });

    this.Then(/^the file should be imported$/, function () {
        browser.pause(5000);
        browser.waitForVisible('//tbody', 10000);
        var importCheck = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/div/table/tbody/tr/td[7]/span");
        assert.equal(importCheck,"Imported");
    });

    this.Then(/^the file should appear on the import log$/, function () {
        browser.waitForVisible('//tbody', 10000);
        var fileName = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/import-data/article/div/div/div[2]/table/tbody/tr[2]/td[2]/span");
        assert.equal(fileName,"clerical-file-valid-windows.csv");
        var status = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/import-data/article/div/div/div[2]/table/tbody/tr[2]/td[3]/span");
        assert.equal(status,"Complete");
    });

};
