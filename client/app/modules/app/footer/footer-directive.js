(function(){
  'use strict';

  angular.module('jbApp')
    .directive('footer', footer);

  function footer(){
    return {
      restrict: 'AE',
      replace: true,
      scope:{},
      templateUrl: 'modules/app/footer/footer-directive.html',
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function FooterController(){
    var vm = this;
  }
})();