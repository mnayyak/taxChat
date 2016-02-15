var facebookService = angular.module('facebookService', []);

facebookService.factory('Facebook', function($http){

var facebookFactory = {};

facebookFactory.loginFromFacebook = function () {
	console.log("Inside Function loginFromFacebook");
	return $http.get('/api/auth/facebook');
	//return $http.get('/api/test');
}

return facebookFactory;
});