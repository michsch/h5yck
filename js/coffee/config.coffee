###*jshint devel:true
###
###*globals
  define
  _site
###

( ( _site, root, factory ) ->
  "use strict"

  if typeof exports is 'object'
    module.exports = factory
  else if typeof define is 'function' and define.amd
    define factory
  else
    _site.config = factory
    root._site = _site

  true
)( _site or {}, ( typeof window is 'object' and window ) or this, () ->
  "use strict"

  exports = {
    lang: 'de'
    ll : {
      en : {
        from: 'from'
        to: 'to'
        image: 'image'
      }
      de : {
        from: 'von'
        to: 'bis'
        image: 'Bild'
      }
    }
  }

  exports
)