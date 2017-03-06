(function () {
  'use strict';

  angular.module('jbApp')
    .directive('header', header);

  function header() {
    return {
      restrict: 'AE',
      replace: true,
      scope:{},
      templateUrl: 'modules/app/header/header-directive.html',
      controller: HeaderController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  /* @ngInject */
  function HeaderController() {
    var vm = this;
  }
})();