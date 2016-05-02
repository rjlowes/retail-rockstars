'use strict';

/**
 * @ngdoc function
 * @name rockstars.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the rockstars
 */
var CategoryCtrl = function ($scope, $stateParams, $http, catalogueService) {
    
    var categoryId = $stateParams.categoryId;
    // TODO add a filter, sort, paging feature
    findProducts(categoryId);


    $scope.range = function (n) {
        return new Array(n);
    };

    $scope.selectPage = function (pageNumber) {
        findProducts(categoryId, pageNumber);
    };


    function findProducts(categoryId, pageNumber) {
        catalogueService.findCategoryProducts(categoryId, pageNumber).then(function (products) {
            $scope.pagingData = products;
            $scope.calculatedPages = calculatePages(products);
        }, function () {
            // TODO add error message to feedback notifier
        });
    }

    function findCategory(categoryId) {
        catalogueService.findCategory(categoryId).then(function (category) {
            $scope.category = category;
        });
    }

    function calculatePages(data) {
        // Change zero indexing
        var current = data.number + 1,
            prev = current - 1,
            next = current + 1,
            total = data.totalPages;
        
        return {
            first: 1,
            last: total,
            prev: prev > 0 ? prev : 1,
            next: next < total ? next : total,
            total: total
        };
    }
};

module.exports = CategoryCtrl;
