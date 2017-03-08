(function () {
  'use strict';

  angular.module('tmtApp.content')
    .factory('contentFactory', contentFactory);

  function contentFactory($http) {
    var service = {
      add: add,
      get: getAll,
      getById: getById,
      remove: remove
    };
    return service;

    function add(data) {
      var url = '/a/tasks/add';

      return $http.post(url, data).then(function (response) {
        return response.data;
      });
    }

    function remove(data) {
      var url = '/a/tasks/delete';

      return $http.post(url, data).then(function (response) {
        return response.data;
      });
    }

    function getAll() {
      var url = '/a/tasks';

      return $http.get(url).then(function (response) {
        return response.data;
      });
    }

    function getById(params) {
      var query = ['/a/tasks',
        params && params.task_id ? '/' + params.task_id : ''].join('');

      return $http.get(query).then(function (response) {
        return response.data;
      });
    }
  }
})();