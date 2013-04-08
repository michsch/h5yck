###jshint devel:true
###
###global define, require, module, _
###

###*
 * Some new useful underscore mixins
 * originally by echong: https://gist.github.com/echong/3861963#file-underscore-mixin-deepextend-coffee
###
( ( root, factory ) ->
  "use strict"

  # CommonJS
  if typeof _ is 'function' and typeof exports is 'object'
    module.exports = factory( _ )
  # AMD
  else if typeof define is 'function' and define.amd
    define(['underscore'], ( _ ) ->
      _.mixin factory( _ )
      return _
    )
  # Browser
  else if typeof _ is 'function'
    root._.mixin factory( _ )

)( ( typeof window is 'object' and window ) || this, ( _ ) ->
  "use strict"
  exports = exports || {}

  # Create a deep copy of an object. - Based on https://github.com/documentcloud/underscore/pull/595
  deepClone = (obj) ->
    if !_.isObject obj or _.isFunction obj then return obj
    if _.isDate obj then return new Date do obj.getTime
    if _.isRegExp obj then return new RegExp obj.source, obj.toString().replace(/.*\//, "")

    isArr = _.isArray obj or _.isArguments obj

    func = (memo, value, key) ->
      if isArr then memo.push deepClone value
      else memo[key] = deepClone value
      return memo;
    return _.reduce obj, func, if isArr then [] else {}

  # Is a given value a basic Object? i.e.: {} || new Object()
  isBasicObject = (object) ->
    (object.prototype is {}.prototype or object.prototype is Object.prototype) and _.isObject(object) and not _.isArray(object) and not _.isFunction(object) and not _.isDate(object) and not _.isRegExp(object) and not _.isArguments(object)

  # Returns a list of the names of every object in an object — that is to say, the name of every property of the object that is an object.
  basicObjects = (object) ->
    _.filter _.keys(object), (key) -> isBasicObject object[key]

  # Returns a list of the names of every array in an object — that is to say, the name of every property of the object that is an array.
  arrays = (object) ->
    _.filter(_.keys(object), (key) -> _.isArray object[key])

  # Copy and combine all of the properties in the source objects over to the destination object and return the destination object. This method will recursively copy shared properties which are also objects and combine arrays.
  deepExtendCouple = (destination, source, maxDepth) ->
    maxDepth = 20 if maxDepth is undefined
    if maxDepth <= 0
      console.warn '_.deepExtend(): Maximum depth of recursion hit.'
      return _.extend destination, source

    sharedObjectKeys = _.intersection(basicObjects(destination), basicObjects(source))
    recurse = (key) ->
      source[key] = deepExtendCouple destination[key], source[key], maxDepth-1

    recurse sharedObjectKey for sharedObjectKey in sharedObjectKeys

    sharedArrayKeys = _.intersection(arrays(destination), arrays(source))
    combine = (key) ->
      source[key] = _.union destination[key], source[key]

    combine sharedArrayKey for sharedArrayKey in sharedArrayKeys

    _.extend destination, source

  # Copy and combine all of the properties in the supplied objects from right to left and return the combined object. This method will recursively copy shared properties which are also objects and combine arrays.
  deepExtend = () ->
    # new without coffeescript Splats...:
    # deepExtend = (objects..., maxDepth) ->
    if 2 <= arguments.length
      objects = [].slice.call(arguments, 0, _i = arguments.length - 1)
    else
      _i = 0
      objects = []
    maxDepth = arguments[_i++]
    # end manual Splats

    if !_.isNumber maxDepth
      objects.push maxDepth
      maxDepth = 20

    if objects.length <= 1 then return objects[0]
    if maxDepth <= 0 then return _.extend.apply this, objects

    finalObj = do objects.shift
    while objects.length > 0
      finalObj = deepExtendCouple(finalObj, deepClone(do objects.shift), maxDepth)

    return finalObj

  exports =
    deepClone: deepClone
    isBasicObject: isBasicObject
    basicObjects: basicObjects
    arrays: arrays
    deepExtend: deepExtend

  #_.mixin exports
  return exports
)