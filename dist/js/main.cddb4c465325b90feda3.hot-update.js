webpackHotUpdate("main",{

/***/ "./src/js/UIAnimations.js":
/*!********************************!*\
  !*** ./src/js/UIAnimations.js ***!
  \********************************/
/*! exports provided: UIAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UIAnimations\", function() { return UIAnimations; });\nclass UIAnimations {\r\n    constructor() {\r\n        this.boxes = [...document.querySelectorAll('.boxesContainer__box')];\r\n        this.colors = ['#c70039', '#ff5733', '#ffc300'];\r\n    }\r\n    changeColor(box, colorIndex) {\r\n        box.style.backgroundColor = this.colors[colorIndex];\r\n    }\r\n    animate() {\r\n        console.log(this)\r\n        this.boxes.forEach((box, index)=> {\r\n            setInterval(() => {\r\n                this.changeColor(box, index++);\r\n                if (index >= this.colors.length) index = 0;\r\n            }, 2000);\r\n        });\r\n        \r\n\r\n\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/UIAnimations.js?");

/***/ })

})