/*! H5YCK - v1.3.4 - 2012-09-15
* https://github.com/michsch/h5yck
* Copyright (c) 2012 Michael Schulze; Licensed MIT license */

// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.
/*! fancyBox v2.0.4 fancyapps.com | fancyapps.com/fancybox/#license */
(function(t,q,e){var l=e(t),r=e(q),a=e.fancybox=function(){a.open.apply(this,arguments)},s=!1;e.extend(a,{version:"2.0.4",defaults:{padding:15,margin:20,width:800,height:600,minWidth:200,minHeight:200,maxWidth:9999,maxHeight:9999,autoSize:!0,fitToView:!0,aspectRatio:!1,topRatio:0.5,fixed:!(e.browser.msie&&6>=e.browser.version)&&"undefined"==typeof q.createTouch,scrolling:"auto",wrapCSS:"fancybox-default",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,
modal:!1,loop:!0,ajax:{dataType:"html"},keys:{next:[13,32,34,39,40],prev:[8,33,37,38],close:[27]},tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+"></iframe>",swf:'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-item fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-item fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",
nextEffect:"elastic",nextSpeed:300,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:300,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:300,opacity:0.8,css:{cursor:"pointer"},closeClick:!0},title:{type:"float"}}},group:{},opts:{},coming:null,current:null,isOpen:!1,isOpened:!1,wrap:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(b,c){a.close(!0);b&&!e.isArray(b)&&(b=
b instanceof e?e(b).get():[b]);a.isActive=!0;a.opts=e.extend(!0,{},a.defaults,c);a.group=b;a._start(a.opts.index||0)},cancel:function(){a.coming&&!1===a.trigger("onCancel")||(a.coming=null,a.hideLoading(),a.ajaxLoad&&a.ajaxLoad.abort(),a.ajaxLoad=null,a.imgPreload&&(a.imgPreload.onload=a.imgPreload.onabort=a.imgPreload.onerror=null))},close:function(b){a.cancel();a.current&&!1!==a.trigger("beforeClose")&&(a.unbindEvents(),!a.isOpen||b&&!0===b[0]?(e(".fancybox-wrap").stop().trigger("onReset").remove(),
a._afterZoomOut()):(a.isOpen=a.isOpened=!1,e(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.closeMethod]()))},play:function(b){var c=function(){clearTimeout(a.player.timer)},d=function(){c();a.current&&a.player.isActive&&(a.player.timer=setTimeout(a.next,a.current.playSpeed))},f=function(){c();e("body").unbind(".player");a.player.isActive=!1;a.trigger("onPlayEnd")};if(a.player.isActive||b&&!1===b[0])f();else if(a.current&&
(a.current.loop||a.current.index<a.group.length-1))a.player.isActive=!0,e("body").bind({"afterShow.player onUpdate.player":d,"onCancel.player beforeClose.player":f,"beforeLoad.player":c}),d(),a.trigger("onPlayStart")},next:function(){a.current&&a.jumpto(a.current.index+1)},prev:function(){a.current&&a.jumpto(a.current.index-1)},jumpto:function(b){a.current&&(b=parseInt(b,10),1<a.group.length&&a.current.loop&&(b>=a.group.length?b=0:0>b&&(b=a.group.length-1)),"undefined"!==typeof a.group[b]&&(a.cancel(),
a._start(b)))},reposition:function(b){a.isOpen&&a.wrap.css(a._getPosition(b))},update:function(){a.isOpen&&(s||setTimeout(function(){s&&(s=!1,a.current&&(a.current.autoSize&&(a.inner.height("auto"),a.current.height=a.inner.height()),a._setDimension(),a.current.canGrow&&a.inner.height("auto"),a.reposition(),a.trigger("onUpdate")))},100),s=!0)},toggle:function(){a.isOpen&&(a.current.fitToView=!a.current.fitToView,a.update())},hideLoading:function(){e("#fancybox-loading").remove()},showLoading:function(){a.hideLoading();
e('<div id="fancybox-loading"><div></div></div>').click(a.cancel).appendTo("body")},getViewport:function(){return{x:l.scrollLeft(),y:l.scrollTop(),w:l.width(),h:l.height()}},unbindEvents:function(){a.wrap&&a.wrap.unbind(".fb");r.unbind(".fb");l.unbind(".fb")},bindEvents:function(){var b=a.current,c=b.keys;b&&(l.bind("resize.fb, orientationchange.fb",a.update),c&&r.bind("keydown.fb",function(b){var f;!b.ctrlKey&&!b.altKey&&!b.shiftKey&&!b.metaKey&&0>e.inArray(b.target.tagName.toLowerCase(),["input",
"textarea","select","button"])&&(f=b.keyCode,-1<e.inArray(f,c.close)?(a.close(),b.preventDefault()):-1<e.inArray(f,c.next)?(a.next(),b.preventDefault()):-1<e.inArray(f,c.prev)&&(a.prev(),b.preventDefault()))}),e.fn.mousewheel&&b.mouseWheel&&1<a.group.length&&a.wrap.bind("mousewheel.fb",function(b,c){var g=e(b.target).get(0);if(0===g.clientHeight||g.scrollHeight===g.clientHeight&&g.scrollWidth===g.clientWidth)b.preventDefault(),a[0<c?"prev":"next"]()}))},trigger:function(b){var c,d=a[-1<e.inArray(b,
["onCancel","beforeLoad","afterLoad"])?"coming":"current"];if(d){e.isFunction(d[b])&&(c=d[b].apply(d,Array.prototype.slice.call(arguments,1)));if(!1===c)return!1;d.helpers&&e.each(d.helpers,function(c,g){if(g&&"undefined"!==typeof a.helpers[c]&&e.isFunction(a.helpers[c][b]))a.helpers[c][b](g,d)});e.event.trigger(b+".fb")}},isImage:function(a){return a&&a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)},isSWF:function(a){return a&&a.match(/\.(swf)(.*)?$/i)},_start:function(b){var c={},d=a.group[b]||null,
f,g,k;if(d&&(d.nodeType||d instanceof e))f=!0,e.metadata&&(c=e(d).metadata());c=e.extend(!0,{},a.opts,{index:b,element:d},e.isPlainObject(d)?d:c);e.each(["href","title","content","type"],function(b,g){c[g]=a.opts[g]||f&&e(d).attr(g)||c[g]||null});"number"===typeof c.margin&&(c.margin=[c.margin,c.margin,c.margin,c.margin]);c.modal&&e.extend(!0,c,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:!1}}});a.coming=c;if(!1===a.trigger("beforeLoad"))a.coming=
null;else{g=c.type;b=c.href||("string"===e.type(d)?d:null);g||(f&&(k=e(d).data("fancybox-type"),!k&&d.className&&(g=(k=d.className.match(/fancybox\.(\w+)/))?k[1]:null)),!g&&b&&(a.isImage(b)?g="image":a.isSWF(b)?g="swf":b.match(/^#/)&&(g="inline")),g||(g=f?"inline":"html"),c.type=g);if("inline"===g||"html"===g){if(c.content||(c.content="inline"===g?e(b||d):d),!c.content||!c.content.length)g=null}else b||(g=null);c.group=a.group;c.isDom=f;c.href=b;"image"===g?a._loadImage():"ajax"===g?a._loadAjax():
g?a._afterLoad():a._error("type")}},_error:function(b){a.hideLoading();e.extend(a.coming,{type:"html",autoSize:!0,minHeight:0,hasError:b,content:a.coming.tpl.error});a._afterLoad()},_loadImage:function(){a.imgPreload=new Image;a.imgPreload.onload=function(){this.onload=this.onerror=null;a.coming.width=this.width;a.coming.height=this.height;a._afterLoad()};a.imgPreload.onerror=function(){this.onload=this.onerror=null;a._error("image")};a.imgPreload.src=a.coming.href;a.imgPreload.width||a.showLoading()},
_loadAjax:function(){a.showLoading();a.ajaxLoad=e.ajax(e.extend({},a.coming.ajax,{url:a.coming.href,error:function(b,c){"abort"!==c?a._error("ajax",b):a.hideLoading()},success:function(b,c){"success"===c&&(a.coming.content=b,a._afterLoad())}}))},_preload:function(){var b=a.group,c=a.current,d=b.length,f;if(c.preload&&!(2>b.length))for(var g=1;g<=Math.min(c.preload,d-1);g++)if(f=b[(c.index+g)%d],f=e(f).attr("href")||f)(new Image).src=f},_afterLoad:function(){a.hideLoading();!a.coming||!1===a.trigger("afterLoad",
a.current)?a.coming=!1:(a.isOpened?(e(".fancybox-item").remove(),a.wrap.stop(!0).removeClass("fancybox-opened"),a.inner.css("overflow","hidden"),a.transitions[a.current.prevMethod]()):(e(".fancybox-wrap").stop().trigger("onReset").remove(),a.trigger("afterClose")),a.unbindEvents(),a.isOpen=!1,a.current=a.coming,a.coming=!1,a.wrap=e(a.current.tpl.wrap).addClass("fancybox-tmp "+a.current.wrapCSS).appendTo("body"),a.outer=e(".fancybox-outer",a.wrap).css("padding",a.current.padding+"px"),a.inner=e(".fancybox-inner",
a.wrap),a._setContent())},_setContent:function(){var b,c,d=a.current,f=d.type;switch(f){case "inline":case "ajax":case "html":b=d.content;"inline"===f&&b instanceof e&&(b=b.show().detach(),b.parent().hasClass("fancybox-inner")&&b.parents(".fancybox-wrap").trigger("onReset").remove(),e(a.wrap).bind("onReset",function(){b.appendTo("body").hide()}));d.autoSize&&(c=e('<div class="fancybox-tmp"></div>').appendTo("body").append(b),d.width=c.width(),d.height=c.height(),c.width(a.current.width),c.height()>
d.height&&(c.width(d.width+1),d.width=c.width(),d.height=c.height()),b=c.contents().detach(),c.remove());break;case "image":b=d.tpl.image.replace("{href}",d.href);d.aspectRatio=!0;break;case "swf":b=d.tpl.swf.replace(/\{width\}/g,d.width).replace(/\{height\}/g,d.height).replace(/\{href\}/g,d.href)}if("iframe"===f){if(b=e(d.tpl.iframe.replace("{rnd}",(new Date).getTime())).attr({scrolling:d.scrolling,src:d.href}).appendTo(a.inner),d.scrolling="auto",d.autoSize){a.wrap.width(d.width);a.showLoading();
b.data("ready",!1).bind("load",function(){var b=e(this),c;try{this.contentWindow.document.location&&(c=b.contents().find("body").height()+12,b.height(c))}catch(f){d.autoSize=!1}!1===b.data("ready")?(a.hideLoading(),c&&(a.current.height=c),a._beforeShow(),b.data("ready",!0)):c&&a.update()});return}}else{if("image"===f||"swf"===f)d.autoSize=!1,d.scrolling="visible";a.inner.append(b)}a._beforeShow()},_beforeShow:function(){a.trigger("beforeShow");a._setDimension();a.wrap.hide().removeClass("fancybox-tmp");
a.bindEvents();a._preload();a.transitions[a.isOpened?a.current.nextMethod:a.current.openMethod]()},_setDimension:function(){var b=a.wrap,c=a.outer,d=a.inner,f=a.current,g=a.getViewport(),k=f.margin,h=2*f.padding,i=f.width,j=f.height,o=f.maxWidth,m=f.maxHeight,n=f.minWidth,p=f.minHeight,l;g.w-=k[1]+k[3];g.h-=k[0]+k[2];-1<i.toString().indexOf("%")&&(i=(g.w-h)*parseFloat(i)/100);-1<j.toString().indexOf("%")&&(j=(g.h-h)*parseFloat(j)/100);k=i/j;i+=h;j+=h;f.fitToView&&(o=Math.min(g.w,o),m=Math.min(g.h,
m));n=Math.min(i,n);p=Math.min(j,p);o=Math.max(n,o);m=Math.max(p,m);f.aspectRatio?(i>o&&(i=o,j=(i-h)/k+h),j>m&&(j=m,i=(j-h)*k+h),i<n&&(i=n,j=(i-h)/k+h),j<p&&(j=p,i=(j-h)*k+h)):(i=Math.max(n,Math.min(i,o)),j=Math.max(p,Math.min(j,m)));i=Math.round(i);j=Math.round(j);e(b.add(c).add(d)).width("auto").height("auto");d.width(i-h).height(j-h);b.width(i);l=b.height();if(i>o||l>m)for(;(i>o||l>m)&&i>n&&l>p;)j-=10,f.aspectRatio?(i=Math.round((j-h)*k+h),i<n&&(i=n,j=(i-h)/k+h)):i-=10,d.width(i-h).height(j-h),
b.width(i),l=b.height();f.dim={width:i,height:l};f.canGrow=f.autoSize&&j>p&&j<m;f.canShrink=!1;f.canExpand=!1;if(i-h<f.width||j-h<f.height)f.canExpand=!0;else if((i>g.w||l>g.h)&&i>n&&j>p)f.canShrink=!0;b=l-h;a.innerSpace=b-d.height();a.outerSpace=b-c.height()},_getPosition:function(b){var c=a.current,d=a.getViewport(),f=c.margin,e=a.wrap.width()+f[1]+f[3],k=a.wrap.height()+f[0]+f[2],h={position:"absolute",top:f[0]+d.y,left:f[3]+d.x};if(c.fixed&&(!b||!1===b[0])&&k<=d.h&&e<=d.w)h={position:"fixed",
top:f[0],left:f[3]};h.top=Math.ceil(Math.max(h.top,h.top+(d.h-k)*c.topRatio))+"px";h.left=Math.ceil(Math.max(h.left,h.left+0.5*(d.w-e)))+"px";return h},_afterZoomIn:function(){var b=a.current,c=b.scrolling;a.isOpen=a.isOpened=!0;a.wrap.addClass("fancybox-opened").css("overflow","visible");a.update();a.inner.css("overflow","yes"===c?"scroll":"no"===c?"hidden":c);if(b.closeClick||b.nextClick)a.inner.css("cursor","pointer").bind("click.fb",b.nextClick?a.next:a.close);b.closeBtn&&e(b.tpl.closeBtn).appendTo(a.outer).bind("click.fb",
a.close);b.arrows&&1<a.group.length&&((b.loop||0<b.index)&&e(b.tpl.prev).appendTo(a.inner).bind("click.fb",a.prev),(b.loop||b.index<a.group.length-1)&&e(b.tpl.next).appendTo(a.inner).bind("click.fb",a.next));a.trigger("afterShow");a.opts.autoPlay&&!a.player.isActive&&(a.opts.autoPlay=!1,a.play())},_afterZoomOut:function(){a.trigger("afterClose");a.wrap.trigger("onReset").remove();e.extend(a,{group:{},opts:{},current:null,isActive:!1,isOpened:!1,isOpen:!1,wrap:null,outer:null,inner:null})}});a.transitions=
{getOrigPosition:function(){var b=a.current,c=b.element,d=b.padding,f=e(b.orig),g={},k=50,h=50;!f.length&&b.isDom&&e(c).is(":visible")&&(f=e(c).find("img:first"),f.length||(f=e(c)));f.length?(g=f.offset(),f.is("img")&&(k=f.outerWidth(),h=f.outerHeight())):(b=a.getViewport(),g.top=b.y+0.5*(b.h-h),g.left=b.x+0.5*(b.w-k));return g={top:Math.ceil(g.top-d)+"px",left:Math.ceil(g.left-d)+"px",width:Math.ceil(k+2*d)+"px",height:Math.ceil(h+2*d)+"px"}},step:function(b,c){var d,f,e;if("width"===c.prop||"height"===
c.prop)f=e=Math.ceil(b-2*a.current.padding),"height"===c.prop&&(d=(b-c.start)/(c.end-c.start),c.start>c.end&&(d=1-d),f-=a.innerSpace*d,e-=a.outerSpace*d),a.inner[c.prop](f),a.outer[c.prop](e)},zoomIn:function(){var b=a.wrap,c=a.current,d,f;d=c.dim;"elastic"===c.openEffect?(f=e.extend({},d,a._getPosition(!0)),delete f.position,d=this.getOrigPosition(),c.openOpacity&&(d.opacity=0,f.opacity=1),a.outer.add(a.inner).width("auto").height("auto"),b.css(d).show().animate(f,{duration:c.openSpeed,easing:c.openEasing,
step:this.step,complete:a._afterZoomIn})):(b.css(e.extend({},d,a._getPosition())),"fade"===c.openEffect?b.fadeIn(c.openSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn()))},zoomOut:function(){var b=a.wrap,c=a.current,d;"elastic"===c.closeEffect?("fixed"===b.css("position")&&b.css(a._getPosition(!0)),d=this.getOrigPosition(),c.closeOpacity&&(d.opacity=0),b.animate(d,{duration:c.closeSpeed,easing:c.closeEasing,step:this.step,complete:a._afterZoomOut})):b.fadeOut("fade"===c.closeEffect?c.closeSpeed:0,
a._afterZoomOut)},changeIn:function(){var b=a.wrap,c=a.current,d;"elastic"===c.nextEffect?(d=a._getPosition(!0),d.opacity=0,d.top=parseInt(d.top,10)-200+"px",b.css(d).show().animate({opacity:1,top:"+=200px"},{duration:c.nextSpeed,complete:a._afterZoomIn})):(b.css(a._getPosition()),"fade"===c.nextEffect?b.hide().fadeIn(c.nextSpeed,a._afterZoomIn):(b.show(),a._afterZoomIn()))},changeOut:function(){var b=a.wrap,c=a.current,d=function(){e(this).trigger("onReset").remove()};b.removeClass("fancybox-opened");
"elastic"===c.prevEffect?b.animate({opacity:0,top:"+=200px"},{duration:c.prevSpeed,complete:d}):b.fadeOut("fade"===c.prevEffect?c.prevSpeed:0,d)}};a.helpers.overlay={overlay:null,update:function(){var a,c;this.overlay.width(0).height(0);e.browser.msie?(a=Math.max(q.documentElement.scrollWidth,q.body.scrollWidth),c=Math.max(q.documentElement.offsetWidth,q.body.offsetWidth),a=a<c?l.width():a):a=r.width();this.overlay.width(a).height(r.height())},beforeShow:function(b){this.overlay||(b=e.extend(!0,{speedIn:"fast",
closeClick:!0,opacity:1,css:{background:"black"}},b),this.overlay=e('<div id="fancybox-overlay"></div>').css(b.css).appendTo("body"),this.update(),b.closeClick&&this.overlay.bind("click.fb",a.close),l.bind("resize.fb",e.proxy(this.update,this)),this.overlay.fadeTo(b.speedIn,b.opacity))},onUpdate:function(){this.update()},afterClose:function(a){this.overlay&&this.overlay.fadeOut(a.speedOut||0,function(){e(this).remove()});this.overlay=null}};a.helpers.title={beforeShow:function(b){var c;if(c=a.current.title)c=
e('<div class="fancybox-title fancybox-title-'+b.type+'-wrap">'+c+"</div>").appendTo("body"),"float"===b.type&&(c.width(c.width()),c.wrapInner('<span class="child"></span>'),a.current.margin[2]+=Math.abs(parseInt(c.css("margin-bottom"),10))),c.appendTo("over"===b.type?a.inner:"outside"===b.type?a.wrap:a.outer)}};e.fn.fancybox=function(b){var c=e(this),d=this.selector||"",f,g=function(g){var h=this,i="rel",j=h[i],l=f;!g.ctrlKey&&!g.altKey&&!g.shiftKey&&!g.metaKey&&(g.preventDefault(),j||(i="data-fancybox-group",
j=e(h).attr("data-fancybox-group")),j&&""!==j&&"nofollow"!==j&&(h=d.length?e(d):c,h=h.filter("["+i+'="'+j+'"]'),l=h.index(this)),b.index=l,a.open(h,b))},b=b||{};f=b.index||0;d?r.undelegate(d,"click.fb-start").delegate(d,"click.fb-start",g):c.unbind("click.fb-start").bind("click.fb-start",g);return this}})(window,document,jQuery);
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(d){function e(a){var b=a||window.event,c=[].slice.call(arguments,1),f=0,e=0,g=0,a=d.event.fix(b);a.type="mousewheel";b.wheelDelta&&(f=b.wheelDelta/120);b.detail&&(f=-b.detail/3);g=f;b.axis!==void 0&&b.axis===b.HORIZONTAL_AXIS&&(g=0,e=-1*f);b.wheelDeltaY!==void 0&&(g=b.wheelDeltaY/120);b.wheelDeltaX!==void 0&&(e=-1*b.wheelDeltaX/120);c.unshift(a,f,e,g);return(d.event.dispatch||d.event.handle).apply(this,c)}var c=["DOMMouseScroll","mousewheel"];if(d.event.fixHooks)for(var h=c.length;h;)d.event.fixHooks[c[--h]]=
d.event.mouseHooks;d.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],e,false);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],e,false);else this.onmousewheel=null}};d.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/**
 * syncHeight - jQuery plugin to automagically Snyc the heights of columns
 * Made to seemlessly work with the CCS-Framework YAML (yaml.de)
 * @requires jQuery v1.0.3
 *
 * http://blog.ginader.de/dev/syncheight/
 *
 * Copyright (c) 2007-2009 
 * Dirk Ginader (ginader.de)
 * Dirk Jesse (yaml.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.1
 *
 * Usage:
 	$(document).ready(function(){
		$('p').syncHeight();
	});
 */

