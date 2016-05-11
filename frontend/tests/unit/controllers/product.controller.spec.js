'use strict';

describe('Product Controller Test', function () {

	var $controller;
	var $rootScope;
	var controller;
	var catalogueServiceMock;
	var catalogueSearchSpy;
	var basketServiceMock;
	var basketServiceSpy;


	beforeEach(module('rockstars'));

	beforeEach(function () {
		catalogueServiceMock = {
			findProduct: function (productId) {}
		};
		basketServiceMock = {
			addBasketItem: function (sku, qty) {}
		}
	});

	beforeEach(inject(function(_$controller_, _$rootScope_){
		$controller = _$controller_;
		$rootScope = _$rootScope_;

		spyOn($rootScope, '$broadcast');

		// Controller init needs to load data, so mock it!
		spyOn(catalogueServiceMock, 'findProduct').and.callFake(function () {
			return {
				then: function (callback) {
					callback({variants: []});
				}
			};
		});

		spyOn(basketServiceMock, 'addBasketItem').and.callFake(function () {
			return {
				then: function (callback) {
					callback();
				}
			};
		});
	}));

	it('Should load product data on initialisation', function () {
		//var $scope = {};
		//var controller = $controller('ProductCtrl', {$scope: $scope, $rootScope: $rootScope});
		
		controller = $controller('ProductCtrl', {$rootScope: $rootScope, catalogueService: catalogueServiceMock});
		
		expect(controller).toBeDefined();

		// Should have a default quantity value set
		expect(controller.form).toEqual({qty: 1});

		// Should retrive the product
		expect(catalogueServiceMock.findProduct).toHaveBeenCalled();
		expect(controller.product).toBeDefined();
	});

	it('Should add product to basket', function () {
		controller = $controller('ProductCtrl', {$rootScope: $rootScope, catalogueService: catalogueServiceMock, basketService: basketServiceMock});

		controller.form.sku = 'abc';
		controller.form.qty = 1;
		controller.submitShoppingBagForm(true);

		expect(basketServiceMock.addBasketItem).toHaveBeenCalledWith('abc', 1);
		expect($rootScope.$broadcast).toHaveBeenCalledWith('basketUpdate');
	});
});
