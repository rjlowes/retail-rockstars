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
        // TODO move to API in DTO
        var noPages = Math.ceil(basketItems.length / itemsPerPage),
            pages = [],
            i;

        for (i = 0; i < noPages; i++) {
            pages.push(i * 2);
        }

        return pages;
    }

    $scope.selectPage = function (pageNumber) {
        var len,
            basketItemsToShow;
        
        len = pageNumber === 0 ? itemsPerPage : pageNumber * itemsPerPage;
        basketItemsToShow = basketItems.slice(pageNumber, len);
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
        console.log('basket');
        basketService.getBasket()
            .success(function (data) {
                basketItems = data.payload.basketItems;
                $scope.basketItemCount = getBasketItemCount(basketItems);
                $scope.pages = pageResults(basketItems);
                $scope.selectPage(0);
            })
            .error(function () {
                // signature http, status, fnc, httpObj
            });
    };

    $rootScope.$on('basketUpdate', function () {
        $scope.updateBasket();
    });

    $scope.updateBasket();
};


/*
angular.module('yoApp')
    .controller('BasketCtrl', function ($rootScope, $scope, $http, urlService, basketService) {
        
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
            // TODO move to API in DTO
            var noPages = Math.ceil(basketItems.length / itemsPerPage),
                pages = [],
                i;

            for (i = 0; i < noPages; i++) {
                pages.push(i * 2);
            }

            return pages;
        }

        $scope.selectPage = function (pageNumber) {
            var len,
                basketItemsToShow;
            
            len = pageNumber === 0 ? itemsPerPage : pageNumber * itemsPerPage;
            basketItemsToShow = basketItems.slice(pageNumber, len);
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
            console.log('basket');
            basketService.getBasket()
                .success(function (data) {
                    basketItems = data.payload.basketItems;
                    $scope.basketItemCount = getBasketItemCount(basketItems);
                    $scope.pages = pageResults(basketItems);
                    $scope.selectPage(0);
                })
                .error(function () {
                    // signature http, status, fnc, httpObj
                });
        };

        $rootScope.$on('basketUpdate', function () {
            $scope.updateBasket();
        });

        $scope.updateBasket();
    });
*/
