var app = angular.module("HomeController", []);

app.controller("HomeController", function($scope, $location, store, UserServices, Alerts){
	console.log("HomeController");

	$scope.likes 	 = 0;
	$scope.loginUser = {};
	var URL = "https://morning-castle-91468.herokuapp.com/";

	$scope.plusOne = function(){
		$scope.likes += 1;
	};

    $scope.userLogin = function() {
        if ($scope.loginForm.$valid) {

        	$scope.loginUser.username = $scope.user.username;
	        $scope.loginUser.password = $scope.user.password;
	        
			UserServices.callAPI(URL + "/accounts/register/", $scope.loginUser).then(function(results) { 
				$scope.data = results.data;  

	            Alerts.login_success();
	            store.set('username',  $scope.loginUser.username);
            	store.set('password',  $scope.loginUser.password);
	            // $scope.storeLogin();
	            console.log("Modal Close: " + $scope.$modalInstance);
        	})
			.catch(function(err) {
                Alerts.login_error();
            });
    	}
	};

	$scope.storeLogin = function() {
        UserServices.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {

            $scope.loginUser.token = results.data.token;
            console.log("Username: " + results.data.username);

            store.set('username',  $scope.loginUser.username);
            store.set('password',  $scope.loginUser.password);
            store.set('authToken', $scope.loginUser.token);

        }).catch(function(err) {
            console.log(err.data);
        });
    };
});
