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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          charSet: "utf-8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          httpEquiv: "X-UA-Compatible",
          content: "IE=edge"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "viewport",
          content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "keywords",
          content: "Keywords"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "Next.js PWA Example"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "manifest",
          href: "/manifest.json"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "/icons/favicon-16x16.png",
          rel: "icon",
          type: "image/png",
          sizes: "16x16"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          href: "/icons/favicon-32x32.png",
          rel: "icon",
          type: "image/png",
          sizes: "32x32"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "apple-touch-icon",
          href: "/static/images/bill.png"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "theme-color",
          content: "#317EFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        theme: _app_components_themes__WEBPACK_IMPORTED_MODULE_7__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdGhlbWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9saWIvdXRpbGl0eS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2FwcC9saWIvdXRpbGl0eS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbGliL3V0aWxpdHkvdHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2dyZWVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvLWNsaWVudFwiIl0sIm5hbWVzIjpbInRoZW1lIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJncmVlbiIsInNlY29uZGFyeSIsImVycm9yIiwicmVkIiwiQTQwMCIsImJhY2tncm91bmQiLCJkZWZhdWx0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNJR05fVVBfTU9EQUxfU1RBVFVTIiwic2lnblVwU3RhdHVzIiwidmFsdWUiLCJMT0dJTl9NT0RBTF9TVEFUVVMiLCJsb2dpblN0YXR1cyIsIkFMRVJUX0RJQUxPRyIsImFsZXJ0U3RhdHVzIiwiRVJST1JfREVTQ1JJUFRJT04iLCJlcnJvckRlc2NyaXB0aW9uIiwiRVJST1JfVElUTEUiLCJlcnJvclRpdGxlIiwiQ0FURUdPUllfTElTVCIsImNhdGVnb3J5TGlzdCIsIlNFUlZJQ0VfTElTVCIsInNlcnZpY2VMaXN0IiwiR1JPVVBTX0xJU1QiLCJncm91cExpc3QiLCJCT09LSU5HX0FMRVJUX1NUQVRVUyIsImJvb2tpbmdBbGVydFN0YXR1cyIsIkFVVEhfU1RBVFVTIiwiYXV0aCIsIkxPQURJTkdfQkFSX1NUQVRVUyIsImxvYWRpbmdCYXJTdGF0dXMiLCJDTE9TRV9NQVAiLCJjbG9zZU1hcCIsIkFERFJFU1NfTElTVCIsImFkZHJlc3NMaXN0IiwiU0VMRUNURURfQUREUkVTU19JRCIsInNlbGVjdGVkQWRkcmVzc0lkIiwiU0VMRUNURURfQUREUkVTU19EQVRBIiwic2VsZWN0ZWRBZGRyZXNzRGF0YSIsIlBVUkNIQVNFX0RBVEEiLCJwdXJjaGFzZURhdGEiLCJTQ0hFRFVMRURfQk9PSyIsInNjaGVkdWxlRGF0YSIsInN0b3JlIiwiR2xvYmFsQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInNvY2tldCIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnbG9iYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImlvIiwiY29ubmVjdCIsImFsbERpc3BhdGNoIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBK0JFLHFFQUFDLHNFQUFEO0FBQWUsYUFBSyxFQUFFN0QsOERBQXRCO0FBQUEsZ0NBQ0UscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUdFLHFFQUFDLFNBQUQsb0JBQWUyRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBeUNEO0FBRURILEtBQUssQ0FBQ2dCLFNBQU4sR0FBa0I7QUFDaEJkLFdBQVMsRUFBRWUsaURBQVMsQ0FBQ0MsV0FBVixDQUFzQkMsVUFEakI7QUFFaEI7QUFDQWhCLFdBQVMsRUFBRWMsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFIWixDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyByZWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xyXG5pbXBvcnQgZ3JlZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2dyZWVuJztcclxuXHJcbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxyXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcclxuICBwYWxldHRlOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIG1haW46IGdyZWVuWzcwMF0sXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46ICcjMTk4NTdiJyxcclxuICAgIH0sXHJcbiAgICBlcnJvcjoge1xyXG4gICAgICBtYWluOiByZWQuQTQwMCxcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgIGRlZmF1bHQ6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcclxuIiwiaW1wb3J0IHtcclxuICBMT0dJTl9NT0RBTF9TVEFUVVMsXHJcbiAgU0lHTl9VUF9NT0RBTF9TVEFUVVMsXHJcbiAgQ0xPU0VfTUFQLFxyXG4gIEFERFJFU1NfTElTVCxcclxuICBTRUxFQ1RFRF9BRERSRVNTX0lELFxyXG4gIEFMRVJUX0RJQUxPRyxcclxuICBFUlJPUl9USVRMRSxcclxuICBFUlJPUl9ERVNDUklQVElPTixcclxuICBMT0FESU5HX0JBUl9TVEFUVVMsXHJcbiAgU0VMRUNURURfQUREUkVTU19EQVRBLFxyXG4gIENBVEVHT1JZX0xJU1QsXHJcbiAgU0VSVklDRV9MSVNULFxyXG4gIEdST1VQU19MSVNULFxyXG4gIEJPT0tJTkdfQUxFUlRfU1RBVFVTLFxyXG4gIEFVVEhfU1RBVFVTLFxyXG4gIFBVUkNIQVNFX0RBVEEsXHJcbiAgU0NIRURVTEVEX0JPT0ssXHJcbn0gZnJvbSAnLi90eXBlJztcclxuXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNJR05fVVBfTU9EQUxfU1RBVFVTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2lnblVwU3RhdHVzOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgTE9HSU5fTU9EQUxfU1RBVFVTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9naW5TdGF0dXM6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBBTEVSVF9ESUFMT0c6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGVydFN0YXR1czogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIEVSUk9SX0RFU0NSSVBUSU9OOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3JEZXNjcmlwdGlvbjogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIEVSUk9SX1RJVExFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZXJyb3JUaXRsZTogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIENBVEVHT1JZX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yeUxpc3Q6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBTRVJWSUNFX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzZXJ2aWNlTGlzdDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIEdST1VQU19MSVNUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZ3JvdXBMaXN0OiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgQk9PS0lOR19BTEVSVF9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBib29raW5nQWxlcnRTdGF0dXM6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBBVVRIX1NUQVRVUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGF1dGg6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBMT0FESU5HX0JBUl9TVEFUVVM6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nQmFyU3RhdHVzOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgQ0xPU0VfTUFQOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2xvc2VNYXA6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBBRERSRVNTX0xJU1Q6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhZGRyZXNzTGlzdDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIFNFTEVDVEVEX0FERFJFU1NfSUQ6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzZWxlY3RlZEFkZHJlc3NJZDogYWN0aW9uLnZhbHVlIH07XHJcbiAgICBjYXNlIFNFTEVDVEVEX0FERFJFU1NfREFUQTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlbGVjdGVkQWRkcmVzc0RhdGE6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgY2FzZSBQVVJDSEFTRV9EQVRBOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcHVyY2hhc2VEYXRhOiBhY3Rpb24udmFsdWUgfTtcclxuICAgIGNhc2UgU0NIRURVTEVEX0JPT0s6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzY2hlZHVsZURhdGE6IGFjdGlvbi52YWx1ZSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IHN0b3JlID0ge1xyXG4gIHNpZ25VcFN0YXR1czogZmFsc2UsXHJcbiAgbG9naW5TdGF0dXM6IGZhbHNlLFxyXG4gIGNhdGVnb3J5TGlzdDoge30sXHJcbiAgc2VydmljZUxpc3Q6IHt9LFxyXG4gIGFkZHJlc3NMaXN0OiBbXSxcclxuICBhbGVydFN0YXR1czogZmFsc2UsXHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBMT0dJTl9NT0RBTF9TVEFUVVMgPSAnTE9HSU5fTU9EQUxfU1RBVFVTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfTU9EQUxfU1RBVFVTID0gJ1NJR05fVVBfTU9EQUxfU1RBVFVTJztcclxuZXhwb3J0IGNvbnN0IEFMRVJUX0RJQUxPRyA9ICdBTEVSVF9ESUFMT0cnO1xyXG5leHBvcnQgY29uc3QgRVJST1JfVElUTEUgPSAnRVJST1JfVElUTEUnO1xyXG5leHBvcnQgY29uc3QgRVJST1JfREVTQ1JJUFRJT04gPSAnRVJST1JfREVTQ1JJUFRJT04nO1xyXG5leHBvcnQgY29uc3QgQ0FURUdPUllfTElTVCA9ICdDQVRFR09SWV9MSVNUJztcclxuZXhwb3J0IGNvbnN0IEdST1VQU19MSVNUID0gJ0dST1VQU19MSVNUJztcclxuZXhwb3J0IGNvbnN0IFNFUlZJQ0VfTElTVCA9ICdTRVJWSUNFX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgQk9PS0lOR19BTEVSVF9TVEFUVVMgPSAnQk9PS0lOR19BTEVSVF9TVEFUVVMnO1xyXG5leHBvcnQgY29uc3QgQVVUSF9TVEFUVVMgPSAnQVVUSF9TVEFUVVMnO1xyXG5leHBvcnQgY29uc3QgTE9BRElOR19CQVJfU1RBVFVTID0gJ0xPQURJTkdfQkFSX1NUQVRVUyc7XHJcbmV4cG9ydCBjb25zdCBDTE9TRV9NQVAgPSAnQ0xPU0VfTUFQJztcclxuZXhwb3J0IGNvbnN0IEFERFJFU1NfTElTVCA9ICdBRERSRVNTX0xJU1QnO1xyXG5leHBvcnQgY29uc3QgU0VMRUNURURfQUREUkVTU19JRCA9ICdTRUxFQ1RFRF9BRERSRVNTX0lEJztcclxuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX0FERFJFU1NfREFUQSA9ICdTRUxFQ1RFRF9BRERSRVNTX0RBVEEnO1xyXG5leHBvcnQgY29uc3QgUFVSQ0hBU0VfREFUQSA9ICdQVVJDSEFTRV9EQVRBJztcclxuZXhwb3J0IGNvbnN0IFNDSEVEVUxFRF9CT09LID0gJ1NDSEVEVUxFRF9CT09LJztcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9hcHAvY29tcG9uZW50cy90aGVtZXMnO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gJy4uL2FwcC9saWIvdXRpbGl0eS9zdG9yZSc7XHJcbmltcG9ydCB7IHJlZHVjZXIgfSBmcm9tICcuLi9hcHAvbGliL3V0aWxpdHkvcmVkdWNlcic7XHJcbmltcG9ydCAncmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdsb2JhbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcbmxldCBzb2NrZXQ7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtnbG9iYWxTdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBzdG9yZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKTtcclxuICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICAgIGlmICghc29ja2V0KSB7XHJcbiAgICAgIC8vIHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MCcpO1xyXG4gICAgICBzb2NrZXQgPSBpby5jb25uZWN0KCdodHRwczovL3NwaWR5LXNlcnZlci5oZXJva3VhcHAuY29tLycpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3sgc3RhdGU6IGdsb2JhbFN0YXRlLCBhbGxEaXNwYXRjaDogZGlzcGF0Y2ggfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cclxuICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xLG1pbmltdW0tc2NhbGU9MSxtYXhpbXVtLXNjYWxlPTEsdXNlci1zY2FsYWJsZT1ub1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkRlc2NyaXB0aW9uXCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJLZXl3b3Jkc1wiIC8+XHJcbiAgICAgICAgICA8dGl0bGU+TmV4dC5qcyBQV0EgRXhhbXBsZTwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9pY29ucy9mYXZpY29uLTE2eDE2LnBuZ1wiXHJcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgaHJlZj1cIi9pY29ucy9mYXZpY29uLTMyeDMyLnBuZ1wiXHJcbiAgICAgICAgICAgIHJlbD1cImljb25cIlxyXG4gICAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL3N0YXRpYy9pbWFnZXMvYmlsbC5wbmdcIiAvPlxyXG4gICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMzMTdFRkJcIiAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcblxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JlZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW8tY2xpZW50XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=