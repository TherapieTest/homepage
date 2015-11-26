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
      marker: {
        center: {
          latitude: 48.315545,
          longitude: 14.280145
        },
        options: {
          //icon: 'favicon.ico',
          icon: 'images/marker.svg',
          title: 'Therapie Papst - Praxis'
        }
      },

      //options: SATELLITE, ROADMAP, HYBRID, TERRAIN
      //mapTypeIdWorkaround: 'google.maps.MapTypeId.SATELLITE',

      options: {
        //mapTypeId: this.map.mapTypeIdWorkaround,
        //mapTypeId: 'google.maps.MapTypeId.SATELLITE',
        mapTypeControl: true,
        draggable: false,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        minZoom: 12,
        maxZoom: 17,
        styles: [
          {
            featureType: 'poi',
            //elementType: 'labels',
            stylers: [
              {visibility: 'off'}
            ]
          }
        ]
      },

      zoom: 15,
    };
  }).directive('scrollTo', function ($location, $anchorScroll) {
      return function (scope, element, attrs) {

        element.bind('click', function (event) {
          event.stopPropagation();
          var off = scope.$on('$locationChangeStart', function (ev) {
            off();
            ev.preventDefault();
          });
          var location = attrs.scrollTo;
          $location.hash(location);
          $anchorScroll();
        });

      };
    });
