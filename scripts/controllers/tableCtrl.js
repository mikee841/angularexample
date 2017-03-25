app.controller('tableCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('data/table.json').then(function(response) {
		$scope.tableItems = response.data;

		angular.forEach($scope.tableItems, function(obj){
          obj.progress = 100 * (obj.sumNow - obj.sumProgressive) / obj.sumProgressive;
        });
	});

}]);