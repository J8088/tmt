'use strict';

angular.module('jbApp')
  .directive('showError', function () {
    return {
      template: '<h4>Помилка</h4><p>{{data.code}}: {{data.message}}</p>',
      restrict: 'E',
      scope: {
        data: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });
