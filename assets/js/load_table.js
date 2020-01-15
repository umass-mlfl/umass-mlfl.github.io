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

var dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };


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
            { data: "area", title: "Research area" }, 
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

} );
$(document).ready(function() {
    var schedule_table = $('#schedule').DataTable( {
        order: [[ 3, "asc" ]],
        paging:   false,
        info:     false,
        bFilter: false,
        ajax: "../../this_semester.txt",
        columns: [
          { title: "", data: "key",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
            if (sData) {
            $(nTd).html("<img src='/assets/headshots/" + oData["key"] + ".jpg' width=150 onerror=\"this.onerror=null; this.src='/assets/images/MLFL.png'\"/>");
            } else {
            $(nTd).html("-");
            }
          }},
            { title: "Speaker", data: "speaker",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
            if (oData["website"]){
              $(nTd).html("<a href='" + oData["website"] + "'> " + sData + " </a>");
            } else {
              $(nTd).html(sData);
            }
            }},
            { data: "title", title: "Title"},
            { data: "date", title: "Date",
                 "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                var date_obj  = new Date(sData + " 00:00:00"); // Javascript date stuff is awful
                $(nTd).html(date_obj.toLocaleDateString("en-US", dateOptions))
            }},
            { data: "area", title: "Research area" }, 
        ],
      columnDefs: [{ orderable: false, targets: '_all' }]
    } );
} );


