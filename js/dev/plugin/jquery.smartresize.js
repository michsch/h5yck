/**!
 * smartresize jquery plugin
*/

(function($, sr) {
  "use strict";

  var debounce;
  debounce = void 0;
  /**
   * debouncing function from John Hann
   * http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  */

  debounce = function(func, threshold, execAsap) {
    var debounced, timeout;
    timeout = void 0;
    return debounced = function() {
      var args, delayed, obj;
      delayed = function() {
        if (!execAsap) {
          func.apply(obj, args);
        }
        return timeout = null;
      };
      obj = this;
      args = arguments;
      if (timeout) {
        clearTimeout(timeout);
      } else {
        if (execAsap) {
          func.apply(obj, args);
        }
      }
      return timeout = setTimeout(delayed, threshold || 100);
    };
  };
  return $.fn[sr] = function(fn, threshold, execAsap) {
    if (fn) {
      return this.on('resize', debounce(fn, threshold || 100, execAsap));
    } else {
      return this.trigger(sr);
    }
  };
})(jQuery, 'smartresize');
