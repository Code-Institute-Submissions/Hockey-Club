var app = angular.module("EnquiryController", []);

app.controller("EnquiryController", function($scope, Alerts){

	console.log("EnquiryController");
	
	$scope.pricelist = {
		senior: 120, 
		junior: 80
	};

	$scope.submitForm = function(dateOfBirth){
		var isPristine = $scope.registrationForm.name.$pristine;
		var todaysDate = new Date();

		if(new Date().getYear() - dateOfBirth.getYear() < 8){
			Alerts.sweet_error();
		} else {
			// Ternary operator. Determines whether or not to show senior or junior sweet alert success
			$scope.user.membership === "Senior" ? 
				Alerts.sweet_success($scope.user.membership, $scope.pricelist.senior) 
				: Alerts.sweet_success($scope.user.membership, $scope.pricelist.junior);	
				
			$scope.resetForm(isPristine);
		}
	};
	
	$scope.resetForm = function(isPristine){
		if(!isPristine){
			$scope.user = {};
			$scope.registrationForm.name.$setPristine();
		}
	};
});