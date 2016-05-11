'use strict';

/**
 * @ngdoc function
 * @name rockstars.controller:AccountDetailsCtrl
 * @description
 * # AccountDetailsCtrl
 * Controller of the rockstars
 */
var AccountDetailsCtrl = function ($scope, $http, accountService, SALUTATIONS) {

    $scope.salutations = SALUTATIONS;

    $scope.findCustomer = function () {
        accountService.findCustomer().then(function (data) {
            $scope.customerFormData = data;
        });
    };

    $scope.updateCustomer = function () {
        var customer = angular.copy($scope.customerFormData);

        accountService.updateCustomer(customer).then(function (data) {
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

module.exports = AccountDetailsCtrl;
