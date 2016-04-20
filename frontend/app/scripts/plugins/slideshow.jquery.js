'use strict';


(function (factory) {
    if(typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(require('jquery'), window, document);
    } else {
        factory(jQuery, window, document);
    }
}(function($, window, document, undefined) {

	// Defaults
	var pluginName = 'slideshow',
		defaults = {
			sectionSelector: 	'.r-acc__sec',
			triggerSelector: 	'.r-acc__sec-trig',
			targetSelector: 	'.r-acc__sec-targ',
			triggerOpenClass: 'r-acc__sec-trig--open',
			activeMediaQuery: '(max-width: 768px)'
		};

	// Constructor
	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	// Initialisation code
	Plugin.prototype.init = function () {
		var _this = this;

		// $(this.element).find(this.options.sectionSelector).each(function () {
		// 	var trigger = $(this).find(_this.options.triggerSelector),
		// 		target = $(this).find(_this.options.targetSelector);

		// 	trigger.click(function () {
		// 		if (window.matchMedia(_this.options.activeMediaQuery).matches) {
		// 			trigger.toggleClass(_this.options.triggerOpenClass);
		// 			target.slideToggle('fast');
		// 		}
		// 	});
		// });
	};

	// Lightweight plugin wrapper, which protects against multiple instantiations.
	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName);
				new Plugin(this, options);
			}
		});
	};
}));