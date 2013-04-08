###jshint devel:true
###
###global define, require, module, jQuery
###

###*
 * Checks if an event is supported
 * https://github.com/kangax/iseventsupported/
 *
 * @param string event to check
 * @return boolean true if event is supported, false if not
###

(( root, factory ) ->
  "use strict"

  # CommonJS
  if typeof exports is 'object'
    module.exports = factory
  # AMD
  else if typeof define is 'function' and define.amd
    define factory
  # Browser
  else
    root.isEventSupported = factory
  
  # register as jQuery plugin 
  if typeof jQuery is 'function'
    jQuery.isEventSupported = factory

) (typeof window is 'object' and window) or this, ->
  "use strict"

  TAGNAMES =
    select: "input"
    change: "input"
    submit: "form"
    reset: "form"
    error: "img"
    load: "img"
    abort: "img"

  isEventSupported = (eventName, element) ->
    console.log 'test'
    element = element || document.createElement(TAGNAMES[eventName] or 'div')
    eventName = 'on' + eventName

    isSupported = (eventName of element)

    unless isSupported
      # if it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
      unless element.setAttribute
        element = document.createElement('div')
      if element.setAttribute and element.removeAttribute
        element.setAttribute eventName, ''
        isSupported = typeof element[eventName] is 'function'

        # if property was created, "remove it" (by setting value to `undefined`)
        if typeof element[eventName] isnt undefined
          element[eventName] = undefined

        element.removeAttribute(eventName)

    element = null
    return isSupported

  exports = isEventSupported

  return exports