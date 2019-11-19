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

	new $.fn.dataTable.ColumnFilter(myDataTable, {
	  0: {
		html: 'input',
		type: 'text',
		regexp : true
	  },
	  1: {
		html: 'input',
		type: 'text',
		regexp : true
	  },
	  2: {
		html: 'input',
		type: 'text',
		regexp : true
	  },
	  3: {
		html: 'input',
		type: 'text',
		regexp : true
	  },
	  4: {
		html: 'input',
		type: 'text',
		regexp : true
	  },
	  5: {
		html: 'input',
		type: 'text',
		regexp : true
	  },
	  6: {
		html: 'input',
		type: 'text',
		regexp : true
	  }
	});
});
