'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AccountDetailsCtrl
 * @description
 * # AccountDetailsCtrl
 * Controller of the yoApp
 */
module.exports = function ($scope, $http, SALUTATIONS) {

    $scope.salutations = SALUTATIONS;

    $scope.findCustomer = function () {
        $http.get('/api/customer/details').success(function (data) {
            $scope.customerFormData = data;
        });
    };

    $scope.updateCustomer = function () {
        var customer = angular.copy($scope.customerFormData);
        
        $http.put('/api/customer/details', customer).success(function (data) {
            console.log('success, send message to notifier');
        });
    };

    $scope.initEmailForm = function () {
        $scope.emailFormData = {};
    };

    $scope.updateEmail = function () {
        var email = angular.copy($scope.emailFormData);

        $http.put('/api/customer/email', email).success(function (data) {
            console.log('success, send message to notifier');
        });
    };
    


    // $scope.updateEmail = function () {

    // };

    // $scope.updatePassword = function () {

    // };

    // $scope.createAddress = function () {

    // };

    // $scope.updateAddress = function () {

    // };
};

/*
angular.module('yoApp')
    .controller('AccountDetailsCtrl', function ($scope, $http, SALUTATIONS) {

        $scope.salutations = SALUTATIONS;

        $http.get('/api/customer/details').success(function (data) {
            console.log(data);
            $scope.customer = data;
        });


        // $scope.updateCustomer = function () {

        // };

        // $scope.updateEmail = function () {

        // };

        // $scope.updatePassword = function () {

        // };

        // $scope.createAddress = function () {

        // };

        // $scope.updateAddress = function () {

        // };

    });
*/
