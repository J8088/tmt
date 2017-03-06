(function () {
    'use strict';


    angular.module('jbAdminApp')
        .controller('AdminController', AdminController);

    function AdminController($scope) {
        var vm = this;

        $scope.weblinks = [{
            name: 'Admin Page',
            link: 'http://jbeam.com',
            info: 'e-market'
        }];

        vm.currentTab = 'mainProductsForm';
    }
})();

