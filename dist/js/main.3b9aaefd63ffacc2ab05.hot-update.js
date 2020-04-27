webpackHotUpdate("main",{

/***/ "./src/js/UIAnimations.js":
/*!********************************!*\
  !*** ./src/js/UIAnimations.js ***!
  \********************************/
/*! exports provided: UIAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UIAnimations\", function() { return UIAnimations; });\nclass UIAnimations {\r\n    constructor() {\r\n        this.boxes = [...document.querySelectorAll('.boxesContainer__box')];\r\n        this.colors = ['red', 'orange', 'yellow'];\r\n    }\r\n    changeColor(box, colorIndex) {\r\n        box.style.backgroundColor = this.colors[colorIndex];\r\n    }\r\n    animate() {\r\n        const box = this.boxes[0];\r\n        let index = 0;\r\n            setInterval(() => {\r\n                this.changeColor(box, ++index);\r\n            }, 1000);\r\n       \r\n\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/UIAnimations.js?");

/***/ })

})