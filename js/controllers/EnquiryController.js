var app = angular.module("EnquiryController", []);

app.controller("EnquiryController", function($scope, Alerts){

	console.log("EnquiryController");

	$scope.registrationUser = {};

	$scope.pricelist = {
		senior: 120, 
		junior: 80
	};

	$scope.submitForm = function(){
		console.log("Form Submitted");

		if($scope.user.memberhip === "Senior"){
			Alerts.sweet_success($scope.user.membership, $scope.pricelist.senior);
			$scope.resetForm();
		} else {
			Alerts.sweet_success($scope.user.membership, $scope.pricelist.junior);
			$scope.resetForm();
		}
	};

	$scope.calculateAge = function(dateOfBirth){
		// Function that will roughly get the age of an enqury and 
		// calculate if the player is old enough to play for the club

		var todaysDate = new Date();

		if(todaysDate.getYear() - dateOfBirth.getYear() < 8){
			Alerts.sweet_error();
		} else {
			$scope.submitForm();
		}
	};

	$scope.resetForm = function(){
		$scope.registrationUser = {};
		$scope.registrationForm.$pristine = true;
	};
});