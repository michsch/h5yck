###jshint devel:true
###
###global define, require, module, jQuery
###

###*
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
###

(( root, factory ) ->
  "use strict"

  f = factory()

  # CommonJS
  if typeof exports is 'object'
    module.exports = f
  # AMD
  else if typeof define is 'function' and define.amd
    #define factory
    define f
  # Browser
  else
    root.YAML_focusFix = f
  
  # register as jQuery plugin 
  if jQuery isnt undefined and typeof jQuery is 'function'
    jQuery.yamlFocusFix = f

) (typeof window is 'object' and window) or this, ->
  "use strict"

  YAML_focusFix = 
    skipClass: "ym-skip"

  YAML_focusFix.init = ->
    userAgent = navigator.userAgent.toLowerCase()
    is_webkit = userAgent.indexOf('webkit') > -1
    is_ie = userAgent.indexOf('msie') > -1
    if is_webkit or is_ie
      body = document.body
      handler = YAML_focusFix.click
      if body.addEventListener
        body.addEventListener 'click', handler, false
      else
        body.attachEvent 'onclick', handler  if body.attachEvent

  YAML_focusFix.trim = (str) ->
    str.replace(/^\s\s*/, '').replace /\s\s*$/, ''

  YAML_focusFix.click = (e) ->
    e = e or window.event
    target = e.target or e.srcElement
    a = target.className.split(' ')
    i = 0
    _results = []
    while i < a.length
      cls = YAML_focusFix.trim(a[i])
      if cls is YAML_focusFix.skipClass
        YAML_focusFix.focus target
        break
      _results.push i++
    _results

  YAML_focusFix.focus = (link) ->
    if link.href
      href = link.href
      id = href.substr(href.indexOf('#') + 1)
      target = document.getElementById(id)
      if target
        target.setAttribute 'tabindex', '-1'
        target.focus()

  if jQuery isnt undefined and typeof jQuery is 'function'
    jQuery ->
      YAML_focusFix.init()
  else
    YAML_focusFix.init()

  return YAML_focusFix
