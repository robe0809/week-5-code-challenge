var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/messages', {
            templateUrl: 'index.html',
            controller: 'MessageController as vm'
        })
        .otherwise(
            { redirectTo: '/messages' }
        );
    
});