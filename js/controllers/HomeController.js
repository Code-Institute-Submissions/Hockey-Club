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

	$scope.subscribe = function(newsletter){
		console.log($scope.newsletter);
		Alerts.subscriptionSuccess($scope.newsletter);
	};

    $scope.userLogin = function() {
        if ($scope.loginForm.$valid) {

        	$scope.loginUser.username = $scope.user.username;
	        $scope.loginUser.password = $scope.user.password;
	        console.log("Login User: " + $scope.loginUser.username + 
	        			"\nLogin Password: "+ $scope.loginUser.password +
	        			"\nUser Username: " + $scope.user.username + 
	        			"\nUser Password: " + $scope.user.password);
	        
			UserServices.callAPI(URL + "accounts/register/", $scope.loginUser).then(function(results) { 
				// $scope.data 		= results.data; 
				
	            $scope.storeDetails($scope.loginUser.username, $scope.loginUser.password);
	            Alerts.loginSuccess();
	            $scope.showUsername = $scope.user.username;
        	})
			.catch(function(err) {
                Alerts.loginError(err);
            });
    	}
	};

	$scope.storeDetails = function(username, password) {
		$scope.loginUser.username = username;
		$scope.loginUser.password = password;
        UserServices.callAPI(URL + "accounts/api-token-auth/", $scope.loginUser).then(function(results) {

            $scope.loginUser.token = results.data.token;
            
            store.set('username',  username);
            store.set('password',  password);
            store.set('authToken', $scope.loginUser.token);

        }).catch(function(err) {
           	Alerts.loginError(err.data);
        });
    };
});
