var app = angular.module("TeamController", []);

app.controller("TeamController", [ "$scope", function($scope){
	console.log("TeamController");

	$scope.mens_first = {
		name 	 	: "Mens First", 
		training_1 	: "Monday 8.15pm - 10pm ",
		training_2 	: "Thursday 8.15pm - 10pm", 
		league		: "Western Division 1 ", 
		coach		: "Duncan Letterman ",
		captain		: "Terry Mckribban"
	};

	$scope.mens_second = {
		name 	 	: "Mens Second", 
		training_1 	: "Tuesday 8.15pm - 10pm",
		training_2 	: "Friday 8.15pm - 10pm", 
		league		: "Western Division 2", 
		coach		: "Duncan Letterman",
		captain		: "Tyler Durkan"
	}

	$scope.ladies_first = {
		name 	 	: "Ladies First", 
		training_1 	: "",
		training_2 	: "", 
		league		: "", 
		coach		: "",
		captain		: ""
	}

	$scope.ladies_second = {
		name 	 	: "Ladies Second", 
		training_1 	: "",
		training_2 	: "", 
		league		: "", 
		coach		: "",
		captain		: ""
	}

	$scope.juniors = {
		name 	 	: "Juniors", 
		training	: "Wednesday 5pm - 7pm",
		league		: "Junior", 
		coach		: "Duncan Letterman"
	}
	
}])
