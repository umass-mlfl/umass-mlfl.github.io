$(document).ready(function(){
  $.ajax({
  		 method: 'GET',
       url: '../../this_semester.txt',
       dataType: 'json',
       success: function(sched_data) {
           $('#schedule').bootstrapTable({
              data: sched_data["data"]
           });
       },
       error: function(e) {
           console.log(e.responseText);
       }
    });
 });
