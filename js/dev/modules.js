/*! H5YCK - v1.4.0 - 2013-04-08
* https://github.com/michsch/h5yck
* Copyright (c) 2013 Michael Schulze; Licensed MIT license */
define([],function(){"use strict";function e(e){var n;for(n=0;e.length>n;n+=1)e[n](s)}function n(){var n=u;a&&n.length&&(u=[],e(n))}function t(){a||(a=!0,d&&clearInterval(d),n())}function i(e){return a?e(s):u.push(e),i}var o,r,d,l="undefined"!=typeof window&&window.document,a=!l,s=l?document:null,u=[];if(l){if(document.addEventListener)document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1);else if(window.attachEvent){window.attachEvent("onload",t),r=document.createElement("div");try{o=null===window.frameElement}catch(c){}r.doScroll&&o&&window.external&&(d=setInterval(function(){try{r.doScroll(),t()}catch(e){}},30))}"complete"===document.readyState&&t()}return i.version="2.0.1",i.load=function(e,n,t,o){o.isBuild?t(null):i(t)},i});
/*jshint devel:true
*/

/*global define, require, module, jQuery
*/

/**
 * Checks if an event is supported
 * https://github.com/kangax/iseventsupported/
 *
 * @param string event to check
 * @return boolean true if event is supported, false if not
*/

(function(root, factory) {
  "use strict";
  if (typeof exports === 'object') {
    module.exports = factory;
  } else if (typeof define === 'function' && define.amd) {
    define(factory);
  } else {
    root.isEventSupported = factory;
  }
  if (typeof jQuery === 'function') {
    return jQuery.isEventSupported = factory;
  }
})((typeof window === 'object' && window) || this, function() {
  "use strict";

  var TAGNAMES, exports, isEventSupported;
  TAGNAMES = {
    select: "input",
    change: "input",
    submit: "form",
    reset: "form",
    error: "img",
    load: "img",
    abort: "img"
  };
  isEventSupported = function(eventName, element) {
    var isSupported;
    console.log('test');
    element = element || document.createElement(TAGNAMES[eventName] || 'div');
    eventName = 'on' + eventName;
    isSupported = eventName in element;
    if (!isSupported) {
      if (!element.setAttribute) {
        element = document.createElement('div');
      }
      if (element.setAttribute && element.removeAttribute) {
        element.setAttribute(eventName, '');
        isSupported = typeof element[eventName] === 'function';
        if (typeof element[eventName] !== void 0) {
          element[eventName] = void 0;
        }
        element.removeAttribute(eventName);
      }
    }
    element = null;
    return isSupported;
  };
  exports = isEventSupported;
  return exports;
});

/*
    http://www.JSON.org/json2.js
    2010-03-20

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){
  log.history = log.history || [];
  log.history.push(arguments);
  if(this.console) {
    var args = arguments, newarr;
    args.callee = args.callee.caller;
    newarr = [].slice.call(args);
    if (typeof console.log === 'object') {
      log.apply.call(console.log, console, newarr);
    } else {
      console.log.apply(console, newarr);
    }
  }
};

// make it safe to use console.log always
(function(a){
  function b(){}
  for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());) {
    a[d]=a[d]||b;
  }
})( function() {
  try {
    console.log();
    return window.console;
  } catch(a) {
    return (window.console={});
  }
}());

// place any jQuery/helper plugins in here, instead of separate, slower script files.

(function(e,a){"use strict";"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):e.PubSub=a(),"function"==typeof jQuery&&(jQuery.pubsub=a())})("object"==typeof window&&window||this,function(){"use strict";function e(e){return function(){throw e}}function a(a,r,s){try{a(r,s)}catch(t){setTimeout(e(t),0)}}function r(e,a,r){e(a,r)}function s(e,s,t,i){var l,n,k=o[s],_=i?r:a;if(o.hasOwnProperty(s))for(l=0,n=k.length;n>l;l++)_(k[l].func,e,t)}function t(e,a,r){return function(){var t=e+"",i=t.lastIndexOf(".");for(s(e,e,a,r);-1!==i;)t=t.substr(0,i),i=t.lastIndexOf("."),s(e,t,a)}}function i(e){for(var a=e+"",r=o.hasOwnProperty(a),s=a.lastIndexOf(".");!r&&-1!==s;)a=a.substr(0,s),s=a.lastIndexOf("."),r=o.hasOwnProperty(a);return r}function l(e,a,r,s){var l=t(e,a,s),n=i(e);return n?(r===!0?l():setTimeout(l,0),!0):!1}var n={name:"PubSubJS",version:"1.3.3"},o={},k=-1;return n.publish=function(e,a){return l(e,a,!1,n.immediateExceptions)},n.publishSync=function(e,a){return l(e,a,!0,n.immediateExceptions)},n.subscribe=function(e,a){o.hasOwnProperty(e)||(o[e]=[]);var r=++k+"";return o[e].push({token:r,func:a}),r},n.unsubscribe=function(e){var a,r,s="string"==typeof e,t=s?"token":"func",i=s?e:!0,l=!1;for(a in o)if(o.hasOwnProperty(a))for(r=o[a].length-1;r>=0;r--)if(o[a][r][t]===e&&(o[a].splice(r,1),l=i,s))return l;return l},n});
/*jshint devel:true
*/

