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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Profile(param) {\n    var profile = param.profile;\n    console.log(profile);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        \"data-aos\": \"fade\",\n        __source: {\n            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n            className: \"flex-auto sm:gap-4 sm:flex\",\n            __source: {\n                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                    src: profile.discord_user.avatar !== null ? \"https://cdn.discordapp.com/avatars/\".concat(profile.discord_user.id, \"/\").concat(profile.discord_user.avatar, \".png?size=2048\") : \"https://cdn.discordapp.com/embed/avatars/1.png\",\n                    className: \"rounded mx-auto sm:mx-0 mb-4 sm:mb-0 w-52 h-52\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                        lineNumber: 8,\n                        columnNumber: 9\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"span\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                            className: \"text-4xl font-bold leading-tight text-center sm:text-left\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: profile.discord_user.username + \"#\" + profile.discord_user.discriminator\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: \"opacity-75 mx-auto sm:mx-0 text-center sm:text-left sm:w-3/4 break-all\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: \"I am a student from Turkey I have been in coding since 2019. I am a newbie full stack developer. I have been working on web development for the last 1 years.\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                            className: \"w-96 h-28 flex bg-primary rounded px-4 py-2\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            },\n                            __self: this,\n                            children: !profile.listening_to_spotify ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                                className: \"flex gap-4 align-middle justify-center mx-auto\",\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                },\n                                __self: this,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n                                        src: \"/images/spotify.png\",\n                                        className: \" w-10 h-10\",\n                                        width: 40,\n                                        height: 40,\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                            lineNumber: 30,\n                                            columnNumber: 19\n                                        },\n                                        __self: this\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                                        className: \"text-center text-gray-200 text-xl font-bold center\",\n                                        __source: {\n                                            fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        },\n                                        __self: this,\n                                        children: \"I am not listening anything right now\"\n                                    })\n                                ]\n                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                },\n                                __self: this\n                            })\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"iframe\", {\n                            src: \"https://linkcord.swoth.xyz/api/v1/widget/\".concat(profile.discord_user.id, \"?type=spotify&theme=dark\"),\n                            width: \"350\",\n                            height: \"110\",\n                            allowtransparency: \"true\",\n                            frameBorder: \"0\",\n                            className: \"mt-4 mx-auto sm:mx-0\",\n                            sandbox: \"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts\",\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\enesk\\\\Masa\\xfcst\\xfc\\\\Projects\\\\Websites\\\\dreamstudio-website\\\\Compotents\\\\Profile.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            },\n                            __self: this\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n}\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb3RlbnRzL1Byb2ZpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtTQUVoQkMsT0FBTyxDQUFDLEtBQVcsRUFBRSxDQUFDO1FBQVpDLE9BQU8sR0FBVCxLQUFXLENBQVRBLE9BQU87SUFDeEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPO0lBQ25CLE1BQU0sc0VBQ0hHLENBQUc7UUFBQ0MsQ0FBUSxXQUFDLENBQU07Ozs7Ozs7d0ZBQ2pCRCxDQUFHO1lBQUNFLFNBQVMsRUFBQyxDQUE0Qjs7Ozs7Ozs7cUZBQ3hDQyxDQUFHO29CQUNGQyxHQUFHLEVBQ0RQLE9BQU8sQ0FBQ1EsWUFBWSxDQUFDQyxNQUFNLEtBQUssSUFBSSxHQUMvQixDQUFtQyxxQ0FBNkJULE1BQTJCLENBQXREQSxPQUFPLENBQUNRLFlBQVksQ0FBQ0UsRUFBRSxFQUFDLENBQUMsSUFBOEIsTUFBYyxDQUExQ1YsT0FBTyxDQUFDUSxZQUFZLENBQUNDLE1BQU0sRUFBQyxDQUFjLG1CQUMzRyxDQUFnRDtvQkFFdERKLFNBQVMsRUFBQyxDQUFnRDs7Ozs7Ozs7c0ZBRTNETSxDQUFJOzs7Ozs7Ozs2RkFDRkMsQ0FBRTs0QkFBQ1AsU0FBUyxFQUFDLENBQTJEOzs7Ozs7O3NDQUN0RUwsT0FBTyxDQUFDUSxZQUFZLENBQUNLLFFBQVEsR0FDNUIsQ0FBRyxLQUNIYixPQUFPLENBQUNRLFlBQVksQ0FBQ00sYUFBYTs7NkZBRXJDQyxDQUFDOzRCQUFDVixTQUFTLEVBQUMsQ0FBd0U7Ozs7Ozs7c0NBQUMsQ0FJdEY7OzZGQUNDRixDQUFHOzRCQUFDRSxTQUFTLEVBQUMsQ0FBNkM7Ozs7Ozs7dUNBQ3hETCxPQUFPLENBQUNnQixvQkFBb0IseUVBQzNCYixDQUFHO2dDQUFDRSxTQUFTLEVBQUMsQ0FBZ0Q7Ozs7Ozs7O3lHQUMxREMsQ0FBRzt3Q0FBQ0MsR0FBRyxFQUFDLENBQXFCO3dDQUFDRixTQUFTLEVBQUMsQ0FBWTt3Q0FBQ1ksS0FBSyxFQUFFLEVBQUU7d0NBQUVDLE1BQU0sRUFBRSxFQUFFOzs7Ozs7Ozt5R0FDNUVOLENBQUU7d0NBQUNQLFNBQVMsRUFBQyxDQUFvRDs7Ozs7OztrREFBQyxDQUVuRTs7O3NHQUdERixDQUFHOzs7Ozs7Ozs7NkZBR1BnQixDQUFNOzRCQUNMWixHQUFHLEVBQUcsQ0FBeUMsMkNBQTBCLE1BQXdCLENBQWhEUCxPQUFPLENBQUNRLFlBQVksQ0FBQ0UsRUFBRSxFQUFDLENBQXdCOzRCQUNqR08sS0FBSyxFQUFDLENBQUs7NEJBQ1hDLE1BQU0sRUFBQyxDQUFLOzRCQUNaRSxpQkFBaUIsRUFBQyxDQUFNOzRCQUN4QkMsV0FBVyxFQUFDLENBQUc7NEJBQ2ZoQixTQUFTLEVBQUMsQ0FBc0I7NEJBQ2hDaUIsT0FBTyxFQUFDLENBQTZFOzs7Ozs7Ozs7Ozs7O0FBTWpHLENBQUM7S0FqRFF2QixPQUFPO0FBbURoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvdGVudHMvUHJvZmlsZS5qcz9mMDhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoeyBwcm9maWxlIH0pIHtcclxuICBjb25zb2xlLmxvZyhwcm9maWxlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBkYXRhLWFvcz1cImZhZGVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWF1dG8gc206Z2FwLTQgc206ZmxleFwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgIHByb2ZpbGUuZGlzY29yZF91c2VyLmF2YXRhciAhPT0gbnVsbFxyXG4gICAgICAgICAgICAgID8gYGh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F2YXRhcnMvJHtwcm9maWxlLmRpc2NvcmRfdXNlci5pZH0vJHtwcm9maWxlLmRpc2NvcmRfdXNlci5hdmF0YXJ9LnBuZz9zaXplPTIwNDhgXHJcbiAgICAgICAgICAgICAgOiBcImh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2VtYmVkL2F2YXRhcnMvMS5wbmdcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZCBteC1hdXRvIHNtOm14LTAgbWItNCBzbTptYi0wIHctNTIgaC01MlwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGQgbGVhZGluZy10aWdodCB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAge3Byb2ZpbGUuZGlzY29yZF91c2VyLnVzZXJuYW1lICtcclxuICAgICAgICAgICAgICBcIiNcIiArXHJcbiAgICAgICAgICAgICAgcHJvZmlsZS5kaXNjb3JkX3VzZXIuZGlzY3JpbWluYXRvcn1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJvcGFjaXR5LTc1IG14LWF1dG8gc206bXgtMCB0ZXh0LWNlbnRlciBzbTp0ZXh0LWxlZnQgc206dy0zLzQgYnJlYWstYWxsXCI+XHJcbiAgICAgICAgICAgIEkgYW0gYSBzdHVkZW50IGZyb20gVHVya2V5IEkgaGF2ZSBiZWVuIGluIGNvZGluZyBzaW5jZSAyMDE5LiBJIGFtIGFcclxuICAgICAgICAgICAgbmV3YmllIGZ1bGwgc3RhY2sgZGV2ZWxvcGVyLiBJIGhhdmUgYmVlbiB3b3JraW5nIG9uIHdlYiBkZXZlbG9wbWVudFxyXG4gICAgICAgICAgICBmb3IgdGhlIGxhc3QgMSB5ZWFycy5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy05NiBoLTI4IGZsZXggYmctcHJpbWFyeSByb3VuZGVkIHB4LTQgcHktMlwiPlxyXG4gICAgICAgICAgICB7IXByb2ZpbGUubGlzdGVuaW5nX3RvX3Nwb3RpZnkgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGFsaWduLW1pZGRsZSBqdXN0aWZ5LWNlbnRlciBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9zcG90aWZ5LnBuZ1wiIGNsYXNzTmFtZT1cIiB3LTEwIGgtMTBcIiB3aWR0aD17NDB9IGhlaWdodD17NDB9ID48L2ltZz5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWdyYXktMjAwIHRleHQteGwgZm9udC1ib2xkIGNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICBJIGFtIG5vdCBsaXN0ZW5pbmcgYW55dGhpbmcgcmlnaHQgbm93XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpZnJhbWVcclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9saW5rY29yZC5zd290aC54eXovYXBpL3YxL3dpZGdldC8ke3Byb2ZpbGUuZGlzY29yZF91c2VyLmlkfT90eXBlPXNwb3RpZnkmdGhlbWU9ZGFya2B9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMzUwXCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiMTEwXCJcclxuICAgICAgICAgICAgYWxsb3d0cmFuc3BhcmVuY3k9XCJ0cnVlXCJcclxuICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBteC1hdXRvIHNtOm14LTBcIlxyXG4gICAgICAgICAgICBzYW5kYm94PVwiYWxsb3ctcG9wdXBzIGFsbG93LXBvcHVwcy10by1lc2NhcGUtc2FuZGJveCBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1zY3JpcHRzXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb2ZpbGUiLCJwcm9maWxlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImRhdGEtYW9zIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiZGlzY29yZF91c2VyIiwiYXZhdGFyIiwiaWQiLCJzcGFuIiwiaDEiLCJ1c2VybmFtZSIsImRpc2NyaW1pbmF0b3IiLCJwIiwibGlzdGVuaW5nX3RvX3Nwb3RpZnkiLCJ3aWR0aCIsImhlaWdodCIsImlmcmFtZSIsImFsbG93dHJhbnNwYXJlbmN5IiwiZnJhbWVCb3JkZXIiLCJzYW5kYm94Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Compotents/Profile.js\n");

/***/ })

});