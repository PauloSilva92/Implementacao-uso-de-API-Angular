(function(){
	'use strict';
	
	angular
	.module('myapp')
	.factory('produtoAPI',produtoAPI);
	
	produtoAPI.$inject = ['$http'];
	
	function produtoAPI($http){
		var _listar  = function(){
			return $http.get('http://localhost:3000/produtos/');
		};
		
		return{
			listar:_listar
		}
	}
})()