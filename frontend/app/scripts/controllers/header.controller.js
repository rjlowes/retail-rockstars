'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the yoApp
 */
module.exports = function ($rootScope, $scope, $http) {
    // add this to a service
    $http.get('/api/categories').success(function (data) {
        $scope.categories = data;
    });

    $scope.menuActive = false;

    $scope.activateMenu = function () {
        var button = angular.element(document.querySelector('#hamburger'));
        console.log('button ', button);
        if ($rootScope.bodyClass === 'show-nav') {
            $rootScope.bodyClass = '';
            button.removeClass('is-open').addClass('is-closed');
        } else {
            $rootScope.bodyClass = 'show-nav';
            button.addClass('is-open').removeClass('is-closed');
        }
    };

    $scope.toggleSearch = function () {
        if ($rootScope.bodyClass === 'show-search') {
            $rootScope.bodyClass = '';
        } else {
            $rootScope.bodyClass = 'show-search';
        }
        jQuery($rootScope).toggleClass('show-search');
    };


    // TODO move this to auth controller
    // Here i'm just ensuring the CSRF cookie was set 
    $http.get('/api/customer');
};

/*
angular.module('yoApp').controller('HeaderCtrl', function ($rootScope, $scope, $http) {

    // add this to a service
    $http.get('/api/categories').success(function (data) {
        $scope.categories = data;
    });

    $scope.menuActive = false;

    $scope.activateMenu = function () {
        if ($rootScope.bodyClass === 'show-nav') {
            $rootScope.bodyClass = '';
        } else {
            $rootScope.bodyClass = 'show-nav';
        }
    };

    $scope.toggleSearch = function () {
        if ($rootScope.bodyClass === 'show-search') {
            $rootScope.bodyClass = '';
        } else {
            $rootScope.bodyClass = 'show-search';
        }
        jQuery($rootScope).toggleClass('show-search');
    };


    // TODO move this to auth controller
    // Here i'm just ensuring the CSRF cookie was set 
    $http.get('/api/customer');
});
*/
