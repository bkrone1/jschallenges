$(function(){

	 var replaced = $("body").html().replace(/Bacon/g, "Laser Vision");
    $("body").html(replaced);

    $('.title:even').hide();
    $('footer li:even').hide();

  	$('.post:last').remove();
	$('.post:last').remove();
	$('.post:last').remove();

	$('aside').remove();

    var state = true;
    $( "h1" ).on("click", function() {
      if ( state ) {       
         $("h1").css({color: "#ff0000"});
       } else {
         $("h1").css({color: "#000000"});
      }
      state = !state;
    });

  } );