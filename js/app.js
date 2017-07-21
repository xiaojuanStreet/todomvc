(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	//创建模块
	var app = angular.module("todomvc",[]);
	//创建控制器
	app.controller("todomvcCtrl",['$scope',function($scope){
		//任务展示
		$scope.todos = [
			{id:1, title: '吃饭',complete:true},
			{id:2, title: '睡觉',complete:true},
			{id:3, title: '打豆豆',complete:false},
			{id:4, title: '学习',complete:false},
			{id:5, title: '思考',complete:true}
		];
		//增加项目任务
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
		};
		//删减项目任务
		$scope.removeTitle = function(id){
			for(var i=0;i<$scope.todos.length;i++){
				var item = $scope.todos[i];
				if(item.id === id){
					$scope.todos.splice(i,1);
					return;
				}
			}
		};
		//修改项目任务
		$scope.isEditId = -1;
		$scope.edit = function(id){
			$scope.isEditId = id;
		};
		$scope.save = function(id){
			$scope.isEditId = -1;
		};
		//勾选项目任务
		//全选全不选
		$scope.isAllSelect = false;
		$scope.allSelect = function(){
			for(var i=0;i<$scope.todos.length;i++){
				var item = $scope.todos[i];
				item.complete = $scope.isAllSelect;
			}
		}
		//显示未完成的任务数
		$scope.getActive = function(){
			var count = 0;
			for(var i=0;i<$scope.todos.length;i++){
				var item = $scope.todos[i];
				if(!item.complete){
					count++;
				}
			}
			return count;
		}
		//清除已完成的项目任务
		$scope.clearCompleted = function(){
			for(var i=$scope.todos.length-1;i>=0;i--){
				var item = $scope.todos[i];
				if(item.complete){
					$scope.todos.splice(i,1);//splice会改变原数组,原数组的length会发生改变，所以采用i--,而不是i++
				}
			}
		};
		//切换显示不同状态的任务
	}])

})(angular);
