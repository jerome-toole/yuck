/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ \"./node_modules/lodash/_trimmedEndIndex.js\");\n\n/** Used to match leading whitespace. */\nvar reTrimStart = /^\\s+/;\n\n/**\n * The base implementation of `_.trim`.\n *\n * @private\n * @param {string} string The string to trim.\n * @returns {string} Returns the trimmed string.\n */\nfunction baseTrim(string) {\n  return string\n    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')\n    : string;\n}\n\nmodule.exports = baseTrim;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_baseTrim.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/** Used to match a single whitespace character. */\nvar reWhitespace = /\\s/;\n\n/**\n * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace\n * character of `string`.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {number} Returns the index of the last non-whitespace character.\n */\nfunction trimmedEndIndex(string) {\n  var index = string.length;\n\n  while (index-- && reWhitespace.test(string.charAt(index))) {}\n  return index;\n}\n\nmodule.exports = trimmedEndIndex;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/_trimmedEndIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    now = __webpack_require__(/*! ./now */ \"./node_modules/lodash/now.js\"),\n    toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max,\n    nativeMin = Math.min;\n\n/**\n * Creates a debounced function that delays invoking `func` until after `wait`\n * milliseconds have elapsed since the last time the debounced function was\n * invoked. The debounced function comes with a `cancel` method to cancel\n * delayed `func` invocations and a `flush` method to immediately invoke them.\n * Provide `options` to indicate whether `func` should be invoked on the\n * leading and/or trailing edge of the `wait` timeout. The `func` is invoked\n * with the last arguments provided to the debounced function. Subsequent\n * calls to the debounced function return the result of the last `func`\n * invocation.\n *\n * **Note:** If `leading` and `trailing` options are `true`, `func` is\n * invoked on the trailing edge of the timeout only if the debounced function\n * is invoked more than once during the `wait` timeout.\n *\n * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred\n * until to the next tick, similar to `setTimeout` with a timeout of `0`.\n *\n * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)\n * for details over the differences between `_.debounce` and `_.throttle`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to debounce.\n * @param {number} [wait=0] The number of milliseconds to delay.\n * @param {Object} [options={}] The options object.\n * @param {boolean} [options.leading=false]\n *  Specify invoking on the leading edge of the timeout.\n * @param {number} [options.maxWait]\n *  The maximum time `func` is allowed to be delayed before it's invoked.\n * @param {boolean} [options.trailing=true]\n *  Specify invoking on the trailing edge of the timeout.\n * @returns {Function} Returns the new debounced function.\n * @example\n *\n * // Avoid costly calculations while the window size is in flux.\n * jQuery(window).on('resize', _.debounce(calculateLayout, 150));\n *\n * // Invoke `sendMail` when clicked, debouncing subsequent calls.\n * jQuery(element).on('click', _.debounce(sendMail, 300, {\n *   'leading': true,\n *   'trailing': false\n * }));\n *\n * // Ensure `batchLog` is invoked once after 1 second of debounced calls.\n * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });\n * var source = new EventSource('/stream');\n * jQuery(source).on('message', debounced);\n *\n * // Cancel the trailing debounced invocation.\n * jQuery(window).on('popstate', debounced.cancel);\n */\nfunction debounce(func, wait, options) {\n  var lastArgs,\n      lastThis,\n      maxWait,\n      result,\n      timerId,\n      lastCallTime,\n      lastInvokeTime = 0,\n      leading = false,\n      maxing = false,\n      trailing = true;\n\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  wait = toNumber(wait) || 0;\n  if (isObject(options)) {\n    leading = !!options.leading;\n    maxing = 'maxWait' in options;\n    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;\n    trailing = 'trailing' in options ? !!options.trailing : trailing;\n  }\n\n  function invokeFunc(time) {\n    var args = lastArgs,\n        thisArg = lastThis;\n\n    lastArgs = lastThis = undefined;\n    lastInvokeTime = time;\n    result = func.apply(thisArg, args);\n    return result;\n  }\n\n  function leadingEdge(time) {\n    // Reset any `maxWait` timer.\n    lastInvokeTime = time;\n    // Start the timer for the trailing edge.\n    timerId = setTimeout(timerExpired, wait);\n    // Invoke the leading edge.\n    return leading ? invokeFunc(time) : result;\n  }\n\n  function remainingWait(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime,\n        timeWaiting = wait - timeSinceLastCall;\n\n    return maxing\n      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)\n      : timeWaiting;\n  }\n\n  function shouldInvoke(time) {\n    var timeSinceLastCall = time - lastCallTime,\n        timeSinceLastInvoke = time - lastInvokeTime;\n\n    // Either this is the first call, activity has stopped and we're at the\n    // trailing edge, the system time has gone backwards and we're treating\n    // it as the trailing edge, or we've hit the `maxWait` limit.\n    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||\n      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));\n  }\n\n  function timerExpired() {\n    var time = now();\n    if (shouldInvoke(time)) {\n      return trailingEdge(time);\n    }\n    // Restart the timer.\n    timerId = setTimeout(timerExpired, remainingWait(time));\n  }\n\n  function trailingEdge(time) {\n    timerId = undefined;\n\n    // Only invoke if we have `lastArgs` which means `func` has been\n    // debounced at least once.\n    if (trailing && lastArgs) {\n      return invokeFunc(time);\n    }\n    lastArgs = lastThis = undefined;\n    return result;\n  }\n\n  function cancel() {\n    if (timerId !== undefined) {\n      clearTimeout(timerId);\n    }\n    lastInvokeTime = 0;\n    lastArgs = lastCallTime = lastThis = timerId = undefined;\n  }\n\n  function flush() {\n    return timerId === undefined ? result : trailingEdge(now());\n  }\n\n  function debounced() {\n    var time = now(),\n        isInvoking = shouldInvoke(time);\n\n    lastArgs = arguments;\n    lastThis = this;\n    lastCallTime = time;\n\n    if (isInvoking) {\n      if (timerId === undefined) {\n        return leadingEdge(lastCallTime);\n      }\n      if (maxing) {\n        // Handle invocations in a tight loop.\n        clearTimeout(timerId);\n        timerId = setTimeout(timerExpired, wait);\n        return invokeFunc(lastCallTime);\n      }\n    }\n    if (timerId === undefined) {\n      timerId = setTimeout(timerExpired, wait);\n    }\n    return result;\n  }\n  debounced.cancel = cancel;\n  debounced.flush = flush;\n  return debounced;\n}\n\nmodule.exports = debounce;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/debounce.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/**\n * Gets the timestamp of the number of milliseconds that have elapsed since\n * the Unix epoch (1 January 1970 00:00:00 UTC).\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Date\n * @returns {number} Returns the timestamp.\n * @example\n *\n * _.defer(function(stamp) {\n *   console.log(_.now() - stamp);\n * }, _.now());\n * // => Logs the number of milliseconds it took for the deferred invocation.\n */\nvar now = function() {\n  return root.Date.now();\n};\n\nmodule.exports = now;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/now.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTrim = __webpack_require__(/*! ./_baseTrim */ \"./node_modules/lodash/_baseTrim.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = baseTrim(value);\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://granola/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./_src/components/animate/scripts-main.js":
/*!*************************************************!*\
  !*** ./_src/components/animate/scripts-main.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst animateItems = document.querySelectorAll('.animate');\nconst animateObserver = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.classList.add('animate--play');\n    } else if (entry.boundingClientRect.top > 0) {\n      // Only replay the animation if the user scrolls back up to the top\n      entry.target.classList.remove('animate--play');\n    }\n  });\n}, {\n  rootMargin: '100% 0px -30px 0px'\n});\nanimateItems.forEach(item => {\n  animateObserver.observe(item);\n});\n\n//# sourceURL=webpack://granola/./_src/components/animate/scripts-main.js?");

/***/ }),

