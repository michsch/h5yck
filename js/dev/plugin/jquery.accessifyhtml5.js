/*jshint devel:true
*/

/*global define, require, module, jQuery
*/

/**
 * Accessifyhtml5.js
 * Adds ARIA to new elements in browsers which don’t do it by themselves.
 *
 * originally by Eric Eggert
 * https://github.com/yatil/accessifyhtml5.js
*/

(function($, root, factory) {
  "use strict";
  if (typeof exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else {
    root.accessifyhtml5 = factory();
  }
  if (typeof $ === 'function') {
    return factory($);
  }
})(jQuery, (typeof window === 'object' && window) || this, function($) {
  "use strict";
  return $.accessifyhtml5 = function(defaults) {
    var fixes;
    fixes = {
      article: {
        role: "article"
      },
      aside: {
        role: "complementary"
      },
      nav: {
        role: "navigation"
      },
      output: {
        "aria-live": "polite"
      },
      section: {
        role: "region"
      },
      "[required]": {
        "aria-required": "true"
      }
    };
    if (defaults) {
      if (defaults.header) {
        fixes[defaults.header] = {
          role: "banner"
        };
      }
      if (defaults.footer) {
        fixes[defaults.footer] = {
          role: "contentinfo"
        };
      }
    }
    $.each(fixes, function(element, attributes) {
      $(element).each(function(index, element) {
        var property;
        for (property in attributes) {
          if ($(this).attr(property) === false || typeof $(this).attr(property) === void 0) {
            $(this).attr(property, attributes[property]);
          }
        }
        return true;
      });
      return true;
    });
    return true;
  };
});
