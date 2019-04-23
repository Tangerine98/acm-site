jQuery(document).ready(function($) {
    var alterClass = function() {
      var windowSize = document.body.clientWidth;
      if (windowSize < 640) {
        $('.testimonials-card').addClass('testimonials-card-in-mobile');
      } else if (windowSize >= 641) {
        $('.testimonials-card').removeClass('testimonials-card-in-mobile');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });