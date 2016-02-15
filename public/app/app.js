angular.module('MyApp', ['ngRoute', 'appRoute', 'facebookService', 'facebookController'])
.config(function($httpProvider) {

        $httpProvider.defaults.useXDomain = true;

        delete $httpProvider.defaults.headers.common['X-Requested-With'];

    }

);
/*.config(function($httpProvider){
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});*/
/*.config(function($httpProvider){
	$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
})*/


