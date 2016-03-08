'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the yoApp
 */
module.exports = function ($rootScope, $scope, $http, $state, SALUTATIONS) {
    // https://spring.io/blog/2015/01/12/the-login-page-angular-js-and-spring-security-part-ii
    // http://syntx.io/adding-http-basic-auth-to-restful-services-in-java-and-spring/

    $scope.credentials = {
        username: null,
        password: null
    };

    $scope.registration = {
        title: null,
        firstname: null,
        lastname: null,
        email: null,
        emailConfirm: null,
        password: null,
        passwordConfirm: null
    };

    $scope.salutations = SALUTATIONS;

    function authenticate (credentials, callback) {
        console.log('creds: ', credentials);

        // Move into service
        var headers = credentials ? {authorization : 'Basic ' + btoa(credentials.email + ':' + credentials.password)} : {};

        $http.get('/api/customer', {headers: headers}).success(function (data) {
            $rootScope.authenticated = data.name ? true : false;
            // if (data.name) {
            //     $rootScope.authenticated = true;
            // }
            if (angular.isFunction(callback)) {
                callback();
            }
        }).error(function () {
            $rootScope.authenticated = false;
            if (angular.isFunction(callback)) {
                callback();
            }
        });
    }

    authenticate(null, function () {
        console.log($rootScope.authenticated);
    });

    $scope.login = function (isValid) {
        if (isValid) {
            authenticate($scope.credentials, function () {
                if ($rootScope.authenticated) {
                    $state.go('account.dashboard');   // TODO go to account or checkout!
                    //$scope.error = false;
                } else {
                    console.log('show error message');
                    // $state.go('home');
                    // $scope.error = true;
                }
            });
        }            
    };

    $scope.register = function (isValid) {
        if (isValid) {
            $http.post('/api/customer', angular.copy($scope.registration)).success(function () {
                $state.go('account.dashboard');   // TODO go to account or checkout!
            }).error(function (data) {
                console.log('Handle server errors', data);
            });
        }            
    };
};

/*
angular.module('yoApp')
    .controller('AuthCtrl', function ($rootScope, $scope, $http, $state, SALUTATIONS) {
        
        // https://spring.io/blog/2015/01/12/the-login-page-angular-js-and-spring-security-part-ii
        // http://syntx.io/adding-http-basic-auth-to-restful-services-in-java-and-spring/

        $scope.credentials = {
            username: null,
            password: null
        };

        $scope.registration = {
            title: null,
            firstname: null,
            lastname: null,
            email: null,
            emailConfirm: null,
            password: null,
            passwordConfirm: null
        };

        $scope.salutations = SALUTATIONS;

        function authenticate (credentials, callback) {
            console.log('creds: ', credentials);

            // Move into service
            var headers = credentials ? {authorization : 'Basic ' + btoa(credentials.email + ':' + credentials.password)} : {};

            $http.get('/api/customer', {headers: headers}).success(function (data) {
                $rootScope.authenticated = data.name ? true : false;
                // if (data.name) {
                //     $rootScope.authenticated = true;
                // }
                if (angular.isFunction(callback)) {
                    callback();
                }
            }).error(function () {
                $rootScope.authenticated = false;
                if (angular.isFunction(callback)) {
                    callback();
                }
            });
        }

        authenticate(null, function () {
            console.log($rootScope.authenticated);
        });

        $scope.login = function (isValid) {
            if (isValid) {
                authenticate($scope.credentials, function () {
                    if ($rootScope.authenticated) {
                        $state.go('account.dashboard');   // TODO go to account or checkout!
                        //$scope.error = false;
                    } else {
                        console.log('show error message');
                        // $state.go('home');
                        // $scope.error = true;
                    }
                });
            }            
        };

        $scope.register = function (isValid) {
            if (isValid) {
                $http.post('/api/customer', angular.copy($scope.registration)).success(function () {
                    $state.go('account.dashboard');   // TODO go to account or checkout!
                }).error(function (data) {
                    console.log('Handle server errors', data);
                });
            }            
        };
    });

*/
