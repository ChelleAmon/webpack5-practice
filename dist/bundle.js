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

/***/ "./src/components/heading/heading.js":
/*!*******************************************!*\
  !*** ./src/components/heading/heading.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './heading.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Heading = /*#__PURE__*/function () {\n  function Heading() {\n    _classCallCheck(this, Heading);\n  }\n\n  _createClass(Heading, [{\n    key: \"render\",\n    value: function render() {\n      var h1 = document.createElement('h1');\n      var body = document.querySelector('body');\n      h1.innerHTML = 'Webpack is Awesome!';\n      body.appendChild(h1);\n    }\n  }]);\n\n  return Heading;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);\n\n//# sourceURL=webpack://webpack5-practice/./src/components/heading/heading.js?");

/***/ }),

/***/ "./src/components/hello-world-button/hello-world-button.js":
/*!*****************************************************************!*\
  !*** ./src/components/hello-world-button/hello-world-button.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './hello-world-button.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar HelloWorldButton = /*#__PURE__*/function () {\n  function HelloWorldButton() {\n    _classCallCheck(this, HelloWorldButton);\n\n    _defineProperty(this, \"buttonCssClass\", 'hello-world-button');\n  }\n\n  _createClass(HelloWorldButton, [{\n    key: \"render\",\n    value: function render() {\n      var button = document.createElement('button');\n      button.innerHTML = \"Hello World\";\n      button.classList.add(this.buttonCssClass);\n\n      button.onclick = function () {\n        var p = document.createElement('p');\n        p.innerHTML = 'Hello World';\n        p.classList.add('hello-world-text');\n        body.appendChild(p);\n      };\n\n      var body = document.querySelector('body');\n      body.appendChild(button);\n    }\n  }]);\n\n  return HelloWorldButton;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorldButton);\n\n//# sourceURL=webpack://webpack5-practice/./src/components/hello-world-button/hello-world-button.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/hello-world-button/hello-world-button.js */ \"./src/components/hello-world-button/hello-world-button.js\");\n/* harmony import */ var _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/heading/heading.js */ \"./src/components/heading/heading.js\");\n\n\nvar heading = new _components_heading_heading_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nheading.render();\nvar helloWorldButton = new _components_hello_world_button_hello_world_button_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nhelloWorldButton.render(); // a code snippet that will check NODE_ENV variable if mode option from webpack.config.js is set to 'PRODUCTION' mode\n\nif (false) {} else if (true) {\n  console.log('Development mode');\n} // Production and Development Mode handle errors differently\n//intentional error\n\n\nhelloWorldButton.methodThatDoesNotExist();\n\n//# sourceURL=webpack://webpack5-practice/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;