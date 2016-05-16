'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AddressCtrl
 * @description
 * # AddressCtrl
 * Controller of the yoApp
 */
module.exports = function ($scope, $stateParams, $state, addressService, SALUTATIONS) {
    // add to init
    $scope.address = {};
    $scope.salutations = SALUTATIONS;
    $scope.addressFormData = {}
    $scope.addressFormData.title = $scope.salutations[0];
    $scope.addressFormData.country = 'UK';
    //$scope.address.

    // Change to findAll
    $scope.findAddresses = function () {
        addressService.findAll().success(function (data) {
            $scope.addresses = data;
        });
    };

    $scope.findAddress = function (addressId) {
        var addressId = addressId || $stateParams.addressId;
        addressService.find(addressId).success(function (data) {
            $scope.address = data;
        })
    };

    $scope.createAddress = function () {
        var address = angular.copy($scope.addressFormData);
        console.log('createiung address with', address);
        
        addressService.create(address)
            .success(function () {
                // TODO add flash message
                $state.go('account.addressbook');
            })
            .error(function (data) {
                // TODO display server error
                console.log('error', data.error);
                console.log('field errors', data.fieldErrors);
            });
    };

    $scope.updateAddress = function () {
        
        // TODO validate

        var updatedAddress = angular.copy($scope.address);

        addressService.update(angular.copy($scope.address))
            .success(function () {
                // TODO add flash message
                $state.go('account.addressbook');
            })
            .error(function () {
                // TODO display server error
                console.log('error');
            });
    };

    $scope.deleteAddress = function (addressId) {
        addressService.destroy(addressId)
            .success(function () {
                // TODO add flash message
                $state.go('account.addressbook');
            })
            .error(function () {
                // TODO display server error
                console.log('error');
            });
    };
};
