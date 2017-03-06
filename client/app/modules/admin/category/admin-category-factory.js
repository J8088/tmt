(function () {
    'use strict';

    angular.module('jbAdminApp')
        .factory('adminCategoryFactory', adminCategoryFactory);

    adminCategoryFactory.$inject = ['$http'];

    function adminCategoryFactory($http) {
        return {
            addCategory: addCategory,
            getCategories: getCategories,
            getCategory: getCategory,
            updateCategory: updateCategory,
            deleteCategory: deleteCategory
        };

        function addCategory(category) {
            var req = {
                method: 'POST',
                url: '/a/categories/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(category)
            };
            return $http(req);
        }

        function getCategories(params) {
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

        function getCategory(category) {
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

        function updateCategory(category) {
            var req = {
                method: 'PUT',
                url: '/a/categories/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(category)
            };
            return $http(req);
        }

        function deleteCategory(category) {
            var req = {
                method: 'DELETE',
                url: '/a/categories/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(category)
            };
            return $http(req);
        }
    }
})();