'use strict';

module.exports = function ($window) {

	var $theWindow = angular.element($window);

	function isElementInViewport(scrollElements) {
		var windowHeight = $theWindow.height(),
			windowTopPosition = $theWindow.scrollTop(),
			windowBottomPosition = windowTopPosition + windowHeight;

		// angular.forEach(scrollElements, function (element) {
		// 	console.log('a', element);	
		// });

		$.each(scrollElements, function() {
			var $element = $(this),
				elementHeight = $element.outerHeight(),
				elementTopPosition = $element.offset().top,
				elementBottomPosition = elementTopPosition + elementHeight;

			//check to see if this current container is within viewport
			if ((elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
				if (!$element.hasClass('scrollable--in-view')) {
					console.log("IT IS IN VIEW", $element);
					console.log(elementBottomPosition, windowTopPosition, elementTopPosition, windowBottomPosition);
			  		$element.addClass('scrollable--in-view');
				}	
			}
		});
	}

	return {
		start: function () {
			angular.element(document).ready(function () {
				var scrollElements = angular.element('[class*="scrollable--"]');
				
				angular.element($window).on('scroll', function () {
					isElementInViewport(scrollElements);
				});

				angular.element($window).trigger('scroll');
			});	
		}
	}
};