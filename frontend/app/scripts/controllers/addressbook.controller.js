'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AddressCtrl
 * @description
 * # AddressCtrl
 * Controller of the yoApp
 */
module.exports = function ($scope, $stateParams, addressService, SALUTATIONS) {
    // add to init
    $scope.addressFormData = {};
    $scope.salutations = SALUTATIONS;

    // Change to findAll
    $scope.findAddresses = function () {
        addressService.findAll().success(function (data) {
            $scope.addresses = data;
        });
    };

    $scope.findAddress = function (addressId) {
        var addressId = addressId || $stateParams.addressId;
        addressService.find(addressId).success(function (data) {
            $scope.addressFormData = data;
        })
    };

    $scope.createAddress = function () {
        console.log($scope.addressForm.$valid);
        //return false;
        addressService.create($scope.addressFormData)
            .success(function () {
                console.log('success');
            })
            .error(function (data) {
                console.log('error', data.error);
                console.log('field errors', data.fieldErrors);
            });
    };

    $scope.updateAddress = function () {
        addressService.update(angular.copy($scope.addressFormData))
            .success(function () {
                console.log('success');
            })
            .error(function () {
                console.log('error');
            });
    };

    $scope.deleteAddress = function (addressId) {
        addressService.destroy(addressId)
            .success(function () {

            })
            .error(function () {
                console.log('error');
            });
    };
};

/*
angular.module('yoApp')
.controller('AddressBookCtrl', function ($scope, $stateParams, addressService, SALUTATIONS) {
    
    // add to init
    $scope.addressFormData = {};
    $scope.salutations = SALUTATIONS;

    // Change to findAll
    $scope.findAddresses = function () {
        addressService.findAll().success(function (data) {
            $scope.addresses = data;
        });
    };

    $scope.findAddress = function (addressId) {
        var addressId = addressId || $stateParams.addressId;
        addressService.find(addressId).success(function (data) {
            $scope.addressFormData = data;
        })
    };

    $scope.createAddress = function () {
        console.log($scope.addressForm.$valid);
        //return false;
        addressService.create($scope.addressFormData)
            .success(function () {
                console.log('success');
            })
            .error(function (data) {
                console.log('error', data.error);
                console.log('field errors', data.fieldErrors);
            });
    };

    $scope.updateAddress = function () {
        addressService.update(angular.copy($scope.addressFormData))
            .success(function () {
                console.log('success');
            })
            .error(function () {
                console.log('error');
            });
    };

    $scope.deleteAddress = function (addressId) {
        addressService.destroy(addressId)
            .success(function () {

            })
            .error(function () {
                console.log('error');
            });
    };

});
*/
