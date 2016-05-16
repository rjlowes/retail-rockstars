'use strict';


module.exports = function () {
	return {
		scope: {
			form: '=',
			formData: '=',
      'salutations': '='
		},
		restrict: 'E',
		templateUrl: 'views/partials/fieldsets/customer-name-fields.html'
	};
};
