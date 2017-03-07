(function () {
  'use strict';

  angular.module('tmtApp')
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
  function AddTaskController($scope) {
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
      vm.task = {status: vm.statuses[0]};
    }

    function add() {
      vm.addHandler({
        taskData: {
          name: vm.task.name,
          description: vm.task.description,
          status: vm.task.status.name
        }
      });
    }
  }
})();