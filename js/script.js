$(document).ready(function() {

	if (!localStorage.getItem("visited")) {
    	localStorage.setItem("visited", "true");
	}

	window.onbeforeunload = function() {
	    localStorage.removeItem("visited");
	};

	$('.carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		speed: 900,
		arrows: true
	});

	var artists = {
		bobbi: {url:'https://www.youtube.com/embed/IxLHwL5cax8?enablejsapi=1&autoplay=0&showinfo=0&controls=2', artist_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", artist_name: "BOBBI PALACE"},
		wipe : {url:'https://www.youtube.com/embed/IxLHwL5cax8?enablejsapi=1&autoplay=0&showinfo=0&controls=2', artist_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", artist_name: "WIPE"},
		saajtak : {url:'https://www.youtube.com/embed/IxLHwL5cax8?enablejsapi=1&autoplay=0&showinfo=0&controls=2', artist_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", artist_name: "SAAJTAK"},
		gabi : {url:'https://www.youtube.com/embed/IxLHwL5cax8?enablejsapi=1&autoplay=0&showinfo=0&controls=2', artist_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", artist_name: "GABI KIRSCH"},
		rella : {url:'https://www.youtube.com/embed/IxLHwL5cax8?enablejsapi=1&autoplay=0&showinfo=0&controls=2', artist_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", artist_name: "RELLA"}
	}

	var videoAnimationModule = {


		toMain: function(){
			$('.active_video').empty();
			$('.main').fadeIn('slow',function(){
				// $('.active_video').empty();
			});
		},

		toVideo: function(id){
			$('.main').fadeOut('fast',function(){
				var video = '<iframe class="mainVideo" id="player" src="'+ artists[id].url +'" frameborder="0" allowfullscreen></iframe>';
				var title = '<h1>' + artists[id].artist_name + '</h1>';
				var desc = '<p>'+ artists[id].artist_desc +'</p>';
				$('.active_video').append('<h1 class="cornerPulse">< SESSIONS</h1>');
				$('.active_video').append(title);
				$('.active_video').append(desc);
				$('.active_video').append(video);
				$('.active_video').fadeIn('slow');
				$('.cornerPulse').click(function(){
					console.log('clicked')
					videoAnimationModule.toMain();
				});


				$(document).keydown(function(e){
					if(event.which === 37 && event.metaKey) {
						videoAnimationModule.toMain();
						event.preventDefault();
					}
				});

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

	// $('.thumbnailWrap').hover(function() {
	// 	$('.thumbnailWrap h2').fadeIn();
	// }, function() {
	// 	$('.thumbnailWrap h2').fadeOut();
	// });

	$('#enterLink').click(function(){
		event.preventDefault();
		enterModule.enter();
	});

	$('.thumbnail').click(function(event) {
		var id = $(this).attr('id');
		videoAnimationModule.toVideo(id);
	});

});