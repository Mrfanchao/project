//接受路由传的参数
app.controller('detailController',function($scope,$stateParams){
	$scope.obj = {
		Name:$stateParams.name,
		City:$stateParams.city,
		Country:$stateParams.country,
		Age:$stateParams.age
	}
	//返回事件
	$scope.goBack = function(){
		//通过最近历史记录实现返回效果
		window.history.back();
	}
})