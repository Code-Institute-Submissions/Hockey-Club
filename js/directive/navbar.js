var app = angular.module("NavDir", []);

app.directive("navbar", function(){
	return{
		restrict	: "A", 
		templateUrl : "/Hockey-Club/html/directive/navbar.html",
		controller  : "HomeController"
	};
});
