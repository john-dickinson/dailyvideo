$(document).ready(function() {

	$('.carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 2,
		speed: 900,
		arrows: true
	});

	var video_dict = {
		"rella": "https://www.youtube.com/embed/IxLHwL5cax8",
		"koi": "https://www.youtube.com/embed/IxLHwL5cax8",
		"wipe": "https://www.youtube.com/embed/IxLHwL5cax8",
		"bobbi": "https://www.youtube.com/embed/IxLHwL5cax8",
	}

	var videoAnimationModule = {
		toVideo: function(){
			$('.main').animate({left: "5000px"},function(){
				$('.main').fadeOut('fast',function(){
					$('.active_video').fadeIn('fast');
				});
			});
		},

		toMain: function(){
			$('.active_video').fadeOut('fast',function(){
				$('.main').fadeIn('fast');
			});
		}
	}

	var enterModule = {
		enter: function(){
			$('#welcomeWrap').fadeOut('slow',function(){
				$('.main').css('visibility','visible');
			});
		}
	}

	$('#enterLink').click(function(){
		enterModule.enter();
	});

	$('.thumbnail').click(function(event) {
		videoAnimationModule.toVideo();
	});

	$('.cornerPulse').click(function(){
		videoAnimationModule.toMain();
	});

});