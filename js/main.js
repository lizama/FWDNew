$(document).ready(function(){
	var datos = 'js/noticias/noticias.json';

	$.getJSON(datos, function (data) {
		console.log(data.length);


		for(var i = 0; i < data.length;i++){
			console.log(data[i].titulo);
			$('<div class="col-sm-6 col-md-4" ><div class="thumbnail-img-box"><img class="imgnew" src="'+data[i].fuente+'"><h2>'+data[i].titulo+'</h2><div class="caption-img-box"><p class="parnews">'+data[i].contenido+'</p></div></div></div>').appendTo("#caja");;
		}
	});


	$('.thumbnail-img').hover(function () {
        $(this).find('.caption-img').slideDown(250); //.fadeIn(250)
    }, function () {
        $(this).find('.caption-img').slideUp(250); //.fadeOut(205)
    });

    $('.thumbnail-img-box').hover(function () {
        $(this).find('.caption-img-box').slideDown(250); //.fadeIn(250)
    }, function () {
        $(this).find('.caption-img-box').slideUp(250); //.fadeOut(205)
    });

	 $(window).scroll(function() {
	    var winTop = $(window).scrollTop();
	     $("body").addClass("sticky-header");

	      

	     var imga = $('#imagen');
	    
	      imga.css({
	      	width:'70px',
	      	height: '70px'
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


});


