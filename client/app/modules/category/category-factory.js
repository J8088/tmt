(function () {
    'use strict';

    angular.module('jbApp')
        .factory('categoryFactory', categoryFactory);

    categoryFactory.$inject = ['$http'];

    function categoryFactory($http){
        return {
            getCategories: getCategories,
            getCategory: getCategory
        };

        function getCategories(params){
            var req = {
                method: 'GET',
                url: '/a/categories',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: params || {}
            };
            return $http(req);
        }

        function getCategory(category){
            var req = {
                method: 'GET',
                url: '/a/categories/' + category.id,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(category)
            };
            return $http(req);
        }
    }
})();