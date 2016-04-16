'use strict';

module.exports = function () {
	return function (string) {
		return string.split('').reverse().join('');
	}
};


// angular.module('MyApp', [])
// .filter('reverse',[function(){
//     return function(string){
//         return string.split('').reverse().join('');
//     }
// }])