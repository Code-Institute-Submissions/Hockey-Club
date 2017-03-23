angular.module("hockey-club", ["ngRoute", "NavDir", "HomeController", "TeamController"]);

angular.module("hockey-club").config(function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: '/html/home.html',
		controller : 'HomeController'
	})
	.when('/teams/mens/first', {
		templateUrl: 'html/teams/mens-first.html',
		controller : 'TeamController'
	})
	.when('/teams/mens/second', {
		templateUrl: 'html/teams/mens-second.html',
		controller : 'TeamController'
	})
	.when('/teams/ladies/first', {
		templateUrl: 'html/teams/ladies-first.html',
		controller : 'TeamController'
	})
	.when('/teams/ladies/second', {
		templateUrl: 'html/teams/ladies-second.html',
		controller : 'TeamController'
	})
	.when('/enquiry', {
		templateUrl: 'html/enquiry.html',
		controller : 'TeamController'
	})
	.when('/media', {
		templateUrl: 'html/media.html',
		controller : 'TeamController'
	});
});