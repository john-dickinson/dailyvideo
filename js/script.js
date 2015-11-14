$(document).ready(function() {

	$('.carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 900,
		arrows: true
	});

	var artists = {
		bobbi: {url:'https://www.youtube.com/embed/IxLHwL5cax8?autoplay=0&showinfo=0&controls=2', artist_name: "Bobbi Palace"},
		wipe : {url:'https://www.youtube.com/embed/IxLHwL5cax8?autoplay=0&showinfo=0&controls=2', artist_name: "Wipe"},
		saajtak : {url:'https://www.youtube.com/embed/IxLHwL5cax8?autoplay=0&showinfo=0&controls=2', artist_name: "Saajtak"},
		gabby : {url:'https://www.youtube.com/embed/IxLHwL5cax8?autoplay=0&showinfo=0&controls=2', artist_name: "Gabby Kirsch"},
		rella : {url:'https://www.youtube.com/embed/IxLHwL5cax8?autoplay=0&showinfo=0&controls=2', artist_name: "Rella"}
	}

	var videoAnimationModule = {
		toVideo: function(id){
			$('.main').animate({left: "5000px"},function(){
				$('.main').fadeOut('fast',function(){
					$('.active_video').empty();
					var video = '<iframe class="mainVideo" src="'+ artists[id].url +'" frameborder="0" allowfullscreen></iframe>';
					var title = '<h1>' + artists[id].artist_name + '</h1>';
					$('.active_video').append('<h1 class="cornerPulse">< SESSIONS</h1>');
					$('.active_video').append(title);
					$('.active_video').append(video);
					$('.active_video').fadeIn('fast');
					$('.cornerPulse').click(function(){
						videoAnimationModule.toMain();
					});
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
		var id = $(this).attr('id');
		videoAnimationModule.toVideo(id);
	});

});