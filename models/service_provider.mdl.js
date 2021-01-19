'use strict';
/*jslint node: true */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceProvider = new Schema({
  name: {type: String},
  lowest_price: {type: String},
  rating: {type: String, enum:[1, 2, 3, 4, 5]},
  max_speed: {type: Number},
  description: {type: String},
  contact_number: {type: Number},
  email: {type: Number},
  image: {type: String},
  url: {type: String}
},{ strict: true });

module.exports = mongoose.model('ServiceProvider', ServiceProvider);
