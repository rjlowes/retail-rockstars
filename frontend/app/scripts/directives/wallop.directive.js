'use strict';

var Wallop = require('Wallop');

/**
 * @ngdoc function
 * @name rockstars.directive:wallopSlider
 * @description
 * # responsiveAccordion
 * Directive wrapper for Wallop slider
 */
 var wallopSlider = function () {
 	return {
		restrict: 'A',
		scope: {
			'carousel': '='
		},
		link: function (scope, element, attrs) {
			var carousel = carousel || false;
			new Wallop(angular.element(element).get(0), {carousel: carousel});
		}
	}
};

module.exports = wallopSlider;