/***/ "./_src/components/cookie-notice/scripts-main.js":
/*!*******************************************************!*\
  !*** ./_src/components/cookie-notice/scripts-main.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_CookieNotice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/CookieNotice.js */ \"./_src/components/cookie-notice/scripts/CookieNotice.js\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const element = document.querySelector('.cookie-notice');\n\n  if (element) {\n    new _scripts_CookieNotice_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element);\n  }\n});\n\n//# sourceURL=webpack://granola/./_src/components/cookie-notice/scripts-main.js?");

/***/ }),

/***/ "./_src/components/cookie-notice/scripts/CookieNotice.js":
/*!***************************************************************!*\
  !*** ./_src/components/cookie-notice/scripts/CookieNotice.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CookieNotice)\n/* harmony export */ });\n/* harmony import */ var _scripts_helpers_cookies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../scripts/helpers/cookies.js */ \"./_src/scripts/helpers/cookies.js\");\n\nclass CookieNotice {\n  constructor(element) {\n    this.el = element;\n    this.bannerEl = this.el.querySelector('.cookie-notice__banner');\n    this.bannerEl.setAttribute('tabindex', -1);\n    this.acceptButton = this.el.querySelector('.js-cookie-notice-accept');\n    this.rejectButton = this.el.querySelector('.js-cookie-notice-reject');\n    this.togglers = document.querySelectorAll('.js-cookie-notice-toggler');\n    this.prevActiveElement = null;\n    this.cookieLifetime = 365; // Days\n\n    this.cookieName = 'cookies';\n    this.validCookieValues = ['accept', 'reject'];\n    this.init();\n  }\n\n  init() {\n    if (this.validCookieValues.indexOf((0,_scripts_helpers_cookies_js__WEBPACK_IMPORTED_MODULE_0__.getCookie)(this.cookieName)) === -1) {\n      this.setActive(true);\n    } else {\n      this.prevActiveElement = document.activeElement;\n      this.setActive(false);\n    }\n\n    this.acceptButton.addEventListener('click', () => {\n      this.setCookieChoice('accept');\n      this.setActive(false);\n    });\n    this.rejectButton.addEventListener('click', () => {\n      this.setCookieChoice('reject');\n      this.setActive(false);\n    });\n    this.togglers.forEach(element => {\n      element.setAttribute('aria-expanded', this.isActive());\n      element.setAttribute('aria-controls', this.el.id);\n      element.addEventListener('click', this.handleTogglerClick.bind(this));\n    });\n  }\n  /**\n   * Set the active state of the notice\n   *\n   * @param {boolean} active Whether or not we want to set the notice as active\n   */\n\n\n  setActive(active) {\n    if (active === true) {\n      this.prevActiveElement = document.activeElement;\n      this.el.removeAttribute('aria-hidden');\n      this.bannerEl.focus();\n      this.togglers.forEach(element => {\n        element.setAttribute('aria-expanded', true);\n      });\n    } else {\n      this.prevActiveElement.focus();\n      this.el.setAttribute('aria-hidden', true);\n      this.togglers.forEach(element => {\n        element.setAttribute('aria-expanded', false);\n      });\n    }\n  }\n  /**\n   * Toggle the active state\n   *\n   */\n\n\n  toggleActive() {\n    this.setActive(!this.isActive());\n  }\n  /**\n   * Check whether the notice is currently active\n   *\n   */\n\n\n  isActive() {\n    return !this.el.hasAttribute('aria-hidden');\n  }\n  /**\n   * Handle the given choice (accept/reject)\n   *\n   * @param {boolean} choice Whether the user has accepted/rejected site cookies.\n   */\n\n\n  setCookieChoice(choice) {\n    (0,_scripts_helpers_cookies_js__WEBPACK_IMPORTED_MODULE_0__.setCookie)(this.cookieName, choice, this.cookieLifetime);\n  }\n  /**\n   * Handle a toggler click\n   *\n   */\n\n\n  handleTogglerClick() {\n    this.toggleActive();\n  }\n\n}\n\n//# sourceURL=webpack://granola/./_src/components/cookie-notice/scripts/CookieNotice.js?");

