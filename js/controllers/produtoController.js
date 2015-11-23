(function(){
	'use strict';
	
	angular
	.module('myapp')
	.controller('produtoController', produtoController);
	
	produtoController.$inject=['produtoAPI','$scope'];
	
	function produtoController(produtoAPI,$scope){
		$scope.produtos = [];
		
		$scope.listar = function(){
			produtoAPI.listar().success(function(data){
				$scope.produtos = data;
			});
		}
	}
})();