jQuery(document).ready(function($) {
    var alterClass = function() {
      var windowSize = document.body.clientWidth;
      if (windowSize < 640) {
        $('.about').addClass('about-in-mobile');
        $('.footer').removeClass('other-footer');
      } else if (windowSize >= 641) {
        $('.about').removeClass('about-in-mobile');
        $('.footer').addClass('other-footer');
      };
    };
    $(window).resize(function(){
      alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
  });