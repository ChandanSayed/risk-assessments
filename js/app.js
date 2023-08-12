// JavaScript Document

$(document).ready(function ($) {
  $('#slider-for').slick({
    //content slider
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    swipe: false
  });
  $('#sliderNav').slick({
    //navigation slider
    asNavFor: '#slider-for',
    prevArrow: '<button type="button" class="slick-prev"><span class="slick-arrow--text">Previous</span></button>',
    nextArrow: '<button type="button" class="slick-next"><span class="slick-arrow--text">Next</span></button>',
    slidesToShow: 6,
    slidesToScroll: 6,
    vertical: true,
    dots: false,
    centerMode: false,
    focusOnSelect: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          speed: 700
        }
      }
    ]
  });

  //Initialize Desktop Slider Animation
  $(window).resize(function () {
    if ($(window).width() >= 767) {
      $('#carousel .slick-slide').each(function () {
        if ($(this).data('slickIndex') === 0) {
          slideAnimation($(this));
        }
      });
      $('#sliderNav').slick('slickGoTo', $(this).data('slickIndex'));
    }
  });

  //Carousel Topics Navigation Click Event
  $('#sliderNav .slick-slide').click(function () {
    //Navigation spinning bullet points
    var sliding = $('#carousel .slick-slide');
    for (var i = 0; sliding.length > i; i++) {
      $(sliding[i]).removeClass('slick-current spin');
      $(this).addClass('spin');
      $(this).addClass('spin');
    }
    slideAnimation($(this));
  });

  //Mobile Image Navigation Click Event
  $('.mobile-nav--item').click(function () {
    //Change image grayscale
    var sliding = $('.mobile-nav--item');
    for (var i = 0; sliding.length > i; i++) {
      $(sliding[i]).removeClass('active');
    }
    $(this).addClass('active');
    slideAnimation($(this));
    //Move content slider
    $('#sliderNav').slick('slickGoTo', $(this).data('slickIndex'));
  });

  //Animate Slide Content
  function slideAnimation(obj) {
    $('#slider-for').slick('slickGoTo', $(obj).data('slickIndex'));
    var navTitleIndex = $(obj).data('slickIndex');
    var contentSlides = $('#slider-for .slick-slide');
    for (var i = 0; contentSlides.length > i; i++) {
      $(contentSlides[i]).removeClass('animated');

      if ($(contentSlides[i]).data('slickIndex') === navTitleIndex) {
        $(contentSlides[i]).addClass('animated');
      }
    }
  }

  //Slick arrows Click Event
  function navAnimation() {
    $('#sliderNav').on('afterChange', function () {
      if ($(window).width() >= 767) {
        $('#slider-for .slick-slide').each(function () {
          $(this).removeClass('animated');
        });
        $('#slider-for .slick-current').addClass('animated');

        $('#sliderNav .slick-slide').each(function () {
          $(this).removeClass('spin');
        });
      } else if ($(window).width() < 767) {
        mobileNav();
      }
    });
  }

  function mobileNav() {
    //Change image grayscale
    var currentSlide = $('#sliderNav').slick('slickCurrentSlide');
    var sliding = $('.mobile-nav--item');
    for (var i = 0; sliding.length > i; i++) {
      $(sliding[i]).removeClass('active');

      if ($(sliding[i]).data('slickIndex') === currentSlide) {
        $(sliding[i]).addClass('active');
      }
    }
  }

  $(window).on('resize', navAnimation);
  navAnimation();

  //Hero Blue Arrow scroll
  $('#heroArrow').click(function () {
    var n = $('#carouselBar')[0].getBoundingClientRect();
    window.scrollTo({
      top: n.top,
      left: 0,
      behavior: 'smooth'
    });
  });

  var controller = new ScrollMagic.Controller({ globalSceneOptions: {} });

  // build scenes
  new ScrollMagic.Scene({ triggerElement: '#hero' }) //hero section
    .setClassToggle('#hero .bar', 'animated')
    .reverse(false)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#hero' }).setClassToggle('#hero .title', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#hero' }).setClassToggle('#hero .hero-content-container', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#hero' }).setClassToggle('#hero .hero-media', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#hero' }).setClassToggle('#hero .hero-arrow', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#carousel' }) //carousel section
    .setClassToggle('#carousel .bar', 'animated')
    .reverse(false)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#carousel' }).setClassToggle('#carousel .subtitle', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#carousel' }).setClassToggle('#carousel .carousel-topics', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#carousel' }).setClassToggle('#carousel .topic-title-content', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#carousel' }).setClassToggle('#carousel .carousel-content-slide.slick-current', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#footer' }) //footer section
    .setClassToggle('#footer .bar', 'animated')
    .reverse(false)
    .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#footer' }).setClassToggle('#footer .footer-title', 'animated').reverse(false).addTo(controller);
  new ScrollMagic.Scene({ triggerElement: '#footer' }).setClassToggle('#footer .footer-resources', 'animated').reverse(false).addTo(controller);
});
