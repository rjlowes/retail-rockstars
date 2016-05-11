'use strict';

/**
 * @ngdoc service
 * @name yoApp.address
 * @description
 * # address
 * Service in the yoApp.
 */
module.exports = function ($http) {

    this.findAll = function () {
        return $http.get('/api/addresses');
    };

    this.find = function (id) {
        return $http.get('/api/addresses/' + id);
    };

    this.create = function (address) {
        return $http.post('/api/addresses', address);
    };

    this.update = function (address) {
        return $http.put('/api/addresses/' + address.id, address);
    };

    this.destroy = function (id) {
        return $http.delete('/api/addresses/' + id);
    };
};
