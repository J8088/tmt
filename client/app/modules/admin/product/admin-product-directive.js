(function () {
  'use strict';

  angular.module('jbAdminApp')
    .directive('adminProduct', adminProduct);

  function adminProduct() {
    return {
      restrict: 'AE',
      replace: true,
      scope: {},
      templateUrl: 'modules/admin/product/admin-product-directive.html',
      controller: AdminProductController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  /* @ngInject */
  function AdminProductController(adminProductFactory) {
    var vm = this;

    vm.onDelete = onDelete;
    vm.onEdit = onEdit;
    vm.onCancelled = onCancelled;
    vm.onRefreshed = activate;
    vm.onAdd = onAdd;

    vm.new = false;

    activate();

    function activate() {
      vm.product = {};
      adminProductFactory.getProducts().then(function(response){
        vm.products = response.data.items || [];
      });
    }

    function onAdd(){
      vm.new = true;
    }

    function onEdit(product){
      vm.currentId = product.id;
      vm.productToEdit = product;
      // adminProductFactory.getProduct(product).then(function(response){
      //   angular.extend(vm.product, response.data);
      // });
    }

    function onCancelled(){
      vm.currentId = -1;
      vm.product = {};
      vm.new = false;
    }

    function onDelete(product){
      adminProductFactory.deleteProduct(product).then(
        function(){
          activate();
        }
      );
    }
  }
})();