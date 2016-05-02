'use strict';

var Wallop = require('Wallop');

/**
 * @ngdoc function
 * @name rockstars.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the rockstars
 */
var ProductCtrl = function ($rootScope, $stateParams, catalogueService, basketService) {

    var vm = this,
        productId = $stateParams.productId;
    
    vm.form = {qty: 1};

    function init(productId) {
        catalogueService.findProduct(productId).then(function (product) {
            vm.product = product;

            if (product.variants.length > 0) {
                vm.form.sku = product.variants[0].sku;
            }
        });
    }

    vm.submitShoppingBagForm = function (isValid) {
        var data = angular.copy(vm.form);
        basketService.addBasketItem(data.sku, data.qty).then(function () {
            $rootScope.$broadcast('basketUpdate');
        }, function () {
            // TODO add error to feedback messenger
        });
    };

    init(productId);
};

module.exports = ProductCtrl;
