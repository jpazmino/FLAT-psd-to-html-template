$(window).load(function () {

	/**************************/
	/* PORTFOLIO ITEM HOVER
	/* show link to project and red shade over project image
	/**************************/

	var $portfolioImg = $('.portfolio-img');
	$('.plink').css('display', 'none');

	$portfolioImg.hover(function () {
		$(this).find('i').stop().animate({
			opacity: 0.9
		}, 300);
		$(this).find('a').stop().animate({
			opacity: 1,
			"top": "50%"
		});
	}, function () {
		$(this).find('i').stop().animate({
			opacity: 0
		}, 300);
		$(this).find('a').stop().animate({
			"top": "20px",
			opacity: 0
		});
	});


	/**************************/
	/* PREVENT DEFAULT JUMP TO TOP ON LINK CLICK
	/* template is just a single-page demo, we
	/* want to avoid annyoing jump to top behavior
	/**************************/
	$('a').on('click', function (e) {
		e.preventDefault();
	});
	
	
	/**************************/
	/* Remove highlight
	/* when tapping links in mobile
	/**************************/
	document.addEventListener("touchstart", function(){}, true);


	/**************************/
	/* TOGGLE MENU ON MOBILE
	/**************************/
	var $nav = $('.nav-list');

	$('#menu-icon').on('click', function() {
		$nav.toggle();
	});

	$(window).resize(function() {
		if($(this).width() >= 746) {
			$nav.show();
		} else {
			$nav.hide();
		}
	});


	/**************************/
	/* PORTFOLIO FILTER
	/* (Isotope js)
	/**************************/
	var $container = $('#portfolio-container');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('#portfolio-filter button').on('click', function(){
		$('#portfolio-filter .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'ease-out',
				queue: false
			}
		});
		return false;
	});

});