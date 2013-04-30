###jshint devel:true
###
###global require:true, define:true, $:true, jQuery:true, Modernizr:true
###

###*
 * main jQuery script file
 *
 * @author             Michael Schulze
 * @version            $1.4.0$
 * @copyright          Michael Schulze, 29 December, 2011
 * @license            All rights reserved. No usage without written permission.
 * @package            coffeescript, jquery
 * @requirements       jquery-1.9.1.min.js
 *
 * @lastmodified       $Date: 2013-04-29 21:56:55 +0200 (Mon, 29 Apr 2013) $
 *
###

if typeof jQuery is 'function' && jQuery
  jQuery.noConflict()

_site = (( exports, $, window, document ) ->
  "use strict"

  exports = exports || {}

  config = exports.config

  language = $('html').attr('lang')
  lang = if !language then 'en' else language

  if config is undefined
    config = {}
    config.ll =
      en:
        from: 'from'
        to: 'to'
        image: 'image'
      de:
        from: 'von'
        to: 'bis'
        image: 'Bild'

  config.lang = (if (typeof config.ll[lang] is "object" && config.ll[lang]) then lang else 'en')

  class DOMReady
    #self = this
    #sf = this.prototype

    constructor : ( @config ) ->
      @init()

    ###*
     * Init function for that page
     *
     * @return boolean true
    ###
    init : ->
      accessifyhtml5()
      $('html').removeClass('no-js').addClass('js')

      mobileScrollUp = -> window.scrollTo(0, 1)
      setTimeout mobileScrollUp,100

      # Functions
      #Hyphenator.run()
      # installSyntaxHighlighting()

      @fancybox()

      # Responsive view
      #responsive(getWindowWidth(), false)
      #$(window).resize -> responsive(getWindowWidth(), true)

      true

    ###*
     * Creates the DropDown navigation with hoverIntent plugin
     *
     * @return boolean true
    ###
    navigation = ->
      navHover =
        over : navOverFunction
        out : navOutFunction
        timeout: 200

      $("#nav div.hlist > ul:first-child > li > a").hoverIntent( navHover )

      true

    ###*
     * Main navigation mouseOver
     *
     * @return boolean true
    ###
    navOverFunction = ->
      if $(this).next('ul').length > 0
        $(this).parent('li').addClass('hover')
        $(this).next('ul').slideDown(200)

      true;

    ###*
     * Main navigation mouseOut
     *
     * @return boolean true
    ###
    navOutFunction = ->
      link = $(this)
      li = link.parent('li')
      ul = link.next('ul')

      true

    installSyntaxHighlighting = ->
      highlightStyle = 'peachpuff'

      if $.fn.snippet
        $('pre.htmlCode').snippet('html', { style: highlightStyle })
        $('pre.cssCode').snippet('css', { style: highlightStyle })
        $('pre.jsCode').snippet('javascript', { style: highlightStyle })
      true

    ###*
     * Activate fancybox
     *
     * @return boolean true
    ###
    fancybox : ( options ) ->
      fancyboxDefaults =
        useResponsive: true
        live: false
        padding: 10
        margin: 20
        minWidth: 100
        minHeight: 100
        maxWidth: 2560
        maxHeight: 2560
        autoSize: true
        autoHeight: false
        autoWidth: false
        #autoResize: !isTouch
        #autoCenter: !isTouch
        fitToView: true
        aspectRatio: false
        topRatio: 0.5
        scrolling: 'auto'
        wrapCSS: ''
        arrows: true
        closeBtn: true
        nextClick: false
        mouseWheel: true
        autoPlay: false
        playSpeed: 3000
        preload: 2
        modal: false
        loop: true
        scrollOutside: true
        index: 0
        type: null
        href: null
        content: null
        title: null
        #tpl: {}
        openSpeed: 300
        closeSpeed: 300
        nextSpeed: 300
        prevSpeed: 300
        #openEasing: 'elastic'
        #closeEasing: 'elastic'
        #nextEasing: 'elastic'
        #prevEasing: 'elastic'
        openOpacity: true
        closeOpacity: true
        helpers : {
          overlay : {
            css : {
              #'background' : 'rgba(58, 42, 45, 0.95)'
            }
          }
          title : {
            type : 'inside'
          }
        }
        afterLoad : ->
          images = config.ll[config.lang].image + " " + (@index + 1) + " " + config.ll[config.lang].from + " " + @group.length
          title = $(this.element).attr('title')
          @title = images + (if title then " - " + title else "")
          #this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '')
          return @title
        afterShow: ->
          $(".fancybox-wrap").hover( ->
            $(".fancybox-title").show()
          , ->
            $(".fancybox-title").hide()
          )

      if typeof $.fn.fancybox is 'function' and $('*').is('.fancybox')
        o = $.extend( true, {}, fancyboxDefaults, options || {} )
        $('.fancybox').fancybox( o )

      true

  class DOMLoad
    #self = @
    #sf = @.prototype

    constructor : ( @config ) ->
      @init()

    ###*
     * Init function for that page
     *
     * @return boolean true
    ###
    init : ->

      true

  $(document).ready ->
    exports.domReady = new DOMReady()

  $(window).load ->
    exports.domLoad = new DOMLoad()

  exports
)( _site or {}, jQuery, ( typeof window is 'object' and window ) or this, document )