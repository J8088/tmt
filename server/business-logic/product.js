'use strict';

var mongoose = require('../lib/mongoose');
var _ = require('lodash');
// var async = require('async');
var Product = require('../models/product').Product;

module.exports.add = add;
module.exports.get = get;
module.exports.update = update;
module.exports.getById = getById;
module.exports.remove = remove;
module.exports.getByCategories = getByCategories;

function get(callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(getProducts, callback);

  function getProducts(callback) {
    Product.find({}, callback);
  }
}

function getById(id, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(getProduct, callback);

  function getProduct(callback) {
    Product.findById(id, function (err, result) {
      callback(err, result);
    });
  }
}

function getByCategories(categories, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(getProduct, callback);

  function getProduct(callback) {
    Product.find(
      {
        categories: {$in: categories}
      }).limit(9).exec(function (err, result) {
      callback(err, result);
    });
    // Person.
    // find({
    //   occupation: /host/,
    //   'name.last': 'Ghost',
    //   age: { $gt: 17, $lt: 66 },
    //   likes: { $in: ['vaporizing', 'talking'] }
    // }).
    // limit(10).
    // sort({ occupation: -1 }).
    // select({ name: 1, occupation: 1 }).
    // exec(callback);
  }
}

function add(product, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(saveProduct, callback);

  function saveProduct(callback) {
    new mongoose.models.Product(product).save(function (err, result) {
      callback(err, result);
    });
  }
}

function update(product, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(updateProduct, callback);

  function updateProduct(callback) {
    Product.findById(product._id, function (err, data) {
      if (err) { return callback(err, null); }

      _.merge(data, product);

      data.save(function (err, result) {
        if (err) { return callback(err, null); }
        callback(err, result);
      });
    });
  }
}

function remove(product, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(removeProduct, callback);

  function removeProduct(callback) {
    Product.findById(product._id, function (err, data) {
      if (err) { return callback(err, null); }

      _.merge(data, product);

      data.remove(function (err, result) {
        if (err) { return callback(err, null); }
        callback(err, result);
      });
    });
  }
}


// add({
//   name: 'prod2',
//   price: 229.00,
//   descriptrion: 'Modernized Right Foliomania the designer portfolio brochure',
//   categories: [
//     {name: 'cat5'}
//     // ,
//     // {name: 'cat5'}
//   ],
//   imgUrl: '/a/products/image'
// }, function(err, data){
//   console.log(data.result);
// });

//
// var p = { name: 'prod5',
//   price: 1001.00,
//   description: 'Desc11',
//   categories: [ { name: 'cat1' }, { name: 'cat2' } ],
//   imgUrl: '/a/products/image' };
//
// add(p, function(err, data){
//   console.log(data.result);
// });

// get(function (err, data) {
//   console.log(data.result);
// });
//
// var prod = { _id: '583b0db69d7cba0be1f3f691',
//   price: 280,
//   descriptrion: '280 Modernized Right Foliomania the designer portfolio brochure',
//   imgUrl: '/a/products/image' };
//

// var catArr = [
//     // {name: 'cat8'},
//     {name: 'cat8'}
//   ];

// update(prod, function(err, data){
//   console.log(arguments);
// });

// getById('583aebfdc51fc809bf044ed1', function (err, data) {
//   console.log(data.result);
// });

// remove(prod, function(err, data){
//   console.log(arguments);
// });


// getByCategories(catArr, function(err, data){
//   console.log(data.result);
// });


