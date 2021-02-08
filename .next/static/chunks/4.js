(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./components/Features.js":
/*!********************************!*\
  !*** ./components/Features.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/home/chris/Documents/Projects/BOne/app/components/Features.js\",\n    _this = undefined;\n\nvar Features = function Features(_ref) {\n  var title = _ref.title,\n      data = _ref.data;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"features-block\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"features-col-md-10 features-col-md-offset-1\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        className: \"features-title\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"features-row\",\n      children: data ? data.map(function (d, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"features-col-xs-6 features-col-md-3\",\n          children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"i\", {\n            className: d.icon + ' features-icon'\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 19\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n            className: \"features-subtitle\",\n            children: d.title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 19\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: \"features-text\",\n            children: d.text\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 19\n          }, _this)]\n        }, \"\".concat(d.title, \"-\").concat(i), true, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 17\n        }, _this);\n      }) : 'Loading...'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 7\n  }, _this);\n};\n\n_c = Features;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Features);\n\nvar _c;\n\n$RefreshReg$(_c, \"Features\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlcy5qcz8xZTA5Il0sIm5hbWVzIjpbIkZlYXR1cmVzIiwidGl0bGUiLCJkYXRhIiwibWFwIiwiZCIsImkiLCJpY29uIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBLE1BQWhCQyxLQUFnQixRQUFoQkEsS0FBZ0I7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7QUFDL0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyw2Q0FBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxnQkFBZDtBQUFBLGtCQUFnQ0Q7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSxnQkFDR0MsSUFBSSxHQUNEQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQUdDLENBQUg7QUFBQSw0QkFDUDtBQUE4QixtQkFBUyxFQUFDLHFDQUF4QztBQUFBLHFCQUNHLEdBREgsZUFFRTtBQUFHLHFCQUFTLEVBQUVELENBQUMsQ0FBQ0UsSUFBRixHQUFTO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFJLHFCQUFTLEVBQUMsbUJBQWQ7QUFBQSxzQkFBbUNGLENBQUMsQ0FBQ0g7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUcscUJBQVMsRUFBQyxlQUFiO0FBQUEsc0JBQThCRyxDQUFDLENBQUNHO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQSxxQkFBY0gsQ0FBQyxDQUFDSCxLQUFoQixjQUF5QkksQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBLE9BQVQsQ0FEQyxHQVNEO0FBVk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJILENBcEJEOztLQUFNTCxRO0FBc0JTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRmVhdHVyZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEZlYXR1cmVzID0gKHt0aXRsZSxkYXRhfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZXMtYmxvY2snPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmVhdHVyZXMtY29sLW1kLTEwIGZlYXR1cmVzLWNvbC1tZC1vZmZzZXQtMSc+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZmVhdHVyZXMtdGl0bGUnPnt0aXRsZX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZlYXR1cmVzLXJvdyc+XG4gICAgICAgICAge2RhdGFcbiAgICAgICAgICAgID8gZGF0YS5tYXAoKGQsaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgIGtleT17YCR7ZC50aXRsZX0tJHtpfWB9IGNsYXNzTmFtZT0nZmVhdHVyZXMtY29sLXhzLTYgZmVhdHVyZXMtY29sLW1kLTMnPlxuICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17ZC5pY29uICsgJyBmZWF0dXJlcy1pY29uJ30+PC9pPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZmVhdHVyZXMtc3VidGl0bGUnPntkLnRpdGxlfTwvaDM+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2ZlYXR1cmVzLXRleHQnPntkLnRleHR9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiAnTG9hZGluZy4uLid9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZXM7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Features.js\n");

/***/ })

}]);