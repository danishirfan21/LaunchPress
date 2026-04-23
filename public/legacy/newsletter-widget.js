(function ($) {
  $(document).ready(function () {
    setTimeout(function () {
      $("#legacy-newsletter-popup").fadeIn();
    }, 1500);

    $("#legacy-close-popup").on("click", function () {
      $("#legacy-newsletter-popup").fadeOut();
    });
  });
})(jQuery);
