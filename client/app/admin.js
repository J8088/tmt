'use strict';

angular.module('jbAdminApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'angularMoment',
    'ui.uploader'
]).config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'modules/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'vm'
    });
}).run(function (amMoment, $rootScope) {
    amMoment.changeLocale('uk');
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
        var message;
        if (error.status === 403) {
            message = error.data.message;
        }
    });
});