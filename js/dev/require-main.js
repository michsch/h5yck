/*jshint devel:true
*/

/*global
  define,
  require,
  jQuery,
  Modernizr
*/

/**
 * main requirejs script file
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

var _site;

if (typeof jQuery === 'function' && jQuery) {
  jQuery.noConflict();
}

_site = (function(exports, window, document) {
  "use strict";  if (typeof define === 'function' && define.amd && require) {
    exports.useRequirejs = true;
  }
  if (!exports.useRequirejs) {
    console.error('Load require.js first!');
  }
  require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
      domReady: 'module/domReady',
      jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', './vendor/jquery-1.9.1.min'],
      modernizr: 'vendor/modernizr-2.6.2.min',
      underscore: 'vendor/underscore',
      pubsub: 'module/pubsub',
      hyphenator: 'module/hyphenator/Hyphenator',
      mediaelement: 'module/mediaelement/mediaelement-and-player'
    },
    shim: {
      modernizr: {
        exports: 'Modernizr'
      },
      underscore: {
        exports: '_'
      },
      hyphenator: {
        exports: 'Hyphenator'
      },
      mediaelement: {
        exports: 'MediaElementPlayer',
        deps: ['jquery']
      },
      'module/underscore-mixins': ['underscore']
    }
  });
  /**
   * Define Modernizr if global object exists
   *
  */

  if (typeof Modernizr === 'object') {
    define('modernizr', [], function(global) {
      return Modernizr;
    });
  }
  /**
   * Define jQuery if global object exists
   *
  */

  if (typeof jQuery === 'function') {
    define('jquery', [], function(global) {
      return jQuery;
    });
  }
  true;
  /**
   * Get configuration and init some stuff like getting the actual language
   *
   * @return object the new config object
  */

  define('configuration', ['config', 'underscore', 'jquery', 'modernizr', 'exports', 'module/underscore-mixins'], function(config, _, $, Modernizr, exports) {
    var options;

    config.lang = $('html').attr('lang') || 'en';
    options = (typeof window._ddf === 'object' ? window._ddf : {});
    exports = _.deepExtend({}, config, options);
    return exports;
  });
  /**
   * Just load all needed plugins
   *
   * @return boolean true if all plugins are loaded
  */

  define('plugins', ['configuration', 'underscore', 'jquery', 'exports', 'module/underscore-mixins', 'module/accessifyhtml5', 'plugin/jquery.hoverIntent', 'plugin/fancybox/jquery.fancybox', 'plugin/jquery.syncheight', 'plugin/jquery.smartresize'], function(config, _, $, exports) {
    return true;
  });
  /**
   * Launch the app.js
   *
   * @return boolean true if app is loaded
  */

  require(['app'], function(App) {
    App.init();
    return true;
  });
  /**
   * integrate Hyphenator
   *
  */

  require(['hyphenator'], function(Hyphenator) {
    Hyphenator.basepath = 'module/hyphenator/';
    Hyphenator.config({
      classname: 'ym-wbox'
    });
    return Hyphenator.run();
  });
  return exports;
})(_site || {}, window, document);

/*
//@ sourceMappingURL=require-main.js.map
*/