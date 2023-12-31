/*
 We have set a jQuery wrapper for you to write any JS code -- however you are free to use any framework or library you want. Hint: to accomplish the responsive requriement, a bit of JS coding might be needed.
*/

(function($) {
  var textBlockRatio = 0.37645448;

  function adjustTextBlockHeight() {
    var textBlockHeight = $(window).height()*textBlockRatio;
    $('.text-block').height(textBlockHeight);
    $('.image-block').height(textBlockHeight);
    $('.image-container').height(textBlockHeight);
    $('img').height(textBlockHeight);
  }

  $(window).on('resize', adjustTextBlockHeight).trigger('resize');

})(jQuery);
  