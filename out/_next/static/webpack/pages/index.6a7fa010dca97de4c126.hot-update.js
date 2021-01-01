webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _coinswitch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coinswitch.js */ \"./pages/coinswitch.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n // import Nevbar from './nevbar.js';\n\n\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.state.coin({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin],\n          coin: data.target.value\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: '0',\n      data: [],\n      coin: '',\n      show: false\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    }, 1000);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n          rel: \"shortcut icon\",\n          href: \"favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n        children: \"Akshay Vadhers\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n        children: \"app built with next.js,react.js,node.js and express\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 67\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n        type: \"select\",\n        name: \"select\",\n        onChange: this.select,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n          value: \"19\",\n          children: \"BTC\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n          value: \"40\",\n          children: \"XRP\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 1\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n        variant: \"primary\",\n        onClick: this.refresh,\n        children: \"refresh\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 1\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        name: this.state.data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n        children: this.state.show ? this.Pop() : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 5\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzdGF0ZSIsImNvaW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJzZXRTdGF0ZSIsInBhaXIiLCJidXkiLCJwcmljZSIsInNob3ciLCJjb21wb25lbnREaWRNb3VudCIsInNldEludGVydmFsIiwicmVuZGVyIiwic2VsZWN0IiwicmVmcmVzaCIsIlBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsTUFBSjtBQUNBLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQXpCLEMsQ0FDQTs7QUFDQSxNQUFNQyxLQUFOLFNBQW9CQyw0Q0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUNsQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsOEdBWVhDLElBQUQsSUFBUTtBQUNiLFdBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQjtBQUFDQSxZQUFJLEVBQUNGLElBQUksQ0FBQ0csTUFBTCxDQUFZQztBQUFsQixPQUFoQjtBQUNFQyxXQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNDQyxJQURELENBQ01DLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRGIsRUFFQ0YsSUFGRCxDQUdHRyxNQUFELElBQVk7QUFDVixhQUFLQyxRQUFMLENBQWM7QUFBQ1YsY0FBSSxFQUFHUyxNQUFNLENBQUMsS0FBS1IsS0FBTCxDQUFXQyxJQUFaLENBQWQ7QUFDWkEsY0FBSSxFQUFDRixJQUFJLENBQUNHLE1BQUwsQ0FBWUM7QUFETCxTQUFkO0FBS0QsT0FUSDtBQVdILEtBekJrQjs7QUFBQSwyR0EwQmYsbUJBRUYscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRixxRUFBQyxzREFBRDtBQUFBLGtCQUNHLEtBQUtILEtBQUwsQ0FBV0QsSUFBWCxDQUFnQlc7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURFLGVBSUYscUVBQUMsb0RBQUQ7QUFBQSxpQ0FDYSxLQUFLVixLQUFMLENBQVdELElBQVgsQ0FBZ0JZLEdBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTVCaUI7O0FBRWpCLFNBQUtYLEtBQUwsR0FBYTtBQUNYWSxXQUFLLEVBQUMsR0FESztBQUVYYixVQUFJLEVBQUMsRUFGTTtBQUdYRSxVQUFJLEVBQUMsRUFITTtBQUlYWSxVQUFJLEVBQUM7QUFKTSxLQUFiLENBRmlCLENBUWpCO0FBR0Q7O0FBMEJEQyxtQkFBaUIsR0FBRztBQUNsQixTQUFLTCxRQUFMLENBQWM7QUFBQ1IsVUFBSSxFQUFDO0FBQU4sS0FBZDtBQUNBYyxlQUFXLENBQUMsTUFBTTtBQUNoQlgsV0FBSyxDQUFDLHNDQUFELENBQUwsQ0FDQ0MsSUFERCxDQUNNQyxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQURiLEVBRUNGLElBRkQsQ0FHR0csTUFBRCxJQUFZO0FBQ1YsYUFBS0MsUUFBTCxDQUFjO0FBQUNWLGNBQUksRUFBR1MsTUFBTSxDQUFDLEtBQUtSLEtBQUwsQ0FBV0MsSUFBWjtBQUFkLFNBQWQ7QUFHRCxPQVBIO0FBUUQsS0FUVSxFQVNSLElBVFEsQ0FBWDtBQVlEOztBQUNIZSxRQUFNLEdBQUU7QUFFTix3QkFDRTtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0E7QUFBTSxhQUFHLEVBQUMsZUFBVjtBQUEwQixjQUFJLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBTThEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOOUQsZUFPSixxRUFBQyxnREFBRDtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLFlBQUksRUFBQyxRQUExQjtBQUFtQyxnQkFBUSxFQUFFLEtBQUtDLE1BQWxEO0FBQUEsZ0NBQ1U7QUFBUSxlQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVixlQUVVO0FBQVEsZUFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEksZUFXSixxRUFBQyxpREFBRDtBQUFRLGVBQU8sRUFBQyxTQUFoQjtBQUEwQixlQUFPLEVBQUUsS0FBS0MsT0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSSxlQVlFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFFLEtBQUtsQixLQUFMLENBQVdEO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRixlQWFFO0FBQUssaUJBQVMsRUFBQywyQ0FBZjtBQUFBLGtCQUVDLEtBQUtDLEtBQUwsQ0FBV2EsSUFBWCxHQUNQLEtBQUtNLEdBQUwsRUFETyxHQUNRO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBdUJDOztBQTlFaUM7O0FBZ0ZyQnpCLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcblxuaW1wb3J0IHtCdXR0b24sRm9ybSxJbnB1dCxUb2FzdCwgVG9hc3RCb2R5LCBUb2FzdEhlYWRlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuLy8gaW1wb3J0IE5ldmJhciBmcm9tICcuL25ldmJhci5qcyc7XG5pbXBvcnQgQ29pbiBmcm9tICcuL2NvaW4uanMnO1xuaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgQ29pbnN3aXRjaCBmcm9tICcuL2NvaW5zd2l0Y2guanMnO1xudmFyIHNvY2tldDtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUXG4vLyBjb25zdCBlbmRwb2ludCA9ICdodHRwczovL215YXBwLmF6dXJld2Vic2l0ZXMubmV0OjgwODAvJztcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByaWNlOicwJyxcbiAgICAgIGRhdGE6W10sXG4gICAgICBjb2luOicnLFxuICAgICAgc2hvdzpmYWxzZVxuICAgIH07XG4gICAgLy8gc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xuICAgXG4gICBcbiAgfVxuICBzZWxlY3Q9KGRhdGEpPT57XG4gICAgdGhpcy5zdGF0ZS5jb2luKHtjb2luOmRhdGEudGFyZ2V0LnZhbHVlfSlcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cuemViYXBpLmNvbS9wcm8vdjEvbWFya2V0XCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSA6IHJlc3VsdFt0aGlzLnN0YXRlLmNvaW5dLFxuICAgICAgICAgICAgY29pbjpkYXRhLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICBcbiAgXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgfVxuICBQb3A9KCk9PihcbiAgICBcbiAgICA8VG9hc3Q+XG4gIDxUb2FzdEhlYWRlcj5cbiAgICB7dGhpcy5zdGF0ZS5kYXRhLnBhaXJ9XG4gIDwvVG9hc3RIZWFkZXI+XG4gIDxUb2FzdEJvZHk+XG4gICAgYnV5IHByaWNlIHt0aGlzLnN0YXRlLmRhdGEuYnV5fVxuICA8L1RvYXN0Qm9keT5cbiAgPC9Ub2FzdD5cbiAgKVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2luOjE5fSlcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnplYmFwaS5jb20vcHJvL3YxL21hcmtldFwiKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgOiByZXN1bHRbdGhpcy5zdGF0ZS5jb2luXVxuICAgIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sIDEwMDApO1xuICAgXG4gICAgXG4gIH1cbnJlbmRlcigpe1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgICB7LyogPE5ldmJhci8+ICovfVxuICAgICAgPGg0PkFrc2hheSBWYWRoZXJzPC9oND5cbiAgICAgIDxoND5hcHAgYnVpbHQgd2l0aCBuZXh0LmpzLHJlYWN0LmpzLG5vZGUuanMgYW5kIGV4cHJlc3M8L2g0Pjxici8+XG48SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3R9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE5Jz5CVEM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+WFJQPC9vcHRpb24+XG4gICAgICAgIDwvSW5wdXQ+XG48QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17dGhpcy5yZWZyZXNofT5yZWZyZXNoPC9CdXR0b24+XG4gICAgICA8Q29pbiBuYW1lPXt0aGlzLnN0YXRlLmRhdGF9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIG15LTIgcm91bmRlZCBiZy1kb2NzLXRyYW5zcGFyZW50LWdyaWRcIj5cblxuICAgICAge3RoaXMuc3RhdGUuc2hvdyA/IFxudGhpcy5Qb3AoKSAgICA6Jyd9XG48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuIFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})