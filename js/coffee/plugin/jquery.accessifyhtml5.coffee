###jshint devel:true
###
###global define, require, module, jQuery
###

###*
 * Accessifyhtml5.js
 * The jQuery part of accessifyhtml5.js is now deprecated. It won’t get new features and may be removed soon.
 * Adds ARIA to new elements in browsers which don’t do it by themselves.
 *
 * originally by Eric Eggert
 * https://github.com/yatil/accessifyhtml5.js
###

( ( $, root, factory, name ) ->
  "use strict"

  # CommonJS
  if typeof exports is 'object'
    module.exports = factory $;
  # AMD
  else if typeof define is 'function' and define.amd
    define ['jquery'], factory( $ )
  # Browser
  #else
  #  true
  #  root[name] = factory $

  # register as jQuery plugin
  if typeof $ is 'function' && $
    $[name] = factory $

  return true
)( jQuery, ( typeof window is 'object' and window ) || this, ( $ ) ->
  "use strict"

  AccessifyHTML5 = ( defaults, override = false ) ->
    fixes =
      article:
        role: 'article'
      aside:
        role: 'complementary'
      nav:
        role: 'navigation'
      main:
        role: 'main'
      output:
        'aria-live': 'polite'
      section:
        role: 'region'
      '[required]':
        'aria-required': 'true'

    if defaults
      fixes[defaults.header] = role: 'banner' if defaults.header
      fixes[defaults.footer] = role: 'contentinfo' if defaults.footer
      if defaults.main
        fixes[defaults.main] = role: 'main'
        fixes.main =
          role: ''

    
    $.each(fixes, (index, item) ->
      if override
        ###*
         * replace attributes in every found element
        ###
        $(index).attr item
      else
        ###*
         * Write attribute only if none is set in HTML yet.
        ###
        $(index).not('[' + item[0] +']').attr item
      true
    )
    true

  AccessifyHTML5
, 'accessifyhtml5' )