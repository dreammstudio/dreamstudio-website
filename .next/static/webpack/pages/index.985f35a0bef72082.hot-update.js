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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Compotents_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Compotents/Header */ \"./Compotents/Header.js\");\n/* harmony import */ var _Compotents_NavigationBar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Compotents/NavigationBar.js */ \"./Compotents/NavigationBar.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _Compotents_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Compotents/Profile */ \"./Compotents/Profile.js\");\n/* harmony import */ var _Compotents_SkeletonProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Compotents/SkeletonProfile */ \"./Compotents/SkeletonProfile.js\");\n/* harmony import */ var _Compotents_Technologies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Compotents/Technologies */ \"./Compotents/Technologies.js\");\n/* harmony import */ var _Compotents_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Compotents/Projects */ \"./Compotents/Projects.js\");\n/* harmony import */ var _Compotents_SkeletonProjects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Compotents/SkeletonProjects */ \"./Compotents/SkeletonProjects.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(r) {\n        return r.json();\n    });\n};\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), profile = ref[0], setProfile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), projects = ref1[0], setProjects = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('https://api.lanyard.rest/v1/users/432570314120101889', fetcher), data = ref2.data, error = ref2.error;\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('https://api.github.com/users/dreammstudio/repos', fetcher), repos = ref3.data, errorProjects = ref3.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            setProfile(data.data);\n        }\n        if (repos) {\n            setProjects(repos);\n        }\n    }, [\n        data,\n        repos\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_NavigationBar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \" pr-24 pl-24 pt-4 pb-4 mt-8\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    profile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        profile: profile,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 18\n                        },\n                        __self: this\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_SkeletonProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                            lineNumber: 30,\n                            columnNumber: 49\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Technologies__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                            lineNumber: 31,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        },\n                        __self: this\n                    }),\n                    projects ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Projects__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        projects: projects,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 19\n                        },\n                        __self: this\n                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_SkeletonProjects__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                            lineNumber: 33,\n                            columnNumber: 53\n                        },\n                        __self: this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", {\n                className: \"opacity-60\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                className: \"opacity-80 justify-center flex items-center gap-4 mt-2\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    \"Powered By \",\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                        className: \"bg-white p-2\",\n                        width: 75,\n                        src: \"/vercel.svg\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                            lineNumber: 36,\n                            columnNumber: 88\n                        },\n                        __self: this\n                    })\n                ]\n            })\n        ]\n    }));\n}\n_s(HomePage, \"j35xJuHxaglPXBQm3JqKXI1cTI8=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDZ0I7QUFDaUI7QUFDbEI7QUFDaEI7QUFFbUI7QUFDZ0I7QUFDTjtBQUNSO0FBQ2dCOztBQUw3RCxHQUFLLENBQUNXLE9BQU8sR0FBRyxRQUFRLENBQVBDLEdBQUc7SUFBS0MsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxHQUFHLEVBQUVFLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxDQUFDO1FBQUlBLE1BQU0sQ0FBTkEsQ0FBQyxDQUFDQyxJQUFJOzs7U0FNM0NDLFFBQVEsR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQXdCZCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ2UsU0FBUyxHQUF4Q0MsT0FBTyxHQUFlaEIsR0FBbUIsS0FBakNpQixVQUFVLEdBQUlqQixHQUFtQjtJQUNoRCxHQUFLLENBQTBCQSxJQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ2UsU0FBUyxHQUExQ0csUUFBUSxHQUFnQmxCLElBQW1CLEtBQWxDbUIsV0FBVyxHQUFJbkIsSUFBbUI7SUFDbEQsR0FBSyxDQUFnQkUsSUFBc0UsR0FBdEVBLCtDQUFNLENBQUMsQ0FBc0QsdURBQUNNLE9BQU8sR0FBbkZZLElBQUksR0FBVWxCLElBQXNFLENBQXBGa0IsSUFBSSxFQUFDQyxLQUFLLEdBQUluQixJQUFzRSxDQUEvRW1CLEtBQUs7SUFDakIsR0FBSyxDQUFvQ25CLElBQWlFLEdBQWpFQSwrQ0FBTSxDQUFDLENBQWlELGtEQUFDTSxPQUFPLEdBQTdGYyxLQUFLLEdBQXdCcEIsSUFBaUUsQ0FBbkdrQixJQUFJLEVBQWFHLGFBQWEsR0FBSXJCLElBQWlFLENBQXhGbUIsS0FBSztJQUN2QnBCLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsRUFBRSxFQUFDbUIsSUFBSSxFQUFFLENBQUM7WUFDTkgsVUFBVSxDQUFDRyxJQUFJLENBQUNBLElBQUk7UUFDeEIsQ0FBQztRQUNELEVBQUUsRUFBQ0UsS0FBSyxFQUFFLENBQUM7WUFDVEgsV0FBVyxDQUFDRyxLQUFLO1FBQ25CLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQ0Y7UUFBQUEsSUFBSTtRQUFDRSxLQUFLO0lBQUEsQ0FBQztJQUNoQixNQUFNLHVFQUNIRSxDQUFHOzs7Ozs7OztpRkFDRDFCLDBEQUFNOzs7Ozs7OztpRkFDTkMsb0VBQWE7Ozs7Ozs7O2tGQUNieUIsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQTZCOzs7Ozs7OztvQkFDM0NULE9BQU8sd0VBQUliLDJEQUFPO3dCQUFDYSxPQUFPLEVBQUVBLE9BQU87Ozs7Ozs7OEZBQU9aLG1FQUFlOzs7Ozs7Ozt5RkFDekRDLGdFQUFZOzs7Ozs7Ozt5RkFDWnFCLENBQUU7Ozs7Ozs7O29CQUNGUixRQUFRLHdFQUFJWiw0REFBUTt3QkFBQ1ksUUFBUSxFQUFFQSxRQUFROzs7Ozs7OzhGQUFPWCxvRUFBZ0I7Ozs7Ozs7Ozs7aUZBRTlEb0IsQ0FBRTtnQkFBQ0YsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7O2tGQUN6QkcsQ0FBQztnQkFBQ0gsU0FBUyxFQUFDLENBQXdEOzs7Ozs7OztvQkFBQyxDQUFXO3lGQUFDSSxDQUFHO3dCQUFDSixTQUFTLEVBQUMsQ0FBYzt3QkFBQ0ssS0FBSyxFQUFFLEVBQUU7d0JBQUVDLEdBQUcsRUFBQyxDQUFhOzs7Ozs7Ozs7Ozs7QUFHakosQ0FBQztHQTNCUWpCLFFBQVE7O1FBR1FaLDJDQUFNO1FBQ2NBLDJDQUFNOzs7S0FKMUNZLFFBQVE7QUE2QmpCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb3RlbnRzL0hlYWRlcidcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gJy4uL0NvbXBvdGVudHMvTmF2aWdhdGlvbkJhci5qcydcbmltcG9ydCB7dXNlU3RhdGUsdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbihyID0+IHIuanNvbigpKVxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vQ29tcG90ZW50cy9Qcm9maWxlJ1xuaW1wb3J0IFNrZWxldG9uUHJvZmlsZSBmcm9tICcuLi9Db21wb3RlbnRzL1NrZWxldG9uUHJvZmlsZSdcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnLi4vQ29tcG90ZW50cy9UZWNobm9sb2dpZXMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vQ29tcG90ZW50cy9Qcm9qZWN0cydcbmltcG9ydCBTa2VsZXRvblByb2plY3RzIGZyb20gJy4uL0NvbXBvdGVudHMvU2tlbGV0b25Qcm9qZWN0cydcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IFtwcm9maWxlLHNldFByb2ZpbGVdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICAgIGNvbnN0IFtwcm9qZWN0cyxzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gICAgY29uc3Qge2RhdGEsZXJyb3J9ID0gdXNlU1dSKCdodHRwczovL2FwaS5sYW55YXJkLnJlc3QvdjEvdXNlcnMvNDMyNTcwMzE0MTIwMTAxODg5JyxmZXRjaGVyKVxuICAgIGNvbnN0IHtkYXRhOnJlcG9zLGVycm9yOmVycm9yUHJvamVjdHN9ID0gdXNlU1dSKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2RyZWFtbXN0dWRpby9yZXBvcycsZmV0Y2hlcilcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICBzZXRQcm9maWxlKGRhdGEuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZihyZXBvcykge1xuICAgICAgICAgIHNldFByb2plY3RzKHJlcG9zKVxuICAgICAgICB9XG4gICAgfSxbZGF0YSxyZXBvc10pXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIvPlxuICAgICAgPE5hdmlnYXRpb25CYXIvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBwci0yNCBwbC0yNCBwdC00IHBiLTQgbXQtOCc+XG4gICAgICB7cHJvZmlsZSA/IDxQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9Lz4gOiA8U2tlbGV0b25Qcm9maWxlLz59XG4gICAgICA8VGVjaG5vbG9naWVzLz5cbiAgICAgIDxici8+XG4gICAgICB7cHJvamVjdHMgPyA8UHJvamVjdHMgcHJvamVjdHM9e3Byb2plY3RzfS8+IDogPFNrZWxldG9uUHJvamVjdHMvPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIGNsYXNzTmFtZT0nb3BhY2l0eS02MCcvPlxuICAgICAgPHAgY2xhc3NOYW1lPSdvcGFjaXR5LTgwIGp1c3RpZnktY2VudGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC00IG10LTInPlBvd2VyZWQgQnkgPGltZyBjbGFzc05hbWU9J2JnLXdoaXRlIHAtMicgd2lkdGg9ezc1fSBzcmM9XCIvdmVyY2VsLnN2Z1wiPjwvaW1nPjwvcD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSGVhZGVyIiwiTmF2aWdhdGlvbkJhciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU1dSIiwiUHJvZmlsZSIsIlNrZWxldG9uUHJvZmlsZSIsIlRlY2hub2xvZ2llcyIsIlByb2plY3RzIiwiU2tlbGV0b25Qcm9qZWN0cyIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIkhvbWVQYWdlIiwidW5kZWZpbmVkIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiZGF0YSIsImVycm9yIiwicmVwb3MiLCJlcnJvclByb2plY3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnIiLCJociIsInAiLCJpbWciLCJ3aWR0aCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});