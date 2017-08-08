/**
 * Created by miche on 5-8-2017.
 */
angular.module('todoController', [])

    .controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
        $scope.formData = {};
        $scope.loading = true;
        $scope.NotEditMode = true;
        $scope.changeToEditMode = function () {
            $scope.NotEditMode = false;
        }


        Todos.get()
            .success(function(data) {
                $scope.todos = data;
                $scope.loading = false;
            });

        $scope.createTodo = function() {

            if ($scope.formData.text != undefined) {
                $scope.loading = true;

                Todos.create($scope.formData)

                    .success(function(data) {
                        $scope.loading = false;
                        $scope.formData = {};
                        $scope.todos = data;
                    });
            }
        };

        $scope.deleteTodo = function(id) {
            $scope.loading = true;

            Todos.delete(id)
                .success(function(data) {
                    $scope.loading = false;
                    $scope.todos = data;
                });
        };

        $scope.updateTodoStatus = function(todo){
            $scope.NotEditMode = true;
            $scope.loading = true;
            Todos.update(todo._id, todo)
                .success(function(data) {
                    $scope.loading = false;
                    $scope.todos = data;
                });
        }

        $scope.updateQuantity =function(todo, isIncreased){
            $scope.loading = true;
            if (isIncreased){
                todo.quantity = todo.quantity + 1;
            } else{
                if(todo.quantity > 1){
                    todo.quantity = todo.quantity - 1;
                } else{
                    window.alert("You are not allowed to decrease the number anymore!");
                }
            }
            Todos.update(todo._id, todo)
                .success(function(data) {
                    $scope.loading = false;
                    $scope.todos = data;
                });
        }

    }]);