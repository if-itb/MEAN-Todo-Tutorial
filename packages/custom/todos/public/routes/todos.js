'use strict';

angular.module('mean.todos').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('todos page', {
      url: '/todos',
      templateUrl: 'todos/views/index.html'
    });
  }
]);
