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

/***/ "./Compotents/Projects.js":
/*!********************************!*\
  !*** ./Compotents/Projects.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(r) {\n        return r.json();\n    });\n};\nfunction Projects(param) {\n    var projects = param.projects;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        id: \"projects\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                className: \"text-4xl font-bold text-center mb-8\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"Projects:\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: \"grid grid-cols sm:grid-cols-2 gap-8\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: projects.map(function(project) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                        className: \"bg-primary hover:scale-105 transition-all p-4 relative\",\n                        onClick: function() {\n                            return router.push(project.html_url);\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                                onClick: function() {\n                                    return router.push(project.html_url);\n                                },\n                                className: \"absolute right-4 transition-all flex gap-2 items-center top-4 hover:bg-purple-600 cursor-pointer border border-purple-600 rounded-lg px-2\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                    lineNumber: 13,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: \"/images/star.png\",\n                                        className: \"w-4 h-4\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                            lineNumber: 16,\n                                            columnNumber: 14\n                                        },\n                                        __self: _this\n                                    }),\n                                    \" \",\n                                    project.stargazers_count\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"text-2xl font-bold text-purple-600\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: project.name\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                },\n                                __self: _this\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                className: \"opacity-75\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: project.description || \"Description not found\"\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"flex gap-2 items-center mt-4 float-right cursor-pointer\",\n                                onClick: function() {\n                                    return router.push(project.owner.html_url);\n                                },\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 13\n                                },\n                                __self: _this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: project.owner.avatar_url,\n                                        className: \"rounded-full max-w-8 max-h-8\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                            lineNumber: 24,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                                        className: \"text-lg leading-tight\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Projects.js\",\n                                            lineNumber: 25,\n                                            columnNumber: 17\n                                        },\n                                        __self: _this,\n                                        children: project.owner.login\n                                    })\n                                ]\n                            })\n                        ]\n                    }, project.id);\n                })\n            })\n        ]\n    }));\n}\n_s(Projects, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb3RlbnRzL1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDRDtBQUVlOztBQUR2QyxHQUFLLENBQUNHLE9BQU8sR0FBRyxRQUFRLENBQVBDLEdBQUc7SUFBS0MsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxHQUFHLEVBQUVFLElBQUksQ0FBQyxRQUFRLENBQVBDLENBQUM7UUFBS0EsTUFBTSxDQUFOQSxDQUFDLENBQUNDLElBQUk7OztTQUU3Q0MsUUFBUSxDQUFDLEtBQVUsRUFBRSxDQUFDO1FBQVpDLFFBQVEsR0FBVCxLQUFVLENBQVRBLFFBQVE7OztJQUN2QixHQUFLLENBQUNDLE1BQU0sR0FBR1Qsc0RBQVM7SUFDMUIsTUFBTSx1RUFDSFUsQ0FBRztRQUFDQyxFQUFFLEVBQUMsQ0FBVTs7Ozs7Ozs7aUZBQ2ZDLENBQUU7Z0JBQUNDLFNBQVMsRUFBQyxDQUFxQzs7Ozs7OzswQkFBQyxDQUFTOztpRkFDNURILENBQUc7Z0JBQUNHLFNBQVMsRUFBQyxDQUFxQzs7Ozs7OzswQkFDakRMLFFBQVEsQ0FBQ00sR0FBRyxDQUFDLFFBQVEsQ0FBUEMsT0FBTztrQ0FDcEIsTUFBTSx5REFBTEwsQ0FBRzt3QkFBQ0csU0FBUyxFQUFDLENBQXdEO3dCQUFrQkcsT0FBTyxFQUFFLFFBQVE7NEJBQUZQLE1BQU0sQ0FBTkEsTUFBTSxDQUFDUSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csUUFBUTs7Ozs7Ozs7O2tHQUNqSUMsQ0FBQztnQ0FDRkgsT0FBTyxFQUFFLFFBQVE7b0NBQUZQLE1BQU0sQ0FBTkEsTUFBTSxDQUFDUSxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csUUFBUTs7Z0NBQzNDTCxTQUFTLEVBQUMsQ0FBMkk7Ozs7Ozs7O3lHQUNuSk8sQ0FBRzt3Q0FBQ0MsR0FBRyxFQUFDLENBQWtCO3dDQUFDUixTQUFTLEVBQUMsQ0FBUzs7Ozs7Ozs7b0NBQU8sQ0FBQztvQ0FBQ0UsT0FBTyxDQUFDTyxnQkFBZ0I7OztpR0FFaEZILENBQUM7Z0NBQUNOLFNBQVMsRUFBQyxDQUFvQzs7Ozs7OzswQ0FBRUUsT0FBTyxDQUFDUSxJQUFJOztpR0FDOURDLENBQUU7Ozs7Ozs7O2lHQUNGTCxDQUFDO2dDQUFDTixTQUFTLEVBQUMsQ0FBWTs7Ozs7OzswQ0FDcEJFLE9BQU8sQ0FBQ1UsV0FBVyxJQUFJLENBQXVCOztrR0FFbERmLENBQUc7Z0NBQUNHLFNBQVMsRUFBQyxDQUF5RDtnQ0FBQ0csT0FBTyxFQUFFLFFBQVE7b0NBQUZQLE1BQU0sQ0FBTkEsTUFBTSxDQUFDUSxJQUFJLENBQUNGLE9BQU8sQ0FBQ1csS0FBSyxDQUFDUixRQUFROzs7Ozs7Ozs7eUdBQ3JIRSxDQUFHO3dDQUFDQyxHQUFHLEVBQUVOLE9BQU8sQ0FBQ1csS0FBSyxDQUFDQyxVQUFVO3dDQUFFZCxTQUFTLEVBQUMsQ0FBOEI7Ozs7Ozs7O3lHQUMzRU0sQ0FBQzt3Q0FBQ04sU0FBUyxFQUFDLENBQXVCOzs7Ozs7O2tEQUFFRSxPQUFPLENBQUNXLEtBQUssQ0FBQ0UsS0FBSzs7Ozs7dUJBYmNiLE9BQU8sQ0FBQ0osRUFBRTs7Ozs7QUFvQmpHLENBQUM7R0EzQlFKLFFBQVE7O1FBQ0VQLGtEQUFTOzs7S0FEbkJPLFFBQVE7QUE2QmpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG90ZW50cy9Qcm9qZWN0cy5qcz9mOTdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4oKHIpID0+IHIuanNvbigpKTtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmZ1bmN0aW9uIFByb2plY3RzKHtwcm9qZWN0c30pIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLThcIj5Qcm9qZWN0czo8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzIHNtOmdyaWQtY29scy0yIGdhcC04XCI+XHJcbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1wcmltYXJ5IGhvdmVyOnNjYWxlLTEwNSB0cmFuc2l0aW9uLWFsbCBwLTQgcmVsYXRpdmVcIiBrZXk9e3Byb2plY3QuaWR9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKHByb2plY3QuaHRtbF91cmwpfT5cclxuICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKHByb2plY3QuaHRtbF91cmwpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC00IHRyYW5zaXRpb24tYWxsIGZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIHRvcC00IGhvdmVyOmJnLXB1cnBsZS02MDAgY3Vyc29yLXBvaW50ZXIgYm9yZGVyIGJvcmRlci1wdXJwbGUtNjAwIHJvdW5kZWQtbGcgcHgtMlwiPlxyXG4gICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N0YXIucG5nXCIgY2xhc3NOYW1lPVwidy00IGgtNFwiPjwvaW1nPiB7cHJvamVjdC5zdGFyZ2F6ZXJzX2NvdW50fVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS02MDBcIj57cHJvamVjdC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm9wYWNpdHktNzVcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LmRlc2NyaXB0aW9uIHx8IFwiRGVzY3JpcHRpb24gbm90IGZvdW5kXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlciBtdC00IGZsb2F0LXJpZ2h0IGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2gocHJvamVjdC5vd25lci5odG1sX3VybCl9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2plY3Qub3duZXIuYXZhdGFyX3VybH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIG1heC13LTggbWF4LWgtOFwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBsZWFkaW5nLXRpZ2h0XCI+e3Byb2plY3Qub3duZXIubG9naW59PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTV1IiLCJ1c2VSb3V0ZXIiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJQcm9qZWN0cyIsInByb2plY3RzIiwicm91dGVyIiwiZGl2IiwiaWQiLCJoMSIsImNsYXNzTmFtZSIsIm1hcCIsInByb2plY3QiLCJvbkNsaWNrIiwicHVzaCIsImh0bWxfdXJsIiwicCIsImltZyIsInNyYyIsInN0YXJnYXplcnNfY291bnQiLCJuYW1lIiwiYnIiLCJkZXNjcmlwdGlvbiIsIm93bmVyIiwiYXZhdGFyX3VybCIsImxvZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Compotents/Projects.js\n");

/***/ })

});