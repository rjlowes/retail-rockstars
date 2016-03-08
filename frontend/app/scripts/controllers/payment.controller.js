'use strict';

module.exports = function ($scope, paymentService) {
	
	$scope.formData = {};

	$scope.makePayment = function () {

		// TODO validate

		var paymentData = angular.copy($scope.formData);
		paymentService.makeCardPayment(paymentData);

		console.log(paymentData);
	};
};