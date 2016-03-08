'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the yoApp
 */
module.exports = function ($scope, $routeParams, $http, urlService) {
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

    // TODO create a catalogueService
    function fetchProducts(categoryId, pageNumber) {
        var url = urlService.getProductListUrl(categoryId);
        
        if (pageNumber !== undefined) {
            url += '?pageNumber=' + pageNumber;
        }

        $http.get(url)
             .success(function (data) {
                // TODO expose only product data
                $scope.pagingData = data;
                $scope.calculatedPages = calculatePages(data);
             });
            // TODO add error 
    }

    // Get the category info
    $http.get(urlService.getCategoryUrl($routeParams.categoryId))
         .success(function (data) {
            $scope.category = data;
         });

    // TODO add a filter, sort, paging feature
    fetchProducts($routeParams.categoryId);

    $scope.range = function (n) {
        return new Array(n);
    };

    $scope.selectPage = function (pageNumber) {
        fetchProducts($routeParams.categoryId, pageNumber);
    };
};

/*
angular.module('yoApp')
    .controller('CategoryCtrl', function ($scope, $routeParams, $http, urlService) {

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

        // TODO create a catalogueService
        function fetchProducts(categoryId, pageNumber) {
            var url = urlService.getProductListUrl(categoryId);
            
            if (pageNumber !== undefined) {
                url += '?pageNumber=' + pageNumber;
            }

            $http.get(url)
                 .success(function (data) {
                    // TODO expose only product data
                    $scope.pagingData = data;
                    $scope.calculatedPages = calculatePages(data);
                 });
                // TODO add error 
        }

        // Get the category info
        $http.get(urlService.getCategoryUrl($routeParams.categoryId))
             .success(function (data) {
                $scope.category = data;
             });

        // TODO add a filter, sort, paging feature
        fetchProducts($routeParams.categoryId);

        $scope.range = function (n) {
            return new Array(n);
        };

        $scope.selectPage = function (pageNumber) {
            fetchProducts($routeParams.categoryId, pageNumber);
        };
    });
*/