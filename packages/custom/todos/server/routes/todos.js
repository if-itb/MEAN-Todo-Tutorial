'use strict';

// The Package is past automatically as first parameter
module.exports = function(Todos, app, auth, database) {

  app.get('/todos/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/todos/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/todos/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/todos/example/render', function(req, res, next) {
    Todos.render('index', {
      package: 'todos'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
