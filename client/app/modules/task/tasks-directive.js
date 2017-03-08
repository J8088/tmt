(function () {
  'use strict';

  angular.module('tmtApp.task')
    .directive('tasks', tasks);

  function tasks() {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        taskList: '=',
        removeHandler: '&onRemove',
        updateHandler: '&onUpdate'
      },
      templateUrl: 'modules/task/tasks-directive.html',
      controller: TasksController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  TasksController.$inject = ['_'];

  function TasksController(_) {
    var vm = this;

    vm.save = save;
    vm.remove = remove;

    activate();

    function activate() {
      vm.tasks = vm.taskList.items;
    }

    function save(params) {
      vm.updateHandler({taskData: params});
    }

    function remove(data) {
      vm.removeHandler({taskData: data});
    }
  }
})();