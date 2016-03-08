'use strict';

module.exports = function ($http) {

	this.makeCardPayment = function (paymentData) {
		return $http.post('/api/payment/card', paymentData);
	};

};