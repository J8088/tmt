'use strict';

var devConfig = require('./development');
var defConfig = require('./default');
var _ = require('lodash');

module.exports = _.merge(defConfig, devConfig);