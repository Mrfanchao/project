app.controller('homeworkController',function($scope,$http,$state){
	$scope.imgList = [
		"images/4.jpg",
		"images/7.jpg",
		"images/8.jpg"
	];
	$scope.dataList = [];
	function getData(){
		$http({
			url:"data/data.php?type=list&pageNo="+page+"&num="+"count"
		}).then(function(data){

			if (page == 1) {
				//获取第一页，则直接更新数据
				$scope.dataList = data.data.records;
				//手动关闭刷新空件
				$scope.$broadcast('scroll.refreshComplete');	
			}else{
				//如果是加载，则需要将新获取的数据追加到原来的数据之后
				$scope.dataList = $scope.dataList.concat(data.data.records);
				//如果当前为加载到数据，则说明数据已加载完毕，需要将加在控件移除
				if (data.data.records.length == 0) {
					$scope.haveMore = 'flase';
				}
				//停止加载动画
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}

			
		},function(err){
			if (page == 1) {
				//获取数据失败后，需手动将刷新空件结束
				$scope.$broadcast('scroll.refreshComplete');
			}else{
				//停止加载动画
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}
		});
	}
	//判断页数
	var page = 1;
	//每刷新一次获取多少页
	var count = 10;
	//表示是否已完成加载
	$scope.haveMore = true;
	//程序开始需要加载第一页
	getData(page);

	//下拉
	$scope.doRefresh = function(){
		//每次刷新，page都需要是第一页
		page = 1;

		getData(page);
	}

	$scope.loadMore = function(){
		page++;

		getData(page);
	}

	

	$scope.gotoDetail =function(obj){
		$state.go('detail',{
			name:obj.Name,
			city:obj.City,
			country:obj.Country,
			age:obj.age
		})
	}
})