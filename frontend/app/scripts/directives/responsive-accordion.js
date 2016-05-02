'use strict';

require('../plugins/responsive.accordion.jquery');

/**
 * @ngdoc function
 * @name rockstars.directive:responsiveAccordion
 * @description
 * # responsiveAccordion
 * Directive wrapper for jQuery plugin
 */
module.exports = function () {
	return {
		restrict: 'A',
		scope: {
			'speed': '='
		},
		link: function (scope, element, attrs) {
			var settings = {};

			if (attrs.sectionSelector) {
				settings.sectionSelector = attrs.sectionSelector;
			}

			angular.element(element).responsiveAccordion(settings);
		}
	}
};