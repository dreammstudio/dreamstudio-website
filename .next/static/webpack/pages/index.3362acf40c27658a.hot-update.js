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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Compotents_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Compotents/Profile */ \"./Compotents/Profile.js\");\n/* harmony import */ var _Compotents_SkeletonProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Compotents/SkeletonProfile */ \"./Compotents/SkeletonProfile.js\");\n/* harmony import */ var _Compotents_Technologies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Compotents/Technologies */ \"./Compotents/Technologies.js\");\n/* harmony import */ var _Compotents_Projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Compotents/Projects */ \"./Compotents/Projects.js\");\n/* harmony import */ var _Compotents_SkeletonProjects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Compotents/SkeletonProjects */ \"./Compotents/SkeletonProjects.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar fetcher = function(url) {\n    return fetch(url).then(function(r) {\n        return r.json();\n    });\n};\nfunction HomePage() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), profile = ref[0], setProfile = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined), projects = ref1[0], setProjects = ref1[1];\n    var ref2 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://api.lanyard.rest/v1/users/432570314120101889', fetcher), data = ref2.data, error = ref2.error;\n    var ref3 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('https://api.github.com/users/dreammstudio/repos', fetcher), repos = ref3.data, errorProjects = ref3.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (data) {\n            setProfile(data.data);\n        }\n        if (repos) {\n            setProjects(repos);\n        }\n    }, [\n        data,\n        repos\n    ]);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init({\n            duration: 1000\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"container mx-auto pr-8 pl-8 md:pr-24 md:pl-24 pt-8 pb-8 mt-8\",\n            \"data-aos\": \"fade\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                profile ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Profile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    profile: profile,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 18\n                    },\n                    __self: this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_SkeletonProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 50\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Technologies__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 7\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    },\n                    __self: this\n                }),\n                projects ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_Projects__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    id: \"projects\",\n                    projects: projects,\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 19\n                    },\n                    __self: this\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Compotents_SkeletonProjects__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\pages\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 67\n                    },\n                    __self: this\n                })\n            ]\n        })\n    }));\n}\n_s(HomePage, \"KAlsawEZoY4MYH5siSqITfFMcgU=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNlO0FBQ2hCO0FBRUg7QUFDSTtBQUNrQjtBQUNnQjtBQUNOO0FBQ1I7QUFDZ0I7O0FBUDdELEdBQUssQ0FBQ1UsT0FBTyxHQUFHLFFBQVEsQ0FBUEMsR0FBRztJQUFLQyxNQUFNRCxDQUFOQyxLQUFLLENBQUNELEdBQUcsRUFBRUUsSUFBSSxDQUFDQyxRQUFRLENBQVJBLENBQUM7UUFBSUEsTUFBTSxDQUFOQSxDQUFDLENBQUNDLElBQUk7OztTQVEzQ0MsUUFBUSxHQUFHLENBQUM7O0lBQ2pCLEdBQUssQ0FBd0JmLEdBQW1CLEdBQW5CQSwrQ0FBUSxDQUFDZ0IsU0FBUyxHQUF4Q0MsT0FBTyxHQUFlakIsR0FBbUIsS0FBakNrQixVQUFVLEdBQUlsQixHQUFtQjtJQUNoRCxHQUFLLENBQTBCQSxJQUFtQixHQUFuQkEsK0NBQVEsQ0FBQ2dCLFNBQVMsR0FBMUNHLFFBQVEsR0FBZ0JuQixJQUFtQixLQUFsQ29CLFdBQVcsR0FBSXBCLElBQW1CO0lBQ2xELEdBQUssQ0FBZ0JFLElBQXNFLEdBQXRFQSwrQ0FBTSxDQUFDLENBQXNELHVEQUFDTyxPQUFPLEdBQW5GWSxJQUFJLEdBQVVuQixJQUFzRSxDQUFwRm1CLElBQUksRUFBQ0MsS0FBSyxHQUFJcEIsSUFBc0UsQ0FBL0VvQixLQUFLO0lBQ2pCLEdBQUssQ0FBb0NwQixJQUFpRSxHQUFqRUEsK0NBQU0sQ0FBQyxDQUFpRCxrREFBQ08sT0FBTyxHQUE3RmMsS0FBSyxHQUF3QnJCLElBQWlFLENBQW5HbUIsSUFBSSxFQUFhRyxhQUFhLEdBQUl0QixJQUFpRSxDQUF4Rm9CLEtBQUs7SUFDdkJyQixnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEVBQUUsRUFBQ29CLElBQUksRUFBRSxDQUFDO1lBQ05ILFVBQVUsQ0FBQ0csSUFBSSxDQUFDQSxJQUFJO1FBQ3hCLENBQUM7UUFDRCxFQUFFLEVBQUNFLEtBQUssRUFBRSxDQUFDO1lBQ1RILFdBQVcsQ0FBQ0csS0FBSztRQUNuQixDQUFDO0lBQ0wsQ0FBQyxFQUFDLENBQUNGO1FBQUFBLElBQUk7UUFBQ0UsS0FBSztJQUFBLENBQUM7SUFDZHhCLHNEQUFlLENBQUMsUUFDcEIsR0FEMEIsQ0FBQztRQUNyQkksK0NBQVEsQ0FBQyxDQUFDdUI7WUFBQUEsUUFBUSxFQUFDLElBQUk7UUFBQSxDQUFDO0lBQzFCLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDTixNQUFNLHNFQUNIQyxDQUFHOzs7Ozs7O3dGQUNEQSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUErRDtZQUFDQyxDQUFRLFdBQUMsQ0FBTTs7Ozs7Ozs7Z0JBQzdGWixPQUFPLHdFQUFJYiwyREFBTztvQkFBQ2EsT0FBTyxFQUFFQSxPQUFPOzs7Ozs7OzBGQUFRWixtRUFBZTs7Ozs7Ozs7cUZBQzFEQyxnRUFBWTs7Ozs7Ozs7cUZBQ1p3QixDQUFFOzs7Ozs7OztnQkFDRlgsUUFBUSx3RUFBSVosNERBQVE7b0JBQUN3QixFQUFFLEVBQUMsQ0FBVTtvQkFBQ1osUUFBUSxFQUFFQSxRQUFROzs7Ozs7OzBGQUFPWCxvRUFBZ0I7Ozs7Ozs7Ozs7O0FBSW5GLENBQUM7R0ExQlFPLFFBQVE7O1FBR1FiLDJDQUFNO1FBQ2NBLDJDQUFNOzs7S0FKMUNhLFFBQVE7QUE0QmpCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gZmV0Y2godXJsKS50aGVuKHIgPT4gci5qc29uKCkpXG5pbXBvcnQgQW9zIGZyb20gJ2FvcydcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIlxuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi4vQ29tcG90ZW50cy9Qcm9maWxlJ1xuaW1wb3J0IFNrZWxldG9uUHJvZmlsZSBmcm9tICcuLi9Db21wb3RlbnRzL1NrZWxldG9uUHJvZmlsZSdcbmltcG9ydCBUZWNobm9sb2dpZXMgZnJvbSAnLi4vQ29tcG90ZW50cy9UZWNobm9sb2dpZXMnXG5pbXBvcnQgUHJvamVjdHMgZnJvbSAnLi4vQ29tcG90ZW50cy9Qcm9qZWN0cydcbmltcG9ydCBTa2VsZXRvblByb2plY3RzIGZyb20gJy4uL0NvbXBvdGVudHMvU2tlbGV0b25Qcm9qZWN0cydcbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgIGNvbnN0IFtwcm9maWxlLHNldFByb2ZpbGVdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuICAgIGNvbnN0IFtwcm9qZWN0cyxzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG4gICAgY29uc3Qge2RhdGEsZXJyb3J9ID0gdXNlU1dSKCdodHRwczovL2FwaS5sYW55YXJkLnJlc3QvdjEvdXNlcnMvNDMyNTcwMzE0MTIwMTAxODg5JyxmZXRjaGVyKVxuICAgIGNvbnN0IHtkYXRhOnJlcG9zLGVycm9yOmVycm9yUHJvamVjdHN9ID0gdXNlU1dSKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL2RyZWFtbXN0dWRpby9yZXBvcycsZmV0Y2hlcilcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICBzZXRQcm9maWxlKGRhdGEuZGF0YSlcbiAgICAgICAgfVxuICAgICAgICBpZihyZXBvcykge1xuICAgICAgICAgIHNldFByb2plY3RzKHJlcG9zKVxuICAgICAgICB9XG4gICAgfSxbZGF0YSxyZXBvc10pXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIEFvcy5pbml0KHtkdXJhdGlvbjoxMDAwfSlcbiAgICB9LFtdKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIG14LWF1dG8gcHItOCBwbC04ICBtZDpwci0yNCBtZDpwbC0yNCBwdC04IHBiLTggbXQtOCcgZGF0YS1hb3M9XCJmYWRlXCI+XG4gICAgICB7cHJvZmlsZSA/IDxQcm9maWxlIHByb2ZpbGU9e3Byb2ZpbGV9IC8+IDogPFNrZWxldG9uUHJvZmlsZS8+fVxuICAgICAgPFRlY2hub2xvZ2llcy8+XG4gICAgICA8YnIvPlxuICAgICAge3Byb2plY3RzID8gPFByb2plY3RzIGlkPVwicHJvamVjdHNcIiBwcm9qZWN0cz17cHJvamVjdHN9Lz4gOiA8U2tlbGV0b25Qcm9qZWN0cy8+fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2VcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlU1dSIiwiQW9zIiwiUHJvZmlsZSIsIlNrZWxldG9uUHJvZmlsZSIsIlRlY2hub2xvZ2llcyIsIlByb2plY3RzIiwiU2tlbGV0b25Qcm9qZWN0cyIsImZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyIiwianNvbiIsIkhvbWVQYWdlIiwidW5kZWZpbmVkIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiZGF0YSIsImVycm9yIiwicmVwb3MiLCJlcnJvclByb2plY3RzIiwiaW5pdCIsImR1cmF0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGF0YS1hb3MiLCJiciIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});