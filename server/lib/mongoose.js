'use strict';

var mongoose = require('mongoose');
var config = require('../config/env');
var async = require('async');
var _ = require('lodash');

// var Product = require('../models/product').Product;


mongoose.set('debug', true);


mongoose.connect(config.db);
_.merge(mongoose, {executeQuery: process, executeQueryLocal: processLocal});

module.exports = mongoose;

function process(handler, callback){
  callback = callback || function () {};

  async.series({
    'result': handler
  }, function (err, result) {
    callback(err, result);
  });
}


function processLocal(handler, callback){
  callback = callback || function () {};

  async.series({
    'opened':open,
    'result': handler,
    'closed': close
  }, function (err, result) {
    callback(err, result);
  });
}

function open(callback) {
  console.log('####open');
  mongoose.connection.on('open', callback);
}

function close(callback) {
  console.log('####close');
  mongoose.disconnect(callback);
}