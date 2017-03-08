(function () {
  'use strict';

  angular.module('tmtApp.content')
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

  ContentController.$inject = ['contentFactory', '$filter'];

  function ContentController(contentFactory, $filter) {
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
        formatDataArr(vm.content.items);
      });
    }

    function addTask(taskData) {
      contentFactory.add(taskData).then(function (data) {
        vm.content.items.push(data.items);
        formatDataArr(vm.content.items);
      });
    }

    function removeTask(taskData) {
      contentFactory.remove(taskData).then(function (data) {
        processContent();
      });
    }

    function formatDataArr(dataArr){
      dataArr.forEach(function (item) {
        return _.extend(item, {
          added: $filter('date')(item.added, 'medium'),
          finished: $filter('date')(item.finished, 'medium')
        });
      });
    }
  }
})();