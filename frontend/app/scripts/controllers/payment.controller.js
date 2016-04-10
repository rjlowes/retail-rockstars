'use strict';

module.exports = function ($scope, paymentService) {
	
	$scope.formData = {};

	$scope.years = ['2016', '2017', '2018', '2019', '2020'];
	$scope.months = ['January', 'February', 'March', 'April', 'May'];

	$scope.formData.year = $scope.years[0];
	$scope.formData.month = $scope.months[0];

	$scope.makePayment = function () {

		// TODO validate

		var paymentData = angular.copy($scope.formData);
		paymentService.makeCardPayment(paymentData);

		console.log(paymentData);
	};
};