/*global define, require, PubSub
*/

/**
 * Responsive Web Design module
 *
 * A set of some standard functions for responsive design.
*/

define(['configuration', 'underscore', 'jquery', 'pubsub', 'plugin/jquery.smartresize', 'exports'], function(config, _, $, PubSub, smartresize, exports) {
  "use strict";

  /**
  * some client window, screen and document size functions
  *
  */

  var Responsive;
  Responsive = function() {
    var debug, debugResize, getDevicePixelRatio, getScreen, getScreenHeight, getScreenWidth, getWindow, getWindowHeight, getWindowWidth, init, onresize, r, updateOnResize;
    r = this;
    r.callback = {
      arr: []
    };
    r.document = {};
    r.screen = {};
    r.window = {};
    r.debugMode = false;
    init = function() {
      getWindow();
      getScreen();
      debug();
      return true;
    };
    getWindow = function() {
      r.window.width = getWindowWidth();
      r.window.height = getWindowHeight();
      r.window.devicePixelRatio = getDevicePixelRatio();
      return true;
    };
    getScreen = function() {
      r.screen.width = getScreenWidth();
      r.screen.height = getScreenHeight();
      return true;
    };
    updateOnResize = function() {
      getWindow();
      return true;
    };
    getWindowWidth = function() {
      var windowWidth;
      windowWidth = window.innerWidth || document.documentElement.clientWidth;
      if (typeof windowWidth !== 'number') {
        windowWidth = $(window).width();
      }
      if (typeof windowWidth !== 'number') {
        windowWidth = $('body').width();
      }
      return windowWidth;
    };
    getWindowHeight = function() {
      var windowHeight;
      windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (typeof windowHeight !== 'number') {
        windowHeight = $(window).height();
      }
      if (typeof windowHeight !== 'number') {
        windowHeight = $('body').height();
      }
      return windowHeight;
    };
    getDevicePixelRatio = function() {
      var devicePixelRatio;
      devicePixelRatio = window.devicePixelRatio || 1;
      return devicePixelRatio;
    };
    getScreenWidth = function() {
      var screenWidth;
      screenWidth = screen.width || false;
      return screenWidth;
    };
    getScreenHeight = function() {
      var screenHeight;
      screenHeight = screen.height || false;
      return screenHeight;
    };
    /**
     * Define the resize event with the usage of special plugin smartresize for debounce events.
     * Gets all callbacks inside of this.callback object.
     *
    */

    onresize = function() {
      return $(window).smartresize(function() {
        var i, key;
        updateOnResize();
        if (PubSub === void 0 && require.defined('pubsub') === true) {
          PubSub = require('pubsub');
        }
        if (typeof $.publish === 'function') {
          $.publish('resize');
        }
        if (typeof PubSub === 'object') {
          PubSub.publish('resize');
        } else if (typeof window.PubSub === 'object') {
          window.PubSub.publish('resize');
        }
        if (typeof $.pubsub === 'object' && typeof $.pubsub.publish === 'function') {
          $.pubsub.publish('resize');
        }
        for (key in exports.callback) {
          if (typeof exports.callback[key] === 'function') {
            exports.callback[key](exports.window);
          } else if (typeof exports.callback[key] === 'object') {
            i = 0;
            while (i <= exports.callback[key].length) {
              if (typeof exports.callback[key][i] === 'function') {
                exports.callback[key][i](exports.window);
              }
              i++;
            }
          }
        }
        return true;
      }, 500);
    };
    this.images = function() {
      var screenBreakPoint, screenWidth;
      screenBreakPoint = {
        page: {
          large: 1024,
          medium: 768
        },
        grid: {
          large: 1024,
          medium: 768
        }
      };
      screenWidth = r.window.width;
      $('figure').each(function() {
        var figure, image, imagePath, large, medium, sbp, small;
        figure = $(this);
        if (figure.parents('.ym-grid').length > 0) {
          large = figure.attr('data-image-medium');
        } else {
          large = figure.attr('data-image-large');
        }
        sbp = screenBreakPoint.page;
        if (typeof large !== 'undefined' && large !== false) {
          medium = $(this).attr('data-image-medium');
          small = $(this).attr('data-image-small');
          if (screenWidth >= sbp.large) {
            imagePath = large;
          } else if ((screenWidth >= sbp.medium && screenWidth < sbp.large) && (typeof medium !== 'undefined' && medium !== false)) {
            imagePath = medium;
          } else if ((screenWidth < sbp.medium) && (typeof small !== 'undefined' && small !== false)) {
            imagePath = small;
          } else {
            if (typeof small !== 'undefined' && small !== false) {
              imagePath = small;
            } else if (typeof medium !== 'undefined' && medium !== false) {
              imagePath = medium;
            } else if (typeof large !== 'undefined' && large !== false) {
              imagePath = large;
            }
          }
          if (imagePath !== 'undefined' && imagePath !== false) {
            image = $('<img class="reponsive-image" src="' + imagePath + '" alt="" />');
            figure.append(image);
          }
        }
        return true;
      });
      return true;
    };
    debug = function() {
      var devicePixelRatio, screen, screenHeight, screenWidth, w, windowHeight, windowWidth, wrapper;
      if (r.debugMode === true) {
        wrapper = $('<section id=r-sizes-debug></section>');
        screen = $('<p class=screen></p>');
        screenWidth = $('<strong>Screen width:</strong> <span class=screen-width>' + r.screen.width + '</span><br />');
        screenHeight = $('<strong>Screen height:</strong> <span class=screen-height>' + r.screen.height + '</span>');
        w = $('<p class=window></p>');
        windowWidth = $('<strong>Window width:</strong> <span class=window-width>' + r.window.width + '</span><br />');
        windowHeight = $('<strong>Window height:</strong> <span class=window-height>' + r.window.height + '</span><br />');
        devicePixelRatio = $('<strong>Device pixel ratio:</strong> <span class=device-pixel-ratio>' + r.window.devicePixelRatio + '</span><br />');
        screen.append(screenWidth);
        screen.append(screenHeight);
        w.append(windowWidth);
        w.append(windowHeight);
        w.append(devicePixelRatio);
        wrapper.append(screen);
        wrapper.append(w);
        $('body').append(wrapper);
        wrapper.addClass('box');
        if (PubSub === void 0 && require.defined('pubsub') === true) {
          PubSub = require('pubsub');
        }
        if (typeof $.publish === 'function') {
          $.subscribe('resize', debugResize);
        }
        if (typeof PubSub === 'object') {
          PubSub.subscribe('resize', debugResize);
        } else if (typeof window.PubSub === 'object') {
          window.PubSub.subscribe('resize', debugResize);
        }
      }
      return true;
    };
    debugResize = function() {
      var debugInfos;
      debugInfos = $('#r-sizes-debug');
      debugInfos.find('.screen-width').text(r.screen.width);
      debugInfos.find('.screen-height').text(r.screen.height);
      debugInfos.find('.window-width').text(r.window.width);
      debugInfos.find('.window-height').text(r.window.height);
      debugInfos.find('.device-pixel-ratio').text(r.window.devicePixelRatio);
      return true;
    };
    /**
     * Add given callback function to internal callback object
     *
     * @param function callback function
     *
     * @return boolean true
     *
    */

    this.resize = function(callback) {
      r.callback.arr.push(callback);
      return true;
    };
    window.setTimeout(function() {
      onresize();
      return true;
    }, 500);
    init();
    return this;
  };
  exports = new Responsive();
  return exports;
});

