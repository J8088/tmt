(function () {
    'use strict';

    angular.module('jbApp')
        .directive('content', content);

    function content() {
        return {
            restrict: 'AE',
            replace: true,
            scope: {},
            templateUrl: 'modules/app/content/content-directive.html',
            controller: ContentController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    ContentController.$inject = ['contentFactory', 'categoryFactory'];

    /* @ngInject */
    function ContentController(contentFactory, categoryFactory) {
        var vm = this;
        var categories = [];

        vm.onFilter = onFilter;

        activate();

        function activate() {
            processCategories();
        }

        function processCategories(){
            categoryFactory.getCategories().then(function (response) {
                vm.categories = response.data.items || [];
                processContent();
            });
        }

        function processContent(params){
            contentFactory.get(params).then(function (data) {
                vm.content = data;
            });
        }

        function onFilter(item){
            if(item.value){
                var check = categories.some(function(i){
                    return i === item.key.id;
                });

                if(!check){
                    categories.push(item.key.id);
                }
            }else{
                categories = categories.filter(function(i){
                    return i !== item.key.id;
                });
            }
            contentFactory.filterByCategory(categories).then(function (response) {
                vm.content = response.data;
            });
        }

        function countProductsByCategory(){
            vm.categories.forEach(function(cat, i){
                var producCount = vm.content.items.reduce(function(res, current){
                    var result = 0;
                    var check = current.categories.some(function(item){
                       return item.id === cat.id;
                    });

                    return check ? ++result : result;
                });
                angular.extend(item, {productsCount: 0});
            });
        }
    }
})();