/***/ }),

/***/ "./_src/components/reveal/scripts-main.js":
/*!************************************************!*\
  !*** ./_src/components/reveal/scripts-main.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// https://css-tricks.com/using-css-transitions-auto-dimensions/\nclass RevealItem {\n  constructor(revealContainer) {\n    this.revealContainer = revealContainer;\n    this.revealButton = this.revealContainer.querySelector('.js-reveal-item');\n    this.content = this.revealContainer.querySelector('.reveal__content');\n    this.init();\n  }\n\n  init() {\n    if (this.content && this.revealButton) {\n      // ---------------------------------------------------------------------\n      // Handle the triggers that will open and close the menu\n      // ---------------------------------------------------------------------\n      this.revealButton.addEventListener('click', e => {\n        e.preventDefault();\n        this.revealToggle();\n      });\n      this.revealContainer.addEventListener('reveal-open', this);\n      this.revealContainer.addEventListener('reveal-close', this);\n      this.revealContainer.classList.add('is-enabled');\n      this.revealClose();\n    }\n  }\n\n  transitionEnded(event) {\n    if (event.propertyName !== 'height') return;\n    this.content.removeEventListener('transitionend', this);\n    const isCollapsed = this.revealButton.getAttribute('aria-expanded') === 'false';\n\n    if (isCollapsed) {\n      this.content.hidden = true;\n    } else {\n      // remove \"height\" from the element's inline styles, so it can return to its initial value\n      this.content.style.height = null;\n    }\n  }\n\n  revealOpen() {\n    const {\n      content\n    } = this;\n    content.hidden = false; // get the height of the element's inner content, regardless of its actual size\n\n    const contentHeight = content.scrollHeight; // have the element transition to the height of its inner content\n\n    content.style.height = \"\".concat(contentHeight, \"px\");\n    content.addEventListener('transitionend', this); // mark the content as \"currently not collapsed\"\n\n    this.revealButton.setAttribute('aria-expanded', 'true');\n    this.revealContainer.classList.add('is-open');\n  }\n\n  revealClose() {\n    const {\n      content\n    } = this;\n    content.addEventListener('transitionend', this); // temporarily disable all css transitions\n\n    const elementTransition = content.style.transition;\n    content.style.transition = '';\n    content.style.height = \"\".concat(0, \"px\");\n    content.style.transition = elementTransition; // mark the content as 'currently collapsed'\n\n    this.revealButton.setAttribute('aria-expanded', 'false');\n    this.revealContainer.classList.remove('is-open');\n    this.content.hidden = true;\n  }\n\n  revealCloseTransition() {\n    const {\n      content\n    } = this;\n    content.addEventListener('transitionend', this); // get the height of the element's inner content, regardless of its actual size\n\n    const contentHeight = content.scrollHeight; // temporarily disable all css transitions\n\n    const elementTransition = content.style.transition;\n    content.style.transition = ''; // on the next frame (as soon as the previous style change has taken effect),\n    // explicitly set the element's height to its current pixel height, so we\n    // aren't transitioning out of 'auto'\n\n    requestAnimationFrame(() => {\n      content.style.height = \"\".concat(contentHeight, \"px\");\n      content.style.transition = elementTransition; // on the next frame (as soon as the previous style change has taken effect),\n      // have the element transition to height: 0\n\n      requestAnimationFrame(() => {\n        content.style.height = \"\".concat(0, \"px\");\n      });\n    }); // mark the content as \"currently collapsed\"\n\n    this.revealButton.setAttribute('aria-expanded', 'false');\n    this.revealContainer.classList.remove('is-open');\n  }\n\n  revealToggle() {\n    const isCollapsed = this.revealButton.getAttribute('aria-expanded') === 'false';\n\n    if (isCollapsed) {\n      this.revealOpen();\n    } else {\n      this.revealCloseTransition(this.content);\n    }\n  }\n\n  handleEvent(e) {\n    switch (e.type) {\n      case 'transitionend':\n        this.transitionEnded(e);\n        break;\n\n      case 'reveal-open':\n        this.revealOpen(e);\n        break;\n\n      case 'reveal-close':\n        this.revealClose(e);\n        break;\n\n      default: // do nothing\n\n    }\n  }\n\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const elements = document.querySelectorAll('.reveal');\n  elements.forEach(element => {\n    new RevealItem(element);\n  });\n});\n\n//# sourceURL=webpack://granola/./_src/components/reveal/scripts-main.js?");

/***/ }),

