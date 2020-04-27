/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Draw.js":
/*!************************!*\
  !*** ./src/js/Draw.js ***!
  \************************/
/*! exports provided: Draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Draw\", function() { return Draw; });\nclass Draw {\r\n\tconstructor(color1, color2, color3, ...rest) {\r\n\t\tthis._colors = [color1, color2, color3, ...rest];\r\n\t}\r\n\r\n\tdrawColors() {\r\n\t\tconst colorsNumber = this._colors.length;\r\n\t\tconst randomColors = [];\r\n\r\n\t\tfor (let i = 0; i < colorsNumber; i++) {\r\n\t\t\tconst index = Math.floor(Math.random() * colorsNumber);\r\n\t\t\trandomColors.push(this._colors[index]);\r\n\t\t}\r\n\t\treturn randomColors;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/Draw.js?");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _UIAnimations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIAnimations */ \"./src/js/UIAnimations.js\");\n\r\n\r\nclass Game {\r\n\tconstructor() {\r\n\t\tthis._playBtn = document.querySelector('.play__btn');\r\n\t\tthis._moneyInput = document.querySelector('.play__input');\r\n\t\tthis._boxes = [...document.querySelectorAll('.boxesContainer__box')];\r\n\t\tthis._fundsSpan = document.querySelector('.results__funds > span');\r\n\t\tthis._gamesNumberSpan = document.querySelector('.results__draws > span');\r\n\t\tthis._winGamesSpan = document.querySelector('.results__wins > span');\r\n\t\tthis._lostGamesSpan = document.querySelector('.results__lost > span');\r\n\t\tthis._colors = ['#c70039', '#ff5733', '#ffc300'];\r\n\r\n\t\tthis._playBtn.addEventListener('click', () => {\r\n\t\t\tthis.startGame(this._boxes, this._colors);\r\n\t\t});\r\n\t}\r\n\r\n\tstartGame(_boxes, _colors) {\r\n\t\tconst animation = new _UIAnimations__WEBPACK_IMPORTED_MODULE_0__[\"UIAnimations\"](_colors);\r\n\t\tanimation.animate(_boxes);\r\n\t\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/Game.js?");

/***/ }),

/***/ "./src/js/Stats.js":
/*!*************************!*\
  !*** ./src/js/Stats.js ***!
  \*************************/
/*! exports provided: Stats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Stats\", function() { return Stats; });\nclass Stats {\r\n    constructor() {\r\n        this._gamesOverall = 0;\r\n        this._wins = 0;\r\n        this._lost = 0;\r\n    }\r\n\r\n    changeStats(type) {\r\n        this.type++;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/js/Stats.js?");

/***/ }),

/***/ "./src/js/UIAnimations.js":
/*!********************************!*\
  !*** ./src/js/UIAnimations.js ***!
  \********************************/
/*! exports provided: UIAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UIAnimations\", function() { return UIAnimations; });\nclass UIAnimations {\r\n    constructor(colors) {\r\n        this._colors = colors;\r\n    }\r\n    changeColor(box, index) {\r\n        box.style.order = index;\r\n    }\r\n\r\n    animate(boxes) {\r\n\r\n        boxes.forEach((box, index) => {\r\n            setInterval(() => {\r\n                this.changeColor(box, index++);\r\n                if (index >= this._colors.length) index = 0;\r\n            }, 1000);\r\n        });\r\n\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/UIAnimations.js?");

/***/ }),

/***/ "./src/js/Wallet.js":
/*!**************************!*\
  !*** ./src/js/Wallet.js ***!
  \**************************/
/*! exports provided: Wallet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wallet\", function() { return Wallet; });\nclass Wallet {\r\n\tconstructor(funds) {\r\n\t\tthis._funds = funds;\r\n\t}\r\n\r\n\tgetFundsValue() {\r\n\t\treturn this._funds;\r\n\t}\r\n\r\n\tchangeFunds(type, value) {\r\n\t\tif (type == '-') {\r\n\t\t\tthis._funds -= value;\r\n\t\t} else if (type == '+') {\r\n\t\t\tthis._funds += value;\r\n\t\t} else {\r\n\t\t\tthrow new Error('Incorrect type. Type must be \\'-\\' or \\'+\\' ');\r\n\t\t}\r\n\t}\r\n\r\n\tcanPlay() {\r\n\t\tif (this._funds <= 0) {\r\n\t\t\treturn false;\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/Wallet.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Wallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wallet */ \"./src/js/Wallet.js\");\n/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draw */ \"./src/js/Draw.js\");\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n/* harmony import */ var _UIAnimations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIAnimations */ \"./src/js/UIAnimations.js\");\n/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Stats */ \"./src/js/Stats.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// const wallet = new Wallet(100);\r\n// wallet.changeFunds('-', 10);\r\n// console.log(wallet.canPlay());\r\n\r\n// const draw = new Draw('red', 'orange', 'yellow');\r\n// console.log(draw.drawColors());\r\n\r\nconst game = new _Game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"]();\r\n// game.startGame();\r\n// const animation = new UIAnimations();\r\n// animation.animate();\r\n\r\n// const stats = new Stats();\r\n// stats.changeStats();\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });