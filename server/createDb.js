'use strict';

var mongoose = require('./lib/mongoose');
var async = require('async');
var Product = require('./models/product').Product;

mongoose.set('debug', true);

async.series([
  open,
  dropDatabase,
  createProducts,
  close
], function(err, result){
  console.log(arguments);
});

function open(callback){
  mongoose.connection.on('open', callback);
}

function dropDatabase(callback){
  var db = mongoose.connection.db;
  db.dropDatabase(callback);
}

function createProducts(callback){

  var products = [
    {
      price: 220.00,
      descriptrion: 'Modernized Right Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    },
    {price: 220.00, descriptrion: 'Привет Foliomania the designer portfolio brochure', imgUrl: '/a/products/image'},
    {
      price: 220.00,
      descriptrion: 'Modernized Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    },
    {
      price: 220.00,
      descriptrion: 'Modernized Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    },
    {
      price: 220.00,
      descriptrion: 'Modernized Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    },
    {
      price: 220.00,
      descriptrion: 'Modernized Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    },
    {
      price: 220.00,
      descriptrion: 'Modernized Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    },
    {
      price: 220.00,
      descriptrion: 'Modernized Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    },
    {
      price: 220.00,
      descriptrion: 'Modernized Foliomania the designer portfolio brochure',
      imgUrl: '/a/products/image'
    }
  ];

  async.each(products, function (product, callback) {
    var product = new mongoose.models.Product(product);
    product.save(function (err, product) {
      console.log(arguments);
    });
  }, callback);
}

function close(callback){
  mongoose.disconnect(callback);
}

