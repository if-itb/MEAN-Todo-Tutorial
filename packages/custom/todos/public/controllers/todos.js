'use strict';

angular.module('mean.todos').controller('TodosController', ['$scope', '$stateParams', '$location', 'Global', 'Todos',
  function($scope, $stateParams, $location, Global, Todos) {
    $scope.global = Global;
    $scope.create = function(isValid) {
      if (isValid) {
        console.log(this.stuff);
        var todo = new Todos({
          stuff: this.stuff,
          active: false
        });
        todo.$save(function(response) {
          $scope.todos.unshift(todo);
        });
        this.stuff = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(todo) {
      if (todo) {
        todo.$remove();

        for (var i in $scope.todos) {
          if ($scope.todos[i] === todo) {
            $scope.todos.splice(i, 1);
          }
        }
      } else {
        $scope.todo.$remove(function(response) {
          $location.path('todos');
        });
      }
    };

    $scope.find = function() {
      Todos.query(function(todos) {
        console.log(todos);
        $scope.todos = todos;
      });
    };

    $scope.updateStatus = function(id, status) {
      Todos.get({todoId: id}, function (todo) {
        todo.status = status;
        todo.$update();
      });
    };
  }
]);
