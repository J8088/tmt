var mongoose = require('../lib/mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  added: {
    type: Date,
    default: Date.now
  },
  finished: {
    type: Date,
    default: Date.now
  }
});


exports.Task = mongoose.model('Task', schema);