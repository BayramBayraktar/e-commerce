/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Store/CurrentUserSlice.js":
/*!***********************************!*\
  !*** ./Store/CurrentUserSlice.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setCard\": () => (/* binding */ setCard),\n/* harmony export */   \"setToken\": () => (/* binding */ setToken),\n/* harmony export */   \"setcurrentUser\": () => (/* binding */ setcurrentUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst token = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"userSession\");\nconst initialState = {\n    currentUser: {},\n    token: token,\n    card: []\n};\nconst CurrentUserSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"currentUser\",\n    initialState,\n    reducers: {\n        setcurrentUser: (state, action)=>{\n            state.currentUser = action.payload;\n        },\n        setToken: (state, action)=>{\n            state.token = action.payload;\n        },\n        setCard: (state, action)=>{\n            state.card = action.payload;\n        }\n    }\n});\nconst { setcurrentUser , setToken , setCard  } = CurrentUserSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrentUserSlice.reducer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9DdXJyZW50VXNlclNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDaEI7QUFDOUIsTUFBTUUsUUFBUUQscURBQVUsQ0FBQztBQUV6QixNQUFNRyxlQUFlO0lBQ2pCQyxhQUFhLENBQUM7SUFDZEgsT0FBT0E7SUFDUEksTUFBTSxFQUFFO0FBRVo7QUFFQSxNQUFNQyxtQkFBbUJQLDZEQUFXQSxDQUFDO0lBQ2pDUSxNQUFNO0lBQ05KO0lBQ0FLLFVBQVU7UUFDTkMsZ0JBQWdCLENBQUNDLE9BQU9DLFNBQVc7WUFDL0JELE1BQU1OLFdBQVcsR0FBR08sT0FBT0MsT0FBTztRQUN0QztRQUNBQyxVQUFVLENBQUNILE9BQU9DLFNBQVc7WUFDekJELE1BQU1ULEtBQUssR0FBR1UsT0FBT0MsT0FBTztRQUNoQztRQUNBRSxTQUFTLENBQUNKLE9BQU9DLFNBQVc7WUFDeEJELE1BQU1MLElBQUksR0FBR00sT0FBT0MsT0FBTztRQUMvQjtJQUNKO0FBQ0o7QUFFTyxNQUFNLEVBQUVILGVBQWMsRUFBRUksU0FBUSxFQUFFQyxRQUFPLEVBQUUsR0FBR1IsaUJBQWlCUyxPQUFPO0FBQzdFLGlFQUFlVCxpQkFBaUJVLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vU3RvcmUvQ3VycmVudFVzZXJTbGljZS5qcz82MDQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcclxuaW1wb3J0IENvb2tpZSBmcm9tICdqcy1jb29raWUnXHJcbmNvbnN0IHRva2VuID0gQ29va2llLmdldChcInVzZXJTZXNzaW9uXCIpXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50VXNlcjoge30sXHJcbiAgICB0b2tlbjogdG9rZW4sXHJcbiAgICBjYXJkOiBbXVxyXG5cclxufVxyXG5cclxuY29uc3QgQ3VycmVudFVzZXJTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6IFwiY3VycmVudFVzZXJcIixcclxuICAgIGluaXRpYWxTdGF0ZSxcclxuICAgIHJlZHVjZXJzOiB7XHJcbiAgICAgICAgc2V0Y3VycmVudFVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRVc2VyID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFRva2VuOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRDYXJkOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5jYXJkID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRjdXJyZW50VXNlciwgc2V0VG9rZW4sIHNldENhcmQgfSA9IEN1cnJlbnRVc2VyU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50VXNlclNsaWNlLnJlZHVjZXJcclxuXHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsIkNvb2tpZSIsInRva2VuIiwiZ2V0IiwiaW5pdGlhbFN0YXRlIiwiY3VycmVudFVzZXIiLCJjYXJkIiwiQ3VycmVudFVzZXJTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldGN1cnJlbnRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0VG9rZW4iLCJzZXRDYXJkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Store/CurrentUserSlice.js\n");

/***/ }),

