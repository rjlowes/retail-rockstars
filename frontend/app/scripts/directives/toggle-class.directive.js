'use strict';

/**
 * @ngdoc directive
 * @name yoApp.directive:toggleClass
 * @description
 * # toggleClass
 */
module.exports = function () {
	return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.next().toggleClass(attrs.toggleClass);
            });
        }
    };
};

/*
angular.module('yoApp')
.directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                element.next().toggleClass(attrs.toggleClass);
            });
        }
    };
});
*/