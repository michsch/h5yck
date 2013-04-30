/**jshint devel:true
*/

/**globals
  define
  _site
*/
(function(_site, root, factory) {
  "use strict";  if (typeof exports === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    _site.config = factory;
    root._site = _site;
  }
  return true;
})(_site || {}, (typeof window === 'object' && window) || this, function() {
  "use strict";
  var exports;

  exports = {
    lang: 'de',
    ll: {
      en: {
        from: 'from',
        to: 'to',
        image: 'image'
      },
      de: {
        from: 'von',
        to: 'bis',
        image: 'Bild'
      }
    }
  };
  return exports;
});

/*
//@ sourceMappingURL=config.js.map
*/