(function () {
  'use strict';


  angular.module('jbApp')
    .controller('HomeController', HomeController);

  function HomeController($scope) {
    $scope.weblinks = [{
    	name: 'Home Page',
    	link: 'http://jbeam.com',
    	info: 'e-market'
    }];
  }

})();

