$(document).ready(function(){


/* studies*/
$("*[set-content]").each(function(index,value){
    var child = $(value);
    child.click(function(e){
      if(child.attr('in')){
          $(child.attr('in')).html($("#"+child.attr("set-content")).html());
          
          if(child.attr('title')){
            $('#studies-title').text(child.attr('title'));
          }
          
        
      }
   });
});


});
