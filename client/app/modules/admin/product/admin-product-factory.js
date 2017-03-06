(function () {
    'use strict';

    angular
        .module('jbAdminApp')
        .factory('adminProductFactory', adminProductFactory);

    adminProductFactory.$inject = ['$http'];

    function adminProductFactory($http) {
        var service = {
            addProduct: addProduct,
            getProducts: getProducts,
            getProduct: getProduct,
            updateProduct: updateProduct,
            deleteProduct: deleteProduct,
            addImage: addImage
        };

        return service;

        function addProduct(product) {
            var req = {
                method: 'POST',
                url: '/a/catalog/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(product)
            };

            return $http(req);
        }

        function getProducts() {
            var req = {
                method: 'GET',
                url: '/a/catalog',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            return $http(req);
        }

        function getProduct(product) {
            var req = {
                method: 'GET',
                url: '/a/catalog/' + product.id + '/product/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(product)
            };

            return $http(req);
        }

        function updateProduct(product) {
            var req = {
                method: 'PUT',
                url: '/a/catalog/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(product)
            };
            return $http(req);
        }

        function deleteProduct(product) {
            var req = {
                method: 'DELETE',
                url: '/a/catalog/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(product)
            };

            return $http(req);
        }

        function addImage(img) {
            var req = {
                method: 'POST',
                url: '/a/catalog/add/image',
                headers: {
                    'Content-Type': undefined
                },
                data: img
            };

            return $http(req);
        }
    }

})();