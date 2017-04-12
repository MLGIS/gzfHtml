function initLayout(){
	/*$("#umleft").load("left.html");*/
	$("#umheader").load("header.html");
	/*$("#umcenter").load("userapply.html",function(){
		initWizard();
		initTable();
	});*/
	/*$("#umcenter").load("container.html",function(){
		$('.card.hover').hover(function(){
	        $(this).addClass('flip');
	      },function(){
	        $(this).removeClass('flip');
	      });
    });*/
}

function initWizard(){
	$('#applywizard').bootstrapWizard({

        'tabClass': 'nav nav-tabs tabdrop',
        onTabShow: function(tab, navigation, index) {
          var $total = navigation.find('li').not('.tabdrop').length;
          var $current = index+1;
          var $percent = ($current/$total) * 100;
          $('#applywizard').find('#bar .progress-bar').css({width:$percent+'%'});

          // If it's the last tab then hide the last button and show the finish instead
          if($current >= $total) {
            $('#applywizard').find('.pager .next').hide();
            $('#applywizard').find('.pager .finish').show();
            $('#applywizard').find('.pager .finish').removeClass('disabled');
          } else {
            $('#applywizard').find('.pager .next').show();
            $('#applywizard').find('.pager .finish').hide();
          }  
        },

        onNext: function(tab, navigation, index) {

          var form = $('.form' + index)

          form.parsley('validate');

          if(form.parsley('isValid')) {
            tab.addClass('success');       
          } else {
            return false;
          }

        },

        onTabClick: function(tab, navigation, index) {

          var form = $('.form' + (index+1))

          form.parsley('validate');

          if(form.parsley('isValid')) {
            tab.addClass('success');  
          } else {
            return false;
          }

        }

      });
}




 function restoreRow (oTable02, nRow){
        var aData = oTable02.fnGetData(nRow);
        var jqTds = $('>td', nRow);
        
        for ( var i=0, iLen=jqTds.length ; i<iLen ; i++ ) {
          oTable02.fnUpdate( aData[i], nRow, i, false );
        }
        
        oTable02.fnDraw();
      };

      function editRow (oTable02, nRow){
        var aData = oTable02.fnGetData(nRow);
        var jqTds = $('>td', nRow);
        jqTds[0].innerHTML = '<input type="text" value="'+aData[0]+'">';
        jqTds[1].innerHTML = '<input type="text" value="'+aData[1]+'">';
        jqTds[2].innerHTML = '<input type="text" value="'+aData[2]+'">';
        jqTds[3].innerHTML = '<input type="text" value="'+aData[3]+'">';
        jqTds[4].innerHTML = '<input type="text" value="'+aData[4]+'">';
        jqTds[5].innerHTML = '<input type="text" value="'+aData[5]+'">';
        jqTds[6].innerHTML = '<a class="edit save" href="#">Save</a><a class="delete" href="#">Delete</a>';
      };

      function saveRow (oTable02, nRow){
        var jqInputs = $('input', nRow);
        oTable02.fnUpdate( jqInputs[0].value, nRow, 0, false );
        oTable02.fnUpdate( jqInputs[1].value, nRow, 1, false );
        oTable02.fnUpdate( jqInputs[2].value, nRow, 2, false );
        oTable02.fnUpdate( jqInputs[3].value, nRow, 3, false );
        oTable02.fnUpdate( jqInputs[4].value, nRow, 4, false );
        oTable02.fnUpdate( jqInputs[5].value, nRow, 5, false );
        oTable02.fnUpdate( '<a class="edit" href="#">Edit</a><a class="delete" href="#">Delete</a>', nRow, 6, false );
        oTable02.fnDraw();
      };

function initTable(){
	$.fn.dataTableExt.oStdClasses.sPaging = 'dataTables_paginate paging_bootstrap paging_custom';

      /*************************************************/
      /**************** BASIC DATATABLE ****************/
      /*************************************************/

      /* Define two custom functions (asc and desc) for string sorting */
      jQuery.fn.dataTableExt.oSort['string-case-asc']  = function(x,y) {
          return ((x < y) ? -1 : ((x > y) ?  1 : 0));
      };
       
      jQuery.fn.dataTableExt.oSort['string-case-desc'] = function(x,y) {
          return ((x < y) ?  1 : ((x > y) ? -1 : 0));
      };
	var oTable02 = $('#inlineEditDataTable').dataTable({
        "sDom":
          "R<'row'<'col-md-6'l><'col-md-6'f>r>"+
          "t"+
          "<'row'<'col-md-4 sm-center'i><'col-md-4'><'col-md-4 text-right sm-center'p>>",
        "oLanguage": {
          "sSearch": ""
        },
        "aoColumnDefs": [
          { 'bSortable': false, 'aTargets': [ "no-sort" ] }
        ],
        "fnInitComplete": function(oSettings, json) { 
          $('.dataTables_filter input').attr("placeholder", "Search");
        }
      });

      // Append add row button to table
      var addRowLink = '<a href="#" id="addRow" class="btn btn-green btn-xs add-row">Add row</a>'
      $('#inlineEditDataTable_wrapper').append(addRowLink);

      var nEditing = null;

      // Add row initialize
      $('#addRow').click( function (e) {
        e.preventDefault();

        // Only allow a new row when not currently editing
        if ( nEditing !== null ) {
          return;
        }
        
        var aiNew = oTable02.fnAddData([ '', '', '', '','','', '<a class="edit" href="">Edit</a>', '<a class="delete" href="">Delete</a>' ]);
        var nRow = oTable02.fnGetNodes(aiNew[0]);
        editRow(oTable02, nRow);
        nEditing = nRow;

        $(nRow).find('td:last-child').addClass('actions text-center');
      });

      // Delete row initialize
      $(document).on( "click", "#inlineEditDataTable a.delete", function(e) {
        e.preventDefault();
        
        var nRow = $(this).parents('tr')[0];
        oTable02.fnDeleteRow( nRow );
      });

      // Edit row initialize
      $(document).on( "click", "#inlineEditDataTable a.edit", function(e) {
        e.preventDefault();
         
        /* Get the row as a parent of the link that was clicked on */
        var nRow = $(this).parents('tr')[0];
         
        if (nEditing !== null && nEditing != nRow){
          /* A different row is being edited - the edit should be cancelled and this row edited */
          restoreRow(oTable02, nEditing);
          editRow(oTable02, nRow);
          nEditing = nRow;
        }
        else if (nEditing == nRow && this.innerHTML == "Save") {
          /* This row is being edited and should be saved */
          saveRow(oTable02, nEditing);
          nEditing = null;
        }
        else {
          /* No row currently being edited */
          editRow(oTable02, nRow);
          nEditing = nRow;
        }
      });
      
      $(document)
      .on('change', '.btn-file :file', function() {
        var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
        input.trigger('fileselect', [numFiles, label]);
    });
    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = numFiles > 1 ? numFiles + ' files selected' : label;

            console.log(log);
        
        if( input.length ) {
          input.val(log);
        } else {
          if( log ) alert(log);
        }
        
      });
}
