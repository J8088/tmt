(function(){
  'use strict';

  angular.module('tmtApp')
    .directive('tasks', tasks);

  function tasks() {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        taskList: '=',
        removeHandler: '&onRemove'
      },
      templateUrl: 'modules/task/tasks-directive.html',
      controller: TasksController,
      controllerAs: 'vm',
      bindToController: true
    };
  }

  /* @ngInject */
  function TasksController($scope) {
    var vm = this;

    vm.remove = remove;

    activate();

    function activate() {
      vm.tasks = vm.taskList.items;
    }

    function remove(data){
      vm.removeHandler({taskData: data});
    }
  }
})();