module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/components/themes/index.js":
/*!****************************************!*\
  !*** ./app/components/themes/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/green */ "@material-ui/core/colors/green");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2__);


 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2___default.a[700]
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#fff'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./app/lib/utility/reducer.js":
/*!************************************!*\
  !*** ./app/lib/utility/reducer.js ***!
  \************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./app/lib/utility/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer = (state, action) => {
  switch (action.type) {
    case _type__WEBPACK_IMPORTED_MODULE_0__["SIGN_UP_MODAL_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpStatus: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["LOGIN_MODAL_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginStatus: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["ALERT_DIALOG"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        alertStatus: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["ERROR_DESCRIPTION"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorDescription: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["ERROR_TITLE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorTitle: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["CATEGORY_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryList: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["SERVICE_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        serviceList: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["GROUPS_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        groupList: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["BOOKING_ALERT_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookingAlertStatus: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["AUTH_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["LOADING_BAR_STATUS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingBarStatus: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["CLOSE_MAP"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        closeMap: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["ADDRESS_LIST"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addressList: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["SELECTED_ADDRESS_ID"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedAddressId: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["SELECTED_ADDRESS_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedAddressData: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["PURCHASE_DATA"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        purchaseData: action.value
      });

    case _type__WEBPACK_IMPORTED_MODULE_0__["SCHEDULED_BOOK"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        scheduleData: action.value
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./app/lib/utility/store.js":
/*!**********************************!*\
  !*** ./app/lib/utility/store.js ***!
  \**********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
const store = {
  signUpStatus: false,
  loginStatus: false,
  categoryList: {},
  serviceList: {},
  addressList: [],
  alertStatus: false
};

/***/ }),

/***/ "./app/lib/utility/type.js":
/*!*********************************!*\
  !*** ./app/lib/utility/type.js ***!
  \*********************************/
