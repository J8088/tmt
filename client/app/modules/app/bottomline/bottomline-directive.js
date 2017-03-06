(function(){
  'use strict';

  angular.module('jbApp')
    .directive('bottomLine', bottomLine);

  function bottomLine(){
    return {
      restrict: 'AE',
      replace: true,
      scope:{},
      templateUrl: 'modules/app/bottomline/bottomline-directive.html',
      controller: BottomLineController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  function BottomLineController($scope){
    var vm = this;
  }
})();