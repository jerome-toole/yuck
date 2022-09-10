/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./_src/components/cookie-notice/scripts/CookieNotice.js":
/*!***************************************************************!*\
  !*** ./_src/components/cookie-notice/scripts/CookieNotice.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CookieNotice)\n/* harmony export */ });\n/* harmony import */ var _scripts_helpers_cookies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../scripts/helpers/cookies.js */ \"./_src/scripts/helpers/cookies.js\");\n\nclass CookieNotice {\n  constructor(element) {\n    this.el = element;\n    this.bannerEl = this.el.querySelector('.cookie-notice__banner');\n    this.bannerEl.setAttribute('tabindex', -1);\n    this.acceptButton = this.el.querySelector('.js-cookie-notice-accept');\n    this.rejectButton = this.el.querySelector('.js-cookie-notice-reject');\n    this.togglers = document.querySelectorAll('.js-cookie-notice-toggler');\n    this.prevActiveElement = null;\n    this.cookieLifetime = 365; // Days\n\n    this.cookieName = 'cookies';\n    this.validCookieValues = ['accept', 'reject'];\n    this.init();\n  }\n\n  init() {\n    if (this.validCookieValues.indexOf((0,_scripts_helpers_cookies_js__WEBPACK_IMPORTED_MODULE_0__.getCookie)(this.cookieName)) === -1) {\n      this.setActive(true);\n    } else {\n      this.prevActiveElement = document.activeElement;\n      this.setActive(false);\n    }\n\n    this.acceptButton.addEventListener('click', () => {\n      this.setCookieChoice('accept');\n      this.setActive(false);\n    });\n    this.rejectButton.addEventListener('click', () => {\n      this.setCookieChoice('reject');\n      this.setActive(false);\n    });\n    this.togglers.forEach(element => {\n      element.setAttribute('aria-expanded', this.isActive());\n      element.setAttribute('aria-controls', this.el.id);\n      element.addEventListener('click', this.handleTogglerClick.bind(this));\n    });\n  }\n  /**\n   * Set the active state of the notice\n   *\n   * @param {boolean} active Whether or not we want to set the notice as active\n   */\n\n\n  setActive(active) {\n    if (active === true) {\n      this.prevActiveElement = document.activeElement;\n      this.el.removeAttribute('aria-hidden');\n      this.bannerEl.focus();\n      this.togglers.forEach(element => {\n        element.setAttribute('aria-expanded', true);\n      });\n    } else {\n      this.prevActiveElement.focus();\n      this.el.setAttribute('aria-hidden', true);\n      this.togglers.forEach(element => {\n        element.setAttribute('aria-expanded', false);\n      });\n    }\n  }\n  /**\n   * Toggle the active state\n   *\n   */\n\n\n  toggleActive() {\n    this.setActive(!this.isActive());\n  }\n  /**\n   * Check whether the notice is currently active\n   *\n   */\n\n\n  isActive() {\n    return !this.el.hasAttribute('aria-hidden');\n  }\n  /**\n   * Handle the given choice (accept/reject)\n   *\n   * @param {boolean} choice Whether the user has accepted/rejected site cookies.\n   */\n\n\n  setCookieChoice(choice) {\n    (0,_scripts_helpers_cookies_js__WEBPACK_IMPORTED_MODULE_0__.setCookie)(this.cookieName, choice, this.cookieLifetime);\n  }\n  /**\n   * Handle a toggler click\n   *\n   */\n\n\n  handleTogglerClick() {\n    this.toggleActive();\n  }\n\n}\n\n//# sourceURL=webpack://granola/./_src/components/cookie-notice/scripts/CookieNotice.js?");

/***/ }),

/***/ "./_src/scripts/helpers/cookies.js":
/*!*****************************************!*\
  !*** ./_src/scripts/helpers/cookies.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie),\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie)\n/* harmony export */ });\n// Get a Date a number of days in the future.\nconst futureDate = days => new Date(Date.now() + days * 24 * 60 * 60 * 1000); // Get a future date as a UTC string.\n\n\nconst utcFutureDate = days => futureDate(days).toUTCString(); // Create a key-value string for a cookie attribute.\n\n\nconst cAttr = (key, value) => \"\".concat(key, \"=\").concat(value, \";\"); // Set a cookie with a given lifetime (in days).\n\n\nconst setCookie = (name, value, lifetime) => {\n  document.cookie = cAttr(name, value) + cAttr('expires', utcFutureDate(lifetime)) + cAttr('path', '/') + cAttr('SameSite', 'strict');\n}; // Retrieve a cookie value by name. Empty string if not found.\n\n\nconst getCookie = cname => {\n  const name = \"\".concat(cname, \"=\");\n  const ca = document.cookie.split(';');\n\n  for (let i = 0; i < ca.length; i += 1) {\n    let c = ca[i];\n\n    while (c.charAt(0) === ' ') {\n      c = c.substring(1);\n    }\n\n    if (c.indexOf(name) === 0) {\n      return c.substring(name.length, c.length);\n    }\n  }\n\n  return '';\n};\n\n\n\n//# sourceURL=webpack://granola/./_src/scripts/helpers/cookies.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./_src/components/cookie-notice/scripts/CookieNotice.js");
/******/ 	
/******/ })()
;