console.log('loaded frontend app');

var frontend_app = angular.module('employees',[]);
frontend_app.controller('data_employees', do_data_employees)