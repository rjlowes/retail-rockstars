'use strict';

/**
 * @ngdoc service
 * @name yoApp.urlService
 * @description
 * Centralises app urls providing features to insert placeholder arguments
 * Service in the yoApp.
 */
module.exports = function () {
    return {
        getProductListUrl: function (categoryId) {
            return '/api/catalogue/categories/CATEGORY_ID/products'.replace('CATEGORY_ID', categoryId);
        },
        getCategoryUrl: function (categoryId) {
            return '/api/catalogue/categories/CATEGORY_ID'.replace('CATEGORY_ID', categoryId);
        },
        getProductUrl: function (productId) {
            return '/api/catalogue/product/PRODUCT_ID'.replace('PRODUCT_ID', productId);
        },
        getBasketUrl: function () {
            return '/api/basket';
        },
        getDeleteBasketItemUrl: function (sku) {
            return '/api/basket/sku/SKU'.replace('SKU', sku);
        },
        // getAddressesUrl: function () {
        //     return '/api/addresses';
        // },
        getCreateAddressUrl: function () {
            return '/api/addresses';
        }
    };
};

/*
angular.module('yoApp')
    .service('urlService', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function
        return {
            getProductListUrl: function (categoryId) {
                return '/api/catalogue/categories/CATEGORY_ID/products'.replace('CATEGORY_ID', categoryId);
            },
            getCategoryUrl: function (categoryId) {
                return '/api/catalogue/categories/CATEGORY_ID'.replace('CATEGORY_ID', categoryId);
            },
            getProductUrl: function (productId) {
                return '/api/catalogue/product/PRODUCT_ID'.replace('PRODUCT_ID', productId);
            },
            getBasketUrl: function () {
                return '/api/basket';
            },
            getDeleteBasketItemUrl: function (sku) {
                return '/api/basket/sku/SKU'.replace('SKU', sku);
            },
            // getAddressesUrl: function () {
            //     return '/api/addresses';
            // },
            getCreateAddressUrl: function () {
                return '/api/addresses';
            }
        };
    });
*/
