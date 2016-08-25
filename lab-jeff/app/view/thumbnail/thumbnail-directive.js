'use strict';

const angular = require('angular');
const lorApp = angular.module('lorApp');

lorApp.directive('jgThumbnailDirective', function(){
  return {
    restrict: 'EAC',
    scope: {
      description: '@',
      title: '@',
      url: '@',
    },
    bindToController: true,
    controller: 'ThumbnailController',
    controllerAs: 'thumbnailCtrl',
    template: require('./thumbnail-directive-template.html'),
  };
});
