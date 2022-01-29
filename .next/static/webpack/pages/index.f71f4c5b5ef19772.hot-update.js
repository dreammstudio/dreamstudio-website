"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Compotents/Technologies.js":
/*!************************************!*\
  !*** ./Compotents/Technologies.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TechnologiesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TechnologiesData */ \"./TechnologiesData.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Technologies() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var tech = _TechnologiesData__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init({\n            duration: 2000\n        });\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Technologies.js\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"text-center text-4xl font-bold mt-8\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Technologies.js\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: \"Technologies I Use:\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"grid grid-cols sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Technologies.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                },\n                __self: this,\n                children: tech.map(function(item, index) {\n                    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        onClick: function() {\n                            return router.push(item.url);\n                        },\n                        \"data-aos\": \"fade-up\",\n                        className: \"flex flex-col items-center justify-center bg-primary rounded-lg p-4 hover:scale-105 cursor-pointer transition-all\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Technologies.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: item.logo,\n                                className: \"max-w-20 max-h-20\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Technologies.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                className: \"text-2xl font-bold mt-4\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Technologies.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 29\n                                },\n                                __self: _this,\n                                children: item.name\n                            })\n                        ]\n                    }, index));\n                })\n            })\n        ]\n    }));\n}\n_s(Technologies, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Technologies;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Technologies);\nvar _c;\n$RefreshReg$(_c, \"Technologies\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb3RlbnRzL1RlY2hub2xvZ2llcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNqQjtBQUNrQjs7U0FDOUJJLFlBQVksR0FBRyxDQUFDOzs7SUFDckIsR0FBSyxDQUFDQyxNQUFNLEdBQUdGLHNEQUFTO0lBQ3hCLEdBQUssQ0FBQ0csSUFBSSxHQUFHTCx5REFBSTtJQUNqQkQsc0RBQWUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNuQkUsK0NBQVEsQ0FBQyxDQUFDTztZQUFBQSxRQUFRLEVBQUMsSUFBSTtRQUFBLENBQUM7SUFDNUIsQ0FBQztJQUNELE1BQU0sdUVBQ0RDLENBQUc7Ozs7Ozs7O2lGQUNDQyxDQUFFO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUM7Ozs7Ozs7MEJBQUMsQ0FBbUI7O2lGQUN0RUYsQ0FBRztnQkFBQ0UsU0FBUyxFQUFDLENBQXlEOzs7Ozs7OzBCQUVwRU4sSUFBSSxDQUFDTyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUNDLEtBQUssRUFBSyxDQUFDO29CQUN0QixNQUFNLHVFQUNETCxDQUFHO3dCQUVITSxPQUFPLEVBQUUsUUFBUTs0QkFBRlgsTUFBTSxDQUFOQSxNQUFNLENBQUNZLElBQUksQ0FBQ0gsSUFBSSxDQUFDSSxHQUFHOzt3QkFDbkNDLENBQVEsV0FBQyxDQUFTO3dCQUNsQlAsU0FBUyxFQUFDLENBQW1IOzs7Ozs7OztpR0FDekhRLENBQUc7Z0NBQUNDLEdBQUcsRUFBRVAsSUFBSSxDQUFDUSxJQUFJO2dDQUFFVixTQUFTLEVBQUMsQ0FBbUI7Ozs7Ozs7O2lHQUNqREQsQ0FBRTtnQ0FBQ0MsU0FBUyxFQUFDLENBQXlCOzs7Ozs7OzBDQUFFRSxJQUFJLENBQUNTLElBQUk7Ozt1QkFMaERSLEtBQUs7Z0JBUW5CLENBQUM7Ozs7QUFNakIsQ0FBQztHQTVCUVgsWUFBWTs7UUFDRkQsa0RBQVM7OztLQURuQkMsWUFBWTtBQThCckIsK0RBQWVBLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG90ZW50cy9UZWNobm9sb2dpZXMuanM/MmRkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXRhIGZyb20gJy4uL1RlY2hub2xvZ2llc0RhdGEnXHJcbmltcG9ydCBBb3MgZnJvbSAnYW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuZnVuY3Rpb24gVGVjaG5vbG9naWVzKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHRlY2ggPSBEYXRhXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIEFvcy5pbml0KHtkdXJhdGlvbjoyMDAwfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtY2VudGVyIHRleHQtNHhsIGZvbnQtYm9sZCBtdC04Jz5UZWNobm9sb2dpZXMgSSBVc2U6PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1jb2xzIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy00IGdhcC00IG10LTQnPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZWNoLm1hcCgoaXRlbSxpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goaXRlbS51cmwpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hb3M9XCJmYWRlLXVwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLXByaW1hcnkgcm91bmRlZC1sZyBwLTQgaG92ZXI6c2NhbGUtMTA1IGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24tYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5sb2dvfSBjbGFzc05hbWU9XCJtYXgtdy0yMCBtYXgtaC0yMFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXQtNFwiPntpdGVtLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkRhdGEiLCJBb3MiLCJ1c2VSb3V0ZXIiLCJUZWNobm9sb2dpZXMiLCJyb3V0ZXIiLCJ0ZWNoIiwidXNlRWZmZWN0IiwiaW5pdCIsImR1cmF0aW9uIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJvbkNsaWNrIiwicHVzaCIsInVybCIsImRhdGEtYW9zIiwiaW1nIiwic3JjIiwibG9nbyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Compotents/Technologies.js\n");

/***/ })

});