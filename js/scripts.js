function mainmenu(){
$(" #nav ul ").css({display: "none"}); // Opera Fix

$(" #nav li").hover(function(){
		$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(400);
		},function(){
		$(this).find('ul:first').css({visibility: "hidden"});
		
		});
}

 

 $(document).ready(function(){					
	mainmenu();
	
	function mycarousel_initCallback(carousel)
{
    // Disable autoscrolling if the user clicks the prev or next button.
    carousel.buttonNext.bind('click', function() {
        carousel.startAuto(0);
    });

    carousel.buttonPrev.bind('click', function() {
        carousel.startAuto(0);
    });

    // Pause autoscrolling if the user moves with the cursor over the clip.
    carousel.clip.hover(function() {
        carousel.stopAuto();
    }, function() {
        carousel.startAuto();
    });
};

jQuery(document).ready(function() {
    jQuery('#mycarousel').jcarousel({
        auto: 2,
		scroll: 1,
		vertical: true,
        wrap: 'last',
        initCallback: mycarousel_initCallback
		
    });
});
});


$(document).ready(function() {
			
			$("a[rel=photo_gallery]").fancybox({
				'transitionIn'		: 'none',
				'transitionOut'		: 'none',
				'titlePosition' 	: 'over',
				'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
					return '<span id="fancybox-title-over">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
				}
			});

		});




$(document).ready(function(){    
	
	
	$('.bxslider').bxSlider({
	  minSlides: 4,
	  maxSlides: 6,
	  slideWidth: 105,
	  slideMargin: 10,
	  ticker: true,
	  speed: 30000
	});
	
	$("div#ticker_v").jContent({
		orientation: 'vertical', 
		easing: 'easeOutCirc', 
		duration: 500,
		width:500,
		height:57,
		auto: true,
		direction: 'next', //or 'prev'
		pause: 4000,
		pause_on_hover: true
	});
	
	
	
});

/*-----------------------------------------------------------------------------------*/
/*	MENU
/*-----------------------------------------------------------------------------------*/

ddsmoothmenu.init({
	mainmenuid: "menu",
	orientation: 'h',
	classname: 'menu',
	contentsource: "markup"
})

/*-----------------------------------------------------------------------------------*/
/*	OPACITY
/*-----------------------------------------------------------------------------------*/

/*$('.opacity').transify({opacityOrig:.90, percentHeight:'100%'});*/


 