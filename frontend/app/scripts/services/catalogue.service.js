'use strict';

/**
 *	see http://www.codelord.net/2015/05/25/dont-use-$https-success/
 */
module.exports = function ($http) {

	this.findProduct = function (productId) {
		return $http.get('/api/catalogue/product/' + productId).then(function (response) {
			return response.data;
		});
	};

	this.findCategoryProducts = function (categoryId, pageNumber) {
		var url = '/api/catalogue/categories/CATEGORY_ID/products'.replace('CATEGORY_ID', categoryId);
        
        if (pageNumber) {
            url += '?pageNumber=' + pageNumber;
        }

        return $http.get(url).then(function (response) {
        	return response.data;
        });
	};

	this.findCategory = function (categoryId) {
		var url = '/api/catalogue/categories/CATEGORY_ID'.replace('CATEGORY_ID', categoryId);

		return $http.get(url).then(function (response) {
			return response.data;
		});
	}
};