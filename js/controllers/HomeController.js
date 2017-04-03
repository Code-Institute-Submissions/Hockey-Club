var app = angular.module("HomeController", []);

app.controller("HomeController", function($scope, $location, store, UserServices, Alerts){

	$scope.likes 	 	  = store.get('likes');
	$scope.loginUser 	  = {};
	$scope.showUsername   = "Login";
	var URL = "https://morning-castle-91468.herokuapp.com/";

	$scope.plusOne = function(){
		$scope.likes += 1;
		store.set("likes", $scope.likes);
	};

    $scope.userLogin = function() {
        if ($scope.loginForm.$valid) {

        	$scope.loginUser.username = $scope.user.username;
	        $scope.loginUser.password = $scope.user.password;
	        
			UserServices.callAPI(URL + "accounts/register/", $scope.loginUser).then(function(results) { 
				// $scope.data 		= results.data; 
				$scope.showUsername = $scope.user.username;

	            Alerts.login_success();
	            $scope.storeDetails($scope.loginUser.username, $scope.loginUser.password);
        	})
			.catch(function(err) {
                Alerts.login_error(err);
            });
    	}
	};

	$scope.storeDetails = function(username, password) {
        UserServices.callAPI(URL + "accounts/api-token-auth/", $scope.data).then(function(results) {

            $scope.loginUser.token = results.data.token;
            console.log("Username: " + username + "\nPassword: " + password + "\nLikes: " + store.get("likes"));

            store.set('username',  username);
            store.set('password',  password);
            store.set('authToken', $scope.loginUser.token);

        }).catch(function(err) {
            console.log(err.data);
        });
    };
});
