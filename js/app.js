(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	//创建模块
	var app = angular.module("todomvc",[]);
	//创建控制器
	app.controller("todomvcCtrl",['$scope',function($scope){
		$scope.todos = [
			{id:1, title: '吃饭',complete:false},
			{id:2, title: '睡觉',complete:false},
			{id:3, title: '打豆豆',complete:true},
			{id:4, title: '学习',complete:false},
			{id:5, title: '思考',complete:true}
		],
		//增加项目
		$scope.addTitle = function(){
			if(!$scope.newTitle){
				return;
			}
			$scope.todos.push({
				id:Math.random(),
				title: $scope.newTitle,
				complete:false
			});
			$scope.newTitle = '';
		}
		//删减项目
		$scope.removeTitle = function(id){
			for(var i=0;i<$scope.todos.length;i++){
				var item = $scope.todos[i];
				if(item.id === id){
					$scope.todos.splice(i,1);
					return;
				}
			}
		}
		//修改项目
		$scope.isEditId = -1;
		$scope.edit = function(id){
			$scope.isEditId = id;
		}
		$scope.save = function(id){
			$scope.isEditId = -1;
		}

	}])

})(angular);
