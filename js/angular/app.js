'use strict';

var App = angular.module('gzf',['ngRoute']);
App.controller("menu",["$scope",'$http',function($scope,$http){
	var self=this;
	$scope.items=[{tile:'用户中心',url:'/'},{tile:'公租房申请',url:'apply'},{tile:'在线选房',url:'select'},{tile:'员工管理',url:'/'},{tile:'资产信息',url:'/'},{tile:'台账',url:'/'},{tile:'网上保修',url:'/'},{tile:'投诉建议',url:'/'}]
}]);
App.controller('umindex',["$scope",'$http',function($scope,$http){
	$scope.$on("$viewContentLoaded",function(){
            $('.card.hover').hover(function(){
	        $(this).addClass('flip');
	      },function(){
	        $(this).removeClass('flip');
	      });
        });
}]);
App.controller('umapplyInfo',['$scope','$http',function($scope,$http){
	$scope.$on("$viewContentLoaded",function(){
            initWizard();
			initTable();
        });
}]);
App.controller('ucomapplyInfo'['$scope','$http',function($scope,$http){
	$scope.$on("$viewContentLoaded",function(){
            
        });
}]);
App.controller('umSelect',['$scope','$http',function($scope,$http){
	$scope.$on("$viewContentLoaded",function(){
            
        });
}]);
App.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		controller:'umindex',
		templateUrl:'container.html'
	})
	.when('/apply',{
		controller:'umapplyInfo',
		templateUrl:'userapply.html'
	})
	.when('/select',{
		controller:'umSelect',
		templateUrl:'fangyuan.html'
	})
	.otherwise({
		redirectTo:'/'
	});
})