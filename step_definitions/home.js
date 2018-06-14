'use strict';

const assert = require('assert');
const home = require('../pages/home');

module.exports = function () {

    this.Given(/^(they|the user) should be on the (.*) page$/, function (negate,page) {
        browser.waitForExist(`h1=${page}`);
    });

    this.When(/^they Click the (.*) on the menu$/, function (item) {
        home.clickMenu(item);
    });

    this.Then(/^they will be navigated to the (.*) page$/, function (corresponding) {
        browser.waitForExist(`h1=${corresponding}`);
    });

    this.Then(/^they click on browser back button$/, function () {
        browser.back();
    });

};
