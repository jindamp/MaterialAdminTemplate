// app.js
var textileApp = angular.module('textileApp', ['ui.router'])
    
    .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/404');
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'JS/Welcome/welcome.html',
            controller : 'welcomeController'
        }).state('404', {
            url: '/404',
            templateUrl: 'JS/pageNotFound/404.html',
            controller : 'welcomeController'
        })
        .state('designDetails', {
            url: '/designDetails',
            templateUrl: 'JS/DesignDetails/designDetails.html',
            controller : 'DesignDetailsController'
        }).state('dashboard', {
            url: '/dashboard',
            templateUrl: 'JS/Dashboard/dashboard.html',
            controller : 'DashBoardController'
        });
        
});