(function () {
  'use strict';

  angular
    .module('tmtApp.task')
    .directive('editTask', editTask);

  function editTask($uibModal) {
    return {
      restrict: 'A',
      scope: {
        editTask: '&',
        editData: '='
      },
      link: function (scope, elem, attrs) {
        elem.bind('click', function (event) {
          var animationsEnabled = true;

          if (event) {
            event.stopPropagation();
            event.preventDefault();
          }

          $uibModal.open({
            animation: animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'modules/task/modal-task-edit-directive.html',
            controller: EditTaskController,
            controllerAs: 'vm',
            resolve: {
              confirmationHandler: function () {
                return scope.editTask;
              },
              editData: scope.editData
            },
            keyboard: false
          });
        });

      }
    };
  }

  // EditTaskController.$inject = ['$uibModal'];

  function EditTaskController($uibModalInstance, confirmationHandler, editData) {
    var vm = this;

    vm.statuses = [{
      name: 'Submitted'
    }, {
      name: 'InProgress'
    }, {
      name: 'Finished'
    }];

    activate();

    function activate() {
      vm.editData = editData;

      vm.status = vm.statuses.filter(function (item) {
        return item.name === editData.status;
      })[0];
    }

    vm.ok = function () {
      vm.editData.status = vm.status.name;
      confirmationHandler({params: vm.editData});
      $uibModalInstance.close();
    };

    vm.cancel = function () {
      $uibModalInstance.dismiss();
    };
  }
}());
