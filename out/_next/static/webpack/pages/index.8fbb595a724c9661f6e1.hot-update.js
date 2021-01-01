webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/index.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _coinswitch_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coinswitch.js */ \"./pages/coinswitch.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n\n // import Nevbar from './nevbar.js';\n\n\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.setState({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: '0',\n      data: [],\n      coin: '',\n      show: false,\n      isloading: true\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    }, 1000);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Spinner\"], {\n        color: \"primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n          rel: \"shortcut icon\",\n          href: \"favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n        children: \"Akshay Vadher\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n        children: \"app built with next.js,react.js,node.js and express\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 67\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n        type: \"select\",\n        name: \"select\",\n        onChange: this.select,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n          value: \"19\",\n          children: \"BTC\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n          value: \"40\",\n          children: \"XRP\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 1\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        name: this.state.data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n        children: this.state.show ? this.Pop() : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 5\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsImNvaW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXN1bHQiLCJzdGF0ZSIsInBhaXIiLCJidXkiLCJwcmljZSIsInNob3ciLCJpc2xvYWRpbmciLCJjb21wb25lbnREaWRNb3VudCIsInNldEludGVydmFsIiwicmVuZGVyIiwic2VsZWN0IiwiUG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE1BQUo7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUF6QixDLENBQ0E7O0FBQ0EsTUFBTUMsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDbENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDhHQWFYQyxJQUFELElBQVE7QUFDYixXQUFLQyxRQUFMLENBQWM7QUFBQ0MsWUFBSSxFQUFDRixJQUFJLENBQUNHLE1BQUwsQ0FBWUM7QUFBbEIsT0FBZDtBQUNFQyxXQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNDQyxJQURELENBQ01DLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBRGIsRUFFQ0YsSUFGRCxDQUdHRyxNQUFELElBQVk7QUFDVixhQUFLUixRQUFMLENBQWM7QUFBQ0QsY0FBSSxFQUFHUyxNQUFNLENBQUMsS0FBS0MsS0FBTCxDQUFXUixJQUFaO0FBQWQsU0FBZDtBQUlELE9BUkg7QUFVSCxLQXpCa0I7O0FBQUEsMkdBMEJmLG1CQUVGLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0YscUVBQUMsc0RBQUQ7QUFBQSxrQkFDRyxLQUFLUSxLQUFMLENBQVdWLElBQVgsQ0FBZ0JXO0FBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERSxlQUlGLHFFQUFDLG9EQUFEO0FBQUEsaUNBQ2EsS0FBS0QsS0FBTCxDQUFXVixJQUFYLENBQWdCWSxHQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE1QmlCOztBQUVqQixTQUFLRixLQUFMLEdBQWE7QUFDWEcsV0FBSyxFQUFDLEdBREs7QUFFWGIsVUFBSSxFQUFDLEVBRk07QUFHWEUsVUFBSSxFQUFDLEVBSE07QUFJWFksVUFBSSxFQUFDLEtBSk07QUFLWEMsZUFBUyxFQUFDO0FBTEMsS0FBYixDQUZpQixDQVNqQjtBQUdEOztBQXlCREMsbUJBQWlCLEdBQUc7QUFDbEIsU0FBS2YsUUFBTCxDQUFjO0FBQUNDLFVBQUksRUFBQztBQUFOLEtBQWQ7QUFDQWUsZUFBVyxDQUFDLE1BQU07QUFDaEJaLFdBQUssQ0FBQyxzQ0FBRCxDQUFMLENBQ0NDLElBREQsQ0FDTUMsR0FBRyxJQUFJQSxHQUFHLENBQUNDLElBQUosRUFEYixFQUVDRixJQUZELENBR0dHLE1BQUQsSUFBWTtBQUNWLGFBQUtSLFFBQUwsQ0FBYztBQUFDRCxjQUFJLEVBQUdTLE1BQU0sQ0FBQyxLQUFLQyxLQUFMLENBQVdSLElBQVo7QUFBZCxTQUFkO0FBR0QsT0FQSDtBQVFELEtBVFUsRUFTUixJQVRRLENBQVg7QUFZRDs7QUFDSGdCLFFBQU0sR0FBRTtBQUVOLHdCQUNFO0FBQUEsOEJBQ0UscUVBQUMsa0RBQUQ7QUFBUyxhQUFLLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNBO0FBQU0sYUFBRyxFQUFDLGVBQVY7QUFBMEIsY0FBSSxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQU84RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUDlELGVBUUoscUVBQUMsZ0RBQUQ7QUFBTyxZQUFJLEVBQUMsUUFBWjtBQUFxQixZQUFJLEVBQUMsUUFBMUI7QUFBbUMsZ0JBQVEsRUFBRSxLQUFLQyxNQUFsRDtBQUFBLGdDQUNVO0FBQVEsZUFBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFYsZUFFVTtBQUFRLGVBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJJLGVBWUUscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS1QsS0FBTCxDQUFXVjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkYsZUFhRTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQSxrQkFFQyxLQUFLVSxLQUFMLENBQVdJLElBQVgsR0FDUCxLQUFLTSxHQUFMLEVBRE8sR0FDUTtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXVCQzs7QUE5RWlDOztBQWdGckJ6QixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmltcG9ydCB7QnV0dG9uLEZvcm0sSW5wdXQsVG9hc3QsIFRvYXN0Qm9keSwgVG9hc3RIZWFkZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcbi8vIGltcG9ydCBOZXZiYXIgZnJvbSAnLi9uZXZiYXIuanMnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luLmpzJztcbmltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IENvaW5zd2l0Y2ggZnJvbSAnLi9jb2luc3dpdGNoLmpzJztcbnZhciBzb2NrZXQ7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVFxuLy8gY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9teWFwcC5henVyZXdlYnNpdGVzLm5ldDo4MDgwLyc7XG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcmljZTonMCcsXG4gICAgICBkYXRhOltdLFxuICAgICAgY29pbjonJyxcbiAgICAgIHNob3c6ZmFsc2UsXG4gICAgICBpc2xvYWRpbmc6dHJ1ZVxuICAgIH07XG4gICAgLy8gc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xuICAgXG4gICBcbiAgfVxuICBzZWxlY3Q9KGRhdGEpPT57XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29pbjpkYXRhLnRhcmdldC52YWx1ZX0pXG4gICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnplYmFwaS5jb20vcHJvL3YxL21hcmtldFwiKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgOiByZXN1bHRbdGhpcy5zdGF0ZS5jb2luXVxuICAgICAgICAgICAgICBcbiAgXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIClcbiAgfVxuICBQb3A9KCk9PihcbiAgICBcbiAgICA8VG9hc3Q+XG4gIDxUb2FzdEhlYWRlcj5cbiAgICB7dGhpcy5zdGF0ZS5kYXRhLnBhaXJ9XG4gIDwvVG9hc3RIZWFkZXI+XG4gIDxUb2FzdEJvZHk+XG4gICAgYnV5IHByaWNlIHt0aGlzLnN0YXRlLmRhdGEuYnV5fVxuICA8L1RvYXN0Qm9keT5cbiAgPC9Ub2FzdD5cbiAgKVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb2luOjE5fSlcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnplYmFwaS5jb20vcHJvL3YxL21hcmtldFwiKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgOiByZXN1bHRbdGhpcy5zdGF0ZS5jb2luXVxuICAgIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sIDEwMDApO1xuICAgXG4gICAgXG4gIH1cbnJlbmRlcigpe1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNwaW5uZXIgY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgIDxIZWFkPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgICAgey8qIDxOZXZiYXIvPiAqL31cbiAgICAgIDxoND5Ba3NoYXkgVmFkaGVyPC9oND5cbiAgICAgIDxoND5hcHAgYnVpbHQgd2l0aCBuZXh0LmpzLHJlYWN0LmpzLG5vZGUuanMgYW5kIGV4cHJlc3M8L2g0Pjxici8+XG48SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3R9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE5Jz5CVEM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+WFJQPC9vcHRpb24+XG4gICAgICAgIDwvSW5wdXQ+XG4gICAgICA8Q29pbiBuYW1lPXt0aGlzLnN0YXRlLmRhdGF9Lz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIG15LTIgcm91bmRlZCBiZy1kb2NzLXRyYW5zcGFyZW50LWdyaWRcIj5cblxuICAgICAge3RoaXMuc3RhdGUuc2hvdyA/IFxudGhpcy5Qb3AoKSAgICA6Jyd9XG48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuIFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})