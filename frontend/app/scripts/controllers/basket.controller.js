'use strict';

/**
 * @ngdoc function
 * @name rockstars.controller:BasketCtrl
 * @description
 * # BasketCtrl
 * Controller of the rockstars
 */
var BasketCtrl = function ($rootScope, $scope, $http, basketService) {
    var vm = this,
        itemsPerPage = 2,
        basketItems;

    
    function init() {
        vm.selectedPage = 0;
        vm.getBasket();
    }

    function getBasketItemCount (basketItems) {
        var basketItemCount = 0;

        angular.forEach(basketItems, function (basketItem) {
            basketItemCount += basketItem.quantity;
        });

        return basketItemCount;
    }

    function pageResults (basketItems) {
        var noPages = Math.ceil(basketItems.length / itemsPerPage),
            pages = [],
            i;

        for (i = 0; i < noPages; i++) {
            pages.push(i);
        }

        return pages;
    }

    vm.selectPage = function (pageNumber) {
        var len,
            basketItemsToShow;
        
        len = pageNumber === 0 ? itemsPerPage : pageNumber * itemsPerPage;
        basketItemsToShow = basketItems.slice(pageNumber, itemsPerPage);
        vm.basketItems = basketItemsToShow;
        vm.selectedPage = pageNumber;
    };

    vm.deleteItem = function (sku) {
        basketService.deleteBasketItem(sku).then(function () {
            vm.getBasket();
        }, function () {
            // TODO add error message to feedback
        });
    };

    vm.getBasket = function () {
        basketService.getBasket().then(function (data) {
            basketItems = data.payload.basketItems;
            vm.basketItems = basketItems;
            vm.basketItemCount = getBasketItemCount(basketItems);
            vm.pages = pageResults(basketItems);
            vm.selectPage(0);
        }, function () {
            // TODO add error message to feedback
        });
    };

    $rootScope.$on('basketUpdate', function () {
        vm.getBasket();
    });


    init();
};

module.exports = BasketCtrl;
