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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Create a theme instance.\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  palette: {\n    primary: {\n      main: _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_2___default.a[700]\n    },\n    secondary: {\n      main: '#19857b'\n    },\n    error: {\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"red\"].A400\n    },\n    background: {\n      default: '#fff'\n    }\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90aGVtZXMvaW5kZXguanM/ODY2MyJdLCJuYW1lcyI6WyJ0aGVtZSIsImNyZWF0ZU11aVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwiZ3JlZW4iLCJzZWNvbmRhcnkiLCJlcnJvciIsInJlZCIsIkE0MDAiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0NBR0E7O0FBQ0EsTUFBTUEsS0FBSyxHQUFHQywrRUFBYyxDQUFDO0FBQzNCQyxTQUFPLEVBQUU7QUFDUEMsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRUMscUVBQUssQ0FBQyxHQUFEO0FBREosS0FERjtBQUlQQyxhQUFTLEVBQUU7QUFDVEYsVUFBSSxFQUFFO0FBREcsS0FKSjtBQU9QRyxTQUFLLEVBQUU7QUFDTEgsVUFBSSxFQUFFSSw0REFBRyxDQUFDQztBQURMLEtBUEE7QUFVUEMsY0FBVSxFQUFFO0FBQ1ZDLGFBQU8sRUFBRTtBQURDO0FBVkw7QUFEa0IsQ0FBRCxDQUE1QjtBQWlCZVgsb0VBQWYiLCJmaWxlIjoiLi9hcHAvY29tcG9uZW50cy90aGVtZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IHJlZCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XHJcbmltcG9ydCBncmVlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JlZW4nO1xyXG5cclxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgbWFpbjogZ3JlZW5bNzAwXSxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgbWFpbjogJyMxOTg1N2InLFxyXG4gICAgfSxcclxuICAgIGVycm9yOiB7XHJcbiAgICAgIG1haW46IHJlZC5BNDAwLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJyNmZmYnLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/components/themes/index.js\n");

/***/ }),

/***/ "./app/lib/utility/reducer.js":
/*!************************************!*\
  !*** ./app/lib/utility/reducer.js ***!
  \************************************/
