###jshint devel:true
###
###global require:true, define:true, $:true, jQuery:true, Modernizr:true
###

###*
 * plugins file with some jQuery plugins and standard functions
 *
 * @author             Michael Schulze
 * @version            $1.4.0$
 * @copyright          Michael Schulze, 29 December, 2011
 * @license            GNU General Public License, version 3 (GPL-3.0)
 * @package            coffeescript, jquery
 * @requirements       jquery-1.7.2.min.js
 *
 * @lastmodified       $Date: 2012-03-30 13:16:22 +0200 (Fr., 30 Mär 2012) $
 *
###

( ( $, window, document ) ->

  "use strict"

  firstplugin =
    init : ( options ) ->
      defaults =
        resize: 1
      o = $.extend(defaults, options || {})
      firstload = 1
      el = this

      # active update function if window is resized
      if o.resize == 1
        $(window).resize( ->
          firstLoad = 0
          firstplugin.update(o)
          true
        )

      this.each( ->
        # place your plugin code here
      )

    update: (o) ->
      el = 0
      el.each( ->
        # place your plugin code for the update function here
      )

  $.fn.firstplugin = ( method ) ->
    # Method calling logic
    if firstplugin[method]
      firstplugin[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ))
    else if typeof method == 'object' or ! method
      firstplugin.init.apply( this, arguments )
    else
      $.error( 'Method ' +  method + ' does not exist on jQuery.firstplugin' )

  $.secondplugin = ( options ) ->
    defaults =
      resize: 1
    o = $.extend(defaults, options || {})

    # place your plugin code here

    true

  ###*
   * Checks if an event is supported
   *
   * @param string event to check
   * @return boolean true if event is supported, false if not
  ###
  isEventSupported = (->
    window.isEventSupported = (eventName) ->
      el = document.createElement(TAGNAMES[eventName] or 'div')
      eventName = 'on' + eventName
      isSupported = (eventName of el)
      unless isSupported
        el.setAttribute eventName, 'return;'
        isSupported = typeof el[eventName] is 'function'
      el = null
      isSupported
    TAGNAMES =
      select: 'input'
      change: 'input'
      submit: 'form'
      reset: 'form'
      error: 'img'
      load: 'img'
      abort: 'img'

    isEventSupported
  )()

  true
)( jQuery, window, document )