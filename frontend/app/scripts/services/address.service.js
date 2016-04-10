'use strict';

/**
 * @ngdoc service
 * @name yoApp.address
 * @description
 * # address
 * Service in the yoApp.
 */
module.exports = function ($http, urlService) {

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

/*
angular.module('yoApp')
.service('addressService', function ($http, urlService) {

    // Change to findAll
    function findAll() {
        return $http.get('/api/addresses');
    }

    function find(id) {
        return $http.get('/api/addresses/' + id);
    }

    function create(address) {
        return $http.post('/api/addresses', address);
    }

    function update(address) {
        return $http.put('/api/addresses/' + id, address);
    }

    function destroy(id) {
        return $http.delete('/api/addresses/' + id);
    }

    return {
        findAll: findAll,
        find: find,
        create: create,
        update: update,
        destroy: destroy
    };
});
*/
