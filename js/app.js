angular.module("hockey-club", ["ngRoute", "NavDir", "CarouselDir", "HomeController", 
							   "TeamController", "EnquiryController", "SweetAlerts",
							   "MediaController", "angular-storage", "UserService",
							   "ngMaterial", "ngAria"]);

angular.module("hockey-club").config( function($locationProvider, $routeProvider){
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: '/Hockey-Club/html/home.html',
		controller : 'HomeController'
	})
	.when('/teams/mens/first', {
		templateUrl: '/Hockey-Club/html/teams/mens-first.html',
		controller : 'TeamController'
	})
	.when('/teams/mens/second', {
		templateUrl: '/Hockey-Club/html/teams/mens-second.html',
		controller : 'TeamController'
	})
	.when('/teams/ladies/first', {
		templateUrl: '/Hockey-Club/html/teams/ladies-first.html',
		controller : 'TeamController'
	})
	.when('/teams/ladies/second', {
		templateUrl: '/Hockey-Club/html/teams/ladies-second.html',
		controller : 'TeamController'
	})
	.when('/teams/juniors', {
		templateUrl: '/Hockey-Club/html/teams/juniors.html',
		controller : 'TeamController'
	})
	.when('/enquiry', {
		templateUrl: '/Hockey-Club/html/enquiry.html',
		controller : 'EnquiryController'
	})
	.when('/media/images', {
		templateUrl: '/Hockey-Club/html/media/image-carousel.html',
		controller : 'MediaController'
	});
});
