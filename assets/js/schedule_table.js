$(document).ready(function(){
  $.ajax({
  		 method: 'GET',
       url: '../../this_semester.txt',
       dataType: 'json',
       success: function(sched_data) {
          console.log(sched_data["data"])
           //alert('done');
           $('#schedule').bootstrapTable({
              data: sched_data["data"]
           });
       },
       error: function(e) {
           console.log(e.responseText);
       }
    });
    console.log("Didn't work");
 });
