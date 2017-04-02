var app = angular.module("UserService",[]);

app.factory("UserServices", function($http){

	UserServices = {
		callAPI: function(url, data){
			return $http.post(url, data);
		}
	};

	return UserServices;
});