var app = angular.module('app', ['datatables', 'datatables.buttons', 'datatables.light-columnfilter']);

app.controller('myController', ['$scope', 'DTOptionsBuilder', function($scope, DTOptionsBuilder) {
	$scope.rows = [['ASD', 'qwe', '12', '20', '2019-11-11', '123'], ['2ASD', '2qwe', '212', '220', '2019-11-12', '2123']];
	$scope.num_of_columns = 6;
	$scope.getColumnFilterObject = function(){
		var columnfilter_object = {};
		for (var i = 0; i < $scope.num_of_columns; i++) {
			columnfilter_object[String(i)] = {html: 'input', type: 'text'};
		}
		return columnfilter_object;
	}

	$scope.setDtOptions = function(){
		$scope.dtOptions = DTOptionsBuilder.newOptions()
						.withButtons(['colvis'])
						.withOption('scrollX', true)
						.withLightColumnFilter($scope.getColumnFilterObject());
	}

	$('#myTable').on( 'column-visibility.dt', function ( e, settings, column, state ) {
		$scope.num_of_columns+=(state ? 1 : -1);
		$scope.setDtOptions();
		console.log($scope.num_of_columns);
		console.log($scope.dtOptions);
		console.log(
			'Column '+ column +' has changed to '+ (state ? 'visible' : 'hidden')
		);
	} );

	$scope.setDtOptions();

}]);
