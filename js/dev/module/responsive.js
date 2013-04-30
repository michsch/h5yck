/*jshint devel:true
*/

/*global define, require, PubSub
*/

/**
 * Responsive Web Design module
 *
 * A set of some standard functions for responsive design.
*/
define(['configuration', 'underscore', 'jquery', 'pubsub', 'plugin/jquery.smartresize', 'exports'], function(config, _, $, PubSub, smartresize, exports) {
  "use strict";
  /**
   * some client window, screen and document size functions
   *
  */

  var Responsive;

  Responsive = function() {
    var debug, debugResize, getDevicePixelRatio, getScreen, getScreenHeight, getScreenWidth, getWindow, getWindowHeight, getWindowWidth, init, onresize, r, updateOnResize;

    r = this;
    r.callback = {
      arr: []
    };
    r.document = {};
    r.screen = {};
    r.window = {};
    r.debugMode = false;
    init = function() {
      getWindow();
      getScreen();
      debug();
      return true;
    };
    getWindow = function() {
      r.window.width = getWindowWidth();
      r.window.height = getWindowHeight();
      r.window.devicePixelRatio = getDevicePixelRatio();
      return true;
    };
    getScreen = function() {
      r.screen.width = getScreenWidth();
      r.screen.height = getScreenHeight();
      return true;
    };
    updateOnResize = function() {
      getWindow();
      return true;
    };
    getWindowWidth = function() {
      var windowWidth;

      windowWidth = window.innerWidth || document.documentElement.clientWidth;
      if (typeof windowWidth !== 'number') {
        windowWidth = $(window).width();
      }
      if (typeof windowWidth !== 'number') {
        windowWidth = $('body').width();
      }
      return windowWidth;
    };
    getWindowHeight = function() {
      var windowHeight;

      windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (typeof windowHeight !== 'number') {
        windowHeight = $(window).height();
      }
      if (typeof windowHeight !== 'number') {
        windowHeight = $('body').height();
      }
      return windowHeight;
    };
    getDevicePixelRatio = function() {
      var devicePixelRatio;

      devicePixelRatio = window.devicePixelRatio || 1;
      return devicePixelRatio;
    };
    getScreenWidth = function() {
      var screenWidth;

      screenWidth = screen.width || false;
      return screenWidth;
    };
    getScreenHeight = function() {
      var screenHeight;

      screenHeight = screen.height || false;
      return screenHeight;
    };
    /**
     * Define the resize event with the usage of special plugin smartresize for debounce events.
     * Gets all callbacks inside of this.callback object.
     *
    */

    onresize = function() {
      return $(window).smartresize(function() {
        var i, key;

        updateOnResize();
        if (PubSub === void 0 && require.defined('pubsub') === true) {
          PubSub = require('pubsub');
        }
        if (typeof $.publish === 'function') {
          $.publish('resize');
        }
        if (typeof PubSub === 'object') {
          PubSub.publish('resize');
        } else if (typeof window.PubSub === 'object') {
          window.PubSub.publish('resize');
        }
        if (typeof $.pubsub === 'object' && typeof $.pubsub.publish === 'function') {
          $.pubsub.publish('resize');
        }
        for (key in exports.callback) {
          if (typeof exports.callback[key] === 'function') {
            exports.callback[key](exports.window);
          } else if (typeof exports.callback[key] === 'object') {
            i = 0;
            while (i <= exports.callback[key].length) {
              if (typeof exports.callback[key][i] === 'function') {
                exports.callback[key][i](exports.window);
              }
              i++;
            }
          }
        }
        return true;
      }, 500);
    };
    this.images = function() {
      var screenBreakPoint, screenWidth;

      screenBreakPoint = {
        page: {
          large: 1024,
          medium: 768
        },
        grid: {
          large: 1024,
          medium: 768
        }
      };
      screenWidth = r.window.width;
      $('figure').each(function() {
        var figure, image, imagePath, large, medium, sbp, small;

        figure = $(this);
        if (figure.parents('.ym-grid').length > 0) {
          large = figure.attr('data-image-medium');
        } else {
          large = figure.attr('data-image-large');
        }
        sbp = screenBreakPoint.page;
        if (typeof large !== 'undefined' && large !== false) {
          medium = $(this).attr('data-image-medium');
          small = $(this).attr('data-image-small');
          if (screenWidth >= sbp.large) {
            imagePath = large;
          } else if ((screenWidth >= sbp.medium && screenWidth < sbp.large) && (typeof medium !== 'undefined' && medium !== false)) {
            imagePath = medium;
          } else if ((screenWidth < sbp.medium) && (typeof small !== 'undefined' && small !== false)) {
            imagePath = small;
          } else {
            if (typeof small !== 'undefined' && small !== false) {
              imagePath = small;
            } else if (typeof medium !== 'undefined' && medium !== false) {
              imagePath = medium;
            } else if (typeof large !== 'undefined' && large !== false) {
              imagePath = large;
            }
          }
          if (imagePath !== 'undefined' && imagePath !== false) {
            image = $('<img class="reponsive-image" src="' + imagePath + '" alt="" />');
            figure.append(image);
          }
        }
        return true;
      });
      return true;
    };
    debug = function() {
      var devicePixelRatio, screen, screenHeight, screenWidth, w, windowHeight, windowWidth, wrapper;

      if (r.debugMode === true) {
        wrapper = $('<section id=r-sizes-debug></section>');
        screen = $('<p class=screen></p>');
        screenWidth = $('<strong>Screen width:</strong> <span class=screen-width>' + r.screen.width + '</span><br />');
        screenHeight = $('<strong>Screen height:</strong> <span class=screen-height>' + r.screen.height + '</span>');
        w = $('<p class=window></p>');
        windowWidth = $('<strong>Window width:</strong> <span class=window-width>' + r.window.width + '</span><br />');
        windowHeight = $('<strong>Window height:</strong> <span class=window-height>' + r.window.height + '</span><br />');
        devicePixelRatio = $('<strong>Device pixel ratio:</strong> <span class=device-pixel-ratio>' + r.window.devicePixelRatio + '</span><br />');
        screen.append(screenWidth);
        screen.append(screenHeight);
        w.append(windowWidth);
        w.append(windowHeight);
        w.append(devicePixelRatio);
        wrapper.append(screen);
        wrapper.append(w);
        $('body').append(wrapper);
        wrapper.addClass('box');
        if (PubSub === void 0 && require.defined('pubsub') === true) {
          PubSub = require('pubsub');
        }
        if (typeof $.publish === 'function') {
          $.subscribe('resize', debugResize);
        }
        if (typeof PubSub === 'object') {
          PubSub.subscribe('resize', debugResize);
        } else if (typeof window.PubSub === 'object') {
          window.PubSub.subscribe('resize', debugResize);
        }
      }
      return true;
    };
    debugResize = function() {
      var debugInfos;

      debugInfos = $('#r-sizes-debug');
      debugInfos.find('.screen-width').text(r.screen.width);
      debugInfos.find('.screen-height').text(r.screen.height);
      debugInfos.find('.window-width').text(r.window.width);
      debugInfos.find('.window-height').text(r.window.height);
      debugInfos.find('.device-pixel-ratio').text(r.window.devicePixelRatio);
      return true;
    };
    /**
     * Add given callback function to internal callback object
     *
     * @param function callback function
     *
     * @return boolean true
     *
    */

    this.resize = function(callback) {
      r.callback.arr.push(callback);
      return true;
    };
    window.setTimeout(function() {
      onresize();
      return true;
    }, 500);
    init();
    return this;
  };
  exports = new Responsive();
  return exports;
});

/*
//@ sourceMappingURL=responsive.js.map
*/