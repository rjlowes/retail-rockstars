'use strict';


module.exports = function () {
	return {
		scope: {
			form: '=',
			formData: '='
		},
		restrict: 'E',
		templateUrl: 'views/partials/fieldsets/customer-name-fields.html'
	};
};


/*
(function() { 'use strict';

  angular.module('myModule').directive('myAddress', address);

  function address() {
    var directive = {
      scope: {
        form: '=form',
        address: '=address'
      },
      restrict: 'E',
      templateUrl: 'address.html'
    };

    return directive;
  }

}());
*/