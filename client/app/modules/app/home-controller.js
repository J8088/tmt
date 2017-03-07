(function () {
  'use strict';


  angular.module('tmtApp')
    .controller('HomeController', HomeController);

  function HomeController($scope) {
    $scope.weblinks = [{
    	name: 'Home Page',
    	link: 'http://tnt.org',
    	info: 'Task manager'
    }];
  }

})();

