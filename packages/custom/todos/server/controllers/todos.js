'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Todo = mongoose.model('Todo'),
  _ = require('lodash');


/**
 * Find todo by id
 */
exports.todo = function(req, res, next, id) {
  Todo.load(id, function(err, todo) {
    if (err) return next(err);
    if (!todo) return next(new Error('Failed to load todo ' + id));
    req.todo = todo;
    next();
  });
};

/**
 * Create an todo
 */
exports.create = function(req, res) {
  var todo = new Todo(req.body);

  todo.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot save the todo'
      });
    }
    res.json(todo);

  });
};

/**
 * Update an todo
 */
exports.update = function(req, res) {
  var todo = req.todo;

  todo = _.extend(todo, req.body);

  todo.save(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot update the todo'
      });
    }
    res.json(todo);

  });
};

/**
 * Delete an todo
 */
exports.destroy = function(req, res) {
  var todo = req.todo;

  todo.remove(function(err) {
    if (err) {
      return res.json(500, {
        error: 'Cannot delete the todo'
      });
    }
    res.json(todo);

  });
};

/**
 * Show an todo
 */
exports.show = function(req, res) {
  res.json(req.todo);
};

/**
 * List of Todos
 */
exports.all = function(req, res) {
  Todo.find().exec(function(err, todos) {
    if (err) {
      return res.json(500, {
        error: 'Cannot list the todos'
      });
    }
    res.json(todos);

  });
};
