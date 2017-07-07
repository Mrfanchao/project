//在app.js中 主要是创建应用和配置路由的相关事项，在ionic中是使用的是ui-router路由服务
var app = angular.module('app',['ionic','ui.router']);

//配置路由
app.config(function($stateProvider,$urlRouterProvider){
	//$urlRouterProvider是为了配置地址不在路由表范围内时的页面跳转
	$urlRouterProvider.otherwise('/home');
	//配置路由表
	$stateProvider.state(
			'home',{
				url:'/home',
				templateUrl:'MyHome/home.html',
				controller:'homeworkController'
			}
		)
	.state('detail',{
		url:'/detail/:name/:city/:country/:age',
		templateUrl:'MyHome/detail.html',
		controller:'detailController'
	})
})