/***/ "./Store/index.js":
/*!************************!*\
  !*** ./Store/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CurrentUserSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrentUserSlice */ \"./Store/CurrentUserSlice.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CurrentUserSlice__WEBPACK_IMPORTED_MODULE_1__]);\n_CurrentUserSlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        CurrentUser: _CurrentUserSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9TdG9yZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlEO0FBQ0w7QUFFNUMsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDekJHLFNBQVM7UUFDTEYsV0FBV0EsMkRBQUFBO0lBQ2Y7QUFDSjtBQUVBLGlFQUFlQyxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZS1jb21tZXJjZS8uL1N0b3JlL2luZGV4LmpzP2YwN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgQ3VycmVudFVzZXIgZnJvbSBcIi4vQ3VycmVudFVzZXJTbGljZVwiXHJcblxyXG5jb25zdCBTdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICAgIHJlZHVjZXI6IHtcclxuICAgICAgICBDdXJyZW50VXNlclxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmUiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJDdXJyZW50VXNlciIsIlN0b3JlIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Store/index.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Store */ \"./Store/index.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tooltip/dist/react-tooltip.css */ \"./node_modules/react-tooltip/dist/react-tooltip.min.css\");\n/* harmony import */ var react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tooltip_dist_react_tooltip_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Store__WEBPACK_IMPORTED_MODULE_3__]);\n_Store__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n//redux\n\n\n\n/* toastify */ \n/* tooltip */ \n/* Sslick carousel */ \n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n        uri: `${\"http://localhost:8000\"}/graphql`\n    }),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()\n});\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: _Store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloProvider, {\n            client: client,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Bayram\\\\Desktop\\\\Projects\\\\Web\\\\e-commerce\\\\client\\\\pages\\\\_app.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Bayram\\\\Desktop\\\\Projects\\\\Web\\\\e-commerce\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Bayram\\\\Desktop\\\\Projects\\\\Web\\\\e-commerce\\\\client\\\\pages\\\\_app.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Y7QUFDdEYsT0FBTztBQUMrQjtBQUNWO0FBQ0U7QUFDOUIsWUFBWSxHQUNtQztBQUMvQyxXQUFXLEdBQ2tDO0FBQzdDLG1CQUFtQixHQUNxQjtBQUNNO0FBRTlDLE1BQU1NLFNBQVMsSUFBSUwsd0RBQVlBLENBQUM7SUFDOUJNLE1BQU0sSUFBSUosb0RBQVFBLENBQUM7UUFDakJLLEtBQUssQ0FBQyxFQUFFQyx1QkFBbUIsQ0FBQyxRQUFRLENBQUM7SUFDdkM7SUFDQUcsT0FBTyxJQUFJVix5REFBYUE7QUFDMUI7QUFFQSxTQUFTVyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDckMscUJBQ0UsOERBQUNYLGlEQUFRQTtRQUFDWSxPQUFPWCw4Q0FBS0E7a0JBQ3BCLDRFQUFDTCwwREFBY0E7WUFBQ00sUUFBUUE7c0JBQ3RCLDRFQUFDUTtnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lLWNvbW1lcmNlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyLCBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEh0dHBMaW5rIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbi8vcmVkdXhcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IFN0b3JlIGZyb20gJy4uL1N0b3JlJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuLyogdG9hc3RpZnkgKi9cclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuLyogdG9vbHRpcCAqL1xyXG5pbXBvcnQgJ3JlYWN0LXRvb2x0aXAvZGlzdC9yZWFjdC10b29sdGlwLmNzcydcclxuLyogU3NsaWNrIGNhcm91c2VsICovXHJcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xyXG5pbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay10aGVtZS5jc3NcIjtcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICB1cmk6IGAke3Byb2Nlc3MuZW52LkFQSV9VUkx9L2dyYXBocWxgLFxyXG4gIH0pLFxyXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm92aWRlciBzdG9yZT17U3RvcmV9ID5cclxuICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fSA+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgPC9Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iXSwibmFtZXMiOlsiQXBvbGxvUHJvdmlkZXIiLCJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiSHR0cExpbmsiLCJQcm92aWRlciIsIlN0b3JlIiwiY2xpZW50IiwibGluayIsInVyaSIsInByb2Nlc3MiLCJlbnYiLCJBUElfVVJMIiwiY2FjaGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-tooltip/dist/react-tooltip.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-tooltip/dist/react-tooltip.min.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();