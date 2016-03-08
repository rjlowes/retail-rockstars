'use strict';

/**
 * @ngdoc directive
 * @name yoApp.directive:includeReplace
 * @description
 * # includeReplace
 * http://stackoverflow.com/questions/17589358/avoid-using-extra-dom-nodes-when-using-nginclude
 */
module.exports = function () {
	return {
        require: 'ngInclude',
        restrict: 'A', /* optional */
        link: function (scope, el) {
            el.replaceWith(el.children());
        }
    };
};

/*
angular.module('yoApp')
.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A',
        link: function (scope, el) {
            el.replaceWith(el.children());
        }
    };
});

*/