'use strict';

describe('Basket services', function () {

	var basketService,
		$httpBackend;

	beforeEach(module('rockstars'));

	beforeEach(inject(function (_basketService_, _$httpBackend_) {
		basketService = _basketService_;
		$httpBackend = _$httpBackend_;
	}))

	it('Should be a managed dependency', function () {
		expect(basketService).toBeDefined();
	});

	it('Should fetch basket data', function () {
		
		// expect(angular.isFunction(basketService.getBasket));

		// TODO what exactly should I be testing here?
		$httpBackend.expectGET('/api/basket').respond(200, [{true: true}]);
		
		var a = basketService.getBasket().then(function (basket) {
			expect(basket).toEqual([{true: true}]);
		});

		$httpBackend.flush();
	});

	it('Should add a sku to the basket', function () {

	});

	it('Should delete basket item', function () {

	});
});