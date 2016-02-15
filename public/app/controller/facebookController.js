var facebookController = angular.module('facebookController', ['facebookService']);

facebookController.controller('FacebookController', function($scope, Facebook){

	$scope.loginFacebook = function(){
		Facebook.loginFromFacebook();
	}
});