(function($) {
	$.fn.syncHeight = function(config) {
		var defaults = {
			updateOnResize: false	// re-sync element heights after a browser resize event (useful in flexible layouts)
		};
		var options = $.extend(defaults, config);
		
		var e = this;
		
		var max = 0;
		var browser_id = 0;
		var property = [
			// To avoid content overflow in synchronised boxes on font scaling, we 
			// use 'min-height' property for modern browsers ...
			['min-height','0px'],
			// and 'height' property for Internet Explorer.
			['height','1%']
		];

		// check for IE6 ...
		if($.browser.msie && $.browser.version < 7){
			browser_id = 1;
		}
		
		// get maximum element height ...
		$(this).each(function() {
			// fallback to auto height before height check ...
			$(this).css(property[browser_id][0],property[browser_id][1]);
			var val=$(this).height();
			if(val > max){
			   max = val;
			}
		});
		
		// set synchronized element height ...
 		$(this).each(function() {
  			$(this).css(property[browser_id][0],max+'px');
		});
		
		// optional sync refresh on resize event ...
		if (options.updateOnResize == true) {
			$(window).resize(function(){ 
				$(e).syncHeight();
			});
		}
		return this;
	};	
})(jQuery);
/**
 * Accessible Tabs - jQuery plugin for accessible, unobtrusive tabs
 * Build to seemlessly work with the CCS-Framework YAML (yaml.de) not depending on YAML though
 * @requires jQuery - tested with 1.7 and 1.4.2 but might as well work with older versions
 *
 * english article: http://blog.ginader.de/archives/2009/02/07/jQuery-Accessible-Tabs-How-to-make-tabs-REALLY-accessible.php
 * german article: http://blog.ginader.de/archives/2009/02/07/jQuery-Accessible-Tabs-Wie-man-Tabs-WIRKLICH-zugaenglich-macht.php
 * 
 * code: http://github.com/ginader/Accessible-Tabs
 * please report issues at: http://github.com/ginader/Accessible-Tabs/issues
 *
 * Copyright (c) 2007 Dirk Ginader (ginader.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.9.5
 * 
 * History:
 * * 1.0 initial release
 * * 1.1 added a lot of Accessibility enhancements
 * * * rewrite to use "fn.extend" structure
 * * * added check for existing ids on the content containers to use to proper anchors in the tabs
 * * 1.1.1 changed the headline markup. thanks to Mike Davies for the hint.
 * * 1.5 thanks to Dirk Jesse, Ansgar Hein, David Maciejewski and Mike West for commiting patches to this release
 * * * new option syncheights that syncs the heights of the tab contents when the SyncHeight plugin 
 * *   is available http://blog.ginader.de/dev/jquery/syncheight/index.php
 * * * fixed the hardcoded current class
 * * * new option tabsListClass to be applied to the generated list of tabs above the content so lists 
 * *   inside the tabscontent can be styled differently
 * * * added clearfix and tabcounter that adds a class in the schema "tabamount{number amount of tabs}" 
 * *   to the ul containg the tabs so one can style the tabs to fit 100% into the width
 * * * new option "syncHeightMethodName" fixed issue: http://github.com/ginader/Accessible-Tabs/issues/2/find
 * * * new Method showAccessibleTab({index number of the tab to show starting with 0})  fixed issue: http://github.com/ginader/Accessible-Tabs/issues/3/find
 * * * added support for the Cursor Keys to come closer to the WAI ARIA Tab Panel Best Practices http://github.com/ginader/Accessible-Tabs/issues/1/find
 * * 1.6 
 * * * new option "saveState" to allow tabs remember their selected state using cookies requires the cookie plugin: http://plugins.jquery.com/project/Cookie
 * * * changed supported jquery version to 1.4.2 to make sure it's future compatible
 * * * new option "autoAnchor" which allows to add ID's to headlines in the tabs markup that allow direct linking into a tab i.e.: file.html#headlineID
 * * 1.7
 * * * new option "pagination" that adds links to show the next/previous tab. This adds the following markup to each tab for you to style:
 <ul class="pagination">
     <li class="previous"><a href="#{the-id-of-the-previous-tab}"><span>{the headline of the previous tab}</span></a></li>
     <li class="next"><a href="#{the-id-of-the-next-tab}"><span>{the headline of the previous tab}</span></a></li>
 </ul>
 * * 1.8
 * * * new option "position" can be 'top' or 'bottom'. Defines where the tabs list is inserted. 
 * * 1.8.1
 * * * Bugfix for broken pagination in ie6 and 7: Selector and object access modified by Daniel Köntös (www.MilkmanMedia.de). Thanks to Carolin Moll for the report.
 * * 1.8.2
 * * * Bugfix for issue described by Sunshine here: http://blog.ginader.de/archives/2009/02/07/jQuery-Accessible-Tabs-How-to-make-tabs-REALLY-accessible.php#c916
 * * 1.8.3
 * * * Bugfix by Michael Schulze: Only change current class in tab navigation and not in all unordered lists inside the tabs.
 * * 1.9
 * * * new method showAccessibleTabSelector({valid jQuery selector of the tab to show}) that allows the opening of tabs \
 * * * by jQuery Selector instead of the index in showAccessibleTab() fixing issue https://github.com/ginader/Accessible-Tabs/issues/15
 * * 1.9.1 by Michael Schulze: 
 * * * firstNavItemClass and lastNavItemClass to define a custom classname on the first and last tab
 * * * wrapInnerNavLinks: inner wrap for a-tags in tab navigation.
 * * 1.9.2
 * * * Bugfix by Dirk Jesse: fixing an issue that happened when passing multiple selectors to the init call instead of one
 * * * Bugfix that fixes a reset of the tabs counter when accessibleTabs() was called more than once on a page
 * * 1.9.3
 * * * Bugfix by Norm: before, when cssClassAvailable was true, all of the tabhead elements had to have classes or they wouldn't get pulled out into tabs. 
 * * * This commit fixes this assumption, as I only want classes on some elements https://github.com/ginader/Accessible-Tabs/pull/25
 * * 1.9.4 Bugfix by Patrick Bruckner to fix issue with Internet Explorer using jQuery 1.7 https://github.com/ginader/Accessible-Tabs/issues/26
 * * 1.9.5 new option "clearfixClass" name of the Class that is used to clear/contain floats fixes https://github.com/ginader/Accessible-Tabs/issues/28
 */


