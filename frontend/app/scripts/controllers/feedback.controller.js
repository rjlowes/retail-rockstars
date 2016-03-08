'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the yoApp
 */
module.exports = function ($rootScope, $scope) {
	$rootScope.$on('feedback', function (data) {
        // add and put a timer on the feedback messages
        
    });
};

/*
angular.module('yoApp')
.controller('FeedbackCtrl', function ($rootScope, $scope) {

    $rootScope.$on('feedback', function (data) {
        // add and put a timer on the feedback messages
        
    });
});
*/
