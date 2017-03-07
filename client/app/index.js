'use strict';

angular.module('tmtApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'angularMoment'
]).config(function ($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'modules/app/home.html',
        controller: 'HomeController'
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
