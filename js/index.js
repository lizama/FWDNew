// Just As Promised! No JavaScript

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
     $("body").addClass("sticky-header");

      

     var imga = $('#imagen');
    
      imga.css({
      	width:'35px',
      	height: '35px'
      });
      
    if (winTop >= 100) {
      $("body").addClass("sticky-header");
    
       document.getElementById('imagen').src = "images/fwd1.png";

       //document.getElementById('subheader').style.color = "red";
       $('#subheader div').css('background','#000');



var imga = $('#imagen');
    
      imga.css({
      
      	width:'185px',
      	height: '45px'
      });

    } else {
      $("body").removeClass("sticky-header");
      
       $('#subheader div').css('background','transparent');

      document.getElementById('imagen').src = "images/fwd.png";
      var imga = $('#imagen');
    
      imga.css({
      	
      	width:'41px',
      	height: '45px',
      	
      });
    }
  })
})