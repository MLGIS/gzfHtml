var app=angular.module("app",[]);
app.controller("loginCtrl",['$scope','$http',function($scope,$http){
	$scope.user={
		name:"test",
		password:"",
		userType:1
	};
}])