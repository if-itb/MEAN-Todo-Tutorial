'use strict';

var todos = require('../controllers/todos');

// The Package is past automatically as first parameter
module.exports = function(Todos, app, auth, database) {

  app.route('/todos')
    .get(todos.all)
    .post(todos.create);
  app.route('/todos/:todoId')
    .get(todos.show)
    .put(todos.update)
    .delete(todos.destroy);

  // Finish with setting up the todoId param
  app.param('todoId', todos.todo);
};
