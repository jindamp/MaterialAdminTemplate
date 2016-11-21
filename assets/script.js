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

textileApp.controller('DashBoardController', function($scope) {
    
    $scope.message = 'Pavan';
    $scope.designs = ["Design 1","Design 2","Design 3","Design 4","Design 5","Design 6"];
});
textileApp.controller('DesignDetailsController', function($scope) {
    
    $scope.message = 'Pavan';
    $scope.designs = ["Design 1","Design 2","Design 3","Design 4","Design 5","Design 6"];
});
textileApp.controller('welcomeController', function($scope) {
    
});