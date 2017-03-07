(function () {
  'use strict';

  angular.module('tmtApp')
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

  ContentController.$inject = ['contentFactory'];

  /* @ngInject */
  function ContentController(contentFactory) {
    var vm = this;

    vm.addTask = addTask;
    vm.removeTask = removeTask;

    activate();

    function activate() {
      processContent();
    }

    function processContent() {
      vm.content = {};
      contentFactory.get().then(function (data) {
        vm.content.items = data.items;
      });
    }

    function addTask(taskData) {
      contentFactory.add(taskData).then(function (data) {
        vm.content.items.push(data.items);
      });
    }

    function removeTask(taskData) {
      contentFactory.remove(taskData).then(function (data) {
        processContent();
      });
    }
  }
})();