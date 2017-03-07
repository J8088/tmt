'use strict';

var mongoose = require('../lib/mongoose');
var _ = require('lodash');
// var async = require('async');
var Task = require('../models/task').Task;

module.exports.add = add;
module.exports.get = get;
module.exports.update = update;
module.exports.getById = getById;
module.exports.remove = remove;

function get(callback) {
  callback = callback || function () {
    };

  console.log('get mongoose');

  mongoose.executeQuery(getTasks, callback);

  function getTasks(callback) {
    Task.find({}, callback);
  }
}

function getById(id, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(getTask, callback);

  function getTask(callback) {
    Task.findById(id, function (err, result) {
      callback(err, result);
    });
  }
}
//
// mongoose.executeQuery(getTask, callback);
//
// function getTask(callback) {
//   callback = callback || function () {
//     };
//
//   Task.find(
//     {
//       statuses: {$in: statuses}
//     }).limit(9).exec(function (err, result) {
//     callback(err, result);
//   });
// }

function add(task, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(saveTask, callback);

  function saveTask(callback) {
    new mongoose.models.Task(task).save(function (err, result) {
      callback(err, result);
    });
  }
}

function update(task, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(updateTask, callback);

  function updateTask(callback) {
    Task.findById(task._id, function (err, data) {
      if (err) {
        return callback(err, null);
      }

      _.merge(data, task);

      data.save(function (err, result) {
        if (err) {
          return callback(err, null);
        }
        callback(err, result);
      });
    });
  }
}

function remove(task, callback) {
  callback = callback || function () {
    };

  mongoose.executeQuery(removeTask, callback);

  function removeTask(callback) {
    Task.findById(task._id, function (err, data) {
      if (err) {
        return callback(err, null);
      }

      _.merge(data, task);

      data.remove(function (err, result) {
        if (err) {
          return callback(err, null);
        }
        callback(err, result);
      });
    });
  }
}


