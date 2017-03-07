'use strict';

var tasks = require('../../business-logic/task');
var _ = require('lodash');


module.exports.get = function (req, res) {
  tasks.get(function (err, data) {
    if(err){
      res.status(500).send();
    }else {
      res.status(200).send(_.merge({}, {items: data.result}));
    }
    res.end();
  });
};

module.exports.add = function(req, res){
  tasks.add(req.body, function (err, data) {
    console.log('add callback ', data);
    console.log('add callback error ', err);
    if(err){
      res.status(500).send();
    }else{
      res.status(200).send(_.merge({}, {items: data.result}));
    }
    res.end();
  });
};

module.exports.delete = function(req, res){
  tasks.remove(req.body, function (err, data) {
    res.status(200).send(_.merge({}, {items: data.result}));
    res.end();
  });
};
