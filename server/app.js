'use strict';

var express = require('express');
var app = express();

require('./config/server')(app);
require('./config/express')(app);
require('./routes')(app);


// Expose app
module.exports = app;
