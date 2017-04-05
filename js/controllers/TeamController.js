var app = angular.module("TeamController", []);

app.controller("TeamController", [ "$scope", function($scope){

	$scope.mens_first = {
		name 	 	: "Mens First", 
		training_1 	: "Monday 8.15pm - 10pm ",
		training_2 	: "Thursday 8.15pm - 10pm", 
		league		: "Western Division 1 ", 
		coach		: "Duncan Letterman ",
		captain		: "Terry Mckribban",
		likes 		: 0
	};

	$scope.mens_second = {
		name 	 	: "Mens Second", 
		training_1 	: "Tuesday 8.15pm - 10pm",
		training_2 	: "Friday 8.15pm - 10pm", 
		league		: "Western Division 2", 
		coach		: "Duncan Letterman",
		captain		: "Tyler Durkan",
		likes 		: 0
	}

	$scope.ladies_first = {
		name 	 	: "Ladies First", 
		training_1 	: "Monday 8.15pm - 10pm ",
		training_2 	: "Thursday 8.15pm - 10pm", 
		league		: "Western Division 1 ", 
		coach		: "Duncan Letterman ",
		captain		: "Ashley Rickards",
		likes 		: 0
	}

	$scope.ladies_second = {
		name 	 	: "Ladies Second", 
		training_1 	: "Tuesday 8.15pm - 10pm",
		training_2 	: "Friday 8.15pm - 10pm", 
		league		: "Western Division 2", 
		coach		: "Duncan Letterman",
		captain		: "Veronica Mars",
		likes 		: 0
	}

	$scope.juniors = {
		name 	 	: "Juniors", 
		training	: "Wednesday 5pm - 7pm",
		league		: "Junior", 
		coach		: "Duncan Letterman",
		likes 		: 0
	}
}])
