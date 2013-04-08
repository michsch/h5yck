###jshint devel:true
###
###global define, require, module, jQuery
###

###*
 * Accessifyhtml5.js
 * Adds ARIA to new elements in browsers which don’t do it by themselves.
 *
 * originally by Eric Eggert
 * https://github.com/yatil/accessifyhtml5.js
###

( ( $, root, factory ) ->
  "use strict"

  # CommonJS
  if typeof exports is 'object'
    module.exports = factory();
  # AMD
  else if typeof define is 'function' and define.amd
    define(['jquery'], factory)
  # Browser
  else
    root.accessifyhtml5 = factory()

  # register as jQuery plugin
  if typeof $ is 'function'
    factory($)

)( jQuery, ( typeof window is 'object' and window ) || this, ( $ ) ->
  "use strict"

  $.accessifyhtml5 = ( defaults ) ->
    fixes =
      article:
        role: "article"
      aside:
        role: "complementary"
      nav:
        role: "navigation"
      output:
        "aria-live": "polite"
      section:
        role: "region"
      "[required]":
        "aria-required": "true"

    if defaults
      fixes[defaults.header] = role: "banner"  if defaults.header
      fixes[defaults.footer] = role: "contentinfo"  if defaults.footer

    #$.each(fixes, (index, item) ->
    #  $(index).attr(item)
    #  true
    #)

    $.each( fixes, ( element, attributes ) ->
      $(element).each(( index, element ) ->
        for property of attributes
          if $(this).attr(property) is false or typeof $(this).attr(property) is undefined
            $(this).attr(property, attributes[property])
        true
      )
      true
    )

    true
)