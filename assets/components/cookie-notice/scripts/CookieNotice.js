/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony export default */

class CookieNotice {
  constructor(element) {
    this.el = element;
    this.bannerEl = this.el.querySelector('.cookie-notice__banner');
    this.bannerEl.setAttribute('tabindex', -1);
    this.acceptButton = this.el.querySelector('.js-cookie-notice-accept');
    this.rejectButton = this.el.querySelector('.js-cookie-notice-reject');
    this.togglers = document.querySelectorAll('.js-cookie-notice-toggler');
    this.prevActiveElement = null;
    this.cookieLifetime = 365; // Days

    this.cookieName = 'cookies';
    this.validCookieValues = ['accept', 'reject'];
    this.init();
  }

  init() {
    if (this.validCookieValues.indexOf(getCookie(this.cookieName)) === -1) {
      this.setActive(true);
    } else {
      this.prevActiveElement = document.activeElement;
      this.setActive(false);
    }

    this.acceptButton.addEventListener('click', () => {
      this.setCookieChoice('accept');
      this.setActive(false);
    });
    this.rejectButton.addEventListener('click', () => {
      this.setCookieChoice('reject');
      this.setActive(false);
    });
    this.togglers.forEach(element => {
      element.setAttribute('aria-expanded', this.isActive());
      element.setAttribute('aria-controls', this.el.id);
      element.addEventListener('click', this.handleTogglerClick.bind(this));
    });
  }
  /**
   * Set the active state of the notice
   *
   * @param {boolean} active Whether or not we want to set the notice as active
   */


  setActive(active) {
    if (active === true) {
      this.prevActiveElement = document.activeElement;
      this.el.removeAttribute('aria-hidden');
      this.bannerEl.focus();
      this.togglers.forEach(element => {
        element.setAttribute('aria-expanded', true);
      });
    } else {
      this.prevActiveElement.focus();
      this.el.setAttribute('aria-hidden', true);
      this.togglers.forEach(element => {
        element.setAttribute('aria-expanded', false);
      });
    }
  }
  /**
   * Toggle the active state
   *
   */


  toggleActive() {
    this.setActive(!this.isActive());
  }
  /**
   * Check whether the notice is currently active
   *
   */


  isActive() {
    return !this.el.hasAttribute('aria-hidden');
  }
  /**
   * Handle the given choice (accept/reject)
   *
   * @param {boolean} choice Whether the user has accepted/rejected site cookies.
   */


  setCookieChoice(choice) {
    setCookie(this.cookieName, choice, this.cookieLifetime);
  }
  /**
   * Handle a toggler click
   *
   */


  handleTogglerClick() {
    this.toggleActive();
  }

}
/******/ })()
;