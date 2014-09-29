'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Todos = new Module('todos');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Todos.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Todos.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Todos.menus.add({
    title: 'Todo',
    link: 'todos example page',
    menu: 'main'
  });
  
  Todos.aggregateAsset('css', 'todos.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Todos.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Todos.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Todos.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Todos;
});
