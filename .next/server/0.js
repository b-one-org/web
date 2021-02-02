exports.ids = [0];
exports.modules = {

/***/ "./components/ColoredLine.js":
/*!***********************************!*\
  !*** ./components/ColoredLine.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/home/chris/Documents/Projects/BOne/app/components/ColoredLine.js\";\n\nconst ColoredLine = ({\n  color\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n  style: {\n    color: color,\n    backgroundColor: color,\n    height: 4,\n    width: 30,\n    noshade: \"noshade\",\n    align: \"center\"\n  }\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 5\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ColoredLine);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbG9yZWRMaW5lLmpzPzVjMWEiXSwibmFtZXMiOlsiQ29sb3JlZExpbmUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwibm9zaGFkZSIsImFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsa0JBQ2hCO0FBQ0ksT0FBSyxFQUFFO0FBQ0hBLFNBQUssRUFBRUEsS0FESjtBQUVIQyxtQkFBZSxFQUFFRCxLQUZkO0FBR0hFLFVBQU0sRUFBRSxDQUhMO0FBSUhDLFNBQUssRUFBRSxFQUpKO0FBS0hDLFdBQU8sRUFBRSxTQUxOO0FBTUhDLFNBQUssRUFBQztBQU5IO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKOztBQWNlTiwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29sb3JlZExpbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgQ29sb3JlZExpbmUgPSAoeyBjb2xvciB9KSA9PiAoXG4gICAgPGhyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogY29sb3IsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICAgICAgaGVpZ2h0OiA0LFxuICAgICAgICAgICAgd2lkdGg6IDMwLFxuICAgICAgICAgICAgbm9zaGFkZTogXCJub3NoYWRlXCIsXG4gICAgICAgICAgICBhbGlnbjpcImNlbnRlclwiLFxuICAgICAgICAgICAgXG4gICAgICAgIH19XG4gICAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yZWRMaW5lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ColoredLine.js\n");

/***/ }),

/***/ "./components/MiddleBlock.js":
/*!***********************************!*\
  !*** ./components/MiddleBlock.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/MiddleBlock.module.css */ \"./styles/MiddleBlock.module.css\");\n/* harmony import */ var _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ColoredLine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColoredLine */ \"./components/ColoredLine.js\");\n\nvar _jsxFileName = \"/home/chris/Documents/Projects/BOne/app/components/MiddleBlock.js\";\n\n\n\n\nconst MiddleBlock = ({\n  title,\n  content\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"middle-block\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n      type: \"flex\",\n      justify: \"center\",\n      align: \"middle\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"content-wrapper\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n          lg: 24,\n          md: 24,\n          sm: 24,\n          xs: 24,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h6\", {\n            className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"middle-block-title\"],\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_MiddleBlock_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"content\"],\n            children: content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 16,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiddleBlock);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01pZGRsZUJsb2NrLmpzP2I0YzAiXSwibmFtZXMiOlsiTWlkZGxlQmxvY2siLCJ0aXRsZSIsImNvbnRlbnQiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsT0FBRjtBQUFTQztBQUFULENBQUQsS0FBdUI7QUFDekMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHFFQUFNLENBQUMsY0FBRCxDQUF0QjtBQUFBLDJCQUNFLHFFQUFDLHdDQUFEO0FBQUssVUFBSSxFQUFDLE1BQVY7QUFBaUIsYUFBTyxFQUFDLFFBQXpCO0FBQWtDLFdBQUssRUFBQyxRQUF4QztBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEscUVBQU0sQ0FBQyxpQkFBRCxDQUF0QjtBQUFBLCtCQUNFLHFFQUFDLHdDQUFEO0FBQUssWUFBRSxFQUFFLEVBQVQ7QUFBYSxZQUFFLEVBQUUsRUFBakI7QUFBcUIsWUFBRSxFQUFFLEVBQXpCO0FBQTZCLFlBQUUsRUFBRSxFQUFqQztBQUFBLGtDQUNJO0FBQUkscUJBQVMsRUFBRUEscUVBQU0sQ0FBQyxvQkFBRCxDQUFyQjtBQUFBLHNCQUE4Q0Y7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUdJO0FBQUsscUJBQVMsRUFBRUUscUVBQU0sQ0FBQyxTQUFELENBQXRCO0FBQUEsc0JBQW9DRDtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FkRDs7QUFnQmVGLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9NaWRkbGVCbG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdhbnRkJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTWlkZGxlQmxvY2subW9kdWxlLmNzcydcblxuaW1wb3J0IENvbG9yZWRMaW5lIGZyb20gJy4vQ29sb3JlZExpbmUnXG5cbmNvbnN0IE1pZGRsZUJsb2NrID0gKHsgdGl0bGUsIGNvbnRlbnR9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1pZGRsZS1ibG9ja1wiXX0+XG4gICAgICA8Um93IHR5cGU9XCJmbGV4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwibWlkZGxlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250ZW50LXdyYXBwZXJcIl19PlxuICAgICAgICAgIDxDb2wgbGc9ezI0fSBtZD17MjR9IHNtPXsyNH0geHM9ezI0fT5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT17c3R5bGVzW1wibWlkZGxlLWJsb2NrLXRpdGxlXCJdfT57dGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgey8qPENvbG9yZWRMaW5lIGNsYXNzTmFtZT1cImxpbmVcIiBjb2xvcj1cIiMwMmFmNjRcIi8+Ki99XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJjb250ZW50XCJdfT57Y29udGVudH08L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1pZGRsZUJsb2NrOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/MiddleBlock.js\n");

/***/ }),

/***/ "./styles/MiddleBlock.module.css":
/*!***************************************!*\
  !*** ./styles/MiddleBlock.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"middle-block\": \"MiddleBlock_middle-block__3EEnA\",\n\t\"middle-block-title\": \"MiddleBlock_middle-block-title__SypFz\",\n\t\"line\": \"MiddleBlock_line__qX0Y4\",\n\t\"content\": \"MiddleBlock_content__22mY_\",\n\t\"content-wrapper\": \"MiddleBlock_content-wrapper__3Reko\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTWlkZGxlQmxvY2subW9kdWxlLmNzcz8yNGUxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvTWlkZGxlQmxvY2subW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1pZGRsZS1ibG9ja1wiOiBcIk1pZGRsZUJsb2NrX21pZGRsZS1ibG9ja19fM0VFbkFcIixcblx0XCJtaWRkbGUtYmxvY2stdGl0bGVcIjogXCJNaWRkbGVCbG9ja19taWRkbGUtYmxvY2stdGl0bGVfX1N5cEZ6XCIsXG5cdFwibGluZVwiOiBcIk1pZGRsZUJsb2NrX2xpbmVfX3FYMFk0XCIsXG5cdFwiY29udGVudFwiOiBcIk1pZGRsZUJsb2NrX2NvbnRlbnRfXzIybVlfXCIsXG5cdFwiY29udGVudC13cmFwcGVyXCI6IFwiTWlkZGxlQmxvY2tfY29udGVudC13cmFwcGVyX18zUmVrb1wiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/MiddleBlock.module.css\n");

/***/ })

};;