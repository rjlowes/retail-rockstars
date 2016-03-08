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
