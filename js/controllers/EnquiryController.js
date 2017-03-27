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
		} else {
			Alerts.sweet_success($scope.user.membership, $scope.pricelist.junior);
		}

	};
});