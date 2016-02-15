var appRoute = angular.module('appRoute', ['ngRoute']);

appRoute.config(function($routeProvider, $locationProvider) {
	
	$routeProvider

		.when('/', {
			templateUrl: '/app/view/facebookLogin.html',
			controller: 'FacebookController'
		})
		.when('/chatroom', {
			templateUrl: '/app/view/index.html'
		})

	$locationProvider.html5Mode(true);
});
