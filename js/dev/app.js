/*jshint devel:true
*/

/*global
  define,
  require,
  jQuery,
  Modernizr
*/

/**
 * main jQuery script file
 *
 * @author             Michael Schulze
 * @version            $1.4.0$
 * @copyright          Michael Schulze, 29 December, 2011
 * @license            All rights reserved. No usage without written permission.
 * @package            coffeescript, jquery
 * @requirements       jquery-1.9.1.min.js
 *
 * @lastmodified       $Date: 2013-04-29 21:56:55 +0200 (Mon, 29 Apr 2013) $
 *
*/
(function(root, factory) {
  "use strict";  if (typeof exports === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(['configuration', 'jquery', 'module/accessifyhtml5', 'plugins'], function() {
      return factory.apply(this, arguments);
    });
  } else {
    root._App = factory();
  }
  return true;
})((typeof window === 'object' && window) || this, function(config, $, accessifyhtml5, plugins) {
  "use strict";
  var App, DOMLoad, DOMReady, exports, lang, language;

  exports = exports || {};
  language = $('html').attr('lang');
  lang = !language ? 'en' : language;
  if (config === void 0) {
    config = {};
    config.ll = {
      en: {
        from: 'from',
        to: 'to',
        image: 'image'
      },
      de: {
        from: 'von',
        to: 'bis',
        image: 'Bild'
      }
    };
  }
  config.lang = (typeof config.ll[lang] === "object" && config.ll[lang] ? lang : 'en');
  DOMReady = (function() {
    var installSyntaxHighlighting, navOutFunction, navOverFunction, navigation;

    function DOMReady(config) {
      this.config = config;
      this.init();
    }

    /**
     * Init function for that page
     *
     * @return boolean true
    */


    DOMReady.prototype.init = function() {
      var mobileScrollUp;

      accessifyhtml5();
      $('html').removeClass('no-js').addClass('js');
      mobileScrollUp = function() {
        return window.scrollTo(0, 1);
      };
      setTimeout(mobileScrollUp, 100);
      this.fancybox();
      return true;
    };

    /**
     * Creates the DropDown navigation with hoverIntent plugin
     *
     * @return boolean true
    */


    navigation = function() {
      var navHover;

      navHover = {
        over: navOverFunction,
        out: navOutFunction,
        timeout: 200
      };
      $("#nav div.hlist > ul:first-child > li > a").hoverIntent(navHover);
      return true;
    };

    /**
     * Main navigation mouseOver
     *
     * @return boolean true
    */


    navOverFunction = function() {
      if ($(this).next('ul').length > 0) {
        $(this).parent('li').addClass('hover');
        $(this).next('ul').slideDown(200);
      }
      return true;
    };

    /**
     * Main navigation mouseOut
     *
     * @return boolean true
    */


    navOutFunction = function() {
      var li, link, ul;

      link = $(this);
      li = link.parent('li');
      ul = link.next('ul');
      return true;
    };

    installSyntaxHighlighting = function() {
      var highlightStyle;

      highlightStyle = 'peachpuff';
      if ($.fn.snippet) {
        $('pre.htmlCode').snippet('html', {
          style: highlightStyle
        });
        $('pre.cssCode').snippet('css', {
          style: highlightStyle
        });
        $('pre.jsCode').snippet('javascript', {
          style: highlightStyle
        });
      }
      return true;
    };

    /**
     * Activate fancybox
     *
     * @return boolean true
    */


    DOMReady.prototype.fancybox = function(options) {
      var fancyboxDefaults, o;

      fancyboxDefaults = {
        useResponsive: true,
        live: false,
        padding: 10,
        margin: 20,
        minWidth: 100,
        minHeight: 100,
        maxWidth: 2560,
        maxHeight: 2560,
        autoSize: true,
        autoHeight: false,
        autoWidth: false,
        fitToView: true,
        aspectRatio: false,
        topRatio: 0.5,
        scrolling: 'auto',
        wrapCSS: '',
        arrows: true,
        closeBtn: true,
        nextClick: false,
        mouseWheel: true,
        autoPlay: false,
        playSpeed: 3000,
        preload: 2,
        modal: false,
        loop: true,
        scrollOutside: true,
        index: 0,
        type: null,
        href: null,
        content: null,
        title: null,
        openSpeed: 300,
        closeSpeed: 300,
        nextSpeed: 300,
        prevSpeed: 300,
        openOpacity: true,
        closeOpacity: true,
        helpers: {
          overlay: {
            css: {}
          },
          title: {
            type: 'inside'
          }
        },
        afterLoad: function() {
          var images, title;

          images = config.ll[config.lang].image + " " + (this.index + 1) + " " + config.ll[config.lang].from + " " + this.group.length;
          title = $(this.element).attr('title');
          this.title = images + (title ? " - " + title : "");
          return this.title;
        },
        afterShow: function() {
          return $(".fancybox-wrap").hover(function() {
            return $(".fancybox-title").show();
          }, function() {
            return $(".fancybox-title").hide();
          });
        }
      };
      if (typeof $.fn.fancybox === 'function' && $('*').is('.fancybox')) {
        o = $.extend(true, {}, fancyboxDefaults, options || {});
        $('.fancybox').fancybox(o);
      }
      return true;
    };

    return DOMReady;

  })();
  DOMLoad = (function() {
    function DOMLoad(config) {
      this.config = config;
      this.init();
    }

    /**
     * Init function for that page
     *
     * @return boolean true
    */


    DOMLoad.prototype.init = function() {
      return true;
    };

    return DOMLoad;

  })();
  App = (function() {
    function App(config) {
      this.config = config;
      if (typeof define === 'function' && define) {
        this.reference = 'requirejs';
      }
    }

    App.prototype.init = function() {
      this.ready();
      this.load();
      return true;
    };

    App.prototype.ready = function() {
      $(document).ready(function() {
        this.domReady = new DOMReady(this.config);
        return true;
      });
      if (typeof domReady === 'function' && domReady) {
        domReady(function() {
          return true;
        });
      }
      return true;
    };

    App.prototype.load = function() {
      if (typeof domReady === 'function' && domReady) {
        domReady(function() {
          this.domLoad = new DOMLoad(this.config);
          return true;
        });
      } else {
        $('*').load(function() {
          this.domLoad = new DOMLoad(this.config);
          return true;
        });
      }
      return true;
    };

    return App;

  })();
  exports = new App(config);
  return exports;
});

/*
//@ sourceMappingURL=app.js.map
*/