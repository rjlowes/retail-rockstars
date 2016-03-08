'use strict';

/**
 * @ngdoc service
 * @name yoApp.csrf
 * @description
 * An interceptor service which adds the CSRF cookie to the appropriate header
 * Factory in the yoApp.
 */
module.exports = function ($cookies) {
    // How to test
    // http://jbavari.github.io/blog/2014/06/20/testing-interceptor-headers-in-angularjs/
    
    var cookieName = 'XSRF-TOKEN',
        tokenName = 'X-CSRF-TOKEN',
        allowedMethods = ['GET'];

    return {
        request: function (config) {
            console.log('testing');
            if(allowedMethods.indexOf(config.method) === -1) {
                config.headers[tokenName] = $cookies.get(cookieName);
            }
            return config;
        }
    };
};

/*
angular.module('yoApp')
    .factory('csrfService', function ($cookies) {

        // How to test
        // http://jbavari.github.io/blog/2014/06/20/testing-interceptor-headers-in-angularjs/
        
        var cookieName = 'XSRF-TOKEN',
            tokenName = 'X-CSRF-TOKEN',
            allowedMethods = ['GET'];

        return {
            request: function (config) {
                console.log('testing');
                if(allowedMethods.indexOf(config.method) === -1) {
                    config.headers[tokenName] = $cookies.get(cookieName);
                }
                return config;
            }
        };
    });
*/
