/*
Theme Name: Mote
Description: Responsive Coming Soon Site Template
Author: Erilisdesign
Theme URI: http://erilisdesign.com/preview/themeforest/html/mote/
Author URI: http://themeforest.net/user/erilisdesign
Version: 1.0
License: https://themeforest.net/licenses/standard
*/

(function($) {
	"use strict";

	// Vars
	var body = $('body'),
		headerNav = $('nav.header-nav'),
		headerNavElem = $('nav.header-nav li'),
		headerNavElemHome = $('nav.header-nav li a[href="#home"]'),
		navToggle = $('.nav-toggle'),
		EDSlide = $('div.ed-slide'),
		EDSlideContainer = $('div.slide-container'),
		target,
		preloader = $('#preloader'),
		preloaderDelay = 350,
		preloaderFadeOutTime = 800,
		btnLoadContent = $('a.load-content'),
		countdown = $('.countdown[data-countdown]');
	
	
	// Mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		body.addClass('mobile');
	}

	function detectIE() {
		if (navigator.userAgent.indexOf('MSIE') != -1)
			var detectIEregexp = /MSIE (\d+\.\d+);/ // test for MSIE x.x
		else // if no "MSIE" string in userAgent
			var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/ // test for rv:x.x or rv x.x where Trident string exists

		if (detectIEregexp.test(navigator.userAgent)){ // if some form of IE
			var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
			if (ieversion >= 9) {
				return true;
			}
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}
	
	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}

	// Preloader
	function init_ED_Preloader() {
		
		// Hide Preloader
		preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
		
	}
	

	//	Backgrounds
	function init_ED_PageBackground() {
		
		// Slideshow Background
		if (body.hasClass('slideshow-background')) {
			body.vegas({
				preload: true,
				timer: false,
				delay: 5000,
				transition: 'fade',
				transitionDuration: 1000,
				slides: [
					{ src: 'demo/images/image-7.jpg' },
					{ src: 'demo/images/image-28.jpg' },
					{ src: 'demo/images/image-13.jpg' },
					{ src: 'demo/images/image-31.jpg' }
				]
			});
		}
		
		// Slideshow Background - for agency page
		if (body.hasClass('slideshow-agency')) {
			body.vegas({
				preload: true,
				timer: false,
				delay: 5000,
				transition: 'fade',
				transitionDuration: 1000,
				slides: [
					{ src: 'demo/images/agency/image-1.jpg' },
					{ src: 'demo/images/agency/image-2.jpg' },
					{ src: 'demo/images/agency/image-3.jpg' },
					{ src: 'demo/images/agency/image-4.jpg' },
					{ src: 'demo/images/agency/image-5.jpg' }
				]
			});
		}

		// Slideshow & Video Background
		if (body.hasClass('slideshow-video-background')) {
			body.vegas({
				preload: true,
				timer: false,
				delay: 5000,
				transition: 'fade',
				transitionDuration: 1000,
				slides: [
					{ src: 'demo/images/image-7.jpg' },
					{ src: 'demo/video/marine.jpg',
						video: {
							src: [
								'demo/video/marine.mp4',
								'demo/video/marine.webm',
								'demo/video/marine.ogv'
							],
							loop: false,
							mute: true
						}
					},
					{ src: 'demo/images/image-28.jpg' },
					{ src: 'demo/images/image-13.jpg' },
					{ src: 'demo/images/image-31.jpg' }
				]
			});
		}

		// Kenburns Background
		if (body.hasClass('kenburns-background')) {

			var kenburnsDisplayBackdrops = false;
			var kenburnsBackgrounds = [
				{ src: 'demo/images/image-7.jpg', valign: 'top' },
				{ src: 'demo/images/image-28.jpg', valign: 'top' },
				{ src: 'demo/images/image-13.jpg', valign: 'top' },
				{ src: 'demo/images/image-31.jpg', valign: 'top' }
			];

			body.vegas({
				preload: true,
				transition: 'swirlLeft2',
				transitionDuration: 4000,
				timer: false,
				delay: 10000,
				slides: kenburnsBackgrounds,
				walk: function (nb) {
					if (kenburnsDisplayBackdrops === true) {
						var backdrop;

						backdrop = backdrops[nb];
						backdrop.animation  = 'kenburns';
						backdrop.animationDuration = 20000;
						backdrop.transition = 'fade';
						backdrop.transitionDuration = 1000;

						body
							.vegas('options', 'slides', [ backdrop ])
							.vegas('next');
					}
				}
			});
		}

		// Youtube Video Background
		if ($('#youtube-background').length > 0) {
			var videos = [
				{videoURL: "0pXYp72dwl0", showControls:false, containment:'.overlay-video',autoPlay:true, mute:false, startAt:0,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:true}
			];

			$('.player').YTPlaylist(videos, true);
		}
		
		// Youtube Multiple Video Background
		if ($('#youtube-multiple-background').length > 0) {
			
			var videos = [
				{videoURL: "0pXYp72dwl0", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:0,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:true},
				{videoURL: "9d8wWcJLnFI", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:20,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:false},
				{videoURL: "nam90gorcPs", showControls:false, containment:'.overlay-video',autoPlay:true, mute:true, startAt:20,opacity:1, loop:false, showYTLogo:false, realfullscreen: true, addRaster:true}
			];

			$('.player').YTPlaylist(videos, true);
			
		}
		
		if(body.hasClass('mobile')) {
			$('.video-wrapper, .player').css('display', 'none');	
		}
		
		// GMap Background
		if($('#gmap-background').length){
			
			var map = new GMaps({
				div: '#gmap-background',
				lat: 37.752797,
				lng: -122.409132,
				zoom: 14
			});
			
			map.addMarker({
				lat: 37.752797,
				lng: -122.409132,
				title: 'Lunar',
				infoWindow: {
					content: '<p>Lunar Agency</p>'
				}
			});
			
		}
		
		// Animated Gradient Background
		if($('#animated-gradient').length){
			animatedGradient();	
		}
		
	}
	
	// Animated Gradient
	function animatedGradient() {
		var colors = new Array(
			[62,35,255],
			[60,255,60],
			[255,35,98],
			[45,175,230],
			[255,0,255],
			[255,128,0]);

		var step = 0;
		//color table indices for: 
		// current color left
		// next color left
		// current color right
		// next color right
		var colorIndices = [0,1,2,3];

		//transition speed
		var gradientSpeed = 0.002;

		function updateGradient() {
		  
			if ( $===undefined ) return;
		  
			var c0_0 = colors[colorIndices[0]];
			var c0_1 = colors[colorIndices[1]];
			var c1_0 = colors[colorIndices[2]];
			var c1_1 = colors[colorIndices[3]];

			var istep = 1 - step;
			var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
			var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
			var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
			var color1 = "rgb("+r1+","+g1+","+b1+")";

			var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
			var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
			var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
			var color2 = "rgb("+r2+","+g2+","+b2+")";

			$('#animated-gradient')
				.css({background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"})
				.css({background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
			  
			step += gradientSpeed;
			if ( step >= 1 ) {
				step %= 1;
				colorIndices[0] = colorIndices[1];
				colorIndices[2] = colorIndices[3];
				
				//pick two new target color indices
				//do not pick the same as the current one
				colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
				colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
			}
		}
		setInterval(updateGradient,10);
	}
	
	
	function init_ED_FullscreenFix() {
		if(!(1024 >= getWindowWidth() || body.hasClass('mobile'))) {
			$('.section.fullscreen-element').each(function(){
				var elem = $(this),
					elemHeight = getWindowHeight() - 140,
					elemContent = elem.find('.table-container'),
					elemContentHeight = elemContent.outerHeight(),
					elemPaddingTop = parseInt(elem.css('padding-top'), 10),
					elemPaddingBottom = parseInt(elem.css('padding-bottom'), 10),
					elemTrueHeight = elemContentHeight + elemPaddingTop + elemPaddingBottom;
				
				if( elemHeight >= elemTrueHeight ){
					elem.css('height', 'calc(100vh - 140px)');
				} else if( elemHeight < elemTrueHeight ){
					elem.css('height', 'auto');
				}

			});
		}
	}
	

	// Remove animations only in hidden slides
	function init_ED_RemoveSlideAnimations(target) {
		if(!(1024 >= getWindowWidth() || body.hasClass('mobile'))) {
			if( detectIE() ) {
				EDSlide.find('.animated').css({
					'display':'block',
					'visibility':'visible'
				});
			} else {
				EDSlide.find('.animated').each( function() {
					var elem = $(this);
					if (elem.hasClass('visible')) {
						var animation = elem.data('animation');
						setTimeout(function(){
							elem.removeClass( animation + " visible" );
						}, 500);
					}
				});
			}
		}
	}
	
	
	// Start animations in active (target) slide
	function init_ED_StartSlideAnimations(target) {
		if(!(1024 >= getWindowWidth() || body.hasClass('mobile'))) {
			if( detectIE() ) {
				$(target).find('.animated').css({
					'display':'block',
					'visibility':'visible'
				});
			} else {
				$(target).find('.animated').each( function() {
					var elem = $(this);
					if ( !elem.hasClass('visible') ) {
						var animationDelay = elem.data('animation-delay'),
							animation = elem.data('animation');
						if ( animationDelay ) {
							setTimeout(function(){
								elem.addClass( animation + " visible" );
							}, animationDelay);
						} else {
							elem.addClass( animation + " visible" );
						}
					}
				});
			}
		}
	}

	
	function init_ED_Navigation() {
		navToggle.off('click');
		btnLoadContent.off('click');
		
		if(!(1024 >= getWindowWidth() || body.hasClass('mobile'))) {
		
			if(EDSlideContainer.hasClass('mCS_destroyed')){
				EDSlideContainer.mCustomScrollbar({
					axis: 'y',
					scrollbarPosition: 'outside',
					scrollInertia: 150,
					autoHideScrollbar: false,
					alwaysShowScrollbar: 1
				});
			} else {
				EDSlideContainer.mCustomScrollbar({
					axis: 'y',
					scrollbarPosition: 'outside',
					scrollInertia: 150,
					autoHideScrollbar: false,
					alwaysShowScrollbar: 1
				});
			}
			
			if(headerNav.css('display', 'none')){
				headerNav.css('display', 'block');
			}
			
			if(navToggle.hasClass('open')){
				navToggle.removeClass('open');
			}

			if(EDSlide.hasClass('active')){
				if(!$('div.ed-slide.active .animated').hasClass('visible')){
					var target = $('nav.header-nav li.active a').attr('href');
					
					// Start animations in active (target) slide
					init_ED_StartSlideAnimations(target);
					
				} else {
					return true;
				}
			} else if(!$('#home').hasClass('active')){
				headerNavElem.removeClass('active');
				if(headerNavElemHome){
					headerNavElemHome.parents('li').addClass('active');
				}
			}

			btnLoadContent.on('click', function(clickEvent) {
				filterTarget(clickEvent,this);
				$(window).off('hashchange.filter').on('hashchange.tmp', function () {
					$(this).off('hashchange.tmp').on('hashchange.filter', filterTarget);
				});

				var target = $(this).attr('href');

				// Return if target slide is active
				if($(target).hasClass('active')){
					return true;
				}
				
				// Hide slides
				if(!$(target).hasClass('active')){
					EDSlide.removeClass('active');
				}

				// Remove animations only in hidden slides
				init_ED_RemoveSlideAnimations(target);
				
				// Add 'active' class to target slide
				if(!$(target).hasClass('active')){
					$(target).addClass('active');
				}
				
				// Select active slide in navigation
				if(headerNav.find('a[href="'+ target +'"]')){
					headerNavElem.removeClass('active');
					headerNav.find('a[href="'+ target +'"]').parents('li').addClass('active');
				}
				
				// Start animations in active (target) slide
				init_ED_StartSlideAnimations(target);
				
			});

		} else {

			if(EDSlideContainer.hasClass('mCustomScrollbar')){
				EDSlideContainer.mCustomScrollbar('destroy');
			}

			if(headerNav.css('display', 'block')){
				headerNav.css('display', 'none');
			}
			
			if(navToggle.hasClass('open')){
				headerNav.css('display', 'block');
			}
		
			navToggle.on('click', function(e) {
				e.preventDefault();
				if(!$(this).hasClass('open')){
					$(this).addClass('open');
					headerNav.slideDown(500);
				} else {
					headerNav.slideUp(500);
					$(this).removeClass('open');
				}
			});
		
			// Smooth Scroll
			btnLoadContent.on('click', function() {	
				var sScroll = $(this),
					sScroll_target = sScroll.attr('href');					
				if(sScroll_target == null){ sScroll_target = '#'; }
				
				$.smoothScroll({
					offset: 0,
					easing: 'swing',
					speed: 800,
					scrollTarget: sScroll_target,
					preventDefault: false
				});
			});
			
		}
	}
	

	// Back button trigers animation
	function init_ED_LocationHashChanged() {
		var target = location.hash;
		if(target === ''){
			var target = '#home';
		}
			
		if(!(1024 >= getWindowWidth() || body.hasClass('mobile'))){

			// Return if target slide is active
			if($(target).hasClass('active')){
				return true;
			}

			if (target === '#home' || target === '') {
				
				// Hide slides
				if(!$(target).hasClass('active')){
					EDSlide.removeClass('active');
				}

				// Remove animations only in hidden slides
				init_ED_RemoveSlideAnimations(target);
				
				// Add 'active' class to target slide
				if(!$(target).hasClass('active')){
					$(target).addClass('active');
				}
				
				// Select home slide in navigation
				if(headerNavElemHome){
					headerNavElem.removeClass('active');
					headerNavElemHome.parents('li').addClass('active');
				}
				
				// Start animations in active (target) slide
				init_ED_StartSlideAnimations(target);

			} else {
				
				// Hide slides
				if(!$(target).hasClass('active')){
					EDSlide.removeClass('active');
				}

				// Remove animations only in hidden slides
				init_ED_RemoveSlideAnimations(target);
				
				// Add 'active' class to target slide
				if(!$(target).hasClass('active')){
					$(target).addClass('active');
				}
				
				// Select active slide in navigation
				if(headerNav.find('a[href="'+ target +'"]')){
					headerNavElem.removeClass('active');
					headerNav.find('a[href="'+ target +'"]').parents('li').addClass('active');
				}
				
				// Start animations in active (target) slide
				init_ED_StartSlideAnimations(target);

			}
			
		}
	}

	
	// Portfolio
	function init_ED_MasonryLayout() {
		if ($('.isotope-container').length > 0) {
			var $isotopeContainer = $('.isotope-container');
			var $columnWidth = $isotopeContainer.data('column-width');
			
			if($columnWidth == null){
				var $columnWidth = '.isotope-item';
			}
			
			$isotopeContainer.isotope({
				filter: '*',
				animationEngine: 'best-available',
				resizable: false,
				itemSelector : '.isotope-item',
				masonry: {
					columnWidth: $columnWidth
				},
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		}

		$('nav.isotope-filter ul a').on('click', function() {
			var selector = $(this).attr('data-filter');
			$isotopeContainer.isotope({ filter: selector });
			$('nav.isotope-filter ul a').removeClass('active');
			$(this).addClass('active');
			return false;
		});

	}


	// magnificPopup
	function init_ED_MagnificPopup() {
		$('.mfp-image').magnificPopup({
			type:'image',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		$('.mfp-gallery').each(function() {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				},
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="fa fa-angle-%dir%" aria-hidden="true"></i></button>',
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});
		});
		
		$('.mfp-iframe').magnificPopup({
			type: 'iframe',
			iframe: {
				patterns: {
					youtube: {
						index: 'youtube.com/',
						id: 'v=',
						src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
					},
					vimeo: {
						index: 'vimeo.com/',
						id: '/',
						src: '//player.vimeo.com/video/%id%?autoplay=1'
					},
					gmaps: {
						index: '//maps.google.',
						src: '%id%&output=embed'
					}
				},
				srcAction: 'iframe_src'
			},
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
		
		$('.mfp-ajax').magnificPopup({
			type: 'ajax',
			ajax: {
				settings: null,
				cursor: 'mfp-ajax-cur',
				tError: '<a href="%url%">The content</a> could not be loaded.'
			},
			midClick: true,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			callbacks: {
				ajaxContentAdded: function(mfpResponse) {
					initFlexslider();
				}
			}
		});
		
		$('.open-popup-link').magnificPopup({
			type: 'inline',
			midClick: true,
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});
	}
	
	// Flexslider
	function init_ED_Flexslider() {
		
		if ($('.bt-flexslider').length > 0) {			
			$('.bt-flexslider').each(function() {
				var $flexsSlider = $(this),
					fs_effect = $flexsSlider.data('effect'),
					fs_easing = $flexsSlider.data('easing'),
					fs_direction = $flexsSlider.data('direction'),
					fs_loop = $flexsSlider.data('loop'),
					fs_smoothHeight = $flexsSlider.data('smooth-height'),
					fs_startAt = $flexsSlider.data('startat'),
					fs_slideshowSpeed = $flexsSlider.data('slideshow-speed'),
					fs_animationSpeed = $flexsSlider.data('animation-speed'),
					fs_randomize = $flexsSlider.data('randomize'),
					fs_video = $flexsSlider.data('video'),
					fs_pagination = $flexsSlider.data('pagination'),
					fs_directionNav = $flexsSlider.data('directionnav'),
					fs_keyboard = $flexsSlider.data('keyboard'),
					fs_pausePlay = $flexsSlider.data('pause-play');
				
				if(fs_effect == null){ fs_effect = 'slide'; }
				if(fs_easing == null){ fs_easing = 'swing'; }
				if(fs_direction == null){ fs_direction = 'horizontal'; }
				if(fs_loop == null){ fs_loop = true; }
				if(fs_smoothHeight == null){ fs_smoothHeight = false; }
				if(fs_startAt == null){ fs_startAt = 0; }
				if(fs_slideshowSpeed == null){ fs_slideshowSpeed = 7000; }
				if(fs_animationSpeed == null){ fs_animationSpeed = 700; }
				if(fs_randomize == null){ fs_randomize = false; }	
				if(fs_video == null){ fs_video = false; }
				if(fs_pagination == null){ fs_pagination = true; }
				if(fs_directionNav == null){ fs_directionNav = true; }
				if(fs_keyboard == null){ fs_keyboard = false; }
				if(fs_pausePlay == null){ fs_pausePlay = false; }
				
				$flexsSlider.flexslider({
					selector: ".slides > div.flex-slide",
					animation: ''+ fs_effect +'',
					easing: ''+ fs_easing +'',
					direction: ''+ fs_direction +'',
					animationLoop: fs_loop,
					smoothHeight: fs_smoothHeight,
					startAt: fs_startAt,
					slideshow: true,
					slideshowSpeed: fs_slideshowSpeed,
					animationSpeed: fs_animationSpeed,
					randomize: fs_randomize,
					pauseOnAction: true,
					pauseOnHover: false,
					video: fs_video,
					controlNav: fs_pagination,
					directionNav: fs_directionNav,
					prevText: "<i class='fa fa-angle-left'></i>",
					nextText: "<i class='fa fa-angle-right'></i>",
					keyboard: fs_keyboard,
					pausePlay: fs_pausePlay,
					pauseText: 'Pause',
					playText: 'Play'
				});
			});
		}
		
	}
	
	function init_ED_Plugins() {
	
		// Responsive Video - FitVids
		$('.video-container').fitVids();
		
		// Countdown
		if (countdown.length > 0) {			
			countdown.each(function() {
				var $countdown = $(this),
					finalDate = $countdown.data('countdown');
				$countdown.countdown(finalDate, function(event) {
					$countdown.html(event.strftime(
						'<div class="counter-container"><div class="counter-box first"><div class="number">%-D</div><span>Day%!d</span></div><div class="counter-box"><div class="number">%H</div><span>Hours</span></div><div class="counter-box"><div class="number">%M</div><span>Minutes</span></div><div class="counter-box last"><div class="number">%S</div><span>Seconds</span></div></div>'
					));
				});
			});
		}

		// Placeholder
		$('input, textarea').placeholder();
		
		// Tooltip
		$('[data-toggle="tooltip"]').tooltip();
		
		// Popover
		$('[data-toggle="popover"]').popover();
		
		// Morphext
		$('.text-rotate').Morphext({
			animation: 'fadeIn',
			separator: '|',
			speed: 3000
		});
	
	}

		
	function init_ED_Mailchimp() {
		$('.mailchimp-form').ajaxChimp({
			callback: mailchimpCallback,
			url: "mailchimp-post-url" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".  
		});

		function mailchimpCallback(resp) {
			 if (resp.result === 'success') {
				$('.success-message').html(resp.msg).fadeIn(1000);
				$('.error-message').fadeOut(500);		
			} else if(resp.result === 'error') {
				$('.error-message').html(resp.msg).fadeIn(1000);
			}  
		}

		$('#email').focus(function(){
			$('.error-message').fadeOut();
			$('.success-message').fadeOut();
		});

		$('#email').on('keydown', function(){
			$('.error-message').fadeOut();
			$('.success-message').fadeOut();
		});

		$("#email").on('click', function() {
			$("#email").val('');
		});
	}


	// Contact Form
	function init_ED_ContactForm() {
		var $contactForm = $('.contact-forn');
		if( $contactForm.length < 1 ){ return true; }

		$contactForm.each( function(){
			var element = $(this),
				elementAlert = element.attr('data-alert-type'),
				elementResult = element.find('.contact-form-result');

			element.find('form').validate({
				submitHandler: function(form) {
					elementResult.hide();

					$(form).ajaxSubmit({
						target: elementResult,
						dataType: 'json',
						success: function( data ) {
							elementResult.html( data.message ).fadeIn( 400 );
							if( data.alert != 'error' ) { $(form).clearForm(); }
						}
					});
				}
			});

		});
	}
	
	// window.hashchange function
	function filterTarget(event,elem) {
		var detectHashChange = event.type;

		if(!detectHashChange === 'click' || detectHashChange === 'hashchange'){
			init_ED_LocationHashChanged();
		}
	}	
	$(window).on('hashchange.filter', filterTarget);
	
	// window load function
	$(window).on('load', function() {
		init_ED_FullscreenFix();
		init_ED_Preloader();
		init_ED_LocationHashChanged();
		init_ED_MasonryLayout();
	});
	
	// document.ready function
	jQuery(document).ready(function($) {
		init_ED_PageBackground();
		init_ED_Navigation();
		init_ED_MagnificPopup();
		init_ED_Flexslider();
		init_ED_Plugins();
		init_ED_Mailchimp();
		init_ED_ContactForm();
	});
	
	// window.resize function
	$(window).on('resize', function () {		
		init_ED_Navigation();
		init_ED_FullscreenFix();
		init_ED_LocationHashChanged();
		init_ED_MasonryLayout();
	});

})(jQuery);