webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fire.js */ \"./fire.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback.js */ \"./pages/feedback.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n\n\n // import Nevbar from './nevbar.js';\n\n // import socketIOClient from \"socket.io-client\";\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"change\", data => {\n      this.setState({\n        value: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"changename\", data => {\n      this.setState({\n        name: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.setState({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"submit\", () => {\n      var newPostKey = _fire_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ref(\"/messages\").push({\n        name: this.state.name,\n        message: this.state.value\n      });\n      this.setState({\n        value: \"\",\n        name: \"\",\n        feed: true\n      });\n      setTimeout(() => {\n        this.setState({\n          feed: false\n        });\n      }, 3000);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: \"0\",\n      data: [],\n      coin: \"\",\n      show: false,\n      price: 0,\n      profit: \"\",\n      test: \"\",\n      value: \"\",\n      name: \"\",\n      feed: false,\n      isloading: true\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19,\n      isloading: false\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      }).then(this.setState({\n        price: (this.state.data.sell * 0.1002601).toFixed(2)\n      }));\n    }, 1500);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: this.state.isloading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Spinner\"], {\n        color: \"primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n            rel: \"shortcut icon\",\n            href: \"favicon.ico\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Akshay Vadher\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Zebpay live crypto currency price by api\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n          style: {\n            marginLeft: '0.8rem'\n          },\n          children: this.state.price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 13\n        }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          style: {\n            marginLeft: '0.8rem'\n          },\n          children: (this.state.price - 250249.21).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"6\",\n            children: [\" \", this.state.feed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Toast\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastHeader\"], {\n                  children: \"feedback\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 113,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastBody\"], {\n                  children: \"thank you for your feedback\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 114,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 112,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 111,\n              columnNumber: 19\n            }, this) : \"\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"select\",\n              name: \"select\",\n              onChange: this.select,\n              style: {\n                marginLeft: '0.8rem'\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"19\",\n                children: \"BTC\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 19\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"40\",\n                children: \"XRP\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 19\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 17\n            }, this), this.state.data.map(data => console.log(data))]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          name: this.state.data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n          children: this.state.show ? this.Pop() : \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwibmFtZSIsImNvaW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic3RhdGUiLCJuZXdQb3N0S2V5IiwiZmlyZSIsInJlZiIsInB1c2giLCJtZXNzYWdlIiwiZmVlZCIsInNldFRpbWVvdXQiLCJwYWlyIiwiYnV5IiwicHJpY2UiLCJzaG93IiwicHJvZml0IiwidGVzdCIsImlzbG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0SW50ZXJ2YWwiLCJzZWxsIiwidG9GaXhlZCIsInJlbmRlciIsIm1hcmdpbkxlZnQiLCJzZWxlY3QiLCJtYXAiLCJjb25zb2xlIiwibG9nIiwiUG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtDQWNBOztDQUVBOztBQUNBO0FBQ0EsSUFBSUEsTUFBSjtBQUNBLE1BQU1DLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQXpCLEMsQ0FDQTs7QUFDQSxNQUFNQyxLQUFOLFNBQW9CQyw0Q0FBSyxDQUFDQyxTQUExQixDQUFvQztBQUNsQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsOEdBa0JUQyxJQUFELElBQVU7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQUVDLGFBQUssRUFBRUYsSUFBSSxDQUFDRyxNQUFMLENBQVlEO0FBQXJCLE9BQWQ7QUFDRCxLQXBCa0I7O0FBQUEsa0hBc0JMRixJQUFELElBQVU7QUFDckIsV0FBS0MsUUFBTCxDQUFjO0FBQUVHLFlBQUksRUFBRUosSUFB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QkFERCxHQVFDLEVBVkosZUFZRSxxRUFBQyxnREFBRDtBQUFPLGtCQUFJLEVBQUMsUUFBWjtBQUFxQixrQkFBSSxFQUFDLFFBQTFCO0FBQW1DLHNCQUFRLEVBQUUsS0FBS2UsTUFBbEQ7QUFBMEQsbUJBQUssRUFBRTtBQUFDRCwwQkFBVSxFQUFDO0FBQVosZUFBakU7QUFBQSxzQ0FDRTtBQUFRLHFCQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUVFO0FBQVEscUJBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaRixFQWdCRyxLQUFLcEIsS0FBTCxDQUFXWCxJQUFYLENBQWdCaUMsR0FBaEIsQ0FBcUJqQyxJQUFELElBQ25Ca0MsT0FBTyxDQUFDQyxHQUFSLENBQVluQyxJQUFaLENBREQsQ0FoQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRixlQWdDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRSxLQUFLVyxLQUFMLENBQVdYO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENGLGVBaUNFO0FBQUssbUJBQVMsRUFBQywyQ0FBZjtBQUFBLG9CQUNHLEtBQUtXLEtBQUwsQ0FBV1csSUFBWCxHQUFrQixLQUFLYyxHQUFMLEVBQWxCLEdBQStCO0FBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTZDRDs7QUE5R2lDOztBQWdIckJ6QyxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGZpcmUgZnJvbSBcIi4uL2ZpcmUuanNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIFNwaW5uZXIsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFRvYXN0LFxuICBUb2FzdEJvZHksXG4gIFRvYXN0SGVhZGVyLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuLy8gaW1wb3J0IE5ldmJhciBmcm9tICcuL25ldmJhci5qcyc7XG5pbXBvcnQgQ29pbiBmcm9tIFwiLi9jb2luLmpzXCI7XG4vLyBpbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBGZWVkYmFjayBmcm9tIFwiLi9mZWVkYmFjay5qc1wiO1xudmFyIHNvY2tldDtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUO1xuLy8gY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9teWFwcC5henVyZXdlYnNpdGVzLm5ldDo4MDgwLyc7XG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcmljZTogXCIwXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGNvaW46IFwiXCIsXG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIHByaWNlOiAwLFxuICAgICAgcHJvZml0OiBcIlwiLFxuICAgICAgdGVzdDogXCJcIixcbiAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgbmFtZTogXCJcIixcbiAgICAgIGZlZWQ6IGZhbHNlLFxuICAgICAgaXNsb2FkaW5nOiB0cnVlLFxuICAgIH07XG4gICAgLy8gc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xuICB9XG5cbiAgY2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGRhdGEudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGNoYW5nZW5hbWUgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lOiBkYXRhLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcbiAgc2VsZWN0ID0gKGRhdGEpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29pbjogZGF0YS50YXJnZXQudmFsdWUgfSk7XG4gICAgZmV0Y2goXCJodHRwczovL3d3dy56ZWJhcGkuY29tL3Byby92MS9tYXJrZXRcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXN1bHRbdGhpcy5zdGF0ZS5jb2luXSB9KTtcbiAgICAgIH0pO1xuICB9O1xuICBzdWJtaXQgPSAoKSA9PiB7XG4gICAgdmFyIG5ld1Bvc3RLZXkgPSBmaXJlXG4gICAgICAucmVmKFwiL21lc3NhZ2VzXCIpXG4gICAgICAucHVzaCh7IG5hbWU6IHRoaXMuc3RhdGUubmFtZSwgbWVzc2FnZTogdGhpcy5zdGF0ZS52YWx1ZSB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IFwiXCIsIG5hbWU6IFwiXCIsIGZlZWQ6IHRydWUgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgZmVlZDogZmFsc2UgfSk7XG4gICAgfSwgMzAwMCk7XG4gIH07XG4gIFBvcCA9ICgpID0+IChcbiAgICA8VG9hc3Q+XG4gICAgICA8VG9hc3RIZWFkZXI+e3RoaXMuc3RhdGUuZGF0YS5wYWlyfTwvVG9hc3RIZWFkZXI+XG4gICAgICA8VG9hc3RCb2R5PmJ1eSBwcmljZSB7dGhpcy5zdGF0ZS5kYXRhLmJ1eX08L1RvYXN0Qm9keT5cbiAgICA8L1RvYXN0PlxuICApO1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY29pbjogMTksIGlzbG9hZGluZzogZmFsc2UgfSk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgZmV0Y2goXCJodHRwczovL3d3dy56ZWJhcGkuY29tL3Byby92MS9tYXJrZXRcIilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhOiByZXN1bHRbdGhpcy5zdGF0ZS5jb2luXSB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwcmljZTogKHRoaXMuc3RhdGUuZGF0YS5zZWxsICogMC4xMDAyNjAxKS50b0ZpeGVkKDIpLFxuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfSwgMTUwMCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5pc2xvYWRpbmcgPyAoXG4gICAgICAgICAgPFNwaW5uZXIgY29sb3I9XCJwcmltYXJ5XCIgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgey8qIDxOZXZiYXIvPiAqL31cbiAgICAgICAgICAgIDxoND5Ba3NoYXkgVmFkaGVyPC9oND5cbiAgICAgICAgICAgIDxoND5aZWJwYXkgbGl2ZSBjcnlwdG8gY3VycmVuY3kgcHJpY2UgYnkgYXBpPC9oND5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGg1ICBzdHlsZT17e21hcmdpbkxlZnQ6JzAuOHJlbSd9fT57dGhpcy5zdGF0ZS5wcmljZX08L2g1PntcIiBcIn1cbiAgICAgICAgICAgIDxkaXYgIHN0eWxlPXt7bWFyZ2luTGVmdDonMC44cmVtJ319PnsodGhpcy5zdGF0ZS5wcmljZSAtIDI1MDI0OS4yMSkudG9GaXhlZCgyKX08L2Rpdj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgeHM9XCI2XCI+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmZlZWQgPyAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBteS0yIHJvdW5kZWQgYmctZG9jcy10cmFuc3BhcmVudC1ncmlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdD5cbiAgICAgICAgICAgICAgICAgICAgICA8VG9hc3RIZWFkZXI+ZmVlZGJhY2s8L1RvYXN0SGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxUb2FzdEJvZHk+dGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrPC9Ub2FzdEJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvVG9hc3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgXCJcIlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJzZWxlY3RcIiBuYW1lPVwic2VsZWN0XCIgb25DaGFuZ2U9e3RoaXMuc2VsZWN0fSBzdHlsZT17e21hcmdpbkxlZnQ6JzAuOHJlbSd9fT5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxOVwiPkJUQzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjQwXCI+WFJQPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcCgoZGF0YSk9PihcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Q29pbiBuYW1lPXt0aGlzLnN0YXRlLmRhdGF9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBteS0yIHJvdW5kZWQgYmctZG9jcy10cmFuc3BhcmVudC1ncmlkXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3cgPyB0aGlzLlBvcCgpIDogXCJcIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})