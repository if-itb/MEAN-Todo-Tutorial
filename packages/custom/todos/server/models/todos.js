'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Todo Schema
 */
var TodoSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  stuff: {
    type: String,
    required: true,
    trim: true
  },
  status: Boolean
});

/**
 * Validations
 */
TodoSchema.path('stuff').validate(function(stuff) {
  return !!stuff;
}, 'Stuff cannot be blank');

/**
 * Statics
 */
TodoSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).exec(cb);
};

mongoose.model('Todo', TodoSchema);
