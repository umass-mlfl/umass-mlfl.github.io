

$.ajax ({ url: "../../video_archive.json", method: "GET"})
.done(function (response) {
$(document).ready(function() {
    $('#videos').DataTable( {
        data: response,
        columns: [
            { title: "Name" },
            { title: "Title" },
            { title: "Bio" },
            { title: "Video",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
              console.log(sData);
            $(nTd).html("<a href='" + sData + "'> Video </a>");
        }
    },
        ]
    } );
} );

});



$.ajax ({ url: "../../abstract_archive.json", method: "GET"})
.done(function (response) {
$(document).ready(function() {
    $('#abstracts').DataTable( {
        data: response,
        columns: [
            { title: "Name" },
            { title: "Title" },
            { title: "Bio" },
            { title: "Date" },
            { title: "Abstract" },
        ]
    } );
} );

});

