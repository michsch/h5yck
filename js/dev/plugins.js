/**
 * plugins file with some jQuery plugins and standard functions
 *
 * @author             Michael Schulze
 * @version            $1.1$
 * @copyright          Michael Schulze <elsigno.de>, 29 December, 2011
 * @license            GNU General Public License, version 3 (GPL-3.0)
 * @package            coffeescript, jquery
 * @requirements       jquery-1.7.2.min.js
 *
 * @lastmodified       $Date: 2012-03-30 13:16:22 +0200 (Fr., 30 Mär 2012) $
 *
*/

(function($, window, document) {
  "use strict";

  /**
   * Accessifyhtml5.js
   * Adds ARIA to new elements in browsers which don’t do it by themselves.
   *
   * originally by Eric Eggert
   * https://github.com/yatil/accessifyhtml5.js
  */

  var firstplugin, isEventSupported;
  $.accessifyhtml5 = function(defaults) {
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
    $.each(fixes, function(index, item) {
      $(index).attr(item);
      return true;
    });
    return true;
  };
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

  (function() {
    var YAML_focusFix;
    YAML_focusFix = {
      skipClass: "ym-skip",
      init: function() {
        var body, handler, is_ie, is_webkit, userAgent;
        userAgent = navigator.userAgent.toLowerCase();
        is_webkit = userAgent.indexOf("webkit") > -1;
        is_ie = userAgent.indexOf("msie") > -1;
        if (is_webkit || is_ie) {
          body = document.body;
          handler = YAML_focusFix.click;
          if (body.addEventListener) {
            return body.addEventListener("click", handler, false);
          } else {
            if (body.attachEvent) {
              return body.attachEvent("onclick", handler);
            }
          }
        }
      },
      trim: function(str) {
        return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      },
      click: function(e) {
        var a, cls, i, target, _results;
        e = e || window.event;
        target = e.target || e.srcElement;
        a = target.className.split(" ");
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
      },
      focus: function(link) {
        var href, id, target;
        if (link.href) {
          href = link.href;
          id = href.substr(href.indexOf("#") + 1);
          target = document.getElementById(id);
          if (target) {
            target.setAttribute("tabindex", "-1");
            return target.focus();
          }
        }
      }
    };
    return YAML_focusFix.init();
  })();
  /**
   * JavaScript email encrypter
   *
   * @author             Michael Schulze
   * @version            $1.0$
   * @copyright          Michael Schulze, 31 December, 2011
   *                     https://github.com/michsch/cryptmail
   * @license            GNU General Public License, version 3 (GPL-3.0)
   * @package            coffeescript
   *
   * @lastmodified       $Date: 2011-12-31 20:29:35  +0100 (Sat, 31 Dec 2011) $
   *
  */

  (function() {
    /**
     * Crypt given mail
     *
     * @param string email address
     * @param boolean true
    */

    var UnCryptMailto;
    window.CryptMailto = function() {
      var cryptform, e, formname, i, n, r, radioObj, radioValue, s;
      formname = 'cryptmail';
      cryptform = document.forms[formname];
      n = 0;
      r = "";
      s = "mailto:" + cryptform.cryptmail_email.value;
      e = cryptform.cryptmail_email.value;
      if (cryptform.cryptmail_email.value.length < 4) {
        return false;
      }
      radioObj = cryptform.cryptmail_radio;
      if (radioObj.length > 0) {
        i = 0;
        while (i < radioObj.length) {
          radioValue = parseInt(radioObj[i].checked ? radioObj[i].value : void 0, 0);
          i++;
        }
      } else {
        radioValue = 0;
      }
      if (radioValue === 1) {
        e = e.replace(/\./g, '<span class="crypt">.</span>.</span class="crypt">.</span>');
        e = e.replace(/@/, '<span class="crypt">.</span>@</span class="crypt">.</span>');
      } else {
        e = e.replace(/\./g, ' [dot] ');
        e = e.replace(/@/, ' [at] ');
      }
      i = 0;
      while (i < s.length) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
          n = 128;
        }
        r += String.fromCharCode(n + 1);
        i++;
      }
      cryptform.cryptmail_cryptedmail.value = r;
      cryptform.cryptmail_html.value = '<a href="javascript:linkTo_UnCryptMailto(\'' + r + '\');">' + "\n\t" + e + "\n" + '</a>';
      return true;
    };
    /**
     * Uncrypt the email address and returns the valid href
     *
     * @param string the crypted string
     * @return string valid href
    */

    UnCryptMailto = function(s) {
      var i, n, r;
      n = 0;
      r = "";
      i = 0;
      while (i < s.length) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
          n = 128;
        }
        r += String.fromCharCode(n - 1);
        i++;
      }
      return r;
    };
    /**
     * Public function for A tags
     *
     * @param string the crypted string
     * @return boolean true
    */

    window.linkTo_UnCryptMailto = function(s) {
      location.href = new UnCryptMailto(s);
      return true;
    };
    return true;
  })();
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
      el = document.createElement(TAGNAMES[eventName] || "div");
      eventName = "on" + eventName;
      isSupported = eventName in el;
      if (!isSupported) {
        el.setAttribute(eventName, "return;");
        isSupported = typeof el[eventName] === "function";
      }
      el = null;
      return isSupported;
    };
    TAGNAMES = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img"
    };
    return isEventSupported;
  })();
  return true;
})(jQuery, window, document);
