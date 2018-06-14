const assert = require('assert');
const home = require('../pages/home');
const path = require('path');

var formatDate = function (date) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hour = (hour < 10 ? "0" : "") + hour;
    min = (min < 10 ? "0" : "") + min;
    sec = (sec < 10 ? "0" : "") + sec;

    var newDate = parseInt(day);

    if (day == '01' || day == '21' || day == '31') {
        day = day + "st";
    }
    else if (day == '02' || day == "22") {
        day = day + "nd";
    }
    else if (day == '03' || day == "23") {
        day = day + "rd";
    }
    else if ((newDate >= '04' && newDate <= '20') || (newDate >= '24' && newDate <= '30')) {
        day = day + "th";
    }
    var str = days[date.getDay()] + " " + day + " " + months[date.getMonth()] + " " + date.getFullYear() + " " + hour + ":" + min;
};

module.exports = {

    uploadCSV: function () {
        var toUpload = path.join(__dirname, '..', 'TestFile', 'POCA25TESTDATA.csv');
        browser.chooseFile('input[name=importFile]', toUpload);
    },

    checkImportedData: function () {
        var currentdate = new Date();
        var todayDate = formatDate(currentdate);
        browser.waitForText('#main-notification-message', 'Import file has been uploaded successfully. File processing is pending.');
        // browser.url(browser.getUrl());
        // browser.waitForVisible('//tbody', 10000);
        // browser.pause(10000);
        // var displayedDate = browser.getText(".//*[@id='main-site-section']/div/div/div[2]/section/div[2]/table/tbody/tr[1]/td[1]");
        // assert.equal(displayedDate,todayDate);
    }
};