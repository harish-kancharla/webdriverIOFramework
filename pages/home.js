module.exports = {

    clickMenu: function (item) {
        browser.isExisting(`=${item}`);
        browser.waitForVisible(`=${item}`);
        browser.click(`=${item}`);
    }
};
