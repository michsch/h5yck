/*jshint devel:true
*/

/*global require:true, define:true, $:true, jQuery:true, Modernizr:true
*/

/**
 * jQuery plugin msSlider
 *
 * @author             Michael Schulze
 * @version            $1.1.0$
 * @copyright          Michael Schulze, 10 February, 2012
 * @license            All rights reserved. No usage without written permission.
 * @package            coffeescript, jquery
 * @requirements       jquery-1.9.0.min.js
 *
 * @lastmodified       $Date: 2013-02-06 19:10:35 +0100 (Wed, 06 Feb 2013) $
 *
*/

(function($, window, document) {
  "use strict";

  var msSlider;
  msSlider = {
    init: function(options) {
      var autoplay, centerNavIcon, createNavigation, defaults, doFade, initSlider, initializeFade, navigationConfig, o, showNextSlide, slideContainer, slides;
      defaults = {
        autoplay: true,
        pauseOnHover: true,
        lightbox: true,
        slideClass: 'slide',
        slideAnimation: 'fade',
        crossFade: true,
        activeSlideClass: 'active',
        slideTime: 5000,
        fadeTime: 1000,
        hideControls: true,
        useCssTransition: true,
        activeSlideCSS: {
          position: 'absolute',
          top: 0,
          'z-index': 20
        },
        inactiveSlideCSS: {
          position: 'relative',
          'z-index': 10
        },
        showNavigation: true
      };
      o = $.extend(defaults, options || {});
      slideContainer = {};
      slides = {};
      /**
      * Init the slider
      *
      * @return boolean true
      */

      initSlider = function() {
        slideContainer.find('.' + o.slideClass + ':first').addClass(o.activeSlideClass).siblings().hide();
        slides.each(function() {
          var slide;
          slide = $(this);
          return true;
        });
        if (o.showNavigation === true && o.pauseOnHover === true) {
          createNavigation();
        }
        if (o.autoplay === true && o.slideAnimation === 'fade') {
          autoplay();
        }
        return true;
      };
      /**
      * Create prev and next buttons
      *
      * @return boolean true
      */

      createNavigation = function() {
        var controls, navElements;
        controls = $('<ul class="controls" role="navigation"></ul>');
        navElements = '<li class="prev"><a href="#"><span>prev</span></a></li>';
        navElements += '<li class="next"><a href="#"><span>next</span></a></li>';
        navElements = $(navElements);
        controls.append(navElements);
        slideContainer.append(controls);
        if (o.hideControls === true) {
          controls.hide();
          slideContainer.mouseover(function() {
            controls.fadeIn();
            return true;
          }).mouseleave(function() {
            controls.fadeOut();
            return true;
          });
        }
        $(window).resize(function() {
          return true;
        });
        navigationConfig();
        return true;
      };
      /**
      * Centerize the navigation icon
      *
      * @return boolean true
      */

      centerNavIcon = function() {
        var heightInterval;
        heightInterval = null;
        heightInterval = window.setInterval(function() {
          var top;
          if (slideContainer.height() > 0) {
            slideContainer.children('a.navigation').height(slideContainer.height());
            top = (slideContainer.height() / 2) - (slideContainer.find('a.navigation span').height() / 2);
            slideContainer.find('a.navigation span').css('margin-top', top);
            return window.clearInterval(heightInterval);
          }
        }, 300);
        return true;
      };
      /**
      * Configure the navigation
      *
      * @return boolean true
      */

      navigationConfig = function() {
        var controls;
        controls = slideContainer.children('.controls');
        controls.find('li.prev a, a.prev').click(function(event) {
          event.preventDefault();
          initializeFade('prev');
          return true;
        });
        controls.find('li.next a, a.next').click(function(event) {
          event.preventDefault();
          initializeFade('next');
          return true;
        });
        return true;
      };
      /**
      * initializes the fades to another image
      *
      * @param string 'next' for the next image and 'prev' for the previous image
      * @return boolean true
      */

      initializeFade = function(direction) {
        var actSlide, nextSlide;
        if (direction == null) {
          direction = 'next';
        }
        actSlide = slideContainer.find('.' + o.slideClass + '.' + o.activeSlideClass);
        switch (direction) {
          case 'next':
            if (actSlide.next('.' + o.slideClass).length > 0) {
              nextSlide = actSlide.next('.' + o.slideClass);
            } else {
              nextSlide = actSlide.parent().find('.' + o.slideClass + ':first-child');
            }
            break;
          case 'prev':
            if (actSlide.prev('.' + o.slideClass).length > 0) {
              nextSlide = actSlide.prev('.' + o.slideClass);
            } else {
              nextSlide = actSlide.parent().find('.' + o.slideClass + ':last');
            }
            break;
          default:
            return false;
        }
        if (nextSlide) {
          doFade(actSlide, nextSlide);
        }
        return true;
      };
      /**
      * do the fade from an object to another
      *
      * @param object active image
      * @param object next image to which should be faded
      * @return boolean true
      */

      doFade = function(actSlide, nextSlide) {
        slideContainer.children('controls').find('a').unbind().click(function(event) {
          event.preventDefault();
          return true;
        });
        if (o.crossFade === true) {
          actSlide.fadeOut(o.fadeTime);
        }
        nextSlide.css(o.activeSlideCSS).fadeIn(o.fadeTime, function() {
          actSlide.removeClass(o.activeSlideClass).hide().css(o.inactiveSlideCSS);
          $(this).addClass(o.activeSlideClass).css(o.inactiveSlideCSS);
          navigationConfig();
          return true;
        });
        return true;
      };
      /**
      * Shows the next slide
      *
      * @paran function a callback function after the fade is done
      *
      * @return boolean true
      */

      showNextSlide = function(callback) {
        var activeSlide, nextSlide;
        activeSlide = slideContainer.find('.' + o.slideClass + '.' + o.activeSlideClass);
        nextSlide = activeSlide.next('.' + o.slideClass);
        slideContainer.children('a.navigation').unbind().click(function(event) {
          return event.preventDefault();
        });
        nextSlide.css(o.activeSlideCSS).fadeIn(o.fadeTime, function() {
          activeSlide.removeClass(o.activeSlideClass).hide().css(o.inactiveSlideCSS);
          $(this).addClass(o.activeSlideClass).css(o.inactiveSlideCSS);
          slideContainer.find('.' + o.slideClass + ':last').after(activeSlide);
          navigationConfig();
          if (callback !== void 0 && typeof callback === 'function') {
            callback();
          }
          return true;
        });
        return true;
      };
      /**
      * Define autoplay options
      *
      * @return boolean true
      */

      autoplay = function() {
        var exports, init, slideTimer;
        exports = {};
        slideTimer = null;
        exports.start = function() {
          slideTimer = window.setTimeout(function() {
            return showNextSlide(exports.start());
          }, o.slideTime);
          return true;
        };
        exports.stop = function() {
          window.clearTimeout(slideTimer);
          return true;
        };
        if (o.pauseOnHover === true) {
          slideContainer.unbind().mouseover(function() {
            exports.stop();
            if (o.showNavigation === true && o.hideControls === true) {
              slideContainer.children('.controls').fadeIn();
            }
            return true;
          }).mouseleave(function() {
            if (o.showNavigation === true && o.hideControls === true) {
              slideContainer.children('.controls').fadeOut();
            }
            exports.start();
            return true;
          });
        }
        init = (function() {
          exports.start();
          return true;
        })();
        return exports;
      };
      return this.each(function() {
        slideContainer = $(this);
        slides = slideContainer.find('.' + o.slideClass);
        if (slides.length > 1) {
          initSlider();
          return true;
        } else {
          return false;
        }
      });
    }
  };
  $.fn.msSlider = function(method) {
    if (msSlider[method]) {
      return msSlider[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return msSlider.init.apply(this, arguments);
    } else {
      return $.error('Method ' + method + ' does not exist on jQuery.msSlider');
    }
  };
  return true;
})(jQuery, window, document);
