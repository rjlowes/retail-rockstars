'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:BasketCtrl
 * @description
 * # BasketCtrl
 * Controller of the yoApp
 */
module.exports = function ($rootScope, $scope, $http, urlService, basketService) {
    var itemsPerPage = 2,
        basketItems;

    $scope.selectedPage = 0;

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
            console.log('num', i);
            pages.push(i);
        }

        return pages;
    }

    $scope.selectPage = function (pageNumber) {
        var len,
            basketItemsToShow;
        
        len = pageNumber === 0 ? itemsPerPage : pageNumber * itemsPerPage;
        basketItemsToShow = basketItems.slice(pageNumber, itemsPerPage);
        $scope.basketItems = basketItemsToShow;
        $scope.selectedPage = pageNumber;
    };

    $scope.deleteItem = function (sku) {
        basketService.deleteBasketItem(sku)
            .success(function () {
                $scope.updateBasket();
            })
            .error(function () {
                // signature http, status, fnc, httpObj
            });
    };

    $scope.updateBasket = function () {
        basketService.getBasket()
            .success(function (data) {
                basketItems = data.payload.basketItems;
                $scope.basketItems = basketItems;
                $scope.basketItemCount = getBasketItemCount(basketItems);
                $scope.pages = pageResults(basketItems);
                $scope.selectPage(0);
            })
            .error(function () {
                console.error('Oooops, something has gone wrong in the basket');
            });
    };

    $rootScope.$on('basketUpdate', function () {
        $scope.updateBasket();
    });
};
