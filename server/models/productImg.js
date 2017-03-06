var mongoose = require('../lib/mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
  img: {
    type: Buffer
  },
  contentType: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

exports.ProductImg = mongoose.model('ProductImg', schema);

