(function ($) {
"use strict";
$('#clock').countdown('2019/05/16', function(event) {
    $(this).html(event.strftime('<span class="countdown-wrap"><span class="countdown-item">%H <br><span>hours</span></span><span class="countdown-item">%M <br><span>Minutes</span></span><span class="countdown-item">%S <br><span>Seconds</span></span></span>'));
  });

// team-active
$('.team-active').owlCarousel({
    loop:true,
    margin:30,
    items:1,
    autoplay:true,
    smartSpeed: 3000,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:3
        }
    }
});


})(jQuery);	