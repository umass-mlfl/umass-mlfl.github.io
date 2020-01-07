$(document).ready(function() {
    var video_table = $('#videos').DataTable( {
        ajax: "../../video_archive.txt",
        columns: [
            { title: "Name" },
            { title: "Title" },
            { title: "Date" },
            { title: "Video",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
              console.log(sData);
            $(nTd).html("<a href='" + sData + "'> Video </a>");
        }
    },
        ]
    } );
} );


$(document).ready(function() {
    var abstract_table = $('#abstracts').DataTable( {
        ajax: "../../abstract_archive.txt",
        columns: [
            { title: "Name" },
            { title: "Title" },
            { title: "Bio" },
            { title: "Date" },
            { title: "Abstract" },
        ]
    } );

});

