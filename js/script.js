$(document).ready(function() {

		$('.carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		dots: true,
		speed: 900,
		arrows: true
	});

	var enterModule = {
		enter: function(){
			$('#welcomeWrap').fadeOut('slow',function(){
				$('.main').fadeIn('slow');
			})
		}
	}

	$('#enterLink').click(function(){
		enterModule.enter();
	});

});