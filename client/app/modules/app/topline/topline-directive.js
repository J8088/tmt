(function () {
  'use strict';

  angular.module('jbApp')
    .directive('topLine', topline);

  function topline() {
    return {
      restrict: 'AE',
      replace: true,
      scope:{},
      templateUrl: 'modules/app/topline/topline-directive.html',
      controller: TopLineController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  /* @ngInject */
  function TopLineController() {
    var vm = this;
  }
})();