(function($) {
    var debugMode = true;
    $.fn.extend({
        // We assume there could be multiple sets of tabs on a page, so,
        // the unique id for each invididual tab's heading is identified with params q and r (e.g., id="accessibletabscontent0-2")
        getUniqueId: function(p, q, r){
            if (r===undefined) {r='';} else {r='-'+r;}
            return p + q + r;
        },
        accessibleTabs: function(config) {
            var defaults = {
                wrapperClass: 'content', // Classname to apply to the div that is wrapped around the original Markup
                currentClass: 'current', // Classname to apply to the LI of the selected Tab
                tabhead: 'h4', // Tag or valid Query Selector of the Elements to Transform the Tabs-Navigation from (originals are removed)
                tabheadClass: 'tabhead', // Classname to apply to the target heading element for each tab div
                tabbody: '.tabbody', // Tag or valid Query Selector of the Elements to be treated as the Tab Body
                fx:'show', // can be "fadeIn", "slideDown", "show"
                fxspeed: 'normal', // speed (String|Number): "slow", "normal", or "fast") or the number of milliseconds to run the animation
                currentInfoText: 'current tab: ', // text to indicate for screenreaders which tab is the current one
                currentInfoPosition: 'prepend', // Definition where to insert the Info Text. Can be either "prepend" or "append"
                currentInfoClass: 'current-info', // Class to apply to the span wrapping the CurrentInfoText
                tabsListClass:'tabs-list', // Class to apply to the generated list of tabs above the content
                syncheights:false, // syncs the heights of the tab contents when the SyncHeight plugin is available http://blog.ginader.de/dev/jquery/syncheight/index.php
                syncHeightMethodName:'syncHeight', // set the Method name of the plugin you want to use to sync the tab contents. Defaults to the SyncHeight plugin: http://github.com/ginader/syncHeight
                cssClassAvailable:false, // Enable individual css classes for tabs. Gets the appropriate class name of a tabhead element and apply it to the tab list element. Boolean value
                saveState:false, // save the selected tab into a cookie so it stays selected after a reload. This requires that the wrapping div needs to have an ID (so we know which tab we're saving)
                autoAnchor:false, // will move over any existing id of a headline in tabs markup so it can be linked to it
                pagination:false, // adds buttons to each tab to switch to the next/previous tab
                position:'top', // can be 'top' or 'bottom'. Defines where the tabs list is inserted.
                wrapInnerNavLinks: '', // inner wrap for a-tags in tab navigation. See http://api.jquery.com/wrapInner/ for further informations
                firstNavItemClass: 'first', // Classname of the first list item in the tab navigation
                lastNavItemClass: 'last', // Classname of the last list item in the tab navigation
                clearfixClass: 'clearfix' // Name of the Class that is used to clear/contain floats
            };
            var keyCodes = {
                37 : -1, //LEFT
                38 : -1, //UP
                39 : +1, //RIGHT 
                40 : +1 //DOWN
            };
            var positions = {
                top : 'prepend',
                bottom : 'append'
            };
            this.options = $.extend(defaults, config);

            var tabsCount = 0;
            if($("body").data('accessibleTabsCount') !== undefined){
                tabsCount = $("body").data('accessibleTabsCount');
            }
            $("body").data('accessibleTabsCount',this.size()+tabsCount);

            var o = this;
            return this.each(function(t) {
                var el = $(this);
                var list = '';
                var tabCount = 0;
                var ids = [];

                $(el).wrapInner('<div class="'+o.options.wrapperClass+'"></div>');

                $(el).find(o.options.tabhead).each(function(i){
                    var id = '';
                    elId = $(this).attr('id');
                    if(elId){
                        // Skip this item if it already exists.
                        if(elId.indexOf('accessibletabscontent') === 0) {
                            return;
                        }
                        id =' id="'+elId+'"';
                    }
                    var tabId = o.getUniqueId('accessibletabscontent', tabsCount+t, i);//get a unique id to assign to this tab's heading
                    var navItemId = o.getUniqueId('accessibletabsnavigation', tabsCount+t, i);//get a unique id for this navigation item
                    ids.push(tabId);
                    if(o.options.cssClassAvailable === true) {
                        var cssClass = '';
                        if($(this).attr('class')) {
                            cssClass = $(this).attr('class');
                            cssClass = ' class="'+cssClass+'"';
                        }
                        list += '<li id="'+navItemId+'"><a'+id+''+cssClass+' href="#'+tabId+'">'+$(this).html()+'</a></li>';
                    } else {
                      list += '<li id="'+navItemId+'"><a'+id+' href="#'+tabId+'">'+$(this).html()+'</a></li>';
                    }
                    $(this).attr({"id": tabId, "class": o.options.tabheadClass, "tabindex": "-1"});//assign the unique id and the tabheadClass class name to this tab's heading
                    tabCount++;
                });
                
                if (o.options.syncheights && $.fn[o.options.syncHeightMethodName]) {
                    $(el).find(o.options.tabbody)[o.options.syncHeightMethodName]();
                    $(window).resize(function(){ 
                        $(el).find(o.options.tabbody)[o.options.syncHeightMethodName]();
                    });
                }

                // Ensure that the call to setup tabs is re-runnable
                var tabs_selector = '.' + o.options.tabsListClass;
                if(!$(el).find(tabs_selector).length) {
                    $(el)[positions[o.options.position]]('<ul class="'+o.options.clearfixClass+' '+o.options.tabsListClass+' tabamount'+tabCount+'"></ul>');
                }

                $(el).find(tabs_selector).append(list);

                // initial show first content block and hide the others
                var content = $(el).find(o.options.tabbody);
                if (content.length > 0) {
                    $(content).hide();
                    $(content[0]).show();
                }
                $(el).find("ul."+o.options.tabsListClass+">li:first").addClass(o.options.currentClass).addClass(o.options.firstNavItemClass)
                  .find('a')[o.options.currentInfoPosition]('<span class="'+o.options.currentInfoClass+'">'+o.options.currentInfoText+'</span>')
                  .parents("ul."+o.options.tabsListClass).children('li:last').addClass(o.options.lastNavItemClass);
                
                if (o.options.wrapInnerNavLinks) {
                  $(el).find('ul.'+o.options.tabsListClass+'>li>a').wrapInner(o.options.wrapInnerNavLinks);
                }
                
                $(el).find('ul.'+o.options.tabsListClass+'>li>a').each(function(i){
                    $(this).click(function(event){
                        event.preventDefault();
                        el.trigger("showTab.accessibleTabs", [$(event.target)]);
                        if(o.options.saveState && $.cookie){
                            $.cookie('accessibletab_'+el.attr('id')+'_active',i);
                        }
                        $(el).find('ul.'+o.options.tabsListClass+'>li.'+o.options.currentClass).removeClass(o.options.currentClass)
                        .find("span."+o.options.currentInfoClass).remove();
                        $(this).blur();
                        $(el).find(o.options.tabbody+':visible').hide();
                        $(el).find(o.options.tabbody).eq(i)[o.options.fx](o.options.fxspeed);
                        $(this)[o.options.currentInfoPosition]('<span class="'+o.options.currentInfoClass+'">'+o.options.currentInfoText+'</span>')
                        .parent().addClass(o.options.currentClass);
                        //now, only after writing the currentInfoText span to the tab list link, set focus to the tab's heading
                        $($(this).attr("href"),true).focus().keyup(function(event){
                            if(keyCodes[event.keyCode]){
                                o.showAccessibleTab(i+keyCodes[event.keyCode]);
                                $(this).unbind( "keyup" );
                            }
                        });
                        
                        // $(el).find('.accessibletabsanchor').keyup(function(event){
                        //     if(keyCodes[event.keyCode]){
                        //         o.showAccessibleTab(i+keyCodes[event.keyCode]);
                        //     }
                        // });
                        
                        
                    });
                    
                    $(this).focus(function(event){
                        $(document).keyup(function(event){
                            if(keyCodes[event.keyCode]){
                                o.showAccessibleTab(i+keyCodes[event.keyCode]);
                            }
                        });
                    });
                    $(this).blur(function(event){
                        $(document).unbind( "keyup" );
                    });
                    
                });
                
                if(o.options.saveState && $.cookie){
                    var savedState = $.cookie('accessibletab_'+el.attr('id')+'_active');
                    debug($.cookie('accessibletab_'+el.attr('id')+'_active'));
                    if(savedState !== null){
                        o.showAccessibleTab(savedState,el.attr('id'));
                    }
                }
                
                if(o.options.autoAnchor && window.location.hash){
                    var anchorTab = $('.'+o.options.tabsListClass).find(window.location.hash);
                    if(anchorTab.size()){
                        anchorTab.click();
                    }
                }
                
                if(o.options.pagination){
                    var m = '<ul class="pagination">';
                    m +='    <li class="previous"><a href="#{previousAnchor}"><span>{previousHeadline}</span></a></li>';
                    m +='    <li class="next"><a href="#{nextAnchor}"><span>{nextHeadline}</span></a></li>';
                    m +='</ul>';
                    var tabs = $(el).find('.tabbody');
                    var tabcount = tabs.size();
                    tabs.each(function(idx){
                        $(this).append(m);
                        var next = idx+1;
                        if(next>=tabcount){next = 0;}
                        var previous = idx-1;
                        if(previous<0){previous = tabcount-1;}
                        var p = $(this).find('.pagination');
                        var previousEl = p.find('.previous');
                        previousEl.find('span').text($('#'+ids[previous]).text());
                        previousEl.find('a').attr('href','#'+ids[previous])
                        .click(function(event){
                            event.preventDefault();
                            $(el).find('.tabs-list a').eq(previous).click();
                        });
                        var nextEl = p.find('.next');
                        nextEl.find('span').text($('#'+ids[next]).text());
                        nextEl.find('a').attr('href','#'+ids[next])
                        .click(function(event){
                            event.preventDefault();
                            $(el).find('.tabs-list a').eq(next).click();
                        });
                    });
                }
            });
        },
        showAccessibleTab: function(index,id){
            debug('showAccessibleTab');
            var o = this;
            if(id) {
                var el = $('#'+id);
                var links = el.find('ul.'+o.options.tabsListClass+'>li>a');
                el.trigger("showTab.accessibleTabs", [links.eq(index)]);
                links.eq(index).click();
            } else {
                return this.each(function() {
                    var el = $(this);
                    el.trigger("showTab.accessibleTabs");
                    var links = el.find('ul.'+o.options.tabsListClass+'>li>a');
                    el.trigger("showTab.accessibleTabs", [links.eq(index)]);
                    links.eq(index).click();
                });
            }
        },
        showAccessibleTabSelector: function(selector){
            debug('showAccessibleTabSelector');
            var o = this;
            var el = $(selector);
            if(el){
                if(el.get(0).nodeName.toLowerCase() == 'a'){
                    el.click();
                }else{
                    debug('the selector of a showAccessibleTabSelector() call needs to point to a tabs headline!');
                }
            }
        }
    });
    // private Methods
    function debug(msg,info){
        if(debugMode && window.console && window.console.log){
            if(info){
                window.console.log(info+': ',msg);
            }else{
                window.console.log(msg);
            }
        }
    }
})(jQuery);

