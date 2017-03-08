(function () {
  'use strict';

  angular.module('tmtApp.task')
    .directive('addTask', addTask);

  function addTask() {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        addHandler: '&onAdd'
      },
      templateUrl: 'modules/task/add-task-directive.html',
      controller: AddTaskController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  /* @ngInject */
  function AddTaskController() {
    var vm = this;

    vm.statuses = [{
      name: 'Submitted'
    }, {
      name: 'InProgress'
    }, {
      name: 'Finished'
    }];

    vm.add = add;

    activate();

    function activate() {
      vm.task = {status: vm.statuses[0].name};
    }

    function add() {
      var taskDraft = angular.copy(vm.task);

      vm.addHandler({
        taskData: {
          name: taskDraft.name,
          description: taskDraft.description,
          status: taskDraft.status,
          added: new Date(),
          finished: null
        }
      });

      clear();
    }

    function clear(){
      vm.task.name = undefined;
      vm.task.description = '';
      vm.status = vm.statuses[0].name;
    }
  }
})();