$(document).ready(function() {
  $('#random').click(function(){
    window.open('https://en.wikipedia.org/wiki/Special:Random');
  });
  $('#search').keydown(function(e){
    if(e.which === 13){
        $('#searchButton').click();
    }
  });
  
  $('#searchButton').click(function(){
    var search = $('#search').val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+search+"&format=json&callback=?";
    
    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
        $('ul').each(function(x){
          $(this).html("<div class =\"card\"><h1>"+data[1][x]+"</h1><h3>"+data[2][x]+"<a target='_blank' href="+data[3][x]+" class=\"card-link\"><br><br>Go to this Wiki page</a></h3><div>");
          if (data[1][x] === undefined) {
            $(this).html("<ul></ul>");
          };
        });
      },
      error: function(errorMessage){
        alert("error!");
      }
    
    });
  });
});
