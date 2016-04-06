'use strict';

var Wallop = require('Wallop');

/**
 * @ngdoc function
 * @name yoApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the yoApp
 */
module.exports = function ($rootScope, $scope, $stateParams, $http, urlService) {
    // TODO create a BasketService

    var productId = $stateParams.productId;

    $scope.form = {
        qty: 1
    };
    
    // TODO move to service
    $http.get(urlService.getProductUrl(productId))
         .success(function (data) {
            $scope.product = data;
            if (data.variants.length > 0) {
                //$scope.selectedSku = data.variants[0].sku;
                $scope.form.sku = data.variants[0].sku;
            }
         });

    $scope.submitShoppingBagForm = function (isValid) {
        // TODO validate form
        // console.log('valid: ', isValid);

        $http.put(urlService.getBasketUrl(), {sku: $scope.form.sku, quantity: $scope.form.qty})
             .success(function () {
                console.log('broadcasting');
                $rootScope.$broadcast('basketUpdate');
             });
    };

    $scope.startMobileGallery = function () {
        var gallery = document.querySelector('#wallop-mobile');
        var slider = new Wallop(gallery, {carousel: false});
    };

    $scope.startDesktopGallery = function () {
        var gallery = document.querySelector('#wallop-desktop');
        var slider = new Wallop(gallery, {carousel: false});
    };
};

/*
angular.module('yoApp')
    .controller('ProductCtrl', function ($rootScope, $scope, $stateParams, $http, urlService) {
        
        // TODO create a BasketService

        var productId = $stateParams.productId;

        $scope.form = {
            qty: 1
        };
        
        // TODO move to service
        $http.get(urlService.getProductUrl(productId))
             .success(function (data) {
                $scope.product = data;
                if (data.variants.length > 0) {
                    //$scope.selectedSku = data.variants[0].sku;
                    $scope.form.sku = data.variants[0].sku;
                }
             });

        $scope.submitShoppingBagForm = function (isValid) {
            // TODO validate form
            // console.log('valid: ', isValid);

            $http.put(urlService.getBasketUrl(), {sku: $scope.form.sku, quantity: $scope.form.qty})
                 .success(function () {
                    console.log('broadcasting');
                    $rootScope.$broadcast('basketUpdate');
                 });
        };
    });
*/
