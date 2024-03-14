function format(d) {
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
        '<tr>' +
        '<td>Bio:</td>' +
        '<td>' + d.bio + '</td>' +
        '</tr>' +
        '<tr>' +
        '<td>Abstract:</td>' +
        '<td>' + d.abstract + '</td>' +
        '</tr>' +
        '</table>';
}

$(document).ready(function() {
    var abstract_table = $('#abstracts').DataTable({
        paging: false,
        order: [
            [3, "desc"]
        ],
        info: false,
        ajax: "../../archive.txt",
        columns: [
        {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        },
        {
            title: "Speaker",
            data: "speaker",
            "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                if (oData["website"]) {
                    $(nTd).html("<a href='" + oData["website"] + "'> " + sData + " </a>");
                } else {
                    $(nTd).html(sData);
                }
            }
        }, {
            data: "title",
            title: "Title"
        }, {
            data: "date",
            title: "Date"
        }, {
            data: "area",
            title: "Research area"
        }, {
            title: "Video",
            data: "video",
            "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                if (sData) {
                    $(nTd).html("<a href='" + sData + "'> Video </a>");
                } else {
                    $(nTd).html("-");
                }
            }
        }, ]
    });


    $('#abstracts tbody').on('click', 'td.details-control', function() {
        var tr = $(this).closest('tr');
        var row = abstract_table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

});

$(document).ready(function() {
    var schedule_table = $('#schedule').DataTable({
        paging: false,
        info: false,
        bFilter: false,
        ajax: "../../this_semester.txt",
        order: [
            [3, "asc"]
        ],
        columns: [
        {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "defaultContent": ''
        },

          {
            title: "",
            data: "key",
            "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                if (sData) {
                    $(nTd).html("<img src='/assets/headshots/" + oData["key"] + "_" + oData["date"] + ".jpg' width=150 onerror=\"this.onerror=null; this.src='/assets/images/MLFL.png'\"/>");
                } else {
                    $(nTd).html("-");
                }
            }
        }, {
            title: "Speaker",
            data: "speaker",
            "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                if (oData["website"]) {
                    $(nTd).html("<a href='" + oData["website"] + "'> " + sData + " </a>");
                } else {
                    $(nTd).html(sData);
                }
            }
        }, {
            title: "Date",
            mRender: function(data, type, full) {
                if (type == 'sort') return full.date;
                return full.prettyDate
            }
        }, {
            data: "title",
            title: "Title"
        }, {
            data: "area",
            title: "Research area"
        },
	{
            title: "Video",
            data: "video",
            "fnCreatedCell": function(nTd, sData, oData, iRow, iCol) {
                if (sData) {
                    $(nTd).html("<a href='" + sData + "'> Video </a>");
                } else {
                    $(nTd).html("-");
                }
            }
        }, ],
        columnDefs: [{
            orderable: false,
            targets: '_all'
        }]
    });

    $('#schedule tbody').on('click', 'td.details-control', function() {
        var tr = $(this).closest('tr');
        var row = schedule_table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        } else {
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });



});
