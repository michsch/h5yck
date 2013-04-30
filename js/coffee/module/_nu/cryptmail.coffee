###*
 * JavaScript email encrypter
 *
 * @author             Michael Schulze
 * @version            $1.4.0$
 * @copyright          Michael Schulze, 31 December, 2011
 *                     https://github.com/michsch/cryptmail
 * @license            GNU General Public License, version 3 (GPL-3.0)
 * @package            coffeescript
 *
 * @lastmodified       $Date: 2011-12-31 20:29:35  +0100 (Sat, 31 Dec 2011) $
 *
###

( ( root, factory, sr ) ->
  "use strict"

  if typeof exports is'object'
    module.exports = factory
  else if typeof define is 'function' and define.amd
    define factory
  else
    root[sr] = factory

  # register jQuery plugin
  #if typeof jQuery is 'function'
  #  jQuery[sr] = factory

  return true
)( ( typeof window is 'object' and window ) or this, () ->
  "use strict"

  #exports = exports || {}

  class EmailEncrypter

    ###*
     * Crypt given mail
     *
     * @param string email address
     * @param boolean true
    ###
    cryptMailto : ->
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
    unCryptMailto = (s) ->
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
    linkTo_UnCryptMailto : (s) ->
      location.href = unCryptMailto(s)
      true

    true

  return new EmailEncrypter
, 'cryptmail')