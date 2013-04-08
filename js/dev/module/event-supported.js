/*jshint devel:true
*/

/*global define, require, module, jQuery
*/

/**
 * Checks if an event is supported
 * https://github.com/kangax/iseventsupported/
 *
 * @param string event to check
 * @return boolean true if event is supported, false if not
*/

(function(root, factory) {
  "use strict";
  if (typeof exports === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.isEventSupported = factory;
  }
  if (typeof jQuery === 'function') {
    return jQuery.isEventSupported = factory;
  }
})((typeof window === 'object' && window) || this, function() {
  "use strict";

  var TAGNAMES, exports, isEventSupported;
  TAGNAMES = {
    select: "input",
    change: "input",
    submit: "form",
    reset: "form",
    error: "img",
    load: "img",
    abort: "img"
  };
  isEventSupported = function(eventName, element) {
    var isSupported;
    console.log('test');
    element = element || document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    isSupported = eventName in element;
    if (!isSupported) {
      if (!element.setAttribute) {
        element = document.createElement('div');
      }
      if (element.setAttribute && element.removeAttribute) {
        element.setAttribute(eventName, '');
        isSupported = typeof element[eventName] === 'function';
        if (typeof element[eventName] !== void 0) {
          element[eventName] = void 0;
        }
        element.removeAttribute(eventName);
      }
    }
    element = null;
    return isSupported;
  };
  exports = isEventSupported;
  return exports;
});
