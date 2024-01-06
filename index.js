(function($) {
  function adjustTextBlockHeight() {
    var imageHeight = $('.image-container img').height();
    $('.text-block').height(imageHeight);
  }

  $(window).on('load resize', function() {
    adjustTextBlockHeight();
  });
})(jQuery);