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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var _Compotents_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Compotents/Profile */ \"./Compotents/Profile.js\");\n/* harmony import */ var _Compotents_SkeletonProfile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Compotents/SkeletonProfile */ \"./Compotents/SkeletonProfile.js\");\n/* harmony import */ var _Compotents_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Compotents/Technologies */ \"./Compotents/Technologies.js\");\n/* harmony import */ var _Compotents_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Compotents/Projects */ \"./Compotents/Projects.js\");\n/* harmony import */ var _Compotents_SkeletonProjects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Compotents/SkeletonProjects */ \"./Compotents/SkeletonProjects.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(r) {\n        return r.json();\n    });\n};\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), profile = ref[0], setProfile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), projects = ref1[0], setProjects = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://api.lanyard.rest/v1/users/432570314120101889', fetcher), data = ref2.data, error = ref2.error;\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://api.github.com/users/dreammstudio/repos', fetcher), repos = ref3.data, errorProjects = ref3.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            setProfile(data.data);\n        }\n        if (repos) {\n            setProjects(repos);\n        }\n    }, [\n        data,\n        repos\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto pr-8 pl-8 md:pr-24 md:pl-24 pt-8 pb-8 mt-8\",\n            \"data-aos\": \"fade\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                profile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Profile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    profile: profile,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 18\n                    },\n                    __self: this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_SkeletonProfile__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 50\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Technologies__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 7\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 28,\n                        columnNumber: 7\n                    },\n                    __self: this\n                }),\n                projects ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    id: \"projects\",\n                    projects: projects,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 19\n                    },\n                    __self: this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_SkeletonProjects__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 67\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n_s(HomePage, \"j35xJuHxaglPXBQm3JqKXI1cTI8=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2U7QUFDaEI7QUFFbUI7QUFDZ0I7QUFDTjtBQUNSO0FBQ2dCOztBQUw3RCxHQUFLLENBQUNTLE9BQU8sR0FBRyxRQUFRLENBQVBDLEdBQUc7SUFBS0MsTUFBTUQsQ0FBTkMsS0FBSyxDQUFDRCxHQUFHLEVBQUVFLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxDQUFDO1FBQUlBLE1BQU0sQ0FBTkEsQ0FBQyxDQUFDQyxJQUFJOzs7U0FNM0NDLFFBQVEsR0FBRyxDQUFDOztJQUNqQixHQUFLLENBQXdCZCxHQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ2UsU0FBUyxHQUF4Q0MsT0FBTyxHQUFlaEIsR0FBbUIsS0FBakNpQixVQUFVLEdBQUlqQixHQUFtQjtJQUNoRCxHQUFLLENBQTBCQSxJQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ2UsU0FBUyxHQUExQ0csUUFBUSxHQUFnQmxCLElBQW1CLEtBQWxDbUIsV0FBVyxHQUFJbkIsSUFBbUI7SUFDbEQsR0FBSyxDQUFnQkUsSUFBc0UsR0FBdEVBLCtDQUFNLENBQUMsQ0FBc0QsdURBQUNNLE9BQU8sR0FBbkZZLElBQUksR0FBVWxCLElBQXNFLENBQXBGa0IsSUFBSSxFQUFDQyxLQUFLLEdBQUluQixJQUFzRSxDQUEvRW1CLEtBQUs7SUFDakIsR0FBSyxDQUFvQ25CLElBQWlFLEdBQWpFQSwrQ0FBTSxDQUFDLENBQWlELGtEQUFDTSxPQUFPLEdBQTdGYyxLQUFLLEdBQXdCcEIsSUFBaUUsQ0FBbkdrQixJQUFJLEVBQWFHLGFBQWEsR0FBSXJCLElBQWlFLENBQXhGbUIsS0FBSztJQUN2QnBCLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2IsRUFBRSxFQUFDbUIsSUFBSSxFQUFFLENBQUM7WUFDTkgsVUFBVSxDQUFDRyxJQUFJLENBQUNBLElBQUk7UUFDeEIsQ0FBQztRQUNELEVBQUUsRUFBQ0UsS0FBSyxFQUFFLENBQUM7WUFDVEgsV0FBVyxDQUFDRyxLQUFLO1FBQ25CLENBQUM7SUFDTCxDQUFDLEVBQUMsQ0FBQ0Y7UUFBQUEsSUFBSTtRQUFDRSxLQUFLO0lBQUEsQ0FBQztJQUNoQixNQUFNLHNFQUNIRSxDQUFHOzs7Ozs7O3dGQUNEQSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUErRDtZQUFDQyxDQUFRLFdBQUMsQ0FBTTs7Ozs7Ozs7Z0JBQzdGVixPQUFPLHdFQUFJYiwyREFBTztvQkFBQ2EsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OzBGQUFRWixtRUFBZTs7Ozs7Ozs7cUZBQzFEQyxnRUFBWTs7Ozs7Ozs7cUZBQ1pzQixDQUFFOzs7Ozs7OztnQkFDRlQsUUFBUSx3RUFBSVosNERBQVE7b0JBQUNzQixFQUFFLEVBQUMsQ0FBVTtvQkFBQ1YsUUFBUSxFQUFFQSxRQUFROzs7Ozs7OzBGQUFPWCxvRUFBZ0I7Ozs7Ozs7Ozs7O0FBSW5GLENBQUM7R0F2QlFPLFFBQVE7O1FBR1FaLDJDQUFNO1FBQ2NBLDJDQUFNOzs7S0FKMUNZLFFBQVE7QUF5QmpCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9Db21wb3RlbnRzL1Byb2ZpbGUnXG5pbXBvcnQgU2tlbGV0b25Qcm9maWxlIGZyb20gJy4uL0NvbXBvdGVudHMvU2tlbGV0b25Qcm9maWxlJ1xuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tICcuLi9Db21wb3RlbnRzL1RlY2hub2xvZ2llcydcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9Db21wb3RlbnRzL1Byb2plY3RzJ1xuaW1wb3J0IFNrZWxldG9uUHJvamVjdHMgZnJvbSAnLi4vQ29tcG90ZW50cy9Ta2VsZXRvblByb2plY3RzJ1xuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gICAgY29uc3QgW3Byb2ZpbGUsc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gICAgY29uc3QgW3Byb2plY3RzLHNldFByb2plY3RzXSA9IHVzZVN0YXRlKHVuZGVmaW5lZClcbiAgICBjb25zdCB7ZGF0YSxlcnJvcn0gPSB1c2VTV1IoJ2h0dHBzOi8vYXBpLmxhbnlhcmQucmVzdC92MS91c2Vycy80MzI1NzAzMTQxMjAxMDE4ODknLGZldGNoZXIpXG4gICAgY29uc3Qge2RhdGE6cmVwb3MsZXJyb3I6ZXJyb3JQcm9qZWN0c30gPSB1c2VTV1IoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvZHJlYW1tc3R1ZGlvL3JlcG9zJyxmZXRjaGVyKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmKGRhdGEpIHtcbiAgICAgICAgICAgIHNldFByb2ZpbGUoZGF0YS5kYXRhKVxuICAgICAgICB9XG4gICAgICAgIGlmKHJlcG9zKSB7XG4gICAgICAgICAgc2V0UHJvamVjdHMocmVwb3MpXG4gICAgICAgIH1cbiAgICB9LFtkYXRhLHJlcG9zXSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBteC1hdXRvIHByLTggcGwtOCAgbWQ6cHItMjQgbWQ6cGwtMjQgcHQtOCBwYi04IG10LTgnIGRhdGEtYW9zPVwiZmFkZVwiPlxuICAgICAge3Byb2ZpbGUgPyA8UHJvZmlsZSBwcm9maWxlPXtwcm9maWxlfSAvPiA6IDxTa2VsZXRvblByb2ZpbGUvPn1cbiAgICAgIDxUZWNobm9sb2dpZXMvPlxuICAgICAgPGJyLz5cbiAgICAgIHtwcm9qZWN0cyA/IDxQcm9qZWN0cyBpZD1cInByb2plY3RzXCIgcHJvamVjdHM9e3Byb2plY3RzfS8+IDogPFNrZWxldG9uUHJvamVjdHMvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVNXUiIsIlByb2ZpbGUiLCJTa2VsZXRvblByb2ZpbGUiLCJUZWNobm9sb2dpZXMiLCJQcm9qZWN0cyIsIlNrZWxldG9uUHJvamVjdHMiLCJmZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwiciIsImpzb24iLCJIb21lUGFnZSIsInVuZGVmaW5lZCIsInByb2ZpbGUiLCJzZXRQcm9maWxlIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImRhdGEiLCJlcnJvciIsInJlcG9zIiwiZXJyb3JQcm9qZWN0cyIsImRpdiIsImNsYXNzTmFtZSIsImRhdGEtYW9zIiwiYnIiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});