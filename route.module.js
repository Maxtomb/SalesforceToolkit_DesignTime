angular.module('route',['ngRoute'])
	.config(function($routeProvider) {
    $routeProvider
    .when('/test', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/tt', {
      templateUrl: 'views/day.html',
      controller: 'DayCtrl'
    })