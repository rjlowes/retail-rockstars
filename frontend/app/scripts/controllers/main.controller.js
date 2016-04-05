'use strict';

//var Wallop = require('Wallop');


//var abc = require('../plugins/layerslider.kreaturamedia.jquery');

module.exports = function ($scope, scrollFactory) {

 	// Calling LayerSlider on the target element
 //    $('#layerslider').layerSlider({
	// 	//autoStart: false,
	// 	pauseOnHover: false,
	// 	autoPlayVideos: false,
	// 	skinsPath: '../images/layoutslider/skins/',
	// 	//http://localhost:3000/layoutslider/skins/nonskin/skin.css
	// 	skin: 'nonskin',
	// 	responsive: false, 
	// 	responsiveUnder: 1280, 
	// 	layersContainer: 1280
	// });

	scrollFactory.start();

	$scope.startGallery = function () {
		$('#layerslider').layerSlider({
			//autoStart: false,
			pauseOnHover: false,
			autoPlayVideos: false,
			skinsPath: '../images/layoutslider/skins/',
			//http://localhost:3000/layoutslider/skins/nonskin/skin.css
			skin: 'nonskin',
			responsive: false, 
			responsiveUnder: 1280, 
			layersContainer: 1280
		});
	};
};