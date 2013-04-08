###jshint devel:true
###
###global define, require, PubSub
###

###*
 * Responsive Web Design module
 *
 * A set of some standard functions for responsive design.
###
define([
	'configuration',
	'underscore',
	'jquery',
	'pubsub',
	'plugin/jquery.smartresize',
	'exports'
	], ( config, _, $, PubSub, smartresize, exports ) ->
	"use strict"

	###*
 * some client window, screen and document size functions
 *
	###
	Responsive = ( ) ->
		r = this
		r.callback = {
			arr : []
		}

		r.document = {}
		r.screen = {}
		r.window = {}

		r.debugMode = false

		init = ->
			getWindow()
			getScreen()
			debug()
			true

		getWindow = ->
			r.window.width = getWindowWidth()
			r.window.height = getWindowHeight()
			r.window.devicePixelRatio = getDevicePixelRatio()

			true

		getScreen = ->
			r.screen.width = getScreenWidth()
			r.screen.height = getScreenHeight()

			true

		updateOnResize = ->
			getWindow()

			true

		getWindowWidth = ->
			# get width without jQuery first
			windowWidth = window.innerWidth || document.documentElement.clientWidth
			# fallback for old browsers
			if typeof windowWidth isnt 'number'
				windowWidth = $(window).width()
			# fallback for creepy browsers
			if typeof windowWidth isnt 'number'
				windowWidth = $('body').width()
			return windowWidth

		getWindowHeight = ->
			# get width without jQuery first
			windowHeight = window.innerHeight || document.documentElement.clientHeight
			# fallback for old browsers 
			if typeof windowHeight isnt 'number'
				windowHeight = $(window).height()
			# fallback for creepy browsers
			if typeof windowHeight isnt 'number'
				windowHeight = $('body').height()
			return windowHeight

		getDevicePixelRatio = ->
			# get the device pixel ratio and set it to 1 if browser can't detect
			devicePixelRatio = window.devicePixelRatio || 1
			return devicePixelRatio

		getScreenWidth = ->
			# get width without jQuery first
			screenWidth = screen.width || false
			return screenWidth

		getScreenHeight = ->
			# get width without jQuery first
			screenHeight = screen.height || false
			return screenHeight

		###*
 * Define the resize event with the usage of special plugin smartresize for debounce events.
 * Gets all callbacks inside of this.callback object.
 *
		###
		onresize = () ->
			$(window).smartresize(() ->
				updateOnResize()

				# check if PubSub is already defined and load instance if is defined
				if PubSub is undefined and require.defined('pubsub') is true
					PubSub = require('pubsub')

				# register publish for resize
				if typeof $.publish is 'function'
					$.publish('resize')

				if typeof PubSub is 'object'
					PubSub.publish('resize')
				else if typeof window.PubSub is 'object'
					window.PubSub.publish('resize')

				if typeof $.pubsub is 'object' and typeof $.pubsub.publish is 'function'
					$.pubsub.publish('resize')

				for key of exports.callback
					if typeof exports.callback[key] is 'function'
						exports.callback[key]( exports.window )
					else if typeof exports.callback[key] is 'object'
						i = 0
						while i <= exports.callback[key].length
							if typeof exports.callback[key][i] is 'function'
								exports.callback[key][i]( exports.window )
							i++
				true
			, 500)

		this.images = ->

			screenBreakPoint =
				page :
					large 		: 1024
					medium		: 768
				grid :
					large 		: 1024
					medium		: 768

			screenWidth = r.window.width

			$('figure').each ->
				figure = $(this)

				if figure.parents('.ym-grid').length > 0
					large = figure.attr('data-image-medium')
				else
					large = figure.attr('data-image-large')

				sbp = screenBreakPoint.page

				if typeof large isnt 'undefined' and large isnt false
					medium = $(this).attr('data-image-medium')
					small = $(this).attr('data-image-small')

					if screenWidth >= sbp.large
						imagePath = large
					else if (screenWidth >= sbp.medium and screenWidth < sbp.large) and (typeof medium isnt 'undefined' and medium isnt false)
						imagePath = medium
					else if (screenWidth < sbp.medium) and (typeof small isnt 'undefined' and small isnt false)
						imagePath = small
					else
						if typeof small isnt 'undefined' and small isnt false
							imagePath = small
						else if typeof medium isnt 'undefined' and medium isnt false
							imagePath = medium
						else if typeof large isnt 'undefined' and large isnt false
							imagePath = large

					
					if imagePath isnt 'undefined' and imagePath isnt false
						image = $('<img class="reponsive-image" src="' + imagePath + '" alt="" />')
						figure.append image

				true
			true

		debug = () ->
			if r.debugMode is true
				wrapper = $('<section id=r-sizes-debug></section>')
				screen = $('<p class=screen></p>')
				screenWidth = $('<strong>Screen width:</strong> <span class=screen-width>' + r.screen.width + '</span><br />')
				screenHeight = $('<strong>Screen height:</strong> <span class=screen-height>' + r.screen.height + '</span>')

				w = $('<p class=window></p>')
				windowWidth = $('<strong>Window width:</strong> <span class=window-width>' + r.window.width + '</span><br />')
				windowHeight = $('<strong>Window height:</strong> <span class=window-height>' + r.window.height + '</span><br />')
				devicePixelRatio = $('<strong>Device pixel ratio:</strong> <span class=device-pixel-ratio>' + r.window.devicePixelRatio + '</span><br />')

				screen.append screenWidth
				screen.append screenHeight

				w.append windowWidth
				w.append windowHeight
				w.append devicePixelRatio

				wrapper.append screen
				wrapper.append w

				$('body').append wrapper

				wrapper.addClass 'box'

				# check if PubSub is already defined and load instance if is defined
				if PubSub is undefined and require.defined('pubsub') is true
					PubSub = require('pubsub')

				# register publish for resize
				if typeof $.publish is 'function'
					$.subscribe( 'resize', debugResize )

				if typeof PubSub is 'object'
					PubSub.subscribe( 'resize', debugResize )
				else if typeof window.PubSub is 'object'
					window.PubSub.subscribe( 'resize', debugResize )
			true

		debugResize = () ->
			debugInfos = $('#r-sizes-debug')

			debugInfos.find('.screen-width').text r.screen.width
			debugInfos.find('.screen-height').text r.screen.height

			debugInfos.find('.window-width').text r.window.width
			debugInfos.find('.window-height').text r.window.height
			debugInfos.find('.device-pixel-ratio').text r.window.devicePixelRatio

			true

		###*
 * Add given callback function to internal callback object
 *
 * @param function callback function
 *
 * @return boolean true
 *
		###
		this.resize = ( callback ) ->
			r.callback.arr.push( callback )
			return true

		window.setTimeout( ->
			onresize()
			true
		,500)

		init()

		return this

	exports = new Responsive()

	return exports
)