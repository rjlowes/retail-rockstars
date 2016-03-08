'use strict';

/**
 * @ngdoc service
 * @name yoApp.basket
 * @description
 * # basket
 * Service in the yoApp.
 *
 * @see http://sravi-kiran.blogspot.co.uk/2013/03/MovingAjaxCallsToACustomServiceInAngularJS.html
 *
 * Using the $q deferred
 * @see http://weblog.west-wind.com/posts/2014/Oct/24/AngularJs-and-Promises-with-the-http-Service
 */
module.exports = function ($http, $q) {

    this.getBasket = function () {
        return $http.get('/api/basket');
    };

    this.addBasketItem = function () {

    };

    this.deleteBasketItem = function (sku) {
        return $http.delete('/api/basket/sku/' + sku);
    };

    this.updateBasketItemQuantity = function () {

    };

    this.selectDeliveryAddress = function (id) {
        return $http.post('/api/basket/delivery?addressId=' + id);
    };

    this.selectBillingAddress = function (id) {
        return $http.post('/api/basket/billing?addressId=' + id);
    };
};
