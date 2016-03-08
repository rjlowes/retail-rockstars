'use strict';


module.exports = function () {
	return {
		scope: {
			form: '=',
			formData: '='
		},
		restrict: 'E',
		templateUrl: 'views/partials/fieldsets/address-fields.html'
	};
};
