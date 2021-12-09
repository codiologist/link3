(function ($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.preloader').length) {
			$('.preloader').delay(500).fadeOut(800);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			if (windowpos >= 1) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();

	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
		$('.mobile-menu').append('<div class="close-btn"><span class="icon flaticon-cancel-music"></span></div>');
		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
	}


	// Bottom to Top Scroll
	if ($('.scroll-to-target').length) {
		$(".scroll-to-target").on('click', function () {
			var target = $(this).attr('data-target');
			// animate
			$('html, body').animate({
				scrollTop: $(target).offset().top
			}, 1500);

		});
	}

	$(window).on('scroll', function () {
		headerStyle();
	});

	$(window).on('load', function () {
		handlePreloader();
		wow.init();
	});


	$(".download-selfcare-app-box").each(function () {
		var $this = $(this);
		$this.clone().attr("class", "download-selfcare-app-box").appendTo(".selfcare-app-box-mobile");
	});
	

	$(".site-quick-links").each(function () {
		var $this = $(this);
		$this.clone().attr("class", "menu-links").appendTo("#siteQuickLinks");
	});
	

	$(".other-page-links").each(function () {
		var $this = $(this);
		$this.clone().attr("class", "menu-links").appendTo("#otherPageLinks");
	});
	

	$(".footer-right-container .contact-details").each(function () {
		var $this = $(this);
		$this.clone().appendTo("#contactUsDetails");
	});

	$(".footer-right-container .footer-social-links").each(function () {
		var $this = $(this);
		$this.clone().attr("class", "social-links").appendTo(".mobile-social-link-box");
	});
	

	
	


})(window.jQuery);