/***/ "./_src/components/site-header/scripts-main.js":
/*!*****************************************************!*\
  !*** ./_src/components/site-header/scripts-main.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_SiteHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/SiteHeader.js */ \"./_src/components/site-header/scripts/SiteHeader.js\");\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const element = document.querySelector('.site-header');\n  new _scripts_SiteHeader_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](element);\n});\n\n//# sourceURL=webpack://granola/./_src/components/site-header/scripts-main.js?");

/***/ }),

/***/ "./_src/components/site-header/scripts/SiteHeader.js":
/*!***********************************************************!*\
  !*** ./_src/components/site-header/scripts/SiteHeader.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SiteHeader)\n/* harmony export */ });\n/* harmony import */ var lodash_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce.js */ \"./node_modules/lodash/debounce.js\");\n/* harmony import */ var _scripts_helpers_isElementVisible_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../scripts/helpers/isElementVisible.js */ \"./_src/scripts/helpers/isElementVisible.js\");\n\n\nconst dropdownSelector = '.menu-item-has-children'; // TODO manage focus leaving submenus and overlay mobile menu and close them appropriately.\n\nclass SiteHeader {\n  constructor(element) {\n    this.el = element;\n    this.headerTop = this.el.querySelector('.site-header__top');\n    this.navigation = this.el.querySelector('.site-header__navigation');\n    this.menu = this.el.querySelector('.site-header__main-menu');\n    this.dropdowns = this.el.querySelectorAll(dropdownSelector);\n    this.toggles = this.el.querySelectorAll('.js-site-header-toggle');\n    this.currentPageAnchors = this.el.querySelectorAll('.current-menu-item > [href*=\"#\"]');\n    this.burger = this.el.querySelector('.site-header__burger');\n    this.lastScroll = 0;\n    this.init();\n    this.setHeight();\n    window.addEventListener('resize', lodash_debounce_js__WEBPACK_IMPORTED_MODULE_0__(() => {\n      this.setHeight();\n    }, 50));\n  }\n\n  init() {\n    if (this.isBurgerModeActive()) {\n      this.closeHeader(true);\n    } // ---------------------------------------------------------------------\n    // Handle the toggles that will open and close the menu\n    // ---------------------------------------------------------------------\n\n\n    if (this.toggles.length > 0) {\n      this.toggles.forEach(toggle => {\n        toggle.addEventListener('click', () => {\n          this.toggleHeader();\n        });\n      });\n    } // ---------------------------------------------------------------------\n    // Handle anchor links in the same page.\n    // ---------------------------------------------------------------------\n\n\n    if (this.currentPageAnchors.length > 0) {\n      this.currentPageAnchors.forEach(link => {\n        link.addEventListener('click', () => {\n          this.closeHeader(true);\n        });\n      });\n    } // ---------------------------------------------------------------------\n    // If there are dropdowns\n    // ---------------------------------------------------------------------\n\n\n    if (this.dropdowns.length > 0) {\n      this.dropdowns.forEach(dropdown => {\n        // ---------------------------------------------------------------------\n        // Get the top level link\n        // ---------------------------------------------------------------------\n        const link = dropdown.querySelector('a'); // ---------------------------------------------------------------------\n        // Initialise the tab indexes\n        // ---------------------------------------------------------------------\n\n        SiteHeader.closeDropdown(dropdown); // ---------------------------------------------------------------------\n        // Handle a click on the link\n        // ---------------------------------------------------------------------\n\n        link.addEventListener('click', event => {\n          event.preventDefault();\n          this.toggleDropdown(dropdown);\n        });\n      }); // ---------------------------------------------------------------------\n      // Add an event listener to clicks so we can close the menu if clicked\n      // outside of\n      // ---------------------------------------------------------------------\n\n      document.addEventListener('click', event => {\n        this.dropdowns.forEach(dropdown => {\n          if (!dropdown.contains(event.target)) {\n            SiteHeader.closeDropdown(dropdown);\n          }\n        });\n      }); // ---------------------------------------------------------------------\n      // Listen for a press of the escape key and check if the we were within\n      // a dropdown\n      // ---------------------------------------------------------------------\n\n      document.addEventListener('keyup', event => {\n        if (event.key === 'Escape') {\n          const {\n            activeElement\n          } = document;\n          const activeDropdown = activeElement.closest(dropdownSelector); // ---------------------------------------------------------------------\n          // Check if we actually tried to hit escape when we were in a dropdown\n          // ---------------------------------------------------------------------\n\n          if (activeDropdown) {\n            const activeLink = activeDropdown.querySelector('a'); // Return focus to the parent link\n\n            activeLink.focus(); // close the dropdown\n\n            SiteHeader.closeDropdown(activeDropdown);\n          }\n        }\n      });\n    }\n  }\n\n  getHeight() {\n    const headerHeight = this.headerTop.offsetHeight; // if (this.announcementBanner) {\n    //     headerHeight += this.announcementBanner.offsetHeight;\n    // }\n\n    return headerHeight;\n  }\n\n  setHeight() {\n    this.headerHeight = this.getHeight();\n    document.documentElement.style.setProperty('--site-header--bottom', \"\".concat(this.headerHeight, \"px\"));\n    this.el.classList.add('site-header--positioned');\n  }\n\n  toggleHeader() {\n    if (this.el.classList.contains('is-open')) {\n      this.closeHeader();\n    } else {\n      this.openHeader();\n    }\n  }\n\n  openHeader() {\n    let first = '';\n\n    if (this.menu) {\n      const listItems = Array.from(this.menu.children);\n      listItems.forEach(li => {\n        const a = li.querySelector('a');\n        SiteHeader.setTabIndex([a], 0);\n\n        if (first === '') {\n          first = a;\n        }\n      });\n    }\n\n    this.el.classList.add('is-open');\n    document.documentElement.classList.add('no-scroll');\n    this.toggles.forEach(toggle => {\n      toggle.setAttribute('aria-expanded', 'true');\n    });\n    SiteHeader.setTabIndex(this.toggles, 0);\n\n    if (this.menu) {\n      first.focus();\n    }\n  }\n\n  closeHeader() {\n    let initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    // close the menu\n    this.el.classList.remove('is-open');\n    document.documentElement.classList.remove('no-scroll');\n\n    if (this.isBurgerModeActive()) {\n      this.toggles.forEach(toggle => {\n        toggle.setAttribute('aria-expanded', 'false');\n      }); // make the items not tabbable\n\n      if (this.navigation) {\n        const elements = SiteHeader.getTabbableItems(this.navigation);\n        SiteHeader.setTabIndex(elements, -1);\n      }\n\n      if (initial !== true) {\n        // Focus the burger\n        this.burger.focus();\n      }\n    }\n  }\n\n  toggleDropdown(dropdown) {\n    if (dropdown.classList.contains('is-active')) {\n      SiteHeader.closeDropdown(dropdown);\n    } else {\n      this.openDropdown(dropdown);\n    }\n  }\n\n  openDropdown(dropdown) {\n    const submenu = dropdown.querySelector('.sub-menu');\n    const elements = SiteHeader.getTabbableItems(submenu); // Close all non-parent dropdowns first\n\n    this.dropdowns.forEach(otherDropdown => {\n      if (!otherDropdown.contains(dropdown)) {\n        SiteHeader.closeDropdown(otherDropdown);\n      }\n    }); // Make the elements of this dropdown active\n\n    SiteHeader.setTabIndex(elements, 0); // Open the dropdown\n\n    dropdown.classList.add('is-active'); // Set focus to the first element in the dropdown\n\n    if (elements.length > 0) {\n      elements[0].focus();\n    }\n  }\n\n  static closeDropdown(dropdown) {\n    const submenu = dropdown.querySelector('.sub-menu');\n    const elements = SiteHeader.getTabbableItems(submenu);\n    SiteHeader.setTabIndex(elements, -1);\n    dropdown.classList.remove('is-active');\n  }\n\n  static setTabIndex(elements, index) {\n    elements.forEach(element => {\n      element.tabIndex = index;\n    });\n  }\n\n  static getTabbableItems(parent) {\n    return parent.querySelectorAll('a, button');\n  }\n\n  isBurgerModeActive() {\n    return (0,_scripts_helpers_isElementVisible_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this.burger);\n  }\n\n}\n\n//# sourceURL=webpack://granola/./_src/components/site-header/scripts/SiteHeader.js?");

