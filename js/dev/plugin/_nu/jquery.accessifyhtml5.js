/*jshint devel:true
*/

/*global define, require, module, jQuery
*/

/**
 * Accessifyhtml5.js
 * The jQuery part of accessifyhtml5.js is now deprecated. It won’t get new features and may be removed soon.
 * Adds ARIA to new elements in browsers which don’t do it by themselves.
 *
 * originally by Eric Eggert
 * https://github.com/yatil/accessifyhtml5.js
*/
(function($, root, factory, name) {
  "use strict";  if (typeof exports === 'object') {
    module.exports = factory($);
  } else if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory($));
  }
  if (typeof $ === 'function' && $) {
    $[name] = factory($);
  }
  return true;
})(jQuery, (typeof window === 'object' && window) || this, function($) {
  "use strict";
  var AccessifyHTML5;

  AccessifyHTML5 = function(defaults, override) {
    var fixes;

    if (override == null) {
      override = false;
    }
    fixes = {
      article: {
        role: 'article'
      },
      aside: {
        role: 'complementary'
      },
      nav: {
        role: 'navigation'
      },
      main: {
        role: 'main'
      },
      output: {
        'aria-live': 'polite'
      },
      section: {
        role: 'region'
      },
      '[required]': {
        'aria-required': 'true'
      }
    };
    if (defaults) {
      if (defaults.header) {
        fixes[defaults.header] = {
          role: 'banner'
        };
      }
      if (defaults.footer) {
        fixes[defaults.footer] = {
          role: 'contentinfo'
        };
      }
      if (defaults.main) {
        fixes[defaults.main] = {
          role: 'main'
        };
        fixes.main = {
          role: ''
        };
      }
    }
    $.each(fixes, function(index, item) {
      if (override) {
        /**
         * replace attributes in every found element
        */

        $(index).attr(item);
      } else {
        /**
         * Write attribute only if none is set in HTML yet.
        */

        $(index).not('[' + item[0](+']')).attr(item);
      }
      return true;
    });
    return true;
  };
  return AccessifyHTML5;
}, 'accessifyhtml5');

/*
//@ sourceMappingURL=jquery.accessifyhtml5.js.map
*/