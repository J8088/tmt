(function(){
  'use strict';

  angular.module('jbApp')
    .directive('horizontalNav', horizontalNav);

  function horizontalNav(){
    return{
      restrict: 'AE',
      replace: true,
      scope:{},
      templateUrl: 'modules/app/navigation/horizontal/horizontal-nav-directive.html',
      controller: HorizontalContoller,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function HorizontalContoller(){
    var vm = this;
  }
})();