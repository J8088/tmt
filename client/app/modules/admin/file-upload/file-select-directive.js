'use strict';

angular.module('jbAdminApp')
  .directive('fileSelect', [
      '$parse',
      function ($parse) {
        return {
          scope: {
            ngDisabled: '=',
            onFileSelect: '&'
          },
          templateUrl: 'modules/admin/file-upload/file-select-directive.html',
          link: function buttonFileSelect(scope, element) {
            var fileField = element.find('input[type="file"]');
            fileField.bind('change', function (event) {
              if (event.target.files && event.target.files.length > 0) {
                $parse(scope.onFileSelect)({
                  $files: event.target.files
                });
              }
            });

            element.find('button').bind('click', function () {
              fileField[0].click();
            });
          },
          transclude: true
        }
      }
    ]
  );
