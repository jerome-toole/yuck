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

/***/ "./_src/components/reveal/scripts.js":
/*!*******************************************!*\
  !*** ./_src/components/reveal/scripts.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// https://css-tricks.com/using-css-transitions-auto-dimensions/\nclass RevealItem {\n  constructor(revealContainer) {\n    this.revealContainer = revealContainer;\n    this.revealButton = this.revealContainer.querySelector('.js-reveal-item');\n    this.content = this.revealContainer.querySelector('.reveal__content');\n    this.init();\n  }\n\n  init() {\n    if (this.content && this.revealButton) {\n      // ---------------------------------------------------------------------\n      // Handle the triggers that will open and close the menu\n      // ---------------------------------------------------------------------\n      this.revealButton.addEventListener('click', e => {\n        e.preventDefault();\n        this.revealToggle();\n      });\n      this.revealContainer.addEventListener('reveal-open', this);\n      this.revealContainer.addEventListener('reveal-close', this);\n      this.revealContainer.classList.add('is-enabled');\n      this.revealClose();\n    }\n  }\n\n  transitionEnded(event) {\n    if (event.propertyName !== 'height') return;\n    this.content.removeEventListener('transitionend', this);\n    const isCollapsed = this.revealButton.getAttribute('aria-expanded') === 'false';\n\n    if (isCollapsed) {\n      this.content.hidden = true;\n    } else {\n      // remove \"height\" from the element's inline styles, so it can return to its initial value\n      this.content.style.height = null;\n    }\n  }\n\n  revealOpen() {\n    const {\n      content\n    } = this;\n    content.hidden = false; // get the height of the element's inner content, regardless of its actual size\n\n    const contentHeight = content.scrollHeight; // have the element transition to the height of its inner content\n\n    content.style.height = \"\".concat(contentHeight, \"px\");\n    content.addEventListener('transitionend', this); // mark the content as \"currently not collapsed\"\n\n    this.revealButton.setAttribute('aria-expanded', 'true');\n    this.revealContainer.classList.add('is-open');\n  }\n\n  revealClose() {\n    const {\n      content\n    } = this;\n    content.addEventListener('transitionend', this); // temporarily disable all css transitions\n\n    const elementTransition = content.style.transition;\n    content.style.transition = '';\n    content.style.height = \"\".concat(0, \"px\");\n    content.style.transition = elementTransition; // mark the content as 'currently collapsed'\n\n    this.revealButton.setAttribute('aria-expanded', 'false');\n    this.revealContainer.classList.remove('is-open');\n    this.content.hidden = true;\n  }\n\n  revealCloseTransition() {\n    const {\n      content\n    } = this;\n    content.addEventListener('transitionend', this); // get the height of the element's inner content, regardless of its actual size\n\n    const contentHeight = content.scrollHeight; // temporarily disable all css transitions\n\n    const elementTransition = content.style.transition;\n    content.style.transition = ''; // on the next frame (as soon as the previous style change has taken effect),\n    // explicitly set the element's height to its current pixel height, so we\n    // aren't transitioning out of 'auto'\n\n    requestAnimationFrame(() => {\n      content.style.height = \"\".concat(contentHeight, \"px\");\n      content.style.transition = elementTransition; // on the next frame (as soon as the previous style change has taken effect),\n      // have the element transition to height: 0\n\n      requestAnimationFrame(() => {\n        content.style.height = \"\".concat(0, \"px\");\n      });\n    }); // mark the content as \"currently collapsed\"\n\n    this.revealButton.setAttribute('aria-expanded', 'false');\n    this.revealContainer.classList.remove('is-open');\n  }\n\n  revealToggle() {\n    const isCollapsed = this.revealButton.getAttribute('aria-expanded') === 'false';\n\n    if (isCollapsed) {\n      this.revealOpen();\n    } else {\n      this.revealCloseTransition(this.content);\n    }\n  }\n\n  handleEvent(e) {\n    switch (e.type) {\n      case 'transitionend':\n        this.transitionEnded(e);\n        break;\n\n      case 'reveal-open':\n        this.revealOpen(e);\n        break;\n\n      case 'reveal-close':\n        this.revealClose(e);\n        break;\n\n      default: // do nothing\n\n    }\n  }\n\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const elements = document.querySelectorAll('.reveal');\n  elements.forEach(element => {\n    new RevealItem(element);\n  });\n});\n\n//# sourceURL=webpack://granola/./_src/components/reveal/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_src/components/reveal/scripts.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;