(function () {
    'use strict';

    angular.module('jbAdminApp')
        .directive('fileUpload', fileUpload);

    function fileUpload() {
        return {
            restrict: 'EA',
            scope: {
                onFileUploadedHandler: '&onUploaded',
                productId: '=',
                images: '='
            },
            templateUrl: 'modules/admin/file-upload/file-upload-directive.html',
            controller: FileUploadController,
            controllerAs: 'vm',
            bindToController: true,
            transclude: true
        };
    }

    //FileUploadController.$inject = ['$scope', 'uiUploader'];

    /* @ngInject */
    function FileUploadController($scope, uiUploader, adminProductFactory) {
        var vm = this;
        var uploadUrl = vm.productId ? '/a/files/' + vm.productId + '/product/' : '/a/files/';

        vm.file = {};
        vm.onSelect = onSelect;
        vm.onDownload = onDownload;
        vm.onDelete = onDelete;

        activate();

        function activate() {
            vm.file.isUploading = false;
        }

        function onSelect($files) {
            upload($files);
        }

        function onDownload() {
            //MessagesService.getMessageFile(vm.options.id).then(function (res) {
            //  if(!res.err){
            //    var content = new Blob([res], {type: 'application/octet-stream'});
            //    var arrFiles = [];
            //
            //    arrFiles.push(content);
            //    upload(arrFiles, {nID_Server:nID_Server}, vm.options.id);
            //  }else {
            //    ErrorsFactory.push({type:"danger", text: "Виникла помилка при отриманні файлу"});
            //  }
            //});
        }

        function upload(files) {
            uiUploader.removeAll();
            uiUploader.addFiles(files);

            vm.file.fileName = files[0].name;

            uiUploader.startUpload({
                url: uploadUrl,
                concurrency: 1,
                onProgress: function (file) {
                    vm.file.isUploading = true;
                    $scope.$apply();
                },
                onCompleted: function (file, fileMeta) {
                    var fileObj;

                    try {
                        fileObj = JSON.parse(fileMeta);

                        if(!angular.isArray(vm.images)){
                            vm.images = [];
                        }

                        vm.images.push({id: fileObj.id, name: fileObj.name});
                        console.log(vm.images);
                    } catch (e) {
                        fileObj = {};
                    }

                    if (!fileObj.error) {
                        vm.file.value = fileObj;
                    } else {
                        vm.file.error = fileObj.error;
                    }
                    $scope.$apply();
                },
                onCompletedAll: function () {
                    if (!vm.file.error) {
                        vm.onFileUploadedHandler({file: vm.file});
                    }

                    vm.file.isUploading = false;
                    $scope.$apply();

                    if (vm.file.error) {
                        console.log('uploading Error!!!!');
                    }
                }
            });
        }

        function onDelete(imgId) {
            vm.images = vm.images.filter(function (o) {
                return o.id !== imgId;
            });
        }
    }
})();
