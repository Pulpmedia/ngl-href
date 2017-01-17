'use strict';

/**
 * @ngdoc directive
 * @name nglHref.directive:nglHref
 * @description This directive provides a  method to navigate in an application, htmlmode or not
 * # nglHref
 */
 /*commonjs support*/
 if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
      module.exports = 'nglHref';
}

angular.module('nglHref',[])
  .directive('nglHref', ['$location',function (location) {
    return {
      restrict: 'A',
      scope: {
        path: '@nglHref'
      },
      link: function postLink(scope, element, attrs) {
        attrs.$set('href',scope.path);
        element[0].onclick = function(evt) {
          if (!evt.metaKey) {
            evt.preventDefault();
            location.path(scope.path); // in same tab
          }
          scope.$apply();
        }
      }
    };
  }]);
