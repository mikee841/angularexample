var app = angular.module('app', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('etusivu', {
        url: '/',
        templateUrl: 'partials/etusivu.htm'
        })
        .state('laskuri', {
        url: '/laskuri',
        templateUrl: 'partials/laskuri.htm',
        })
        .state('taulukko', {
        url: '/taulukko',
        templateUrl: 'partials/taulukko.htm',
        });
});