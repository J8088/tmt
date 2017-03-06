(function () {
    'use strict';

    angular.module('jbApp')
        .directive('category', category);

    function category() {
        return {
            restrict: 'AE',
            scope: {
                detail: '=detail',
                onFilterHandler: '&onFilter'
            },
            templateUrl: 'modules/category/category-directive.html',
            controller: CategoryController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    CategoryController.$inject = ['categoryFactory'];

    /*@ngInject*/
    function CategoryController(categoryFactory){
        var vm = this;

        vm.filtered = false;

        vm.onChange = onChange;

        activate();

        function activate(){
            vm.category = angular.copy(vm.detail);
        }

        function onChange(){
            vm.onFilterHandler({item: {key: vm.category, value: vm.filtered}});
        }
    }
})();