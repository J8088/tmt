'use strict';

var fs = require('fs');
var products = require('../../business-logic/product');
var productImages = require('../../business-logic/productImg');
var _ = require('lodash');


module.exports.get = function (req, res) {
  products.get(function (err, data) {
    res.send(200, _.merge({}, {items: data.result}));
    res.end();
  });
};

module.exports.add = function(req, res){
  req.body.price = +req.body.price;
  products.add(req.body, function (err, data) {
    res.status(200).send(_.merge({}, {items: data.result}));
    res.end();
  });
};

module.exports.delete = function(req, res){
  products.remove(req.body, function (err, data) {
    res.status(200).send(_.merge({}, {items: data.result}));
    res.end();
  });
};

module.exports.addImg = function(req, res){
  productImages.add(req.body, function (err, data) {
    res.status(200).send(data.result);
    res.end();
  });
};

module.exports.getImgById = function(req, res){
  productImages.getById(req.body.id, function (err, data) {
    res.status(200).send(data.result);
    res.end();
  });
};

module.exports.getImg = function (req, res) {
  var img = fs.readFileSync('/Users/igoryarmak/Documents/ij/m.jpg');
  res.writeHead(200, {'Content-Type': 'image/gif'});
  res.end(img, 'binary');
};

module.exports.deleteImg = function(req, res){
  productImages.remove(req.body.id, function (err, data) {
    res.status(200).send(data.result);
    res.end();
  });
};