if(deconcept===void 0)var deconcept={};deconcept.util===void 0&&(deconcept.util={}),deconcept.SWFObjectUtil===void 0&&(deconcept.SWFObjectUtil={}),deconcept.SWFObject=function(e,a,r,s,t,i,l,n,o,k){if(document.getElementById){this.DETECT_KEY=k?k:"detectflash",this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY),this.params={},this.variables={},this.attributes=[],e&&this.setAttribute("swf",e),a&&this.setAttribute("id",a),r&&this.setAttribute("width",r),s&&this.setAttribute("height",s),t&&this.setAttribute("version",new deconcept.PlayerVersion((""+t).split("."))),this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion(),!window.opera&&document.all&&this.installedVer.major>7&&(deconcept.SWFObject.doPrepUnload=!0),i&&this.addParam("bgcolor",i);var _=l?l:"high";this.addParam("quality",_),this.setAttribute("useExpressInstall",!1),this.setAttribute("doExpressInstall",!1);var d=n?n:window.location;this.setAttribute("xiRedirectUrl",d),this.setAttribute("redirectUrl",""),o&&this.setAttribute("redirectUrl",o)}},deconcept.SWFObject.prototype={useExpressInstall:function(e){this.xiSWFPath=e?e:"expressinstall.swf",this.setAttribute("useExpressInstall",!0)},setAttribute:function(e,a){this.attributes[e]=a},getAttribute:function(e){return this.attributes[e]},addParam:function(e,a){this.params[e]=a},getParams:function(){return this.params},addVariable:function(e,a){this.variables[e]=a},getVariable:function(e){return this.variables[e]},getVariables:function(){return this.variables},getVariablePairs:function(){var e,a=[],r=this.getVariables();for(e in r)a[a.length]=e+"="+r[e];return a},getSWFHTML:function(){var e="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","PlugIn"),this.setAttribute("swf",this.xiSWFPath)),e='<embed type="application/x-shockwave-flash" src="'+this.getAttribute("swf")+'" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'"',e+=' id="'+this.getAttribute("id")+'" name="'+this.getAttribute("id")+'" ';var a=this.getParams();for(var r in a)e+=[r]+'="'+a[r]+'" ';var s=this.getVariablePairs().join("&");s.length>0&&(e+='flashvars="'+s+'"'),e+="/>"}else{this.getAttribute("doExpressInstall")&&(this.addVariable("MMplayerType","ActiveX"),this.setAttribute("swf",this.xiSWFPath)),e='<object id="'+this.getAttribute("id")+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+this.getAttribute("width")+'" height="'+this.getAttribute("height")+'" style="'+this.getAttribute("style")+'">',e+='<param name="movie" value="'+this.getAttribute("swf")+'" />';var t=this.getParams();for(var r in t)e+='<param name="'+r+'" value="'+t[r]+'" />';var i=this.getVariablePairs().join("&");i.length>0&&(e+='<param name="flashvars" value="'+i+'" />'),e+="</object>"}return e},write:function(e){if(this.getAttribute("useExpressInstall")){var a=new deconcept.PlayerVersion([6,0,65]);this.installedVer.versionIsValid(a)&&!this.installedVer.versionIsValid(this.getAttribute("version"))&&(this.setAttribute("doExpressInstall",!0),this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl"))),document.title=document.title.slice(0,47)+" - Flash Player Installation",this.addVariable("MMdoctitle",document.title))}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var r="string"==typeof e?document.getElementById(e):e;return r.innerHTML=this.getSWFHTML(),!0}return""!=this.getAttribute("redirectUrl")&&document.location.replace(this.getAttribute("redirectUrl")),!1}},deconcept.SWFObjectUtil.getPlayerVersion=function(){var e=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(e=new deconcept.PlayerVersion(a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split(".")))}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0)for(var r=1,s=3;r;)try{s++,r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+s),e=new deconcept.PlayerVersion([s,0,0])}catch(t){r=null}else{try{var r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(t){try{var r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");e=new deconcept.PlayerVersion([6,0,21]),r.AllowScriptAccess="always"}catch(t){if(6==e.major)return e}try{r=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(t){}}null!=r&&(e=new deconcept.PlayerVersion(r.GetVariable("$version").split(" ")[1].split(",")))}return e},deconcept.PlayerVersion=function(e){this.major=null!=e[0]?parseInt(e[0]):0,this.minor=null!=e[1]?parseInt(e[1]):0,this.rev=null!=e[2]?parseInt(e[2]):0},deconcept.PlayerVersion.prototype.versionIsValid=function(e){return this.major<e.major?!1:this.major>e.major?!0:this.minor<e.minor?!1:this.minor>e.minor?!0:this.rev<e.rev?!1:!0},deconcept.util={getRequestParameter:function(e){var a=document.location.search||document.location.hash;if(null==e)return a;if(a)for(var r=a.substring(1).split("&"),s=0;r.length>s;s++)if(r[s].substring(0,r[s].indexOf("="))==e)return r[s].substring(r[s].indexOf("=")+1);return""}},deconcept.SWFObjectUtil.cleanupSWFs=function(){for(var e=document.getElementsByTagName("OBJECT"),a=e.length-1;a>=0;a--){e[a].style.display="none";for(var r in e[a])"function"==typeof e[a][r]&&(e[a][r]=function(){})}},deconcept.SWFObject.doPrepUnload&&(deconcept.unloadSet||(deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){},__flash_savedUnloadHandler=function(){},window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs)},window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload),deconcept.unloadSet=!0)),!document.getElementById&&document.all&&(document.getElementById=function(e){return document.all[e]});var getQueryParamValue=deconcept.util.getRequestParameter,FlashObject=deconcept.SWFObject,SWFObject=deconcept.SWFObject;
var swfobject=function(){function e(){if(!R){try{var e=P.getElementsByTagName("body")[0].appendChild(z("span"));e.parentNode.removeChild(e)}catch(a){return}R=!0;for(var r=D.length,s=0;r>s;s++)D[s]()}}function a(e){R?e():D[D.length]=e}function r(e){if(typeof L.addEventListener!=S)L.addEventListener("load",e,!1);else if(typeof P.addEventListener!=S)P.addEventListener("load",e,!1);else if(typeof L.attachEvent!=S)v(L,"onload",e);else if("function"==typeof L.onload){var a=L.onload;L.onload=function(){a(),e()}}else L.onload=e}function s(){V?t():i()}function t(){var e=P.getElementsByTagName("body")[0],a=z(T);a.setAttribute("type",C);var r=e.appendChild(a);if(r){var s=0;(function(){if(typeof r.GetVariable!=S){var t=r.GetVariable("$version");t&&(t=t.split(" ")[1].split(","),U.pv=[parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10)])}else if(10>s)return s++,setTimeout(arguments.callee,10),void 0;e.removeChild(a),r=null,i()})()}else i()}function i(){var e=F.length;if(e>0)for(var a=0;e>a;a++){var r=F[a].id,s=F[a].callbackFn,t={success:!1,id:r};if(U.pv[0]>0){var i=p(r);if(i)if(!c(F[a].swfVersion)||U.wk&&312>U.wk)if(F[a].expressInstall&&n()){var d={};d.data=F[a].expressInstall,d.width=i.getAttribute("width")||"0",d.height=i.getAttribute("height")||"0",i.getAttribute("class")&&(d.styleclass=i.getAttribute("class")),i.getAttribute("align")&&(d.align=i.getAttribute("align"));for(var _={},u=i.getElementsByTagName("param"),g=u.length,m=0;g>m;m++)"movie"!=u[m].getAttribute("name").toLowerCase()&&(_[u[m].getAttribute("name")]=u[m].getAttribute("value"));o(d,_,r,s)}else k(i),s&&s(t);else y(r,!0),s&&(t.success=!0,t.ref=l(r),s(t))}else if(y(r,!0),s){var z=l(r);z&&typeof z.SetVariable!=S&&(t.success=!0,t.ref=z),s(t)}}}function l(e){var a=null,r=p(e);if(r&&"OBJECT"==r.nodeName)if(typeof r.SetVariable!=S)a=r;else{var s=r.getElementsByTagName(T)[0];s&&(a=s)}return a}function n(){return!B&&c("6.0.65")&&(U.win||U.mac)&&!(U.wk&&312>U.wk)}function o(e,a,r,s){B=!0,w=s||null,x={success:!1,id:r};var t=p(r);if(t){"OBJECT"==t.nodeName?(f=d(t),j=null):(f=t,j=r),e.id=E,(typeof e.width==S||!/%$/.test(e.width)&&310>parseInt(e.width,10))&&(e.width="310"),(typeof e.height==S||!/%$/.test(e.height)&&137>parseInt(e.height,10))&&(e.height="137"),P.title=P.title.slice(0,47)+" - Flash Player Installation";var i=U.ie&&U.win?"ActiveX":"PlugIn",l="MMredirectURL="+(""+L.location).replace(/&/g,"%26")+"&MMplayerType="+i+"&MMdoctitle="+P.title;if(typeof a.flashvars!=S?a.flashvars+="&"+l:a.flashvars=l,U.ie&&U.win&&4!=t.readyState){var n=z("div");r+="SWFObjectNew",n.setAttribute("id",r),t.parentNode.insertBefore(n,t),t.style.display="none",function(){4==t.readyState?t.parentNode.removeChild(t):setTimeout(arguments.callee,10)}()}_(e,a,r)}}function k(e){if(U.ie&&U.win&&4!=e.readyState){var a=z("div");e.parentNode.insertBefore(a,e),a.parentNode.replaceChild(d(e),a),e.style.display="none",function(){4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10)}()}else e.parentNode.replaceChild(d(e),e)}function d(e){var a=z("div");if(U.win&&U.ie)a.innerHTML=e.innerHTML;else{var r=e.getElementsByTagName(T)[0];if(r){var s=r.childNodes;if(s)for(var t=s.length,i=0;t>i;i++)1==s[i].nodeType&&"PARAM"==s[i].nodeName||8==s[i].nodeType||a.appendChild(s[i].cloneNode(!0))}}return a}function _(e,a,r){var s,t=p(r);if(U.wk&&312>U.wk)return s;if(t)if(typeof e.id==S&&(e.id=r),U.ie&&U.win){var i="";for(var l in e)e[l]!=Object.prototype[l]&&("data"==l.toLowerCase()?a.movie=e[l]:"styleclass"==l.toLowerCase()?i+=' class="'+e[l]+'"':"classid"!=l.toLowerCase()&&(i+=" "+l+'="'+e[l]+'"'));var n="";for(var o in a)a[o]!=Object.prototype[o]&&(n+='<param name="'+o+'" value="'+a[o]+'" />');t.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+i+">"+n+"</object>",J[J.length]=e.id,s=p(e.id)}else{var k=z(T);k.setAttribute("type",C);for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?k.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&k.setAttribute(d,e[d]));for(var _ in a)a[_]!=Object.prototype[_]&&"movie"!=_.toLowerCase()&&u(k,_,a[_]);t.parentNode.replaceChild(k,t),s=k}return s}function u(e,a,r){var s=z("param");s.setAttribute("name",a),s.setAttribute("value",r),e.appendChild(s)}function g(e){var a=p(e);a&&"OBJECT"==a.nodeName&&(U.ie&&U.win?(a.style.display="none",function(){4==a.readyState?m(e):setTimeout(arguments.callee,10)}()):a.parentNode.removeChild(a))}function m(e){var a=p(e);if(a){for(var r in a)"function"==typeof a[r]&&(a[r]=null);a.parentNode.removeChild(a)}}function p(e){var a=null;try{a=P.getElementById(e)}catch(r){}return a}function z(e){return P.createElement(e)}function v(e,a,r){e.attachEvent(a,r),I[I.length]=[e,a,r]}function c(e){var a=U.pv,r=e.split(".");return r[0]=parseInt(r[0],10),r[1]=parseInt(r[1],10)||0,r[2]=parseInt(r[2],10)||0,a[0]>r[0]||a[0]==r[0]&&a[1]>r[1]||a[0]==r[0]&&a[1]==r[1]&&a[2]>=r[2]?!0:!1}function b(e,a,r,s){if(!U.ie||!U.mac){var t=P.getElementsByTagName("head")[0];if(t){var i=r&&"string"==typeof r?r:"screen";if(s&&(M=null,q=null),!M||q!=i){var l=z("style");l.setAttribute("type","text/css"),l.setAttribute("media",i),M=t.appendChild(l),U.ie&&U.win&&typeof P.styleSheets!=S&&P.styleSheets.length>0&&(M=P.styleSheets[P.styleSheets.length-1]),q=i}U.ie&&U.win?M&&typeof M.addRule==T&&M.addRule(e,a):M&&typeof P.createTextNode!=S&&M.appendChild(P.createTextNode(e+" {"+a+"}"))}}}function y(e,a){if(W){var r=a?"visible":"hidden";R&&p(e)?p(e).style.visibility=r:b("#"+e,"visibility:"+r)}}function h(e){var a=/[\\\"<>\.;]/,r=null!=a.exec(e);return r&&typeof encodeURIComponent!=S?encodeURIComponent(e):e}var f,j,w,x,M,q,S="undefined",T="object",H="Shockwave Flash",A="ShockwaveFlash.ShockwaveFlash",C="application/x-shockwave-flash",E="SWFObjectExprInst",O="onreadystatechange",L=window,P=document,N=navigator,V=!1,D=[s],F=[],J=[],I=[],R=!1,B=!1,W=!0,U=function(){var e=typeof P.getElementById!=S&&typeof P.getElementsByTagName!=S&&typeof P.createElement!=S,a=N.userAgent.toLowerCase(),r=N.platform.toLowerCase(),s=r?/win/.test(r):/win/.test(a),t=r?/mac/.test(r):/mac/.test(a),i=/webkit/.test(a)?parseFloat(a.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,l=!1,n=[0,0,0],o=null;if(typeof N.plugins!=S&&typeof N.plugins[H]==T)o=N.plugins[H].description,!o||typeof N.mimeTypes!=S&&N.mimeTypes[C]&&!N.mimeTypes[C].enabledPlugin||(V=!0,l=!1,o=o.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),n[0]=parseInt(o.replace(/^(.*)\..*$/,"$1"),10),n[1]=parseInt(o.replace(/^.*\.(.*)\s.*$/,"$1"),10),n[2]=/[a-zA-Z]/.test(o)?parseInt(o.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof L.ActiveXObject!=S)try{var k=new ActiveXObject(A);k&&(o=k.GetVariable("$version"),o&&(l=!0,o=o.split(" ")[1].split(","),n=[parseInt(o[0],10),parseInt(o[1],10),parseInt(o[2],10)]))}catch(d){}return{w3:e,pv:n,wk:i,ie:l,win:s,mac:t}}();return function(){U.w3&&((typeof P.readyState!=S&&"complete"==P.readyState||typeof P.readyState==S&&(P.getElementsByTagName("body")[0]||P.body))&&e(),R||(typeof P.addEventListener!=S&&P.addEventListener("DOMContentLoaded",e,!1),U.ie&&U.win&&(P.attachEvent(O,function(){"complete"==P.readyState&&(P.detachEvent(O,arguments.callee),e())}),L==top&&function(){if(!R){try{P.documentElement.doScroll("left")}catch(a){return setTimeout(arguments.callee,0),void 0}e()}}()),U.wk&&function(){return R?void 0:/loaded|complete/.test(P.readyState)?(e(),void 0):(setTimeout(arguments.callee,0),void 0)}(),r(e)))}(),function(){U.ie&&U.win&&window.attachEvent("onunload",function(){for(var e=I.length,a=0;e>a;a++)I[a][0].detachEvent(I[a][1],I[a][2]);for(var r=J.length,s=0;r>s;s++)g(J[s]);for(var t in U)U[t]=null;U=null;for(var i in swfobject)swfobject[i]=null;swfobject=null})}(),{registerObject:function(e,a,r,s){if(U.w3&&e&&a){var t={};t.id=e,t.swfVersion=a,t.expressInstall=r,t.callbackFn=s,F[F.length]=t,y(e,!1)}else s&&s({success:!1,id:e})},getObjectById:function(e){return U.w3?l(e):void 0},embedSWF:function(e,r,s,t,i,l,k,d,u,g){var m={success:!1,id:r};U.w3&&!(U.wk&&312>U.wk)&&e&&r&&s&&t&&i?(y(r,!1),a(function(){s+="",t+="";var a={};if(u&&typeof u===T)for(var p in u)a[p]=u[p];a.data=e,a.width=s,a.height=t;var z={};if(d&&typeof d===T)for(var v in d)z[v]=d[v];if(k&&typeof k===T)for(var b in k)typeof z.flashvars!=S?z.flashvars+="&"+b+"="+k[b]:z.flashvars=b+"="+k[b];if(c(i)){var h=_(a,z,r);a.id==r&&y(r,!0),m.success=!0,m.ref=h}else{if(l&&n())return a.data=l,o(a,z,r,g),void 0;y(r,!0)}g&&g(m)})):g&&g(m)},switchOffAutoHideShow:function(){W=!1},ua:U,getFlashPlayerVersion:function(){return{major:U.pv[0],minor:U.pv[1],release:U.pv[2]}},hasFlashPlayerVersion:c,createSWF:function(e,a,r){return U.w3?_(e,a,r):void 0},showExpressInstall:function(e,a,r,s){U.w3&&n()&&o(e,a,r,s)},removeSWF:function(e){U.w3&&g(e)},createCSS:function(e,a,r,s){U.w3&&b(e,a,r,s)},addDomLoadEvent:a,addLoadEvent:r,getQueryParamValue:function(e){var a=P.location.search||P.location.hash;if(a){if(/\?/.test(a)&&(a=a.split("?")[1]),null==e)return h(a);for(var r=a.split("&"),s=0;r.length>s;s++)if(r[s].substring(0,r[s].indexOf("="))==e)return h(r[s].substring(r[s].indexOf("=")+1))}return""},expressInstallCallback:function(){if(B){var e=p(E);e&&f&&(e.parentNode.replaceChild(f,e),j&&(y(j,!0),U.ie&&U.win&&(f.style.display="block")),w&&w(x)),B=!1}}}}();
/*jshint devel:true
*/

/*global define, require, module, _
*/

/**
 * Some new useful underscore mixins
 * originally by echong: https://gist.github.com/echong/3861963#file-underscore-mixin-deepextend-coffee
*/

(function(root, factory) {
  "use strict";
  if (typeof _ === 'function' && typeof exports === 'object') {
    return module.exports = factory(_);
  } else if (typeof define === 'function' && define.amd) {
    return define(['underscore'], function(_) {
      _.mixin(factory(_));
      return _;
    });
  } else if (typeof _ === 'function') {
    return root._.mixin(factory(_));
  }
})((typeof window === 'object' && window) || this, function(_) {
  "use strict";

  var arrays, basicObjects, deepClone, deepExtend, deepExtendCouple, exports, isBasicObject;
  exports = exports || {};
  deepClone = function(obj) {
    var func, isArr;
    if (!_.isObject(obj || _.isFunction(obj))) {
      return obj;
    }
    if (_.isDate(obj)) {
      return new Date(obj.getTime());
    }
    if (_.isRegExp(obj)) {
      return new RegExp(obj.source, obj.toString().replace(/.*\//, ""));
    }
    isArr = _.isArray(obj || _.isArguments(obj));
    func = function(memo, value, key) {
      if (isArr) {
        memo.push(deepClone(value));
      } else {
        memo[key] = deepClone(value);
      }
      return memo;
    };
    return _.reduce(obj, func, isArr ? [] : {});
  };
  isBasicObject = function(object) {
    return (object.prototype === {}.prototype || object.prototype === Object.prototype) && _.isObject(object) && !_.isArray(object) && !_.isFunction(object) && !_.isDate(object) && !_.isRegExp(object) && !_.isArguments(object);
  };
  basicObjects = function(object) {
    return _.filter(_.keys(object), function(key) {
      return isBasicObject(object[key]);
    });
  };
  arrays = function(object) {
    return _.filter(_.keys(object), function(key) {
      return _.isArray(object[key]);
    });
  };
  deepExtendCouple = function(destination, source, maxDepth) {
    var combine, recurse, sharedArrayKey, sharedArrayKeys, sharedObjectKey, sharedObjectKeys, _i, _j, _len, _len1;
    if (maxDepth === void 0) {
      maxDepth = 20;
    }
    if (maxDepth <= 0) {
      console.warn('_.deepExtend(): Maximum depth of recursion hit.');
      return _.extend(destination, source);
    }
    sharedObjectKeys = _.intersection(basicObjects(destination), basicObjects(source));
    recurse = function(key) {
      return source[key] = deepExtendCouple(destination[key], source[key], maxDepth - 1);
    };
    for (_i = 0, _len = sharedObjectKeys.length; _i < _len; _i++) {
      sharedObjectKey = sharedObjectKeys[_i];
      recurse(sharedObjectKey);
    }
    sharedArrayKeys = _.intersection(arrays(destination), arrays(source));
    combine = function(key) {
      return source[key] = _.union(destination[key], source[key]);
    };
    for (_j = 0, _len1 = sharedArrayKeys.length; _j < _len1; _j++) {
      sharedArrayKey = sharedArrayKeys[_j];
      combine(sharedArrayKey);
    }
    return _.extend(destination, source);
  };
  deepExtend = function() {
    var finalObj, maxDepth, objects, _i;
    if (2 <= arguments.length) {
      objects = [].slice.call(arguments, 0, _i = arguments.length - 1);
    } else {
      _i = 0;
      objects = [];
    }
    maxDepth = arguments[_i++];
    if (!_.isNumber(maxDepth)) {
      objects.push(maxDepth);
      maxDepth = 20;
    }
    if (objects.length <= 1) {
      return objects[0];
    }
    if (maxDepth <= 0) {
      return _.extend.apply(this, objects);
    }
    finalObj = objects.shift();
    while (objects.length > 0) {
      finalObj = deepExtendCouple(finalObj, deepClone(objects.shift()), maxDepth);
    }
    return finalObj;
  };
  exports = {
    deepClone: deepClone,
    isBasicObject: isBasicObject,
    basicObjects: basicObjects,
    arrays: arrays,
    deepExtend: deepExtend
  };
  return exports;
});

(function(e,a){"use strict";"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define("EventHelpers",[],a):e.EventHelpers=a(),window.EventHelpers=a()})("object"==typeof window&&window||this,function(){"use strict";var e;return e=function(){function e(){}var a,r,t=this,s=/WebKit/i.test(navigator.userAgent);t.init=function(){t.hasPageLoadHappened(arguments)||(document.createEventObject?r=document.createEventObject():document.createEvent&&(r=document.createEvent("HTMLEvents")),t.docIsLoaded=!0)},t.addEvent=function(e,a,r){var t;e.addEventListener?e.addEventListener(a,r,!1):e.attachEvent&&(e["e"+a+r]=r,e[a+r]=function(){e["e"+a+r](t.event)},e.attachEvent("on"+a,e[a+r]))},t.addPageLoadEvent=function(e){var r,n=e;s?(i.push(n),a||(a=setInterval(function(){return/loaded|complete/.test(document.readyState)?(clearInterval(a),t.runPageLoadEvents(),void 0):(r=!0,void 0)},10))):document.addEventListener?document.addEventListener("DOMContentLoaded",n,null):t.addEvent(window,"load",n)};var i=[];t.runPageLoadEvents=function(e){if(s||"complete"===e.srcElement.readyState)for(var a=0;i.length>a;a++)i[a]()},t.hasPageLoadHappened=function(e){return e.callee.done?!0:(e.callee.done=!0,void 0)},e()},new e}),EventHelpers.addPageLoadEvent("EventHelpers.init"),function(e,a){"use strict";"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define("TypeHelpers",[],a):e.TypeHelpers=a(),window.TypeHelpers=a()}("object"==typeof window&&window||this,function(){"use strict";var e;return e=function(){var e=this;e.hasSmoothing=function(){if(screen.fontSmoothingEnabled!==void 0)return screen.fontSmoothingEnabled;try{var e=document.createElement("canvas");e.width="35",e.height="35",e.style.display="none",document.body.appendChild(e);var a=e.getContext("2d");a.textBaseline="top",a.font="32px Arial",a.fillStyle="black",a.strokeStyle="black",a.fillText("O",0,0);for(var r=8;32>=r;r++)for(var t=1;32>=t;t++){var s=a.getImageData(t,r,1,1).data,i=s[3];if(255!==i&&0!==i)return!0}return!1}catch(n){return null}},e.insertClasses=function(){var a=e.hasSmoothing(),r=document.getElementsByTagName("html")[0];r.className+=a===!0?" hasFontSmoothing-true":a===!1?" hasFontSmoothing-false":" hasFontSmoothing-unknown"}},new e}),EventHelpers.addPageLoadEvent("TypeHelpers.insertClasses"),function(){var e,a,r=document,t=r.documentElement,s=r.createElement("style");(navigator.userAgent.match(/rv\:1\.9\.1/)||navigator.userAgent.match(/rv\:1\.9\.2/)||navigator.userAgent.match(/MSIE 9/)||""===t.style.OTransform)&&(s.textContent="body{visibility:hidden}",a=document.getElementsByTagName("script")[0],a.parentNode.insertBefore(s,a),e=function(){return s.parentNode&&s.parentNode.removeChild(s)},addEventListener("load",e,!1),setTimeout(e,3e3))}();
/*jshint devel:true
*/

/*global define, require, module, jQuery
*/

/**
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
*/

(function(root, factory) {
  "use strict";

  var f;
  f = factory();
  if (typeof exports === 'object') {
    module.exports = f;
  } else if (typeof define === 'function' && define.amd) {
    define(f);
  } else {
    root.YAML_focusFix = f;
  }
  if (jQuery !== void 0 && typeof jQuery === 'function') {
    return jQuery.yamlFocusFix = f;
  }
})((typeof window === 'object' && window) || this, function() {
  "use strict";

  var YAML_focusFix;
  YAML_focusFix = {
    skipClass: "ym-skip"
  };
  YAML_focusFix.init = function() {
    var body, handler, is_ie, is_webkit, userAgent;
    userAgent = navigator.userAgent.toLowerCase();
    is_webkit = userAgent.indexOf('webkit') > -1;
    is_ie = userAgent.indexOf('msie') > -1;
    if (is_webkit || is_ie) {
      body = document.body;
      handler = YAML_focusFix.click;
      if (body.addEventListener) {
        return body.addEventListener('click', handler, false);
      } else {
        if (body.attachEvent) {
          return body.attachEvent('onclick', handler);
        }
      }
    }
  };
  YAML_focusFix.trim = function(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  };
  YAML_focusFix.click = function(e) {
    var a, cls, i, target, _results;
    e = e || window.event;
    target = e.target || e.srcElement;
    a = target.className.split(' ');
    i = 0;
    _results = [];
    while (i < a.length) {
      cls = YAML_focusFix.trim(a[i]);
      if (cls === YAML_focusFix.skipClass) {
        YAML_focusFix.focus(target);
        break;
      }
      _results.push(i++);
    }
    return _results;
  };
  YAML_focusFix.focus = function(link) {
    var href, id, target;
    if (link.href) {
      href = link.href;
      id = href.substr(href.indexOf('#') + 1);
      target = document.getElementById(id);
      if (target) {
        target.setAttribute('tabindex', '-1');
        return target.focus();
      }
    }
  };
  if (jQuery !== void 0 && typeof jQuery === 'function') {
    jQuery(function() {
      return YAML_focusFix.init();
    });
  } else {
    YAML_focusFix.init();
  }
  return YAML_focusFix;
});
