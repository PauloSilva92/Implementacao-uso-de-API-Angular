(function(){
	'use strict';
	
	angular
	.module('myapp')
	
	.config(interceptorPush);
	
	interceptorPush.$inject = ['$httpProvider'];
	
	function interceptorPush($httpProvider){
		$httpProvider.interceptors.push('authInterceptor');
	}
})()