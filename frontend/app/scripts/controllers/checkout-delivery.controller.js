'use strict';

/**
 * @ngdoc controller
 * @name rockstars.controller:DeliveryAddressCtrl
 * @description
 */
module.exports = function ($scope, $state, addressService, basketService, SALUTATIONS) {

    $scope.salutations = SALUTATIONS;
    $scope.selectAddressData = {};
    $scope.addressFormData = {country: 'UK'};
    $scope.addressFormData = {}
    $scope.addressFormData.title = $scope.salutations[0];

    // TODO keep customer data completely synced so we don't need these lookups
    addressService.findAll().success(function (data) {
        $scope.addresses = data;
        $scope.addressFormData.title = SALUTATIONS[0];
        if (data.length > 0) {
            // http://stackoverflow.com/questions/18194255/how-to-have-a-default-option-in-select-box-angular-js#answer-29564802
            $scope.selectAddressData.selectedAddress = $scope.addresses[0];
        }
    });
    
    $scope.selectDeliveryAddress = function () {
        // TODO validate
        var addressId = $scope.selectAddressData.selectedAddress.id;

        basketService.selectDeliveryAddress(addressId).success(function () {
            $state.go('checkout.billing');
        }).error( function () {
            
        })
    };

    // DRY this up for account section
    $scope.createDeliveryAddress = function () {
        var address = angular.copy($scope.addressForm);
        // TODO validate data
        addressService.create(address).success(function () {
            $state.go('checkout.billing');
        }).error(function () {

        });
    };
};
