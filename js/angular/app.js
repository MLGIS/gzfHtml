'use strict';

var App = angular.module('gzf',[]);
App.controller("menu",["$scope",'$http',function($scope,$http){
	var self=this;
	$scope.items=[{tile:'用户中心'},{tile:'公租房申请'},{tile:'员工管理'},{tile:'资产信息'},{tile:'台账'},{tile:'网上保修'},{tile:'投诉建议'}]
}]);