'use strict';

/**
 * @ngdoc service
 * @name rockstars.address
 * @description
 * # address
 * Service in the rockstars.
 */
var AccountService = function ($http) {

    this.findCustomer = function () {
        return $http.get('/api/customer/details').then(function (response) {
            return response.data;
        });
    };

    this.updateCustomer = function (customer) {
        return $http.put('/api/customer/details', customer).then(function (response) {
            return response.data;
        });
    };

    this.updateEmail = function () {
        return $http.put('/api/customer/email', email).then(function (response) {
            return response.data;
        });
    };
};


module.exports = AccountService;
