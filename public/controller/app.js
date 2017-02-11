var app = angular.module('simpleNode', []);

app.controller('mainController', [
	'$scope',
	function($scope){
  		$scope.test = 'Hello world!';
  		$scope.name = "";
	}
]);