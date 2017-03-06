(function () {
    'use strict';

    angular.module('jbApp')
        .directive('product', product);

    function product() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                detail: '=detail'
            },
            templateUrl: 'modules/product/product-directive.html',
            controller: ProductController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    /* @ngInject */
    function ProductController() {
        var vm = this;

        activate();

        function activate() {
            vm.thumbnail = vm.detail.images[0] ? '/a/files/' + vm.detail.images[0].id : '';
        }
    }
})();