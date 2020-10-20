//== Progress js ==
$('#mySkill').waypoint(function () {
  $('.progress .progress-bar').each(function () {
    $(this).css("width", $(this).attr("aria-valuenow") + '%');
  });
}, {
  offset: '80%'
});

// === Back To Top ===
$(function(){
  $('.bck').backToTop();
});

// === Testimonial ===
$('.carousel').carousel({
  interval : 4000,
  pause : false
})

// === wow ===
  wow = new WOW()
  wow.init();

// === Counter Up ===
jQuery(document).ready(function( $ ) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
});