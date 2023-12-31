/*
 We have set a jQuery wrapper for you to write any JS code -- however you are free to use any framework or library you want. Hint: to accomplish the responsive requriement, a bit of JS coding might be needed.
*/

(function($) {
  var textBlockRatio = 0.37645448;

  function adjustTextBlockHeight() {
    var textBlockHeight = $('.image-block').height();
    $('.text-block').height(textBlockHeight);
  }

  $(window).on('resize', adjustTextBlockHeight).trigger('resize');

})(jQuery);
  