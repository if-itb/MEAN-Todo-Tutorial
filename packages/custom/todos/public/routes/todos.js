'use strict';

angular.module('mean.todos').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('todos example page', {
      url: '/todos/example',
      templateUrl: 'todos/views/index.html'
    });
  }
]);
