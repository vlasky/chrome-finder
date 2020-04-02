'use strict';
const fs = require('fs');
const findChrome = require('../lib/index');

describe('chrome-finder', function () {

  it('#findChrome()', function () {
    this.timeout(10000);
    const chromePath = findChrome();
    fs.accessSync(chromePath, fs.constants.X_OK);
    console.log(chromePath);
  });

});
