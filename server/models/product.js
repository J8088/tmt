var mongoose = require('../lib/mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  categories: {
    type: []
  },
  imgUrl: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});


exports.Product = mongoose.model('Product', schema);