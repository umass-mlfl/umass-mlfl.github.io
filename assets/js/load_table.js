function format ( d ) {
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<tr>'+
            '<td>Bio:</td>'+
            '<td>'+d.bio+'</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Abstract:</td>'+
            '<td>'+d.abstract+'</td>'+
        '</tr>'+
        '</table>';
}

$(document).ready(function() {
    var abstract_table = $('#abstracts').DataTable( {
        paging:   false,
        ordering: false,
        info:     false,
        ajax: "../../archive.txt",
        columns: [
					 {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { title: "Speaker", data: "speaker",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
            if (oData["website"]){
              $(nTd).html("<a href='" + oData["website"] + "'> " + sData + " </a>");
            } else {
              $(nTd).html(sData);
            }
            }},
            { data: "title" },
            { data: "date" },
            { title: "Video", data: "video",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
            if (sData) {
            $(nTd).html("<a href='" + sData + "'> Video </a>");
            } else {
            $(nTd).html("-");
            }
          }},
        ]
    } );


$('#abstracts tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = abstract_table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );
});
