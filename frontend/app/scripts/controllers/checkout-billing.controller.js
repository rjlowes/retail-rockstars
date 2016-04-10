'use strict';

/**
 * @ngdoc controller
 * @name rockstars.controller:BillingAddressCtrl
 * @description
 */
module.exports = function ($scope, $state, $stateParams, addressService, basketService, SALUTATIONS) {

    $scope.selectAddressData = {};

    $scope.addressFormData = {country: 'UK'};
    $scope.salutations = SALUTATIONS;

    addressService.findAll().success(function (data) {
        $scope.addresses = data;
        $scope.addressFormData.title = SALUTATIONS[0];
        if (data.length > 0) {
            // http://stackoverflow.com/questions/18194255/how-to-have-a-default-option-in-select-box-angular-js#answer-29564802
            $scope.selectAddressData.selectedAddress = $scope.addresses[0];
        }
    });
    
    $scope.selectAddress = function () {
        // TODO validate
        // var addressId = addressId || $scope.selectAddressData.addressId,
        //     useAsBilling = $scope.selectAddressData.useAsBilling || false;
        // TODO validate
        var addressId = $scope.selectAddressData.selectedAddress.id;

        basketService.selectBillingAddress(addressId).success(function () {
            $state.go('checkout.payment');
        }).error( function () {
            
        })
    };

    // DRY this up for account section
    $scope.createAddress = function () {
        var address = angular.copy($scope.addressForm);
        // TODO validate data
        addressService.create(address).success(function () {
            $state.go('checkout.payment');
        }).error(function () {

        });
    };
};
