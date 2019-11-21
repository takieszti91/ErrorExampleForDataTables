$( document ).ready(function() {
	var myDataTable = $('#myTable').DataTable( {
		"scrollX": true,
		dom: 'Bfrtip',
		"buttons": [
		  {
			"extend": 'colvis',
			'text': '<button class="btn btn-default" id="btnColvis" style="margin-right:0px !important;background-color:inherit;">Columns<span class= "fa fa-caret-down" aria-hidden="true" style="margin-bottom:3px;"></span></button>',
			"columns": ':not(.noVis)',
		  },
		]
	} );

	var num_of_columns = 6;

	function getColumnFilterObject(){
		var columnfilter_object = {};
		for (var i = 0; i < num_of_columns; i++) {
			columnfilter_object[i] = {html: 'input', type: 'text', regexp : true};
		}
		return columnfilter_object;
	}

	$('#myTable').on( 'column-visibility.dt', function ( e, settings, column, state ) {
		num_of_columns+=(state ? 1 : -1);
		new $.fn.dataTable.ColumnFilter(myDataTable, getColumnFilterObject());
	} );

	new $.fn.dataTable.ColumnFilter(myDataTable, getColumnFilterObject());

});
