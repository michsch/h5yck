###*!
 * smartresize jquery plugin
###

(($, sr) ->
  "use strict"

  debounce = undefined
  
  ###*
   * debouncing function from John Hann
   * http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  ###
  debounce = (func, threshold, execAsap) ->
    timeout = undefined
    debounced = ->
      delayed = ->
        func.apply obj, args  unless execAsap
        timeout = null
      obj = this
      args = arguments
      if timeout
        clearTimeout timeout
      else func.apply obj, args  if execAsap
      timeout = setTimeout(delayed, threshold or 100)

  # smartresize
  $.fn[sr] = (fn, threshold, execAsap) ->
    (if fn then @on('resize', debounce(fn, threshold or 100, execAsap)) else @trigger(sr))
) jQuery, 'smartresize'