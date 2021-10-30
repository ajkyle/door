(function($) {

	var $slickEl = $('.doors');

	// Add the div to the slider that will hold the active content panel
	$slickEl.on('init', function(event, slick) {
		slick.$slideTrack.append('<div class="active-panel"></div>');
		$('.home-banner__photo').hide();
	});

	// On slick destroy (viewed on mobile) hide the carousel
	$slickEl.on('destroy', function(event, slick) {
		$('.doors-wrapper').hide();
		$('.home-banner__photo').show();
	});

	$slickEl.slick({
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 3,
		focusOnSelect: true,
		dots: false,
		infinite: true,
		useTransform: false,
		useCSS: false,
		//variableWidth: true,
		responsive: [
			{
				breakpoint: 768,
				settings: "unslick"
			}
		]
	});

	$slickEl.on('click', '.slick-current a', function(event) {
		event.preventDefault();

		if( $(this).hasClass('state-active') ) {
			closePanel()
			return;
		}
	
		// Add the active content panel image and right side video link
		var src = $(this).addClass('state-active').attr('href');
		$('.active-panel').empty().append('<img src="'+src+'">').append('<a href="'+$(this).data('video')+'" class="panel-video-link '+$(this).attr('id')+'"></a>').addClass('open');
		$('.doors-wrapper .slick-arrow').hide();
	});

	$('.active-panel').on('click', function(event) {
		if( event.target && $(event.target).hasClass('panel-video-link') ) return;
		event.preventDefault();
		closePanel();
	});

	function closePanel() {
		if( $('.active-panel').hasClass('open') ) {
			$('.active-panel').removeClass('open');
			$('.doors-wrapper .slick-arrow').show();
			$('.doors-wrapper .slide .state-active').removeClass('state-active');
		}
	}

})(jQuery);