/**
 * plugins file with some jQuery plugins and standard functions
 *
 * @author             Michael Schulze
 * @version            $1.1$
 * @copyright          Michael Schulze <elsigno.de>, 29 December, 2011
 * @license            GNU General Public License, version 3 (GPL-3.0)
 * @package            coffeescript, jquery
 * @requirements       jquery-1.7.2.min.js
 *
 * @lastmodified       $Date: 2012-03-30 13:16:22 +0200 (Fr., 30 Mär 2012) $
 *
*/

(function($, window, document) {
  "use strict";

  /**
   * Accessifyhtml5.js
   * Adds ARIA to new elements in browsers which don’t do it by themselves.
   *
   * originally by Eric Eggert
   * https://github.com/yatil/accessifyhtml5.js
  */

  var firstplugin, isEventSupported;
  $.accessifyhtml5 = function(defaults) {
    var fixes;
    fixes = {
      article: {
        role: "article"
      },
      aside: {
        role: "complementary"
      },
      nav: {
        role: "navigation"
      },
      output: {
        "aria-live": "polite"
      },
      section: {
        role: "region"
      },
      "[required]": {
        "aria-required": "true"
      }
    };
    if (defaults) {
      if (defaults.header) {
        fixes[defaults.header] = {
          role: "banner"
        };
      }
      if (defaults.footer) {
        fixes[defaults.footer] = {
          role: "contentinfo"
        };
      }
    }
    $.each(fixes, function(index, item) {
      $(index).attr(item);
      return true;
    });
    return true;
  };
  firstplugin = {
    init: function(options) {
      var defaults, el, firstload, o;
      defaults = {
        resize: 1
      };
      o = $.extend(defaults, options || {});
      firstload = 1;
      el = this;
      if (o.resize === 1) {
        $(window).resize(function() {
          var firstLoad;
          firstLoad = 0;
          firstplugin.update(o);
          return true;
        });
      }
      return this.each(function() {});
    },
    update: function(o) {
      var el;
      el = 0;
      return el.each(function() {});
    }
  };
  $.fn.firstplugin = function(method) {
    if (firstplugin[method]) {
      return firstplugin[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return firstplugin.init.apply(this, arguments);
    } else {
      return $.error('Method ' + method + ' does not exist on jQuery.firstplugin');
    }
  };
  $.secondplugin = function(options) {
    var defaults, o;
    defaults = {
      resize: 1
    };
    o = $.extend(defaults, options || {});
    return true;
  };
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

  (function() {
    var YAML_focusFix;
    YAML_focusFix = {
      skipClass: "ym-skip",
      init: function() {
        var body, handler, is_ie, is_webkit, userAgent;
        userAgent = navigator.userAgent.toLowerCase();
        is_webkit = userAgent.indexOf("webkit") > -1;
        is_ie = userAgent.indexOf("msie") > -1;
        if (is_webkit || is_ie) {
          body = document.body;
          handler = YAML_focusFix.click;
          if (body.addEventListener) {
            return body.addEventListener("click", handler, false);
          } else {
            if (body.attachEvent) {
              return body.attachEvent("onclick", handler);
            }
          }
        }
      },
      trim: function(str) {
        return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      },
      click: function(e) {
        var a, cls, i, target, _results;
        e = e || window.event;
        target = e.target || e.srcElement;
        a = target.className.split(" ");
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
      },
      focus: function(link) {
        var href, id, target;
        if (link.href) {
          href = link.href;
          id = href.substr(href.indexOf("#") + 1);
          target = document.getElementById(id);
          if (target) {
            target.setAttribute("tabindex", "-1");
            return target.focus();
          }
        }
      }
    };
    return YAML_focusFix.init();
  })();
  /**
   * JavaScript email encrypter
   *
   * @author             Michael Schulze
   * @version            $1.0$
   * @copyright          Michael Schulze, 31 December, 2011
   *                     https://github.com/michsch/cryptmail
   * @license            GNU General Public License, version 3 (GPL-3.0)
   * @package            coffeescript
   *
   * @lastmodified       $Date: 2011-12-31 20:29:35  +0100 (Sat, 31 Dec 2011) $
   *
  */

  (function() {
    /**
     * Crypt given mail
     *
     * @param string email address
     * @param boolean true
    */

    var UnCryptMailto;
    window.CryptMailto = function() {
      var cryptform, e, formname, i, n, r, radioObj, radioValue, s;
      formname = 'cryptmail';
      cryptform = document.forms[formname];
      n = 0;
      r = "";
      s = "mailto:" + cryptform.cryptmail_email.value;
      e = cryptform.cryptmail_email.value;
      if (cryptform.cryptmail_email.value.length < 4) {
        return false;
      }
      radioObj = cryptform.cryptmail_radio;
      if (radioObj.length > 0) {
        i = 0;
        while (i < radioObj.length) {
          radioValue = parseInt(radioObj[i].checked ? radioObj[i].value : void 0, 0);
          i++;
        }
      } else {
        radioValue = 0;
      }
      if (radioValue === 1) {
        e = e.replace(/\./g, '<span class="crypt">.</span>.</span class="crypt">.</span>');
        e = e.replace(/@/, '<span class="crypt">.</span>@</span class="crypt">.</span>');
      } else {
        e = e.replace(/\./g, ' [dot] ');
        e = e.replace(/@/, ' [at] ');
      }
      i = 0;
      while (i < s.length) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
          n = 128;
        }
        r += String.fromCharCode(n + 1);
        i++;
      }
      cryptform.cryptmail_cryptedmail.value = r;
      cryptform.cryptmail_html.value = '<a href="javascript:linkTo_UnCryptMailto(\'' + r + '\');">' + "\n\t" + e + "\n" + '</a>';
      return true;
    };
    /**
     * Uncrypt the email address and returns the valid href
     *
     * @param string the crypted string
     * @return string valid href
    */

    UnCryptMailto = function(s) {
      var i, n, r;
      n = 0;
      r = "";
      i = 0;
      while (i < s.length) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
          n = 128;
        }
        r += String.fromCharCode(n - 1);
        i++;
      }
      return r;
    };
    /**
     * Public function for A tags
     *
     * @param string the crypted string
     * @return boolean true
    */

    window.linkTo_UnCryptMailto = function(s) {
      location.href = new UnCryptMailto(s);
      return true;
    };
    return true;
  })();
  /**
   * Checks if an event is supported
   *
   * @param string event to check
   * @return boolean true if event is supported, false if not
  */

  isEventSupported = (function() {
    var TAGNAMES;
    window.isEventSupported = function(eventName) {
      var el, isSupported;
      el = document.createElement(TAGNAMES[eventName] || "div");
      eventName = "on" + eventName;
      isSupported = eventName in el;
      if (!isSupported) {
        el.setAttribute(eventName, "return;");
        isSupported = typeof el[eventName] === "function";
      }
      el = null;
      return isSupported;
    };
    TAGNAMES = {
      select: "input",
      change: "input",
      submit: "form",
      reset: "form",
      error: "img",
      load: "img",
      abort: "img"
    };
    return isEventSupported;
  })();
  return true;
})(jQuery, window, document);

