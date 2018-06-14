'use strict';

const assert = require('assert');

module.exports = function () {

    this.When(/^they select Bi-lingual postcodes from lookup dropdown$/, function () {
        browser.waitForVisible('select[name=lookupType]');
        browser.selectByVisibleText('select[name=lookupType]', 'Bi-lingual Postcodes');
    });

    this.Then(/^click on the browse button to select postcode file$/, function () {
        browser.click('#lookup-file');
        browser.chooseFile('input[name=lookupFile]', '/users/harish.kancharla/Downloads/postcode.csv');
    });

    this.When(/^they click on the Upload button$/, function () {
        browser.waitForEnabled('#lookupFileSubmit');
        browser.click('#lookupFileSubmit');
    });

    this.Then(/^the file should be uploaded successfully$/, function () {
        browser.waitForText('#main-notification-message', 'Your file has been uploaded successfully.');
        browser.waitForVisible('//tbody', 10000);
        var lookupName = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/section[2]/table/tbody/tr[1]/td[1]");
        assert.equal(lookupName,"Bi-lingual Postcodes");
        var updatedBy = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/section[2]/table/tbody/tr[1]/td[3]");
        assert.equal(updatedBy,"Test seventeen admin");
        var fileName = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/section[2]/table/tbody/tr[1]/td[4]");
        assert.equal(fileName,"postcode.csv");
    });

};
