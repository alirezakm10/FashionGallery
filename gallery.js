$(document).ready(function() {
  $(window).scroll(function() {
    var windowScroll = $(this).scrollTop();
    if (windowScroll > $(".gallery").offset().top - 150) {
      $(".gallery figure.pic").each(function(i) {
        setTimeout(function() {
          $(".gallery figure.pic").eq(i).addClass("showoff");
        }, 300 * (i + 1));
      });
    }
  });
});
