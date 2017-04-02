var app = angular.module("CarouselDir", []);

app.directive("carousel", function(){
	return{
		restrict	: "A", 
		templateUrl : "html/directive/carousel.html",
		controller  : "MediaController"
	};
});