/*! exports provided: reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reducer\", function() { return reducer; });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ \"./app/lib/utility/type.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"SIGN_UP_MODAL_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        signUpStatus: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"LOGIN_MODAL_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loginStatus: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"ALERT_DIALOG\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        alertStatus: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"ERROR_DESCRIPTION\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        errorDescription: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"ERROR_TITLE\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        errorTitle: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"CATEGORY_LIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        categoryList: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"SERVICE_LIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        serviceList: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"GROUPS_LIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        groupList: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"BOOKING_ALERT_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        bookingAlertStatus: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"AUTH_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        auth: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"LOADING_BAR_STATUS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loadingBarStatus: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"CLOSE_MAP\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        closeMap: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"ADDRESS_LIST\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        addressList: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"SELECTED_ADDRESS_ID\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        selectedAddressId: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"SELECTED_ADDRESS_DATA\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        selectedAddressData: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"PURCHASE_DATA\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        purchaseData: action.value\n      });\n\n    case _type__WEBPACK_IMPORTED_MODULE_0__[\"SCHEDULED_BOOK\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        scheduleData: action.value\n      });\n\n    default:\n      return state;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGliL3V0aWxpdHkvcmVkdWNlci5qcz9hZmJlIl0sIm5hbWVzIjpbInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJTSUdOX1VQX01PREFMX1NUQVRVUyIsInNpZ25VcFN0YXR1cyIsInZhbHVlIiwiTE9HSU5fTU9EQUxfU1RBVFVTIiwibG9naW5TdGF0dXMiLCJBTEVSVF9ESUFMT0ciLCJhbGVydFN0YXR1cyIsIkVSUk9SX0RFU0NSSVBUSU9OIiwiZXJyb3JEZXNjcmlwdGlvbiIsIkVSUk9SX1RJVExFIiwiZXJyb3JUaXRsZSIsIkNBVEVHT1JZX0xJU1QiLCJjYXRlZ29yeUxpc3QiLCJTRVJWSUNFX0xJU1QiLCJzZXJ2aWNlTGlzdCIsIkdST1VQU19MSVNUIiwiZ3JvdXBMaXN0IiwiQk9PS0lOR19BTEVSVF9TVEFUVVMiLCJib29raW5nQWxlcnRTdGF0dXMiLCJBVVRIX1NUQVRVUyIsImF1dGgiLCJMT0FESU5HX0JBUl9TVEFUVVMiLCJsb2FkaW5nQmFyU3RhdHVzIiwiQ0xPU0VfTUFQIiwiY2xvc2VNYXAiLCJBRERSRVNTX0xJU1QiLCJhZGRyZXNzTGlzdCIsIlNFTEVDVEVEX0FERFJFU1NfSUQiLCJzZWxlY3RlZEFkZHJlc3NJZCIsIlNFTEVDVEVEX0FERFJFU1NfREFUQSIsInNlbGVjdGVkQWRkcmVzc0RhdGEiLCJQVVJDSEFTRV9EQVRBIiwicHVyY2hhc2VEYXRhIiwiU0NIRURVTEVEX0JPT0siLCJzY2hlZHVsZURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBb0JPLE1BQU1BLE9BQU8sR0FBRyxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDeEMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS0MsMERBQUw7QUFDRSw2Q0FBWUgsS0FBWjtBQUFtQkksb0JBQVksRUFBRUgsTUFBTSxDQUFDSTtBQUF4Qzs7QUFDRixTQUFLQyx3REFBTDtBQUNFLDZDQUFZTixLQUFaO0FBQW1CTyxtQkFBVyxFQUFFTixNQUFNLENBQUNJO0FBQXZDOztBQUNGLFNBQUtHLGtEQUFMO0FBQ0UsNkNBQVlSLEtBQVo7QUFBbUJTLG1CQUFXLEVBQUVSLE1BQU0sQ0FBQ0k7QUFBdkM7O0FBQ0YsU0FBS0ssdURBQUw7QUFDRSw2Q0FBWVYsS0FBWjtBQUFtQlcsd0JBQWdCLEVBQUVWLE1BQU0sQ0FBQ0k7QUFBNUM7O0FBQ0YsU0FBS08saURBQUw7QUFDRSw2Q0FBWVosS0FBWjtBQUFtQmEsa0JBQVUsRUFBRVosTUFBTSxDQUFDSTtBQUF0Qzs7QUFDRixTQUFLUyxtREFBTDtBQUNFLDZDQUFZZCxLQUFaO0FBQW1CZSxvQkFBWSxFQUFFZCxNQUFNLENBQUNJO0FBQXhDOztBQUNGLFNBQUtXLGtEQUFMO0FBQ0UsNkNBQVloQixLQUFaO0FBQW1CaUIsbUJBQVcsRUFBRWhCLE1BQU0sQ0FBQ0k7QUFBdkM7O0FBQ0YsU0FBS2EsaURBQUw7QUFDRSw2Q0FBWWxCLEtBQVo7QUFBbUJtQixpQkFBUyxFQUFFbEIsTUFBTSxDQUFDSTtBQUFyQzs7QUFDRixTQUFLZSwwREFBTDtBQUNFLDZDQUFZcEIsS0FBWjtBQUFtQnFCLDBCQUFrQixFQUFFcEIsTUFBTSxDQUFDSTtBQUE5Qzs7QUFDRixTQUFLaUIsaURBQUw7QUFDRSw2Q0FBWXRCLEtBQVo7QUFBbUJ1QixZQUFJLEVBQUV0QixNQUFNLENBQUNJO0FBQWhDOztBQUNGLFNBQUttQix3REFBTDtBQUNFLDZDQUFZeEIsS0FBWjtBQUFtQnlCLHdCQUFnQixFQUFFeEIsTUFBTSxDQUFDSTtBQUE1Qzs7QUFDRixTQUFLcUIsK0NBQUw7QUFDRSw2Q0FBWTFCLEtBQVo7QUFBbUIyQixnQkFBUSxFQUFFMUIsTUFBTSxDQUFDSTtBQUFwQzs7QUFDRixTQUFLdUIsa0RBQUw7QUFDRSw2Q0FBWTVCLEtBQVo7QUFBbUI2QixtQkFBVyxFQUFFNUIsTUFBTSxDQUFDSTtBQUF2Qzs7QUFDRixTQUFLeUIseURBQUw7QUFDRSw2Q0FBWTlCLEtBQVo7QUFBbUIrQix5QkFBaUIsRUFBRTlCLE1BQU0sQ0FBQ0k7QUFBN0M7O0FBQ0YsU0FBSzJCLDJEQUFMO0FBQ0UsNkNBQVloQyxLQUFaO0FBQW1CaUMsMkJBQW1CLEVBQUVoQyxNQUFNLENBQUNJO0FBQS9DOztBQUNGLFNBQUs2QixtREFBTDtBQUNFLDZDQUFZbEMsS0FBWjtBQUFtQm1DLG9CQUFZLEVBQUVsQyxNQUFNLENBQUNJO0FBQXhDOztBQUNGLFNBQUsrQixvREFBTDtBQUNFLDZDQUFZcEMsS0FBWjtBQUFtQnFDLG9CQUFZLEVBQUVwQyxNQUFNLENBQUNJO0FBQXhDOztBQUNGO0FBQ0UsYUFBT0wsS0FBUDtBQXBDSjtBQXNDRCxDQXZDTSIsImZpbGUiOiIuL2FwcC9saWIvdXRpbGl0eS9yZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTE9HSU5fTU9EQUxfU1RBVFVTLFxuICBTSUdOX1VQX01PREFMX1NUQVRVUyxcbiAgQ0xPU0VfTUFQLFxuICBBRERSRVNTX0xJU1QsXG4gIFNFTEVDVEVEX0FERFJFU1NfSUQsXG4gIEFMRVJUX0RJQUxPRyxcbiAgRVJST1JfVElUTEUsXG4gIEVSUk9SX0RFU0NSSVBUSU9OLFxuICBMT0FESU5HX0JBUl9TVEFUVVMsXG4gIFNFTEVDVEVEX0FERFJFU1NfREFUQSxcbiAgQ0FURUdPUllfTElTVCxcbiAgU0VSVklDRV9MSVNULFxuICBHUk9VUFNfTElTVCxcbiAgQk9PS0lOR19BTEVSVF9TVEFUVVMsXG4gIEFVVEhfU1RBVFVTLFxuICBQVVJDSEFTRV9EQVRBLFxuICBTQ0hFRFVMRURfQk9PSyxcbn0gZnJvbSAnLi90eXBlJztcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTSUdOX1VQX01PREFMX1NUQVRVUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaWduVXBTdGF0dXM6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgTE9HSU5fTU9EQUxfU1RBVFVTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvZ2luU3RhdHVzOiBhY3Rpb24udmFsdWUgfTtcbiAgICBjYXNlIEFMRVJUX0RJQUxPRzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbGVydFN0YXR1czogYWN0aW9uLnZhbHVlIH07XG4gICAgY2FzZSBFUlJPUl9ERVNDUklQVElPTjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBlcnJvckRlc2NyaXB0aW9uOiBhY3Rpb24udmFsdWUgfTtcbiAgICBjYXNlIEVSUk9SX1RJVExFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yVGl0bGU6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgQ0FURUdPUllfTElTVDpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXRlZ29yeUxpc3Q6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgU0VSVklDRV9MSVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlcnZpY2VMaXN0OiBhY3Rpb24udmFsdWUgfTtcbiAgICBjYXNlIEdST1VQU19MSVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGdyb3VwTGlzdDogYWN0aW9uLnZhbHVlIH07XG4gICAgY2FzZSBCT09LSU5HX0FMRVJUX1NUQVRVUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBib29raW5nQWxlcnRTdGF0dXM6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgQVVUSF9TVEFUVVM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgYXV0aDogYWN0aW9uLnZhbHVlIH07XG4gICAgY2FzZSBMT0FESU5HX0JBUl9TVEFUVVM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ0JhclN0YXR1czogYWN0aW9uLnZhbHVlIH07XG4gICAgY2FzZSBDTE9TRV9NQVA6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2xvc2VNYXA6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgQUREUkVTU19MSVNUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGFkZHJlc3NMaXN0OiBhY3Rpb24udmFsdWUgfTtcbiAgICBjYXNlIFNFTEVDVEVEX0FERFJFU1NfSUQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VsZWN0ZWRBZGRyZXNzSWQ6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgU0VMRUNURURfQUREUkVTU19EQVRBOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNlbGVjdGVkQWRkcmVzc0RhdGE6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgUFVSQ0hBU0VfREFUQTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBwdXJjaGFzZURhdGE6IGFjdGlvbi52YWx1ZSB9O1xuICAgIGNhc2UgU0NIRURVTEVEX0JPT0s6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2NoZWR1bGVEYXRhOiBhY3Rpb24udmFsdWUgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/lib/utility/reducer.js\n");

/***/ }),

