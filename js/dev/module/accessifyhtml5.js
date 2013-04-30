/**jshint
*/

/**globals
 * define,
 * jQuery,
 * module
*/

/**
 * accessifyhtml5.js - v2.0.0 - 2013-04-29
 * https://github.com/michsch/accessifyhtml5.js
 * original: https://github.com/yatil/accessifyhtml5.js
 * Copyright (c) 2013 Eric Eggert, Michael Schulze (module); Licensed MIT license
*/
(function(root, factory, name) {
  "use strict";  if (typeof exports === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root[name] = factory;
  }
  if (typeof jQuery === 'function' && jQuery) {
    jQuery[name] = factory;
  }
  return true;
})((typeof window === 'object' && window) || this, function() {
  "use strict";
  var AccessifyHTML5;

  AccessifyHTML5 = function(defaults, more_fixes) {
    var ATTR_SECURE, Doc, ID_PREFIX, attr, by_match, el_label, elems, fix, fixes, i, key, mo, n_label, obj, value;

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
    ATTR_SECURE = /aria-[a-z]+|role|tabindex|title|alt|data-[\w\-]+|lang|style|maxlength|placeholder|pattern|type/;
    ID_PREFIX = 'acfy-id-';
    n_label = 0;
    Doc = document;
    if (Doc.querySelectorAll) {
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
      for (mo in more_fixes) {
        fixes[mo] = more_fixes[mo];
      }
      for (fix in fixes) {
        if (fixes.hasOwnProperty(fix)) {
          elems = Doc.querySelectorAll(fix);
          obj = fixes[fix];
          i = 0;
          while (i < elems.length) {
            for (key in obj) {
              if (obj.hasOwnProperty(key)) {
                attr = key;
                value = obj[key];
                if (!attr.match(ATTR_SECURE)) {
                  continue;
                }
                if (!(typeof value).match(/string|number/)) {
                  continue;
                }
                by_match = attr.match(/(describ|label)l?edby/);
                if (by_match) {
                  el_label = Doc.querySelector(value);
                  if (!el_label) {
                    continue;
                  }
                  if (!el_label.id) {
                    el_label.id = ID_PREFIX + n_label;
                  }
                  value = el_label.id;
                  attr = 'aria-' + ('label' === by_match[1] ? 'labelledby' : 'describedby');
                  n_label++;
                }
                if (!elems[i].hasAttribute(attr)) {
                  elems[i].setAttribute(attr, value);
                }
              }
            }
            i++;
          }
        }
      }
    }
    return true;
  };
  return AccessifyHTML5;
}, 'accessifyhtml5');

/*
//@ sourceMappingURL=accessifyhtml5.js.map
*/