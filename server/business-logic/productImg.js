'use strict';

var mongoose = require('../lib/mongoose');
// var _ = require('lodash');
// var fs = require('fs');
var ProductImg = require('../models/productImg').ProductImg;


module.exports.add = add;
module.exports.getById = getById;
module.exports.remove = remove;


function add(img, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(saveImg, callback);

  function saveImg(callback) {
    new mongoose.models.ProductImg(img).save(function (err, result) {
      callback(err, result);
    });
  }
}


function getById(id, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(getImg, callback);

  function getImg(callback) {
    ProductImg.findById(id, function (err, result) {
      callback(err, result);
    });
  }
}


function remove(id, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(removeImg, callback);

  function removeImg(callback) {
    ProductImg.findById(id, function (err, data) {
      if (err) { return callback(err, null); }

      data.remove(function (err, result) {
        if (err) { return callback(err, null); }
        callback(err, result);
      });
    });
  }
}

// var img = fs.readFileSync('/Users/igoryarmak/Documents/ij/m.jpg');

// add({
//   img: img,
//   contentType: 'image/png'
// }, function(err, data){
//   console.log(data.result);
// });

// getById('583e75d387ad0c3f35119fcd',
//   function (err, data) {
//     console.log(data.result);
//   });


// remove('583e75d387ad0c3f35119fcd',
//   function (err, data) {
//     console.log(data.result);
//   });