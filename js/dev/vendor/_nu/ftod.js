(function(e,a){"use strict";var r,t,s,i,n=["lorem","ipsum","dolor","sit","amet","consectetuer","adipiscing","elit","suspendisse","eget","diam","quis","diam","consequat","interdum"];r=function(){var e,r,i,n;if(a.getElementById&&a.createElement){for(r=0;arguments.length>r;r++)a.getElementById(arguments[r])&&(i=a.createElement("a"),i.href="#",i.appendChild(a.createTextNode("Add Text")),i.onclick=function(){return t(this),!1},a.getElementById(arguments[r]).appendChild(i),e=a.createTextNode(" | "),a.getElementById(arguments[r]).appendChild(e),n=a.createElement("a"),n.href="#",n.appendChild(a.createTextNode("Remove Text")),n.onclick=function(){return s(this),!1},a.getElementById(arguments[r]).appendChild(n));return!0}},t=function(e){var r,t,s,l="";for(t=i(20,80),r=0;t>r;r++)l+=n[i(0,n.length-1)]+" ";return s=a.createElement("p"),s.setAttribute("class","added"),s.appendChild(a.createTextNode(l)),e.parentNode.insertBefore(s,e),!0},s=function(e){var a,r,t=e.parentNode;for(a=0;t.childNodes.length>a;a++)if(r=t.childNodes[a],"P"===r.nodeName&&"added"===r.getAttribute("class")){t.removeChild(r);break}return!0},i=function(e,a){return Math.floor(Math.random()*(a-e))+e}})(window,document);