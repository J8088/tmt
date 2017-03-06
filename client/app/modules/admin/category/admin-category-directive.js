(function (){
    'use strict';

    angular.module('jbAdminApp')
        .directive('adminCategory', adminCategory);

    function adminCategory(){
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            templateUrl: 'modules/admin/category/admin-category-directive.html',
            controller: AdminCategoryController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    /* @ngInject */
    function AdminCategoryController(adminCategoryFactory){
        var vm = this;

        vm.onDelete = onDelete;
        vm.onEdit = onEdit;
        vm.onCancelled = onCancelled;
        vm.onRefreshed = activate;
        vm.onAdd = onAdd;

        vm.new = false;

        activate();

        function activate(){
            vm.category = {};
            adminCategoryFactory.getCategories().then(function(response){
                vm.categories = response.data.items || [];
            });
        }

        function onAdd(){
            vm.new = true;
        }

        function onEdit(category){
            vm.currentId = category.id;
            adminCategoryFactory.getCategory(category).then(function(response){
                angular.extend(vm.category, response.data);
            })
        }

        function onCancelled(){
            vm.currentId = -1;
            vm.category = {};
            vm.new = false;
        }

        function onDelete(category){
            adminCategoryFactory.deleteCategory(category).then(
                function(){
                    activate();
                }
            );
        }
    }
})();