(function () {
    'use strict';

    angular.module('jbApp')
        .factory('contentFactory', contentFactory);

    function contentFactory($http) {
        var service = {
            get: get,
            filterByCategory: filterByCategory
        };
        return service;

        function get(params) {
            var query = ['/a/catalog',
                params && params.product_id ? '/' + params.product_id + '/product/' : '',
                params && params.category_id ? '/' + params.category_id + '/category/' : ''].join('');

            return $http.get(query).then(function (response) {
                return response.data;
            });
        }

        function filterByCategory(categories) {
            var req = {
                method: 'POST',
                url: '/a/catalog/categories/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(categories)
            };
            return $http(req);
        }
    }
})();