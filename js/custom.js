//testimonial-slider
$('#testimonial-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dot:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// Sticky Menu Js
jQuery(window).scroll(function () {
    console.log(jQuery (window).scrollTop())
    if (jQuery(window).scrollTop() > 64) {
      jQuery('.header-area').addClass('navbar-fixed');
    }
    if (jQuery(window).scrollTop() < 64) {
      jQuery('.header-area').removeClass('navbar-fixed');
    }
});

$(".nav-link").click(function(){
  $(".navbar-collapse").removeClass("show");
});