/***/ "./app/lib/utility/store.js":
/*!**********************************!*\
  !*** ./app/lib/utility/store.js ***!
  \**********************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nconst store = {\n  signUpStatus: false,\n  loginStatus: false,\n  categoryList: {},\n  serviceList: {},\n  addressList: [],\n  alertStatus: false\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGliL3V0aWxpdHkvc3RvcmUuanM/OWZiMiJdLCJuYW1lcyI6WyJzdG9yZSIsInNpZ25VcFN0YXR1cyIsImxvZ2luU3RhdHVzIiwiY2F0ZWdvcnlMaXN0Iiwic2VydmljZUxpc3QiLCJhZGRyZXNzTGlzdCIsImFsZXJ0U3RhdHVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsS0FBSyxHQUFHO0FBQ25CQyxjQUFZLEVBQUUsS0FESztBQUVuQkMsYUFBVyxFQUFFLEtBRk07QUFHbkJDLGNBQVksRUFBRSxFQUhLO0FBSW5CQyxhQUFXLEVBQUUsRUFKTTtBQUtuQkMsYUFBVyxFQUFFLEVBTE07QUFNbkJDLGFBQVcsRUFBRTtBQU5NLENBQWQiLCJmaWxlIjoiLi9hcHAvbGliL3V0aWxpdHkvc3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3RvcmUgPSB7XG4gIHNpZ25VcFN0YXR1czogZmFsc2UsXG4gIGxvZ2luU3RhdHVzOiBmYWxzZSxcbiAgY2F0ZWdvcnlMaXN0OiB7fSxcbiAgc2VydmljZUxpc3Q6IHt9LFxuICBhZGRyZXNzTGlzdDogW10sXG4gIGFsZXJ0U3RhdHVzOiBmYWxzZSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/lib/utility/store.js\n");

/***/ }),