/**
 * main jQuery script file
 *
 * @author             Michael Schulze
 * @version            $1.3.0$
 * @copyright          Michael Schulze <elsigno.de>, 29 December, 2011
 * @license            All rights reserved. No usage without written permission.
 * @package            coffeescript, jquery
 * @requirements       jquery-1.7.2.min.js
 *
 * @lastmodified       $Date: 2012-07-24 19:44:03 +0200 (Di., 24 Jul 2012) $
 *
*/

jQuery.noConflict();

(function($, window, document) {
  "use strict";

  var lang, language, ll;
  language = $('html').attr('lang');
  lang = !language ? 'en' : language;
  ll = ['en', 'de'];
  ll.en = {
    from: 'from',
    to: 'to',
    image: 'image'
  };
  ll.de = {
    from: 'von',
    to: 'bis',
    image: 'Bild'
  };
  $(document).ready(function() {
    var domReady;
    domReady = {
      /**
       * Init function for that page
       *
       * @return boolean true
      */

      init: function() {
        var mobileScrollUp, self;
        self = this;
        $.accessifyhtml5();
        $('html').removeClass('no-js').addClass('js');
        mobileScrollUp = function() {
          return window.scrollTo(0, 1);
        };
        setTimeout(mobileScrollUp, 100);
        Hyphenator.run();
        $(".fancybox").fancybox();
        self.responsive(self.getWindowWidth(), false);
        $(window).resize(function() {
          return self.responsive(self.getWindowWidth(), true);
        });
        if (navigator.userAgent.indexOf("Windows") === -1 || (navigator.userAgent.indexOf("Windows") > -1 && navigator.userAgent.indexOf("Firefox") === -1)) {
          $('html').addClass('webfonts');
        }
        return true;
      },
      /**
       * Function for responsive design
       *
       * @param integer width of window in pixel
       * @param boolean true if window is resized
       *
       * @return boolean true
      */

      responsive: function(windowWidth, resize) {
        return true;
      },
      /**
       * Gets the actual window width
       *
       * @param object jQuery object
       * @return integer window width in pixel
      */

      getWindowWidth: function() {
        var ielt9, windowWidth;
        windowWidth = window.innerWidth;
        if (!windowWidth) {
          ielt9 = true;
          windowWidth = $('body').width();
        }
        return windowWidth;
      },
      /**
       * Creates the DropDown navigation with hoverIntent plugin
       *
       * @return boolean true
      */

      navigation: function() {
        var navHover;
        navHover = {
          over: this.navOverFunction,
          out: this.navOutFunction,
          timeout: 200
        };
        $("#nav div.hlist > ul:first-child > li > a").hoverIntent(navHover);
        return true;
      },
      /**
       * Main navigation mouseOver
       *
       * @return boolean true
      */

      navOverFunction: function() {
        $ = jQuery;
        if ($(this).next('ul').length > 0) {
          $(this).parent('li').addClass('hover');
          $(this).next('ul').slideDown(200);
        }
        return true;
      },
      /**
       * Main navigation mouseOut
       *
       * @return boolean true
      */

      navOutFunction: function() {
        var li, liOffset, link, ul, ulOffset;
        $ = jQuery;
        link = $(this);
        li = link.parent('li');
        ul = link.next('ul');
        liOffset = li.offset();
        ulOffset = ul.offset();
        $('html').mousemove(function(e) {
          var posX, posY;
          posX = e.pageX;
          posY = e.pageY;
          if (posX < liOffset.left || posY < liOffset.top || posX > (liOffset.left + ul.width()) || (posY > liOffset.top && posY < (liOffset.top + li.height() + 25) && posX > (liOffset.left + li.width())) || posY > (liOffset.top + li.height() + ul.height() + 25)) {
            ul.slideUp(100, function() {
              return li.removeClass('hover');
            });
            $('html').unbind();
            return true;
          }
        });
        return true;
      },
      installSyntaxHighlighting: function() {
        var highlightStyle;
        highlightStyle = "peachpuff";
        if (jQuery.fn.snippet) {
          $("pre.htmlCode").snippet("html", {
            style: highlightStyle
          });
          $("pre.cssCode").snippet("css", {
            style: highlightStyle
          });
          $("pre.jsCode").snippet("javascript", {
            style: highlightStyle
          });
        }
        return true;
      },
      /*
             * Fancybox popup
             *
             * @return boolean true
      */

      fancyboxMore: function() {
        if ($('*').is('a.jqfancybox-more')) {
          $('a.jqfancybox-more').click(function(event) {
            var content;
            event.preventDefault();
            content = $($(this).attr('href')).html();
            return $.fancybox(content, {
              autoDimensions: true,
              width: 600,
              padding: 40,
              height: 'auto',
              transitionIn: 'none',
              transitionOut: 'none'
            });
          });
        }
        return true;
      },
      /**
       * Activate fancybox
       *
       * @return boolean true
      */

      fancybox: function() {
        var options;
        if ($("*").is(".jqfancybox")) {
          options = {
            padding: 12,
            speedIn: 300,
            speedOut: 300,
            changeSpeed: 300,
            transitionIn: "elastic",
            transitionOut: "elastic",
            titlePosition: "over",
            titleShow: true,
            easingIn: "swing",
            easingOut: "swing",
            showCloseButton: true,
            showNavArrows: true,
            enableEscapeButton: true,
            overlayShow: true,
            overlayOpacity: 0.4,
            overlayColor: "#666",
            centerOnScroll: false,
            hideOnContentClick: false,
            onComplete: function() {
              return $("#fancybox-wrap").hover(function() {
                return $("#fancybox-title").show();
              }, function() {
                return $("#fancybox-title").hide();
              });
            },
            titleFormat: function(title, currentArray, currentIndex, currentOpts) {
              return '<span id="fancybox-title-over">' + ll[lang].image + ' ' + (currentIndex + 1) + ' ' + ll[lang].from + ' ' + currentArray.length + (title.length ? ': &nbsp; ' + title : '') + '</span>';
            }
          };
          $(".jqfancybox").fancybox(options);
        }
        return true;
      }
    };
    return domReady.init();
  });
  $(window).load(function() {
    var domLoad;
    domLoad = {
      /**
       * Init function for that page
       *
       * @return boolean true
      */

      init: function() {
        var self;
        self = this;
        return true;
      }
    };
    return domLoad.init();
  });
  return true;
})(jQuery, window, document);
