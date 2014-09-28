'use strict';

angular.module('mean.todos').controller('TodosController', ['$scope', 'Global', 'Todos',
  function($scope, Global, Todos) {
    $scope.global = Global;
    $scope.package = {
      name: 'todos'
    };
  }
]);