/***/ }),

/***/ "./_src/components/video-item/scripts-main.js":
/*!****************************************************!*\
  !*** ./_src/components/video-item/scripts-main.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass VideoItem {\n  constructor(videoItem) {\n    this.videoItem = videoItem;\n    this.play = this.videoItem.querySelector('.js-video-item-play');\n    this.close = this.videoItem.querySelector('.video-item__video-close');\n    this.video = this.videoItem.querySelector('.video-item__video');\n    this.iframe = this.videoItem.querySelector('iframe');\n    this.init();\n  }\n\n  init() {\n    this.play.addEventListener('click', () => {\n      this.playVideo();\n    });\n    this.video.addEventListener('click', _ref => {\n      let {\n        target\n      } = _ref;\n\n      if (target !== this.iframe) {\n        this.closeVideo();\n      }\n    });\n    document.addEventListener('keydown', _ref2 => {\n      let {\n        key\n      } = _ref2;\n\n      if (key !== 'Escape' && this.isVideoPlaying()) {\n        this.closeVideo();\n      }\n    });\n  }\n\n  playVideo() {\n    this.videoItem.classList.add('video-item--play');\n    this.iframe.src = this.iframe.getAttribute('data-src');\n    document.documentElement.classList.add('no-scroll');\n  }\n\n  closeVideo() {\n    this.videoItem.classList.remove('video-item--play');\n    this.iframe.src = '';\n    document.documentElement.classList.remove('no-scroll');\n  }\n\n  isVideoPlaying() {\n    return this.iframe.src !== '';\n  }\n\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const videoItems = document.querySelectorAll('.video-item');\n  videoItems.forEach(element => {\n    new VideoItem(element);\n  });\n});\n\n//# sourceURL=webpack://granola/./_src/components/video-item/scripts-main.js?");

/***/ }),

