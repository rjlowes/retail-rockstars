'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:SessionStatusCtrl
 * @description
 * # SessionStatusCtrl
 * Controller of the yoApp
 */
module.exports = function ($scope, $http) {
    function checkStatus () {
        $http.get('/api/customer').success(function (data) {
            console.log('customer data');
            console.log(data);
            var authenticated = data.name ? true : false;

            // TODO update service to retrive full customer data
            // TODO update service to use email rather than username
            if (authenticated) {
                $scope.customer = data.principal.customer;
            } else {
                $scope.customer = null;
            }

            console.log('logged in: ', authenticated);
            // $rootScope.authenticated = data.name ? true : false;
            // // if (data.name) {
            // //     $rootScope.authenticated = true;
            // // }
            // if (angular.isFunction(callback)) {
            //     callback();
            // }
        }).error(function () {
            // console.log(angular.isFunction(callback));
            // $rootScope.authenticated = false;
            // if (angular.isFunction(callback)) {
            //     callback();
            // }
        });
    }

    checkStatus();

    $scope.checkStatus = function () {
        checkStatus();
    };

    $scope.logout = function () {

    };
};

/*
angular.module('yoApp')
    .controller('SessionStatusCtrl', function ($scope, $http) {
        console.log('session status controller');
        
        // $scope.customer = null;

        function checkStatus () {
            $http.get('/api/customer').success(function (data) {
                console.log('customer data');
                console.log(data);
                var authenticated = data.name ? true : false;

                // TODO update service to retrive full customer data
                // TODO update service to use email rather than username
                if (authenticated) {
                    $scope.customer = data.principal.customer;
                } else {
                    $scope.customer = null;
                }

                console.log('logged in: ', authenticated);
                // $rootScope.authenticated = data.name ? true : false;
                // // if (data.name) {
                // //     $rootScope.authenticated = true;
                // // }
                // if (angular.isFunction(callback)) {
                //     callback();
                // }
            }).error(function () {
                // console.log(angular.isFunction(callback));
                // $rootScope.authenticated = false;
                // if (angular.isFunction(callback)) {
                //     callback();
                // }
            });
        }

        checkStatus();

        $scope.checkStatus = function () {
            checkStatus();
        };

        $scope.logout = function () {

        };

    });
*/
