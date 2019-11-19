var app = angular.module('app', ['datatables', 'datatables.buttons', 'datatables.light-columnfilter']);

app.controller('myController', ['$scope', 'DTOptionsBuilder', function($scope, DTOptionsBuilder) {
	$scope.rows = [['ASD', 'qwe', '12', '20', '2019-11-11', '123'], ['2ASD', '2qwe', '212', '220', '2019-11-12', '2123']];
	$scope.columnfilter_object = {};
	for (var i = 0; i < 6; i++) {
		$scope.columnfilter_object[String(i)] = {html: 'input', type: 'text'};
	}
	$scope.dtOptions = DTOptionsBuilder.newOptions()
						.withButtons(['colvis'])
						.withOption('scrollX', true)

						.withLightColumnFilter($scope.columnfilter_object);
}]);
