/* globals require */
'use strict';

var compression = require('compression');
var express = require('express');
var config = require('./env');
var path = require('path');
var bodyParser = require('body-parser');
var helmet = require('helmet');


module.exports = function (app, db) {

  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  app.set('clientRoot', path.join(config.root, '/client/dist'));

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json({limit: '25mb'}));


  app.use(helmet());

  app.set('showStackError', true);

  app.locals.pretty = true;

  app.locals.cache = 'memory';

  app.use(compression({
    level: 5
  }));

  //for DEVELOP only
  app.use('/bower_components', express.static(path.resolve(__dirname + '/../../client/dist/bower_components')));
  app.use('/', express.static(path.resolve(__dirname + '/../../client/dist')));

  // app.use('/bundle', express.static(config.root + '/bundle'));
};
