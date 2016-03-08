'use strict';

/**
 * @ngdoc controller
 * @name rockstars.controller:DeliveryAddressCtrl
 * @description
 */
module.exports = function ($scope, $state, addressService, basketService, SALUTATIONS) {

    $scope.selectAddressData = {};
    $scope.addressFormData = {country: 'UK'};
    $scope.salutations = SALUTATIONS;

    // TODO keep customer data completely synced so we don't need these lookups
    addressService.findAll().success(function (data) {
        $scope.addresses = data;
        $scope.addressFormData.title = SALUTATIONS[0];
    });
    
    $scope.selectDeliveryAddress = function () {
        
        // TODO validate

        var addressId = $scope.selectAddressData.addressId

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
                
        }).error(function () {

        });
    };
};
