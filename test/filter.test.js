'use strict';

const expect = require('expect.js');
const kitx = require('kitx');

const client = require('./common');
const OTS = require('../');

describe('row', function () {

  it('makeFilter should ok', function* () {
    var filter = OTS.makeFilter('type == @type1 false OR type == @type2 false', {
      type1: 1,
      type2: 2
    });
  });

});
