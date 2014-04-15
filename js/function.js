
$(document).ready(function() {
 $('#broadcast').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  
	  
	   $('#individual').flexslider({
        animation: "slide",
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
	  
	  
	  
	  	$('#fade').innerfade({ 
		speed: 'slow', 
		timeout: 4000, 
		type: 'sequence', 
		containerheight: '220px'
	});
	  
	  
	  	var angle = 0;
setInterval(function(){
      angle+=3;
     $("#image").rotate(angle);
},100);
	  
	  
	  
        });
		
