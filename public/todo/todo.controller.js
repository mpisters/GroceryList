/**
 * Created by miche on 5-8-2017.
 */
angular.module('todoController', [])

    .controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
        $scope.formData = {};
        $scope.loading = true;

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
                        $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.todos = data; // assign our new list of todos
                    });
            }
        };

        $scope.deleteTodo = function(id) {
            $scope.loading = true;

            Todos.delete(id)
            // if successful creation, call our get function to get all the new todos
                .success(function(data) {
                    $scope.loading = false;
                    $scope.todos = data; // assign our new list of todos
                });
        };

        // $scope.updateTodo = function(id){
        //     $scope.loading = true;
        //     Todos.update(id, isBought)
        //     // if successful creation, call our get function to get all the new todos
        //         .success(function(data) {
        //             $scope.loading = false;
        //             $scope.todos = data; // assign our new list of todos
        //         });
        // }
    }]);