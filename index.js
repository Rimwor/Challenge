/*
 We have set a jQuery wrapper for you to write any JS code -- however you are free to use any framework or library you want. Hint: to accomplish the responsive requriement, a bit of JS coding might be needed.
*/

(function($) {
  function adjustTextBlockHeight() {
    var imageHeight = $('.image-container img').height();
    $('.text-block').height(imageHeight - 40);
  }

  $(window).on('load resize', function() {
    adjustTextBlockHeight();
  });
})(jQuery);