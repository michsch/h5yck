/*jshint devel:true
*/

/*global define, require, module, jQuery
*/

/**
* "Yet Another Multicolumn Layout" - YAML CSS Framework
*
* (en) Workaround for IE8 und Webkit browsers to fix focus problems when using skiplinks
* (de) Workaround für IE8 und Webkit browser, um den Focus zu korrigieren, bei Verwendung von Skiplinks
*
* @note            inspired by Paul Ratcliffe's article
*                  http://www.communis.co.uk/blog/2009-06-02-skip-links-chrome-safari-and-added-wai-aria
*                  Many thanks to Mathias Schäfer (http://molily.de/) for his code improvements
*
* @copyright       Copyright 2005-2012, Dirk Jesse
* @license         CC-BY 2.0 (http://creativecommons.org/licenses/by/2.0/),
*                  YAML-CDL (http://www.yaml.de/license.html)
* @link            http://www.yaml.de
* @package         yaml
* @version         4.0+
* @revision        $Revision: 617 $
* @lastmodified    $Date: 2012-01-05 23:56:54 +0100 (Do, 05 Jan 2012) $
*/

(function(root, factory) {
  "use strict";

  var f;
  f = factory();
  if (typeof exports === 'object') {
    module.exports = f;
  } else if (typeof define === 'function' && define.amd) {
    define(f);
  } else {
    root.YAML_focusFix = f;
  }
  if (jQuery !== void 0 && typeof jQuery === 'function') {
    return jQuery.yamlFocusFix = f;
  }
})((typeof window === 'object' && window) || this, function() {
  "use strict";

  var YAML_focusFix;
  YAML_focusFix = {
    skipClass: "ym-skip"
  };
  YAML_focusFix.init = function() {
    var body, handler, is_ie, is_webkit, userAgent;
    userAgent = navigator.userAgent.toLowerCase();
    is_webkit = userAgent.indexOf('webkit') > -1;
    is_ie = userAgent.indexOf('msie') > -1;
    if (is_webkit || is_ie) {
      body = document.body;
      handler = YAML_focusFix.click;
      if (body.addEventListener) {
        return body.addEventListener('click', handler, false);
      } else {
        if (body.attachEvent) {
          return body.attachEvent('onclick', handler);
        }
      }
    }
  };
  YAML_focusFix.trim = function(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  };
  YAML_focusFix.click = function(e) {
    var a, cls, i, target, _results;
    e = e || window.event;
    target = e.target || e.srcElement;
    a = target.className.split(' ');
    i = 0;
    _results = [];
    while (i < a.length) {
      cls = YAML_focusFix.trim(a[i]);
      if (cls === YAML_focusFix.skipClass) {
        YAML_focusFix.focus(target);
        break;
      }
      _results.push(i++);
    }
    return _results;
  };
  YAML_focusFix.focus = function(link) {
    var href, id, target;
    if (link.href) {
      href = link.href;
      id = href.substr(href.indexOf('#') + 1);
      target = document.getElementById(id);
      if (target) {
        target.setAttribute('tabindex', '-1');
        return target.focus();
      }
    }
  };
  if (jQuery !== void 0 && typeof jQuery === 'function') {
    jQuery(function() {
      return YAML_focusFix.init();
    });
  } else {
    YAML_focusFix.init();
  }
  return YAML_focusFix;
});
