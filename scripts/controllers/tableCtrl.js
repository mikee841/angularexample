app.controller('tableCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('data/table.json').then(function(response) {
		$scope.tableItems = response.data;

		angular.forEach($scope.tableItems, function(obj){
			var progressValue = 100 * (obj.sumNow - obj.sumProgressive) / obj.sumProgressive;
			obj.progress = progressValue;
			obj.aboveFifty = false;
			if(parseInt(progressValue).toFixed(0) > 50)
				obj.aboveFifty = true;
		});
	});

}]);