/***/ "./_src/main.js":
/*!**********************!*\
  !*** ./_src/main.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_animate_scripts_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/animate/scripts-main.js */ \"./_src/components/animate/scripts-main.js\");\n/* harmony import */ var _components_cookie_notice_scripts_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cookie-notice/scripts-main.js */ \"./_src/components/cookie-notice/scripts-main.js\");\n/* harmony import */ var _components_reveal_scripts_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/reveal/scripts-main.js */ \"./_src/components/reveal/scripts-main.js\");\n/* harmony import */ var _components_site_header_scripts_main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/site-header/scripts-main.js */ \"./_src/components/site-header/scripts-main.js\");\n/* harmony import */ var _components_video_item_scripts_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/video-item/scripts-main.js */ \"./_src/components/video-item/scripts-main.js\");\n/* eslint-disable import/no-unresolved */\n\n\n\n\n\n\n//# sourceURL=webpack://granola/./_src/main.js?");

/***/ }),

/***/ "./_src/scripts/helpers/cookies.js":
/*!*****************************************!*\
  !*** ./_src/scripts/helpers/cookies.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\n// Get a Date a number of days in the future.\nconst futureDate = days => new Date(Date.now() + days * 24 * 60 * 60 * 1000); // Get a future date as a UTC string.\n\n\nconst utcFutureDate = days => futureDate(days).toUTCString(); // Create a key-value string for a cookie attribute.\n\n\nconst cAttr = (key, value) => \"\".concat(key, \"=\").concat(value, \";\"); // Set a cookie with a given lifetime (in days).\n\n\nconst setCookie = (name, value, lifetime) => {\n  document.cookie = cAttr(name, value) + cAttr('expires', utcFutureDate(lifetime)) + cAttr('path', '/') + cAttr('SameSite', 'strict');\n}; // Retrieve a cookie value by name. Empty string if not found.\n\n\nconst getCookie = cname => {\n  const name = \"\".concat(cname, \"=\");\n  const ca = document.cookie.split(';');\n\n  for (let i = 0; i < ca.length; i += 1) {\n    let c = ca[i];\n\n    while (c.charAt(0) === ' ') {\n      c = c.substring(1);\n    }\n\n    if (c.indexOf(name) === 0) {\n      return c.substring(name.length, c.length);\n    }\n  }\n\n  return '';\n};\n\n\n\n//# sourceURL=webpack://granola/./_src/scripts/helpers/cookies.js?");

/***/ }),

/***/ "./_src/scripts/helpers/isElementVisible.js":
/*!**************************************************!*\
  !*** ./_src/scripts/helpers/isElementVisible.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isElementVisible)\n/* harmony export */ });\nfunction isElementVisible(element) {\n  const styles = window.getComputedStyle(element);\n  return styles.getPropertyValue('display') !== 'none';\n}\n\n//# sourceURL=webpack://granola/./_src/scripts/helpers/isElementVisible.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./_src/main.js");
/******/ 	
/******/ })()
;