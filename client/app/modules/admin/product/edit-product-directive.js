(function () {
    'use strict';

    angular.module('jbAdminApp')
        .directive('editProduct', editProduct);

    function editProduct() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                onCancelHandler: '&onCancelled',
                onRefreshHandler: '&onRefreshed',
                productId: '=',
                product: '=?product'
            },
            templateUrl: 'modules/admin/product/edit-product-directive.html',
            controller: EditProductController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    /*@ngInject*/
    function EditProductController($scope, adminProductFactory, adminCategoryFactory) {
        var vm = this;

        vm.onSave = onSave;
        vm.onCancel = onCancel;
        vm.onFileUploadSuccess = onFileUploadSuccess;

        activate();

        function activate() {
            // vm.product = {};
            // vm.categories = {};

            // adminCategoryFactory.getCategories().then(function(response){
            //     vm.categories = response.data;
            // });

            // if (vm.productId > 0) {
            //     adminProductFactory.getProduct({id: vm.productId}).then(function (response) {
            //         vm.product = response.data || {};
            //         console.log('@#@#vm.product.id', vm.product.id);
            //         $scope.$broadcast('event:productDownloadFinished', true);
            //     });
            // }
        }

        function onSave() {
            var productDraft = angular.copy(vm.product);

            // if (productDraft.categories) {
            //     productDraft.categories = productDraft.categories.split(';').map(function (i) {
            //         return {name: i};
            //     });
            // }

            if (productDraft.id) {
                adminProductFactory.updateProduct(productDraft).then(function () {
                    activate();
                    vm.onCancelHandler();
                    vm.onRefreshHandler();
                });
            } else {
                adminProductFactory.addProduct(productDraft).then(function () {
                    activate();
                    vm.onCancelHandler();
                    vm.onRefreshHandler();
                });
            }
        }

        function onCancel() {
            vm.onCancelHandler();
        }

        function onFileUploadSuccess(file) {
            if (!angular.isArray(vm.product.images)) {
                vm.product.images = []
            }
        }
    }
})();