/**
 * Created by miche on 5-8-2017.
 */
angular.module('todoService', [])
    .factory('Todos', ['$http',function($http) {
        return {
            get : function() {
                return $http.get('/api/todos');
            },
            create : function(todoData) {
                return $http.post('/api/todos', todoData);
            },
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            },
            update: function (id, todoData) {
                return $http.put('/api/todos/'+ id, todoData)
            }
        }
    }]);