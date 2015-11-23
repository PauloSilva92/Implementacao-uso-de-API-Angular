(function(){
	'use strict';
	
	angular
	.module('myapp')
	.controller('usuarioController', usuarioController);
	
	usuarioController.$inject = ['usuarioAPI','$scope'];
	
	function usuarioController(usuarioAPI,$scope){
		$scope.login = function(usuario){
			usuarioAPI.login(usuario).success(function(data){
				localStorage.setItem('token',data);
			});
		}
		
		$scope.logout = function(){
			localStorage.removeItem('token');
		}
	}
})()