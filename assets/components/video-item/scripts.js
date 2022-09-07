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

/***/ "./_src/components/video-item/scripts.js":
/*!***********************************************!*\
  !*** ./_src/components/video-item/scripts.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nclass VideoItem {\n  constructor(videoItem) {\n    this.videoItem = videoItem;\n    this.play = this.videoItem.querySelector('.js-video-item-play');\n    this.close = this.videoItem.querySelector('.video-item__video-close');\n    this.video = this.videoItem.querySelector('.video-item__video');\n    this.iframe = this.videoItem.querySelector('iframe');\n    this.init();\n  }\n\n  init() {\n    this.play.addEventListener('click', () => {\n      this.playVideo();\n    });\n    this.video.addEventListener('click', _ref => {\n      let {\n        target\n      } = _ref;\n\n      if (target !== this.iframe) {\n        this.closeVideo();\n      }\n    });\n    document.addEventListener('keydown', _ref2 => {\n      let {\n        key\n      } = _ref2;\n\n      if (key !== 'Escape' && this.isVideoPlaying()) {\n        this.closeVideo();\n      }\n    });\n  }\n\n  playVideo() {\n    this.videoItem.classList.add('video-item--play');\n    this.iframe.src = this.iframe.getAttribute('data-src');\n    document.documentElement.classList.add('no-scroll');\n  }\n\n  closeVideo() {\n    this.videoItem.classList.remove('video-item--play');\n    this.iframe.src = '';\n    document.documentElement.classList.remove('no-scroll');\n  }\n\n  isVideoPlaying() {\n    return this.iframe.src !== '';\n  }\n\n}\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const videoItems = document.querySelectorAll('.video-item');\n  videoItems.forEach(element => {\n    new VideoItem(element);\n  });\n});\n\n//# sourceURL=webpack://granola/./_src/components/video-item/scripts.js?");

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
/******/ 	__webpack_modules__["./_src/components/video-item/scripts.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;