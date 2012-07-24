//filler text on demand
// http://web-graphics.com/mtarchive/001667.php

;(function( window, document, undefined ){
  "use strict";

  var addFillerLink, addText, removeText, randomNumber,
  words = ['lorem','ipsum','dolor','sit','amet','consectetuer','adipiscing','elit','suspendisse','eget','diam','quis','diam','consequat','interdum'];

  addFillerLink = function() {
    var b, i, l, r;

    if (!document.getElementById || !document.createElement) {
      return;
    }

    for ( i = 0; i < arguments.length; i++) {

      /* Check elements exists - add Reinhard Hiebl */
      if (document.getElementById(arguments[i])) {
        l = document.createElement("a");
        l.href = "#";
        l.appendChild(document.createTextNode("Add Text"));
        l.onclick = function() {
          addText(this);
          return(false);
        };

        document.getElementById(arguments[i]).appendChild(l);
        b = document.createTextNode(" | ");
        document.getElementById(arguments[i]).appendChild(b);
        r = document.createElement("a");
        r.href = "#";
        r.appendChild( document.createTextNode("Remove Text") );
        r.onclick = function() {
          removeText(this);
          return(false);
        };
        document.getElementById(arguments[i]).appendChild(r);
      }
    }

    return true;
  };

  addText = function( el ) {
    var i, n, r, s = "", t;
    n = randomNumber(20,80);

    for ( i = 0; i < n; i++ ) {
      s += words[randomNumber(0,words.length-1)] + " ";
    }

    t = document.createElement("p");
    t.setAttribute('class','added');
    t.appendChild(document.createTextNode(s));
    el.parentNode.insertBefore(t,el);

    return true;
  };

  removeText = function( el ) {
    var parent = el.parentNode,
        i,
        para;

    for ( i = 0; i < parent.childNodes.length; i++ ) {
      para = parent.childNodes[i];
      if (para.nodeName === "P" && para.getAttribute('class') === 'added') {
        parent.removeChild(para);
        break;
      }
    }

    return true;
  };

  randomNumber = function( n1, n2 ) {
    return(Math.floor(Math.random()*(n2-n1))+n1);
  };

})( window, document );
