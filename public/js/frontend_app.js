console.log('loaded frontend app');

var frontend_app = angular.module('employees',['ngRoute']);

frontend_app.config(routes_function);
frontend_app.controller('data_employees', do_data_employees);
frontend_app.controller('frontend_app.controller('data_employees', do_data_employees);
', do_data_employees);

function routes_function($routeProvider) {
    console.log('doing routes stuff');
    $routeProvider
    .when("/", {
        templateUrl : "partials/all.html",
        controller : "data_employees"        
    })
    .when("/single", {
        templateUrl : "partials/single.htm'",
        controller : "single_controller"
    });
}

function do_data_employees($scope, $http) {
    console.log('getting employees');
    $http.get('/api/v7/read').then(function (server_object) {
        console.log(server_object);
        $scope.employees = server_object.data;
    });
}