/*! exports provided: LOGIN_MODAL_STATUS, SIGN_UP_MODAL_STATUS, ALERT_DIALOG, ERROR_TITLE, ERROR_DESCRIPTION, CATEGORY_LIST, GROUPS_LIST, SERVICE_LIST, BOOKING_ALERT_STATUS, AUTH_STATUS, LOADING_BAR_STATUS, CLOSE_MAP, ADDRESS_LIST, SELECTED_ADDRESS_ID, SELECTED_ADDRESS_DATA, PURCHASE_DATA, SCHEDULED_BOOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MODAL_STATUS", function() { return LOGIN_MODAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_MODAL_STATUS", function() { return SIGN_UP_MODAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_DIALOG", function() { return ALERT_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_TITLE", function() { return ERROR_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_DESCRIPTION", function() { return ERROR_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CATEGORY_LIST", function() { return CATEGORY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS_LIST", function() { return GROUPS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_LIST", function() { return SERVICE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOKING_ALERT_STATUS", function() { return BOOKING_ALERT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_STATUS", function() { return AUTH_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_BAR_STATUS", function() { return LOADING_BAR_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MAP", function() { return CLOSE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADDRESS_LIST", function() { return ADDRESS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_ADDRESS_ID", function() { return SELECTED_ADDRESS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_ADDRESS_DATA", function() { return SELECTED_ADDRESS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PURCHASE_DATA", function() { return PURCHASE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULED_BOOK", function() { return SCHEDULED_BOOK; });
const LOGIN_MODAL_STATUS = 'LOGIN_MODAL_STATUS';
const SIGN_UP_MODAL_STATUS = 'SIGN_UP_MODAL_STATUS';
const ALERT_DIALOG = 'ALERT_DIALOG';
const ERROR_TITLE = 'ERROR_TITLE';
const ERROR_DESCRIPTION = 'ERROR_DESCRIPTION';
const CATEGORY_LIST = 'CATEGORY_LIST';
const GROUPS_LIST = 'GROUPS_LIST';
const SERVICE_LIST = 'SERVICE_LIST';
const BOOKING_ALERT_STATUS = 'BOOKING_ALERT_STATUS';
const AUTH_STATUS = 'AUTH_STATUS';
const LOADING_BAR_STATUS = 'LOADING_BAR_STATUS';
const CLOSE_MAP = 'CLOSE_MAP';
const ADDRESS_LIST = 'ADDRESS_LIST';
const SELECTED_ADDRESS_ID = 'SELECTED_ADDRESS_ID';
const SELECTED_ADDRESS_DATA = 'SELECTED_ADDRESS_DATA';
const PURCHASE_DATA = 'PURCHASE_DATA';
const SCHEDULED_BOOK = 'SCHEDULED_BOOK';

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: GlobalContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_components_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/components/themes */ "./app/components/themes/index.js");
/* harmony import */ var _app_lib_utility_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/lib/utility/store */ "./app/lib/utility/store.js");
/* harmony import */ var _app_lib_utility_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/lib/utility/reducer */ "./app/lib/utility/reducer.js");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ "./node_modules/react-multi-carousel/lib/styles.css");
/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "D:\\spider-projects\\user\\userspider\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
let socket;
function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const {
    0: globalState,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_app_lib_utility_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"], _app_lib_utility_store__WEBPACK_IMPORTED_MODULE_8__["store"]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (!socket) {
      // socket = io.connect('http://localhost:8080');
      socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a.connect('https://spidy-server.herokuapp.com/');
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GlobalContext.Provider, {
      value: {
        state: globalState,
        allDispatch: dispatch
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "My page"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "viewport",
          content: "minimum-scale=1, initial-scale=1, width=device-width"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        theme: _app_components_themes__WEBPACK_IMPORTED_MODULE_7__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGhlbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9saWIvdXRpbGl0eS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9saWIvdXRpbGl0eS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL3V0aWxpdHkvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2dyZWVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJncmVlbiIsInNlY29uZGFyeSIsImVycm9yIiwicmVkIiwiQTQwMCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNJR05fVVBfTU9EQUxfU1RBVFVTIiwic2lnblVwU3RhdHVzIiwidmFsdWUiLCJMT0dJTl9NT0RBTF9TVEFUVVMiLCJsb2dpblN0YXR1cyIsIkFMRVJUX0RJQUxPRyIsImFsZXJ0U3RhdHVzIiwiRVJST1JfREVTQ1JJUFRJT04iLCJlcnJvckRlc2NyaXB0aW9uIiwiRVJST1JfVElUTEUiLCJlcnJvclRpdGxlIiwiQ0FURUdPUllfTElTVCIsImNhdGVnb3J5TGlzdCIsIlNFUlZJQ0VfTElTVCIsInNlcnZpY2VMaXN0IiwiR1JPVVBTX0xJU1QiLCJncm91cExpc3QiLCJCT09LSU5HX0FMRVJUX1NUQVRVUyIsImJvb2tpbmdBbGVydFN0YXR1cyIsIkFVVEhfU1RBVFVTIiwiYXV0aCIsIkxPQURJTkdfQkFSX1NUQVRVUyIsImxvYWRpbmdCYXJTdGF0dXMiLCJDTE9TRV9NQVAiLCJjbG9zZU1hcCIsIkFERFJFU1NfTElTVCIsImFkZHJlc3NMaXN0IiwiU0VMRUNURURfQUREUkVTU19JRCIsInNlbGVjdGVkQWRkcmVzc0lkIiwiU0VMRUNURURfQUREUkVTU19EQVRBIiwic2VsZWN0ZWRBZGRyZXNzRGF0YSIsIlBVUkNIQVNFX0RBVEEiLCJwdXJjaGFzZURhdGEiLCJTQ0hFRFVMRURfQk9PSyIsInNjaGVkdWxlRGF0YSIsInN0b3JlIiwiR2xvYmFsQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInNvY2tldCIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnbG9iYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImlvIiwiY29ubmVjdCIsImFsbERpc3BhdGNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LFdBQUssRUFBRTtBQUFFekQsYUFBSyxFQUFFK0MsV0FBVDtBQUFzQlcsbUJBQVcsRUFBRVY7QUFBbkMsT0FEVDtBQUFBLDhCQUdFLHFFQUFDLGdEQUFEO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxVQURQO0FBRUUsaUJBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFVRSxxRUFBQyxzRUFBRDtBQUFlLGFBQUssRUFBRTdELDhEQUF0QjtBQUFBLGdDQUNFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFHRSxxRUFBQyxTQUFELG9CQUFlMkQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JEO0FBRURILEtBQUssQ0FBQ2dCLFNBQU4sR0FBa0I7QUFDaEJkLFdBQVMsRUFBRWUsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEakI7QUFFaEI7QUFDQWhCLFdBQVMsRUFBRWMsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFIWixDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBLDBEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcbmltcG9ydCBncmVlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JlZW4nO1xyXG5cclxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogZ3JlZW5bNzAwXSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNmZmYnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iLCJpbXBvcnQge1xyXG4gIExPR0lOX01PREFMX1NUQVRVUyxcclxuICBTSUdOX1VQX01PREFMX1NUQVRVUyxcclxuICBDTE9TRV9NQVAsXHJcbiAgQUREUkVTU19MSVNULFxyXG4gIFNFTEVDVEVEX0FERFJFU1NfSUQsXHJcbiAgQUxFUlRfRElBTE9HLFxyXG4gIEVSUk9SX1RJVExFLFxyXG4gIEVSUk9SX0RFU0NSSVBUSU9OLFxyXG4gIExPQURJTkdfQkFSX1NUQVRVUyxcclxuICBTRUxFQ1RFRF9BRERSRVNTX0RBVEEsXHJcbiAgQ0FURUdPUllfTElTVCxcclxuICBTRVJWSUNFX0xJU1QsXHJcbiAgR1JPVVBTX0xJU1QsXHJcbiAgQk9PS0lOR19BTEVSVF9TVEFUVVMsXHJcbiAgQVVUSF9TVEFUVVMsXHJcbiAgUFVSQ0hBU0VfREFUQSxcclxuICBTQ0hFRFVMRURfQk9PSyxcclxufSBmcm9tICcuL3R5cGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0lHTl9VUF9NT0RBTF9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaWduVXBTdGF0dXM6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBMT0dJTl9NT0RBTF9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2dpblN0YXR1czogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIEFMRVJUX0RJQUxPRzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFsZXJ0U3RhdHVzOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgRVJST1JfREVTQ1JJUFRJT046XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvckRlc2NyaXB0aW9uOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgRVJST1JfVElUTEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvclRpdGxlOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgQ0FURUdPUllfTElTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhdGVnb3J5TGlzdDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIFNFUlZJQ0VfTElTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlcnZpY2VMaXN0OiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgR1JPVVBTX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBncm91cExpc3Q6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBCT09LSU5HX0FMRVJUX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGJvb2tpbmdBbGVydFN0YXR1czogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIEFVVEhfU1RBVFVTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXV0aDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIExPQURJTkdfQkFSX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdCYXJTdGF0dXM6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBDTE9TRV9NQVA6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjbG9zZU1hcDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIEFERFJFU1NfTElTVDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFkZHJlc3NMaXN0OiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgU0VMRUNURURfQUREUkVTU19JRDpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlbGVjdGVkQWRkcmVzc0lkOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgU0VMRUNURURfQUREUkVTU19EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWRBZGRyZXNzRGF0YTogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIFBVUkNIQVNFX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwdXJjaGFzZURhdGE6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBTQ0hFRFVMRURfQk9PSzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNjaGVkdWxlRGF0YTogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgY29uc3Qgc3RvcmUgPSB7XHJcbiAgc2lnblVwU3RhdHVzOiBmYWxzZSxcclxuICBsb2dpblN0YXR1czogZmFsc2UsXHJcbiAgY2F0ZWdvcnlMaXN0OiB7fSxcclxuICBzZXJ2aWNlTGlzdDoge30sXHJcbiAgYWRkcmVzc0xpc3Q6IFtdLFxyXG4gIGFsZXJ0U3RhdHVzOiBmYWxzZSxcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IExPR0lOX01PREFMX1NUQVRVUyA9ICdMT0dJTl9NT0RBTF9TVEFUVVMnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9NT0RBTF9TVEFUVVMgPSAnU0lHTl9VUF9NT0RBTF9TVEFUVVMnO1xyXG5leHBvcnQgY29uc3QgQUxFUlRfRElBTE9HID0gJ0FMRVJUX0RJQUxPRyc7XHJcbmV4cG9ydCBjb25zdCBFUlJPUl9USVRMRSA9ICdFUlJPUl9USVRMRSc7XHJcbmV4cG9ydCBjb25zdCBFUlJPUl9ERVNDUklQVElPTiA9ICdFUlJPUl9ERVNDUklQVElPTic7XHJcbmV4cG9ydCBjb25zdCBDQVRFR09SWV9MSVNUID0gJ0NBVEVHT1JZX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgR1JPVVBTX0xJU1QgPSAnR1JPVVBTX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgU0VSVklDRV9MSVNUID0gJ1NFUlZJQ0VfTElTVCc7XHJcbmV4cG9ydCBjb25zdCBCT09LSU5HX0FMRVJUX1NUQVRVUyA9ICdCT09LSU5HX0FMRVJUX1NUQVRVUyc7XHJcbmV4cG9ydCBjb25zdCBBVVRIX1NUQVRVUyA9ICdBVVRIX1NUQVRVUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FESU5HX0JBUl9TVEFUVVMgPSAnTE9BRElOR19CQVJfU1RBVFVTJztcclxuZXhwb3J0IGNvbnN0IENMT1NFX01BUCA9ICdDTE9TRV9NQVAnO1xyXG5leHBvcnQgY29uc3QgQUREUkVTU19MSVNUID0gJ0FERFJFU1NfTElTVCc7XHJcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9BRERSRVNTX0lEID0gJ1NFTEVDVEVEX0FERFJFU1NfSUQnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNURURfQUREUkVTU19EQVRBID0gJ1NFTEVDVEVEX0FERFJFU1NfREFUQSc7XHJcbmV4cG9ydCBjb25zdCBQVVJDSEFTRV9EQVRBID0gJ1BVUkNIQVNFX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgU0NIRURVTEVEX0JPT0sgPSAnU0NIRURVTEVEX0JPT0snO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3RoZW1lcyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vYXBwL2xpYi91dGlsaXR5L3N0b3JlJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4uL2FwcC9saWIvdXRpbGl0eS9yZWR1Y2VyJztcclxuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5sZXQgc29ja2V0O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHMpIHtcclxuICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSBwcm9wcztcclxuICBjb25zdCBbZ2xvYmFsU3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgc3RvcmUpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXNvY2tldCkge1xyXG4gICAgICAvLyBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwOi8vbG9jYWxob3N0OjgwODAnKTtcclxuICAgICAgc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cHM6Ly9zcGlkeS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS8nKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7IHN0YXRlOiBnbG9iYWxTdGF0ZSwgYWxsRGlzcGF0Y2g6IGRpc3BhdGNoIH19XHJcbiAgICAgID5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5NeSBwYWdlPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuXHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5NeUFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcclxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmVlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pby1jbGllbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==