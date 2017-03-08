'use strict';

angular.module('globalDependencies', [])
  .factory('_', function() {
    return window._;
  });
