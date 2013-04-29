/*jshint devel:true
*/

/*global require:true, define:true, $:true, jQuery:true, Modernizr:true
*/

/**
 * plugins file with some jQuery plugins and standard functions
 *
 * @author             Michael Schulze
 * @version            $1.4.0$
 * @copyright          Michael Schulze, 29 December, 2011
 * @license            GNU General Public License, version 3 (GPL-3.0)
 * @package            coffeescript, jquery
 * @requirements       jquery-1.7.2.min.js
 *
 * @lastmodified       $Date: 2012-03-30 13:16:22 +0200 (Fr., 30 Mär 2012) $
 *
*/

(function($, window, document) {
  "use strict";

  var firstplugin, isEventSupported;
  firstplugin = {
    init: function(options) {
      var defaults, el, firstload, o;
      defaults = {
        resize: 1
      };
      o = $.extend(defaults, options || {});
      firstload = 1;
      el = this;
      if (o.resize === 1) {
        $(window).resize(function() {
          var firstLoad;
          firstLoad = 0;
          firstplugin.update(o);
          return true;
        });
      }
      return this.each(function() {});
    },
    update: function(o) {
      var el;
      el = 0;
      return el.each(function() {});
    }
  };
  $.fn.firstplugin = function(method) {
    if (firstplugin[method]) {
      return firstplugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return firstplugin.init.apply(this, arguments);
    } else {
      return $.error('Method ' + method + ' does not exist on jQuery.firstplugin');
    }
  };
  $.secondplugin = function(options) {
    var defaults, o;
    defaults = {
      resize: 1
    };
    o = $.extend(defaults, options || {});
    return true;
  };
  /**
   * Checks if an event is supported
   *
   * @param string event to check
   * @return boolean true if event is supported, false if not
  */

  isEventSupported = (function() {
    var TAGNAMES;
    window.isEventSupported = function(eventName) {
      var el, isSupported;
      el = document.createElement(TAGNAMES[eventName] || 'div');
      eventName = 'on' + eventName;
      isSupported = eventName in el;
      if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] === 'function';
      }
      el = null;
      return isSupported;
    };
    TAGNAMES = {
      select: 'input',
      change: 'input',
      submit: 'form',
      reset: 'form',
      error: 'img',
      load: 'img',
      abort: 'img'
    };
    return isEventSupported;
  })();
  return true;
})(jQuery, window, document);
