'use strict';

/**
 * @ngdoc function
 * @name therapiepapstApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the therapiepapstApp
 */
angular.module('therapiepapstApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.map = { 
    	center: { 
    		latitude: 48.315545, 
    		longitude: 14.280145 
    	},
		options: {
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			mapTypeControl: true
		},
    	zoom: 18
    };

  });
