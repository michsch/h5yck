(function( $, sr ) {
  "use strict";
  var debounce;

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  debounce = function( func, threshold, execAsap ) {
    var timeout;

    return function debounced () {
      var obj = this, args = arguments;
      function delayed () {
        if (!execAsap)
          func.apply(obj, args);
        timeout = null;
      }

      if (timeout)
        clearTimeout(timeout);
      else if (execAsap)
        func.apply(obj, args);

      timeout = setTimeout(delayed, threshold || 100);
    };
  };

  // smartresize
  $.fn[sr] = function( fn, threshold, execAsap ) {
    return fn ? this.on( 'resize', debounce( fn, threshold || 100, execAsap ) ) : this.trigger( sr );
  };

})( jQuery, 'smartresize' );