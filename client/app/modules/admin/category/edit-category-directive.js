(function () {
    'use strict';

    angular.module('jbAdminApp')
        .directive('editCategory', editCategory);

    function editCategory() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                onCancelHandler: '&onCancelled',
                onRefreshHandler: '&onRefreshed',
                categoryId: '='
            },
            templateUrl: 'modules/admin/category/edit-category-directive.html',
            controller: EditCategoryController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    EditCategoryController.$inject = ['$scope', 'adminCategoryFactory'];

    /*@ngInject*/
    function EditCategoryController($scope, adminCategoryFactory) {
        var vm = this;

        vm.onSave = onSave;
        vm.onCancel = onCancel;

        activate();

        function activate() {
            vm.category = {};

            if (vm.categoryId > 0) {
                adminCategoryFactory.getCategory({id: vm.categoryId}).then(function (response) {
                    vm.category = response.data || {};
                });
            }
        }

        function onSave() {
            var categoryDraft = angular.copy(vm.category);

            if (categoryDraft.id) {
                adminCategoryFactory.updateCategory(categoryDraft).then(function () {
                    activate();
                    vm.onCancelHandler();
                    vm.onRefreshHandler();
                });
            } else {
                adminCategoryFactory.addCategory(categoryDraft).then(function () {
                    activate();
                    vm.onCancelHandler();
                    vm.onRefreshHandler();
                });
            }
        }

        function onCancel() {
            vm.onCancelHandler();
        }
    }
})();