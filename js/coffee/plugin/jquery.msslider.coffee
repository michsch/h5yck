###jshint devel:true
###
###global require:true, define:true, $:true, jQuery:true, Modernizr:true
###

###*
 * jQuery plugin msSlider
 *
 * @author             Michael Schulze
 * @version            $1.4.0$
 * @copyright          Michael Schulze, 10 February, 2012
 * @license            All rights reserved. No usage without written permission.
 * @package            coffeescript, jquery
 * @requirements       jquery-1.9.0.min.js
 *
 * @lastmodified       $Date: 2013-02-06 19:10:35 +0100 (Wed, 06 Feb 2013) $
 *
###

( ( $, window, document ) ->
  "use strict";

  msSlider = {
    # initial plugin loading
    init: ( options ) ->
      defaults =
        autoplay : true
        pauseOnHover : true
        lightbox : true
        slideClass : 'slide'
        slideAnimation : 'fade'
        crossFade : true
        activeSlideClass : 'active'
        slideTime : 5000
        fadeTime : 1000
        hideControls : true
        useCssTransition : true
        activeSlideCSS:
          position : 'absolute'
          top : 0
          'z-index' : 20
        inactiveSlideCSS:
          position : 'relative'
          'z-index' : 10
        showNavigation : true

      o = $.extend(defaults, options || {})

      slideContainer = {}
      slides = {}

      ###*
      * Init the slider
      *
      * @return boolean true
      ###
      initSlider = ->
        # adding active class to first slide and hide the others
        slideContainer.find('.' + o.slideClass + ':first')
          .addClass( o.activeSlideClass )
          .siblings().hide()

        # go through each single slide
        slides.each( ->
          slide = $(this)
          true
        )

        if o.showNavigation == true and o.pauseOnHover == true
          createNavigation()

        if o.autoplay == true and o.slideAnimation == 'fade'
          autoplay()

        true

      ###*
      * Create prev and next buttons
      *
      * @return boolean true
      ###
      createNavigation = ->
        controls = $('<ul class="controls" role="navigation"></ul>')
        navElements = '<li class="prev"><a href="#"><span>prev</span></a></li>'
        navElements += '<li class="next"><a href="#"><span>next</span></a></li>'
        navElements = $(navElements)
        controls.append navElements 

        slideContainer.append controls

        if o.hideControls is true
          controls.hide()
          slideContainer.mouseover( ->
            controls.fadeIn()
            true
          ).mouseleave( ->
            controls.fadeOut()
            true
          )

        #centerNavIcon()
        $(window).resize ->
          #centerNavIcon()
          true

        navigationConfig()

        true


      ###*
      * Centerize the navigation icon
      *
      * @return boolean true
      ###
      centerNavIcon = ->
        heightInterval = null
        heightInterval = window.setInterval( ->

          if slideContainer.height() > 0
            slideContainer.children('a.navigation').height(slideContainer.height())

            top = (slideContainer.height() / 2) - (slideContainer.find('a.navigation span').height() / 2)
            # console.log(top);
            slideContainer.find('a.navigation span').css('margin-top', top)
            window.clearInterval(heightInterval)
        , 300)

        true
      
      ###*
      * Configure the navigation
      *
      * @return boolean true
      ###
      navigationConfig = ->
        controls = slideContainer.children('.controls')

        controls.find('li.prev a, a.prev').click (event) ->
          event.preventDefault()
          initializeFade('prev')
          true

        controls.find('li.next a, a.next').click (event) ->
          event.preventDefault()
          initializeFade('next')
          true

        true
        
      ###*
      * initializes the fades to another image
      *
      * @param string 'next' for the next image and 'prev' for the previous image
      * @return boolean true
      ###
      initializeFade = (direction = 'next') ->
        # get active slide
        actSlide = slideContainer.find '.' + o.slideClass + '.' + o.activeSlideClass
        
        switch direction
          when 'next'
            if actSlide.next('.' + o.slideClass).length > 0
              nextSlide = actSlide.next('.' + o.slideClass)
            else
              nextSlide = actSlide.parent().find('.' + o.slideClass + ':first-child')

          when 'prev'
            if actSlide.prev('.' + o.slideClass).length > 0
              nextSlide = actSlide.prev('.' + o.slideClass)
            else
              nextSlide = actSlide.parent().find('.' + o.slideClass + ':last')

          else
            return false
        
        if nextSlide then doFade actSlide, nextSlide
        true
        
      ###*
      * do the fade from an object to another
      *
      * @param object active image
      * @param object next image to which should be faded
      * @return boolean true
      ###
      doFade = (actSlide, nextSlide) ->
        # disable navigation
        slideContainer.children('controls').find('a').unbind().click (event) ->
          event.preventDefault()
          true

        # do animation
        if o.crossFade is true
          actSlide.fadeOut o.fadeTime

        nextSlide.css(o.activeSlideCSS).fadeIn o.fadeTime, ->
          actSlide.removeClass( o.activeSlideClass ).hide().css o.inactiveSlideCSS
          $(this).addClass( o.activeSlideClass ).css o.inactiveSlideCSS

          #slideContainer.find('.' + o.slideClass + ':last').after( activeSlide )

          # enable the navigation after animation
          navigationConfig()
          true
        true
        
      ###*
      * Shows the next slide
      *
      * @paran function a callback function after the fade is done
      *
      * @return boolean true
      ###
      showNextSlide = ( callback ) ->
        activeSlide = slideContainer.find('.' + o.slideClass + '.' + o.activeSlideClass)
        nextSlide = activeSlide.next('.' + o.slideClass)

        # disable navigation
        slideContainer.children('a.navigation').unbind().click (event) ->
          event.preventDefault()

        # do animation
        nextSlide.css(o.activeSlideCSS).fadeIn( o.fadeTime, ->
          activeSlide.removeClass( o.activeSlideClass ).hide().css( o.inactiveSlideCSS )
          $(this).addClass( o.activeSlideClass ).css( o.inactiveSlideCSS )

          slideContainer.find('.' + o.slideClass + ':last').after( activeSlide )

          # enable the navigation after animation
          navigationConfig()

          # given callback function
          if callback isnt undefined && typeof callback is 'function'
            callback()

          true
        )

        true
        
      ###*
      * Define autoplay options
      *
      * @return boolean true
      ###
      autoplay = () ->
        exports = {}
        slideTimer = null

        exports.start = ->
          slideTimer = window.setTimeout( ->
            showNextSlide( exports.start() )
          , o.slideTime)
          true

        exports.stop = ->
          window.clearTimeout( slideTimer )
          true

        if o.pauseOnHover is true
          slideContainer.unbind().mouseover( ->
            exports.stop()

            if o.showNavigation is true and o.hideControls is true
              slideContainer.children('.controls').fadeIn()

            true
          ).mouseleave( ->
            if o.showNavigation is true and o.hideControls is true
              slideContainer.children('.controls').fadeOut()

            exports.start()
            true
          )

        init = do ->
          exports.start()
          true

        return exports

      # if multiple slider are defined on one page go through every slideshow
      this.each ->
        slideContainer = $(this)
        slides = slideContainer.find('.' + o.slideClass)

        if slides.length > 1
          initSlider()
          true
        else
          false

  }

  $.fn.msSlider = ( method ) ->
    # Method calling logic
    if msSlider[method]
      msSlider[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ))
    else if typeof method is 'object' or ! method
      msSlider.init.apply( this, arguments )
    else
      $.error( 'Method ' +  method + ' does not exist on jQuery.msSlider' )

  true

)( jQuery, window, document )