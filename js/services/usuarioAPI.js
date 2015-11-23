(function(){
	'use strict';
	angular
	.module('myapp')
	
	.factory('usuarioAPI', usuarioAPI);
	
	usuarioAPI.$inject = ['$http']
	
	function usuarioAPI($http){
		var _login = function(usuario){
			return $http.post('http://localhost:3000/usuarios/login', usuario);
		};
		
		return{
			login:_login
		}
	}
	
	
})()