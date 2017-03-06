(function () {
    'use strict';

    angular.module('jbAdminApp')
        .directive('categoriesSelector', categoriesSelector);

    function categoriesSelector() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
                product: '=?product'
            },
            templateUrl: 'modules/admin/product/components/categories/categories-selctor-directive.html',
            controller: CategoriesSelectorController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    CategoriesSelectorController.$inject = ['$scope', 'adminCategoryFactory'];

    /*@ngInject*/
    function CategoriesSelectorController($scope, adminCategoryFactory) {
        var vm = this;
        var searchQuery;

        vm.search = search;
        vm.addCategory = addCategory;
        vm.isCategoryAdded = isCategoryAdded;
        vm.removeCategory = removeCategory;
        vm.categories = [];

        activate();

        function activate() {
            vm.product = vm.product || {};
            searchQuery = {
                productId: vm.product.id || -1
            };
            adminCategoryFactory.getCategories({query: angular.toJson(searchQuery)}).then(function (responce) {
                vm.categories = responce.data.items;
            });

            $scope.$watchCollection('vm.categories', function (categories) {
                vm.categoriesIds = categories.map(function (o) {
                    return o.id;
                });
            });
        }

        function isCategoryAdded(categoriesId){
            return !!vm.categories.filter(function(i){
                return i.id === categoriesId;
            }).length;
        }

        function search($event) {
            if ($event) {
                $event.preventDefault();
            }

            vm.currentPage = 1;
            searchQuery = {
                search: vm.query,
                page: vm.currentPage,
                rows: vm.itemsPerPage
            };
            vm.searching = true;

            adminCategoryFactory.getCategories({query: angular.toJson(searchQuery)})
                .then(function (responce) {
                    vm.itemCount = responce.data.total;
                    vm.items = responce.data.items;
                })
                .finally(function(){
                    vm.searching = false;
                });

            return false;
        }

        function addCategory(category){
            var categoriesAdded = vm.categories.filter(function (i) {
                return category.id === i.id;
            });

            if(!categoriesAdded.length){
                vm.categories.push(category);
                vm.product.categories = vm.product.categories || [];
                angular.extend(vm.product.categories, vm.categories);
            }
        }

        function removeCategory(category){
            vm.categories = vm.categories.filter(function (i) {
                return category.id != i.id;
            });
            vm.product.categories = angular.copy(vm.categories);
        }
    }
})();