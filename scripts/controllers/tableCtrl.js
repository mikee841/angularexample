app.controller('tableCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('data/table.json').then(function(response) {
		$scope.tableItems = response.data;
	});
}]);