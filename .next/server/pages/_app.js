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

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return /* binding */ GlobalContext; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "socket.io-client"
var external_socket_io_client_ = __webpack_require__("pI2v");
var external_socket_io_client_default = /*#__PURE__*/__webpack_require__.n(external_socket_io_client_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: ./app/components/themes/index.js
var themes = __webpack_require__("hmNG");

// CONCATENATED MODULE: ./app/lib/utility/store.js
const store = {
  signUpStatus: false,
  loginStatus: false,
  categoryList: {},
  serviceList: {},
  addressList: [],
  alertStatus: false
};
// EXTERNAL MODULE: ./app/lib/utility/type.js
var type = __webpack_require__("2k6V");

// CONCATENATED MODULE: ./app/lib/utility/reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const reducer = (state, action) => {
  switch (action.type) {
    case type["q" /* SIGN_UP_MODAL_STATUS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        signUpStatus: action.value
      });

    case type["k" /* LOGIN_MODAL_STATUS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loginStatus: action.value
      });

    case type["b" /* ALERT_DIALOG */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        alertStatus: action.value
      });

    case type["g" /* ERROR_DESCRIPTION */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorDescription: action.value
      });

    case type["h" /* ERROR_TITLE */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        errorTitle: action.value
      });

    case type["e" /* CATEGORY_LIST */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        categoryList: action.value
      });

    case type["p" /* SERVICE_LIST */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        serviceList: action.value
      });

    case type["i" /* GROUPS_LIST */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        groupList: action.value
      });

    case type["d" /* BOOKING_ALERT_STATUS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bookingAlertStatus: action.value
      });

    case type["c" /* AUTH_STATUS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        auth: action.value
      });

    case type["j" /* LOADING_BAR_STATUS */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingBarStatus: action.value
      });

    case type["f" /* CLOSE_MAP */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        closeMap: action.value
      });

    case type["a" /* ADDRESS_LIST */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        addressList: action.value
      });

    case type["o" /* SELECTED_ADDRESS_ID */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedAddressId: action.value
      });

    case type["n" /* SELECTED_ADDRESS_DATA */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedAddressData: action.value
      });

    case type["l" /* PURCHASE_DATA */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        purchaseData: action.value
      });

    case type["m" /* SCHEDULED_BOOK */]:
      return _objectSpread(_objectSpread({}, state), {}, {
        scheduleData: action.value
      });

    default:
      return state;
  }
};
// EXTERNAL MODULE: ./node_modules/react-multi-carousel/lib/styles.css
var styles = __webpack_require__("VLDe");

// CONCATENATED MODULE: ./pages/_app.js




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const GlobalContext = /*#__PURE__*/external_react_default.a.createContext();
let socket;
function MyApp(props) {
  const {
    Component,
    pageProps
  } = props;
  const {
    0: globalState,
    1: dispatch
  } = Object(external_react_["useReducer"])(reducer, store);
  external_react_default.a.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    if (!socket) {
      // socket = io.connect('http://localhost:8080');
      socket = external_socket_io_client_default.a.connect('https://spidy-server.herokuapp.com/');
    }
  }, []);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(GlobalContext.Provider, {
      value: {
        state: globalState,
        allDispatch: dispatch
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          charSet: "utf-8"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          httpEquiv: "X-UA-Compatible",
          content: "IE=edge"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "viewport",
          content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "description",
          content: "Description"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "keywords",
          content: "Keywords"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
          children: "Next.js PWA Example"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          rel: "manifest",
          href: "/manifest.json"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          href: "/icons/favicon-16x16.png",
          rel: "icon",
          type: "image/png",
          sizes: "16x16"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          href: "/icons/favicon-32x32.png",
          rel: "icon",
          type: "image/png",
          sizes: "32x32"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
          rel: "apple-touch-icon",
          href: "/static/images/bill.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
          name: "theme-color",
          content: "#317EFB"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
        theme: themes["a" /* default */],
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CssBaseline_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))]
      })]
    })
  });
}

/***/ }),

/***/ "2k6V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOGIN_MODAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return SIGN_UP_MODAL_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ALERT_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ERROR_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ERROR_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CATEGORY_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GROUPS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return SERVICE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BOOKING_ALERT_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AUTH_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOADING_BAR_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CLOSE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDRESS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SELECTED_ADDRESS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return SELECTED_ADDRESS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PURCHASE_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return SCHEDULED_BOOK; });
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

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "VLDe":
/***/ (function(module, exports) {



/***/ }),

/***/ "Zo8Y":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hmNG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zo8Y");
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
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "pI2v":
/***/ (function(module, exports) {

module.exports = require("socket.io-client");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });