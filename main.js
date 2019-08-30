$(document).ready(function(){
 //summer and winter page
 $('.slider').slick({});
 
 //main page
 $('.slider2').slick({
	  arrows:false,
	  respondTo:'slider-wrap',
	  autoplay:true,
	  autoplaySpeed:5000,
	  fade:true,
	  speed: 1500,
  });
});

 function toggleBlock(content, chevron) {
    if ($(content).hasClass("hidden")) {
        $(content).removeClass("hidden");
		$(chevron).find("img").addClass("rotateimg180");
    }
    else{
        $(content).addClass("hidden");
		$(chevron).find("img").removeClass("rotateimg180");
    }
 }