/***/ "./app/lib/utility/type.js":
/*!*********************************!*\
  !*** ./app/lib/utility/type.js ***!
  \*********************************/
/*! exports provided: LOGIN_MODAL_STATUS, SIGN_UP_MODAL_STATUS, ALERT_DIALOG, ERROR_TITLE, ERROR_DESCRIPTION, CATEGORY_LIST, GROUPS_LIST, SERVICE_LIST, BOOKING_ALERT_STATUS, AUTH_STATUS, LOADING_BAR_STATUS, CLOSE_MAP, ADDRESS_LIST, SELECTED_ADDRESS_ID, SELECTED_ADDRESS_DATA, PURCHASE_DATA, SCHEDULED_BOOK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN_MODAL_STATUS\", function() { return LOGIN_MODAL_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_MODAL_STATUS\", function() { return SIGN_UP_MODAL_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ALERT_DIALOG\", function() { return ALERT_DIALOG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_TITLE\", function() { return ERROR_TITLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERROR_DESCRIPTION\", function() { return ERROR_DESCRIPTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CATEGORY_LIST\", function() { return CATEGORY_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GROUPS_LIST\", function() { return GROUPS_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SERVICE_LIST\", function() { return SERVICE_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BOOKING_ALERT_STATUS\", function() { return BOOKING_ALERT_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH_STATUS\", function() { return AUTH_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOADING_BAR_STATUS\", function() { return LOADING_BAR_STATUS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CLOSE_MAP\", function() { return CLOSE_MAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADDRESS_LIST\", function() { return ADDRESS_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SELECTED_ADDRESS_ID\", function() { return SELECTED_ADDRESS_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SELECTED_ADDRESS_DATA\", function() { return SELECTED_ADDRESS_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PURCHASE_DATA\", function() { return PURCHASE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SCHEDULED_BOOK\", function() { return SCHEDULED_BOOK; });\nconst LOGIN_MODAL_STATUS = 'LOGIN_MODAL_STATUS';\nconst SIGN_UP_MODAL_STATUS = 'SIGN_UP_MODAL_STATUS';\nconst ALERT_DIALOG = 'ALERT_DIALOG';\nconst ERROR_TITLE = 'ERROR_TITLE';\nconst ERROR_DESCRIPTION = 'ERROR_DESCRIPTION';\nconst CATEGORY_LIST = 'CATEGORY_LIST';\nconst GROUPS_LIST = 'GROUPS_LIST';\nconst SERVICE_LIST = 'SERVICE_LIST';\nconst BOOKING_ALERT_STATUS = 'BOOKING_ALERT_STATUS';\nconst AUTH_STATUS = 'AUTH_STATUS';\nconst LOADING_BAR_STATUS = 'LOADING_BAR_STATUS';\nconst CLOSE_MAP = 'CLOSE_MAP';\nconst ADDRESS_LIST = 'ADDRESS_LIST';\nconst SELECTED_ADDRESS_ID = 'SELECTED_ADDRESS_ID';\nconst SELECTED_ADDRESS_DATA = 'SELECTED_ADDRESS_DATA';\nconst PURCHASE_DATA = 'PURCHASE_DATA';\nconst SCHEDULED_BOOK = 'SCHEDULED_BOOK';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbGliL3V0aWxpdHkvdHlwZS5qcz9kYTRlIl0sIm5hbWVzIjpbIkxPR0lOX01PREFMX1NUQVRVUyIsIlNJR05fVVBfTU9EQUxfU1RBVFVTIiwiQUxFUlRfRElBTE9HIiwiRVJST1JfVElUTEUiLCJFUlJPUl9ERVNDUklQVElPTiIsIkNBVEVHT1JZX0xJU1QiLCJHUk9VUFNfTElTVCIsIlNFUlZJQ0VfTElTVCIsIkJPT0tJTkdfQUxFUlRfU1RBVFVTIiwiQVVUSF9TVEFUVVMiLCJMT0FESU5HX0JBUl9TVEFUVVMiLCJDTE9TRV9NQVAiLCJBRERSRVNTX0xJU1QiLCJTRUxFQ1RFRF9BRERSRVNTX0lEIiwiU0VMRUNURURfQUREUkVTU19EQVRBIiwiUFVSQ0hBU0VfREFUQSIsIlNDSEVEVUxFRF9CT09LIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxzQkFBN0I7QUFDQSxNQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsY0FBckI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxNQUFNQyxxQkFBcUIsR0FBRyx1QkFBOUI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsZUFBdEI7QUFDQSxNQUFNQyxjQUFjLEdBQUcsZ0JBQXZCIiwiZmlsZSI6Ii4vYXBwL2xpYi91dGlsaXR5L3R5cGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9HSU5fTU9EQUxfU1RBVFVTID0gJ0xPR0lOX01PREFMX1NUQVRVUyc7XG5leHBvcnQgY29uc3QgU0lHTl9VUF9NT0RBTF9TVEFUVVMgPSAnU0lHTl9VUF9NT0RBTF9TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IEFMRVJUX0RJQUxPRyA9ICdBTEVSVF9ESUFMT0cnO1xuZXhwb3J0IGNvbnN0IEVSUk9SX1RJVExFID0gJ0VSUk9SX1RJVExFJztcbmV4cG9ydCBjb25zdCBFUlJPUl9ERVNDUklQVElPTiA9ICdFUlJPUl9ERVNDUklQVElPTic7XG5leHBvcnQgY29uc3QgQ0FURUdPUllfTElTVCA9ICdDQVRFR09SWV9MSVNUJztcbmV4cG9ydCBjb25zdCBHUk9VUFNfTElTVCA9ICdHUk9VUFNfTElTVCc7XG5leHBvcnQgY29uc3QgU0VSVklDRV9MSVNUID0gJ1NFUlZJQ0VfTElTVCc7XG5leHBvcnQgY29uc3QgQk9PS0lOR19BTEVSVF9TVEFUVVMgPSAnQk9PS0lOR19BTEVSVF9TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IEFVVEhfU1RBVFVTID0gJ0FVVEhfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBMT0FESU5HX0JBUl9TVEFUVVMgPSAnTE9BRElOR19CQVJfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBDTE9TRV9NQVAgPSAnQ0xPU0VfTUFQJztcbmV4cG9ydCBjb25zdCBBRERSRVNTX0xJU1QgPSAnQUREUkVTU19MSVNUJztcbmV4cG9ydCBjb25zdCBTRUxFQ1RFRF9BRERSRVNTX0lEID0gJ1NFTEVDVEVEX0FERFJFU1NfSUQnO1xuZXhwb3J0IGNvbnN0IFNFTEVDVEVEX0FERFJFU1NfREFUQSA9ICdTRUxFQ1RFRF9BRERSRVNTX0RBVEEnO1xuZXhwb3J0IGNvbnN0IFBVUkNIQVNFX0RBVEEgPSAnUFVSQ0hBU0VfREFUQSc7XG5leHBvcnQgY29uc3QgU0NIRURVTEVEX0JPT0sgPSAnU0NIRURVTEVEX0JPT0snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/lib/utility/type.js\n");

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-multi-carousel/lib/styles.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: GlobalContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalContext\", function() { return GlobalContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyApp; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ \"@material-ui/core/CssBaseline\");\n/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_components_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/components/themes */ \"./app/components/themes/index.js\");\n/* harmony import */ var _app_lib_utility_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/lib/utility/store */ \"./app/lib/utility/store.js\");\n/* harmony import */ var _app_lib_utility_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/lib/utility/reducer */ \"./app/lib/utility/reducer.js\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\nvar _jsxFileName = \"/Users/apple/Desktop/mydir/projects/personal/spidy/fe_2/spidy_fe/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\nconst GlobalContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();\nlet socket;\nfunction MyApp(props) {\n  const {\n    Component,\n    pageProps\n  } = props;\n  const {\n    0: globalState,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(_app_lib_utility_reducer__WEBPACK_IMPORTED_MODULE_9__[\"reducer\"], _app_lib_utility_store__WEBPACK_IMPORTED_MODULE_8__[\"store\"]);\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {\n    // Remove the server-side injected CSS.\n    const jssStyles = document.querySelector('#jss-server-side');\n\n    if (jssStyles) {\n      jssStyles.parentElement.removeChild(jssStyles);\n    }\n\n    if (!socket) {\n      // socket = io.connect('http://localhost:8080');\n      socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3___default.a.connect('https://spidy-server.herokuapp.com/');\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GlobalContext.Provider, {\n      value: {\n        state: globalState,\n        allDispatch: dispatch\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n          children: \"My page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n          name: \"viewport\",\n          content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"ThemeProvider\"], {\n        theme: _app_components_themes__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)\n  }, void 0, false);\n}\nMyApp.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.elementType.isRequired,\n  // eslint-disable-next-line react/forbid-prop-types\n  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiR2xvYmFsQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInNvY2tldCIsIk15QXBwIiwicHJvcHMiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnbG9iYWxTdGF0ZSIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInJlZHVjZXIiLCJzdG9yZSIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsImlvIiwiY29ubmVjdCIsInN0YXRlIiwiYWxsRGlzcGF0Y2giLCJ0aGVtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImVsZW1lbnRUeXBlIiwiaXNSZXF1aXJlZCIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGFBQWEsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sRUFBdEI7QUFDUCxJQUFJQyxNQUFKO0FBRWUsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQ25DLFFBQU07QUFBRUMsYUFBRjtBQUFhQztBQUFiLE1BQTJCRixLQUFqQztBQUNBLFFBQU07QUFBQSxPQUFDRyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUEwQkMsd0RBQVUsQ0FBQ0MsZ0VBQUQsRUFBVUMsNERBQVYsQ0FBMUM7QUFFQVgsOENBQUssQ0FBQ1ksU0FBTixDQUFnQixNQUFNO0FBQ3BCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWxCOztBQUNBLFFBQUlGLFNBQUosRUFBZTtBQUNiQSxlQUFTLENBQUNHLGFBQVYsQ0FBd0JDLFdBQXhCLENBQW9DSixTQUFwQztBQUNEOztBQUNELFFBQUksQ0FBQ1gsTUFBTCxFQUFhO0FBQ1g7QUFDQUEsWUFBTSxHQUFHZ0IsdURBQUUsQ0FBQ0MsT0FBSCxDQUFXLHFDQUFYLENBQVQ7QUFDRDtBQUNGLEdBVkQsRUFVRyxFQVZIO0FBWUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxhQUFELENBQWUsUUFBZjtBQUNFLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUViLFdBQVQ7QUFBc0JjLG1CQUFXLEVBQUViO0FBQW5DLE9BRFQ7QUFBQSw4QkFHRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBVUUscUVBQUMsc0VBQUQ7QUFBZSxhQUFLLEVBQUVjLDhEQUF0QjtBQUFBLGdDQUNFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFHRSxxRUFBQyxTQUFELG9CQUFlaEIsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBb0JEO0FBRURILEtBQUssQ0FBQ29CLFNBQU4sR0FBa0I7QUFDaEJsQixXQUFTLEVBQUVtQixpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURqQjtBQUVoQjtBQUNBcEIsV0FBUyxFQUFFa0IsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQ7QUFIWixDQUFsQiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IGlvIGZyb20gJ3NvY2tldC5pby1jbGllbnQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2FwcC9jb21wb25lbnRzL3RoZW1lcyc7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi4vYXBwL2xpYi91dGlsaXR5L3N0b3JlJztcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gJy4uL2FwcC9saWIvdXRpbGl0eS9yZWR1Y2VyJztcclxuaW1wb3J0ICdyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgR2xvYmFsQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcclxubGV0IHNvY2tldDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHByb3BzKSB7XHJcbiAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgW2dsb2JhbFN0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHN0b3JlKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxyXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzb2NrZXQpIHtcclxuICAgICAgLy8gc29ja2V0ID0gaW8uY29ubmVjdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XHJcbiAgICAgIHNvY2tldCA9IGlvLmNvbm5lY3QoJ2h0dHBzOi8vc3BpZHktc2VydmVyLmhlcm9rdWFwcC5jb20vJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17eyBzdGF0ZTogZ2xvYmFsU3RhdGUsIGFsbERpc3BhdGNoOiBkaXNwYXRjaCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+TXkgcGFnZTwvdGl0bGU+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcblxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgPC9HbG9iYWxDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

eval("module.exports = require(\"@material-ui/core/CssBaseline\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiP2U2N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/CssBaseline\n");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnNcIj83ZTM4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors\n");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/green\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JlZW5cIj8wZGVjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmVlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9ncmVlblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/colors/green\n");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIj80MTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core/styles\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io-client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW8tY2xpZW50XCI/OGJjNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzb2NrZXQuaW8tY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvLWNsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///socket.io-client\n");

/***/ })

/******/ });