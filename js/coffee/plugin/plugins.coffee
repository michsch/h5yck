###jshint devel:true
###
###global require:true, define:true, $:true, jQuery:true, Modernizr:true
###

###*
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
  ###

  ( ->

    ###*
     * Crypt given mail
     *
     * @param string email address
     * @param boolean true
    ###
    window.CryptMailto = ->
      formname = 'cryptmail'
      cryptform = document.forms[formname]
      n = 0
      r = ""
      s = "mailto:" + cryptform.cryptmail_email.value
      e = cryptform.cryptmail_email.value

      if cryptform.cryptmail_email.value.length < 4
        return false

      radioObj = cryptform.cryptmail_radio
      if radioObj.length > 0
        i = 0
        while i < radioObj.length
          radioValue = parseInt(radioObj[i].value if radioObj[i].checked, 0)
          i++
      else
        radioValue = 0

      if radioValue is 1
        e = e.replace(/\./g, '<span class="crypt">.</span>.</span class="crypt">.</span>')
        e = e.replace(/@/, '<span class="crypt">.</span>@</span class="crypt">.</span>')
      else
        e = e.replace(/\./g, ' [dot] ')
        e = e.replace(/@/, ' [at] ')

      i = 0
      while i < s.length
        n = s.charCodeAt(i)
        n = 128  if n >= 8364
        r += String.fromCharCode(n + 1)
        i++
      cryptform.cryptmail_cryptedmail.value = r
      cryptform.cryptmail_html.value = '<a href="javascript:linkTo_UnCryptMailto(\'' + r + '\');">' + "\n\t" + e + "\n" + '</a>'
      true

    ###*
     * Uncrypt the email address and returns the valid href
     *
     * @param string the crypted string
     * @return string valid href
    ###
    UnCryptMailto = (s) ->
      n = 0
      r = ""
      i = 0

      while i < s.length
        n = s.charCodeAt(i)
        n = 128  if n >= 8364
        r += String.fromCharCode(n - 1)
        i++
      r

    ###*
     * Public function for A tags
     *
     * @param string the crypted string
     * @return boolean true
    ###
    window.linkTo_UnCryptMailto = (s) ->
      location.href = new UnCryptMailto(s)
      true

    true

  )()

  ###*
   * Checks if an event is supported
   *
   * @param string event to check
   * @return boolean true if event is supported, false if not
  ###
  isEventSupported = (->
    window.isEventSupported = (eventName) ->
      el = document.createElement(TAGNAMES[eventName] or "div")
      eventName = "on" + eventName
      isSupported = (eventName of el)
      unless isSupported
        el.setAttribute eventName, "return;"
        isSupported = typeof el[eventName] is "function"
      el = null
      isSupported
    TAGNAMES =
      select: "input"
      change: "input"
      submit: "form"
      reset: "form"
      error: "img"
      load: "img"
      abort: "img"

    isEventSupported
  )()

  true
)( jQuery, window, document )