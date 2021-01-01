webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _coinswitch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coinswitch.js */ \"./pages/coinswitch.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n\n // import Nevbar from './nevbar.js';\n\n\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.setState({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: '0',\n      data: [],\n      coin: '',\n      show: false,\n      isloading: true\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19,\n      isloading: false\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    }, 1000);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: this.state.isloading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Spinner\"], {\n        color: \"primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 1\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n            rel: \"shortcut icon\",\n            href: \"favicon.ico\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Akshay Vadher\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"app built with next.js,react.js,node.js and express\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 67\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n          type: \"select\",\n          name: \"select\",\n          onChange: this.select,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n            value: \"19\",\n            children: \"BTC\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 11\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n            value: \"40\",\n            children: \"XRP\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 1\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          name: this.state.data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n          children: this.state.show ? this.Pop() : ''\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 2\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsImNvaW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJzdGF0ZSIsInBhaXIiLCJidXkiLCJwcmljZSIsInNob3ciLCJpc2xvYWRpbmciLCJjb21wb25lbnREaWRNb3VudCIsInNldEludGVydmFsIiwicmVuZGVyIiwic2VsZWN0IiwiUG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQUo7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUF6QixDLENBQ0E7O0FBQ0EsTUFBTUMsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDbENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDhHQWFYQyxJQUFELElBQVE7QUFDYixXQUFLQyxRQUFMLENBQWM7QUFBQ0MsWUFBSSxFQUFDRixJQUFJLENBQUNHLE1BQUwsQ0FBWUM7QUFBbEIsT0FBZDtBQUNFQyxXQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNDQyxJQURELENBQ01DLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRGIsRUFFQ0YsSUFGRCxDQUdHRyxNQUFELElBQVk7QUFDVixhQUFLUixRQUFMLENBQWM7QUFBQ0QsY0FBSSxFQUFHUyxNQUFNLENBQUMsS0FBS0MsS0FBTCxDQUFXUixJQUFaO0FBQWQsU0FBZDtBQUlELE9BUkg7QUFVSCxLQXpCa0I7O0FBQUEsMkdBMEJmLG1CQUVGLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0YscUVBQUMsc0RBQUQ7QUFBQSxrQkFDRyxLQUFLUSxLQUFMLENBQVdWLElBQVgsQ0FBZ0JXO0FBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERSxlQUlGLHFFQUFDLG9EQUFEO0FBQUEsaUNBQ2EsS0FBS0QsS0FBTCxDQUFXVixJQUFYLENBQWdCWSxHQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QmlCOztBQUVqQixTQUFLRixLQUFMLEdBQWE7QUFDWEcsV0FBSyxFQUFDLEdBREs7QUFFWGIsVUFBSSxFQUFDLEVBRk07QUFHWEUsVUFBSSxFQUFDLEVBSE07QUFJWFksVUFBSSxFQUFDLEtBSk07QUFLWEMsZUFBUyxFQUFDO0FBTEMsS0FBYixDQUZpQixDQVNqQjtBQUdEOztBQXlCREMsbUJBQWlCLEdBQUc7QUFFbEIsU0FBS2YsUUFBTCxDQUFjO0FBQUNDLFVBQUksRUFBQyxFQUFOO0FBQVNhLGVBQVMsRUFBQztBQUFuQixLQUFkO0FBQ0FFLGVBQVcsQ0FBQyxNQUFNO0FBQ2hCWixXQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNDQyxJQURELENBQ01DLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRGIsRUFFQ0YsSUFGRCxDQUdHRyxNQUFELElBQVk7QUFDVixhQUFLUixRQUFMLENBQWM7QUFBQ0QsY0FBSSxFQUFHUyxNQUFNLENBQUMsS0FBS0MsS0FBTCxDQUFXUixJQUFaO0FBQWQsU0FBZDtBQUdELE9BUEg7QUFRRCxLQVRVLEVBU1IsSUFUUSxDQUFYO0FBWUQ7O0FBQ0hnQixRQUFNLEdBQUU7QUFFTix3QkFDRTtBQUFBLGdCQUNHLEtBQUtSLEtBQUwsQ0FBV0ssU0FBWCxnQkFDUCxxRUFBQyxrREFBRDtBQUFTLGFBQUssRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETyxnQkFFTjtBQUFBLGdDQUVLLHFFQUFDLGdEQUFEO0FBQUEsaUNBQ0E7QUFBTSxlQUFHLEVBQUMsZUFBVjtBQUEwQixnQkFBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZMLGVBTUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkwsZUFPSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQTCxlQU9pRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBqRSxlQVFELHFFQUFDLGdEQUFEO0FBQU8sY0FBSSxFQUFDLFFBQVo7QUFBcUIsY0FBSSxFQUFDLFFBQTFCO0FBQW1DLGtCQUFRLEVBQUUsS0FBS0ksTUFBbEQ7QUFBQSxrQ0FDVTtBQUFRLGlCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEVixlQUVVO0FBQVEsaUJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSQyxlQVlLLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFLEtBQUtULEtBQUwsQ0FBV1Y7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaTCxlQWFLO0FBQUssbUJBQVMsRUFBQywyQ0FBZjtBQUFBLG9CQUVDLEtBQUtVLEtBQUwsQ0FBV0ksSUFBWCxHQUNQLEtBQUtNLEdBQUwsRUFETyxHQUNRO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUEwQkM7O0FBbEZpQzs7QUFvRnJCekIsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQge0J1dHRvbixGb3JtLElucHV0LFRvYXN0LCBUb2FzdEJvZHksIFRvYXN0SGVhZGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG4vLyBpbXBvcnQgTmV2YmFyIGZyb20gJy4vbmV2YmFyLmpzJztcbmltcG9ydCBDb2luIGZyb20gJy4vY29pbi5qcyc7XG5pbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBDb2luc3dpdGNoIGZyb20gJy4vY29pbnN3aXRjaC5qcyc7XG52YXIgc29ja2V0O1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlRcbi8vIGNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vbXlhcHAuYXp1cmV3ZWJzaXRlcy5uZXQ6ODA4MC8nO1xuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJpY2U6JzAnLFxuICAgICAgZGF0YTpbXSxcbiAgICAgIGNvaW46JycsXG4gICAgICBzaG93OmZhbHNlLFxuICAgICAgaXNsb2FkaW5nOnRydWVcbiAgICB9O1xuICAgIC8vIHNvY2tldCA9IHNvY2tldElPQ2xpZW50KGVuZHBvaW50KTtcbiAgIFxuICAgXG4gIH1cbiAgc2VsZWN0PShkYXRhKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvaW46ZGF0YS50YXJnZXQudmFsdWV9KVxuICAgICAgZmV0Y2goXCJodHRwczovL3d3dy56ZWJhcGkuY29tL3Byby92MS9tYXJrZXRcIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oXG4gICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhIDogcmVzdWx0W3RoaXMuc3RhdGUuY29pbl1cbiAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApXG4gIH1cbiAgUG9wPSgpPT4oXG4gICAgXG4gICAgPFRvYXN0PlxuICA8VG9hc3RIZWFkZXI+XG4gICAge3RoaXMuc3RhdGUuZGF0YS5wYWlyfVxuICA8L1RvYXN0SGVhZGVyPlxuICA8VG9hc3RCb2R5PlxuICAgIGJ1eSBwcmljZSB7dGhpcy5zdGF0ZS5kYXRhLmJ1eX1cbiAgPC9Ub2FzdEJvZHk+XG4gIDwvVG9hc3Q+XG4gIClcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29pbjoxOSxpc2xvYWRpbmc6ZmFsc2V9KVxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cuemViYXBpLmNvbS9wcm8vdjEvbWFya2V0XCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSA6IHJlc3VsdFt0aGlzLnN0YXRlLmNvaW5dXG4gICAgXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSwgMTAwMCk7XG4gICBcbiAgICBcbiAgfVxucmVuZGVyKCl7XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7dGhpcy5zdGF0ZS5pc2xvYWRpbmc/XG48U3Bpbm5lciBjb2xvcj1cInByaW1hcnlcIiAvPlxuOjxkaXY+XG4gICAgICBcbiAgICAgIDxIZWFkPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgICAgey8qIDxOZXZiYXIvPiAqL31cbiAgICAgIDxoND5Ba3NoYXkgVmFkaGVyPC9oND5cbiAgICAgIDxoND5hcHAgYnVpbHQgd2l0aCBuZXh0LmpzLHJlYWN0LmpzLG5vZGUuanMgYW5kIGV4cHJlc3M8L2g0Pjxici8+XG48SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3R9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE5Jz5CVEM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+WFJQPC9vcHRpb24+XG4gICAgICAgIDwvSW5wdXQ+XG4gICAgICA8Q29pbiBuYW1lPXt0aGlzLnN0YXRlLmRhdGF9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIG15LTIgcm91bmRlZCBiZy1kb2NzLXRyYW5zcGFyZW50LWdyaWRcIj5cblxuICAgICAge3RoaXMuc3RhdGUuc2hvdyA/IFxudGhpcy5Qb3AoKSAgICA6Jyd9XG48L2Rpdj48L2Rpdj59XG4gICAgPC9kaXY+XG4gICk7XG5cbiBcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})