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

/***/ "./Compotents/Profile.js":
/*!*******************************!*\
  !*** ./Compotents/Profile.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Profile(param) {\n    var profile = param.profile;\n    console.log(profile);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        \"data-aos\": \"fade\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n            lineNumber: 6,\n            columnNumber: 9\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex-auto sm:gap-4 sm:flex\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: profile.discord_user.avatar !== null ? \"https://cdn.discordapp.com/avatars/\".concat(profile.discord_user.id, \"/\").concat(profile.discord_user.avatar, \".png?size=2048\") : \"https://cdn.discordapp.com/embed/avatars/1.png\",\n                    className: \"rounded mx-auto sm:mx-0 mb-4 sm:mb-0 w-52 h-52\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                        lineNumber: 8,\n                        columnNumber: 13\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            className: \"text-4xl font-bold leading-tight text-center sm:text-left\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 13,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: profile.discord_user.username + \"#\" + profile.discord_user.discriminator\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"opacity-75 mx-auto sm:mx-0 text-center sm:text-left sm:w-3/4 break-all\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: \"I am a student from Turkey I have been in coding since 2019. I am a newbie full stack developer. I have been working on web development for the last 1 years.\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"w-96 h-28 flex\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            },\n                            __self: this,\n                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                src: \"\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 17\n                                },\n                                __self: this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"iframe\", {\n                            src: \"https://linkcord.swoth.xyz/api/v1/widget/\".concat(profile.discord_user.id, \"?type=spotify&theme=dark\"),\n                            width: \"350\",\n                            height: \"110\",\n                            allowtransparency: \"true\",\n                            frameBorder: \"0\",\n                            className: \"mt-4 mx-auto sm:mx-0\",\n                            sandbox: \"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb3RlbnRzL1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtTQUVoQkMsT0FBTyxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVhDLE9BQU8sR0FBUixLQUFTLENBQVJBLE9BQU87SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPO0lBQ25CLE1BQU0sc0VBQ0RHLENBQUc7UUFBQ0MsQ0FBUSxXQUFDLENBQU07Ozs7Ozs7d0ZBQ2ZELENBQUc7WUFBQ0UsU0FBUyxFQUFDLENBQTRCOzs7Ozs7OztxRkFDMUNDLENBQUc7b0JBQ0pDLEdBQUcsRUFBRVAsT0FBTyxDQUFDUSxZQUFZLENBQUNDLE1BQU0sS0FBSyxJQUFJLEdBQUksQ0FBbUMscUNBQTZCVCxNQUEyQixDQUF0REEsT0FBTyxDQUFDUSxZQUFZLENBQUNFLEVBQUUsRUFBQyxDQUFDLElBQThCLE1BQWMsQ0FBMUNWLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDQyxNQUFNLEVBQUMsQ0FBYyxtQkFBSSxDQUFnRDtvQkFDM01KLFNBQVMsRUFBQyxDQUFnRDs7Ozs7Ozs7c0ZBRXpETSxDQUFJOzs7Ozs7Ozs2RkFDSkMsQ0FBRTs0QkFBQ1AsU0FBUyxFQUFDLENBQTJEOzs7Ozs7O3NDQUFFTCxPQUFPLENBQUNRLFlBQVksQ0FBQ0ssUUFBUSxHQUFHLENBQUcsS0FBR2IsT0FBTyxDQUFDUSxZQUFZLENBQUNNLGFBQWE7OzZGQUNsSkMsQ0FBQzs0QkFBQ1YsU0FBUyxFQUFDLENBQXdFOzs7Ozs7O3NDQUFDLENBQTZKOzs2RkFDbFBGLENBQUc7NEJBQUNFLFNBQVMsRUFBQyxDQUFnQjs7Ozs7OzsyR0FDMUJDLENBQUc7Z0NBQUNDLEdBQUcsRUFBQyxDQUFFOzs7Ozs7Ozs7NkZBRWRTLENBQU07NEJBQ2ZULEdBQUcsRUFBRyxDQUF5QywyQ0FBMEIsTUFBd0IsQ0FBaERQLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDRSxFQUFFLEVBQUMsQ0FBd0I7NEJBQ2pHTyxLQUFLLEVBQUMsQ0FBSzs0QkFDWEMsTUFBTSxFQUFDLENBQUs7NEJBQ1pDLGlCQUFpQixFQUFDLENBQU07NEJBQ3hCQyxXQUFXLEVBQUMsQ0FBRzs0QkFDZmYsU0FBUyxFQUFDLENBQXNCOzRCQUNoQ2dCLE9BQU8sRUFBQyxDQUE2RTs7Ozs7Ozs7Ozs7OztBQU16RixDQUFDO0tBNUJRdEIsT0FBTztBQThCaEIsK0RBQWVBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG90ZW50cy9Qcm9maWxlLmpzP2YwOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gUHJvZmlsZSh7cHJvZmlsZX0pIHtcclxuICAgIGNvbnNvbGUubG9nKHByb2ZpbGUpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgZGF0YS1hb3M9XCJmYWRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWF1dG8gc206Z2FwLTQgc206ZmxleCc+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgc3JjPXtwcm9maWxlLmRpc2NvcmRfdXNlci5hdmF0YXIgIT09IG51bGwgPyBgaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXZhdGFycy8ke3Byb2ZpbGUuZGlzY29yZF91c2VyLmlkfS8ke3Byb2ZpbGUuZGlzY29yZF91c2VyLmF2YXRhcn0ucG5nP3NpemU9MjA0OGAgOiBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2VtYmVkL2F2YXRhcnMvMS5wbmdcIn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdyb3VuZGVkIG14LWF1dG8gc206bXgtMCBtYi00IHNtOm1iLTAgdy01MiBoLTUyJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC00eGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgdGV4dC1jZW50ZXIgc206dGV4dC1sZWZ0Jz57cHJvZmlsZS5kaXNjb3JkX3VzZXIudXNlcm5hbWUgKyBcIiNcIiArIHByb2ZpbGUuZGlzY29yZF91c2VyLmRpc2NyaW1pbmF0b3J9PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdvcGFjaXR5LTc1IG14LWF1dG8gc206bXgtMCB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnQgc206dy0zLzQgYnJlYWstYWxsJz5JIGFtIGEgc3R1ZGVudCBmcm9tIFR1cmtleSBJIGhhdmUgYmVlbiBpbiBjb2Rpbmcgc2luY2UgMjAxOS4gSSBhbSBhIG5ld2JpZSBmdWxsIHN0YWNrIGRldmVsb3Blci4gSSBoYXZlIGJlZW4gd29ya2luZyBvbiB3ZWIgZGV2ZWxvcG1lbnQgZm9yIHRoZSBsYXN0IDEgeWVhcnMuPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOTYgaC0yOCBmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgc3JjPXtgaHR0cHM6Ly9saW5rY29yZC5zd290aC54eXovYXBpL3YxL3dpZGdldC8ke3Byb2ZpbGUuZGlzY29yZF91c2VyLmlkfT90eXBlPXNwb3RpZnkmdGhlbWU9ZGFya2B9XHJcbiAgICB3aWR0aD1cIjM1MFwiXHJcbiAgICBoZWlnaHQ9XCIxMTBcIlxyXG4gICAgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCJcclxuICAgIGZyYW1lQm9yZGVyPVwiMFwiXHJcbiAgICBjbGFzc05hbWU9J210LTQgbXgtYXV0byBzbTpteC0wJ1xyXG4gICAgc2FuZGJveD1cImFsbG93LXBvcHVwcyBhbGxvdy1wb3B1cHMtdG8tZXNjYXBlLXNhbmRib3ggYWxsb3ctc2FtZS1vcmlnaW4gYWxsb3ctc2NyaXB0c1wiXHJcbi8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZmlsZSIsInByb2ZpbGUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiZGF0YS1hb3MiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJkaXNjb3JkX3VzZXIiLCJhdmF0YXIiLCJpZCIsInNwYW4iLCJoMSIsInVzZXJuYW1lIiwiZGlzY3JpbWluYXRvciIsInAiLCJpZnJhbWUiLCJ3aWR0aCIsImhlaWdodCIsImFsbG93dHJhbnNwYXJlbmN5IiwiZnJhbWVCb3JkZXIiLCJzYW5kYm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Compotents/Profile.js\n");

/***/ })

});