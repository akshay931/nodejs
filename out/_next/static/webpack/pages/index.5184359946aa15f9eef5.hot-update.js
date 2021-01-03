webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fire.js */ \"./fire.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback.js */ \"./pages/feedback.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n\n\n // import Nevbar from './nevbar.js';\n\n // import socketIOClient from \"socket.io-client\";\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"change\", data => {\n      this.setState({\n        value: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"changename\", data => {\n      this.setState({\n        name: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.setState({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"submit\", () => {\n      var newPostKey = _fire_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ref(\"/messages\").push({\n        name: this.state.name,\n        message: this.state.value\n      });\n      this.setState({\n        value: \"\",\n        name: \"\",\n        feed: true\n      });\n      setTimeout(() => {\n        this.setState({\n          feed: false\n        });\n      }, 3000);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: \"0\",\n      data: [],\n      coin: \"\",\n      show: false,\n      price: 0,\n      profit: \"\",\n      test: \"\",\n      fulldata: [],\n      value: \"\",\n      name: \"\",\n      feed: false,\n      isloading: true\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19,\n      isloading: false\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin],\n          fulldata: result\n        });\n        console.log(this.state.fulldata);\n      }).then(this.setState({\n        price: (this.state.data.sell * 0.1002601).toFixed(2)\n      }));\n    }, 1500);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      children: this.state.isloading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Spinner\"], {\n        color: \"primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 11\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n            rel: \"shortcut icon\",\n            href: \"favicon.ico\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Akshay Vadher\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Zebpay live crypto currency price by api\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n          style: {\n            marginLeft: '0.8rem'\n          },\n          children: this.state.price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 13\n        }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          style: {\n            marginLeft: '0.8rem'\n          },\n          children: (this.state.price - 250249.21).toFixed(2)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"6\",\n            children: [\" \", this.state.feed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Toast\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastHeader\"], {\n                  children: \"feedback\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 23\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastBody\"], {\n                  children: \"thank you for your feedback\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 23\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 21\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 19\n            }, this) : \"\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"select\",\n              name: \"select\",\n              onChange: this.select,\n              style: {\n                marginLeft: '0.8rem'\n              },\n              children: this.state.fulldata.map(val => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"19\",\n                children: (val, pair)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 123,\n                columnNumber: 51\n              }, this))\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n          name: this.state.data\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n          children: this.state.show ? this.Pop() : \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwibmFtZSIsImNvaW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic3RhdGUiLCJuZXdQb3N0S2V5IiwiZmlyZSIsInJlZiIsInB1c2giLCJtZXNzYWdlIiwiZmVlZCIsInNldFRpbWVvdXQiLCJwYWlyIiwiYnV5IiwicHJpY2UiLCJzaG93IiwicHJvZml0IiwidGVzdCIsImZ1bGxkYXRhIiwiaXNsb2FkaW5nIiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJzZWxsIiwidG9GaXhlZCIsInJlbmRlciIsIm1hcmdpbkxlZnQiLCJzZWxlY3QiLCJtYXAiLCJ2YWwiLCJQb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBY0E7O0NBRUE7O0FBQ0E7QUFDQSxJQUFJQSxNQUFKO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBekIsQyxDQUNBOztBQUNBLE1BQU1DLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQ2xDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQiw4R0FtQlRDLElBQUQsSUFBVTtBQUNqQixXQUFLQyxRQUFMLENBQWM7QUFBRUMsYUFBSyxFQUFFRixJQUFJLENBQUNHLE1BQUwsQ0FBWUQ7QUFBckIsT0FBZDtBQUNELEtBckJrQjs7QUFBQSxrSEF1QkxGLElBQUQsSUFBVTtBQUNyQixXQUFLQyxRQUFMLENBQWM7QUFB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QUE7QUFBQSx3QkFERixlQUVFLHFFQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsR0FRQyxFQVZKLGVBWUUscUVBQUMsZ0RBQUQ7QUFBTyxrQkFBSSxFQUFDLFFBQVo7QUFBcUIsa0JBQUksRUFBQyxRQUExQjtBQUFtQyxzQkFBUSxFQUFFLEtBQUtrQixNQUFsRDtBQUEwRCxtQkFBSyxFQUFFO0FBQUNELDBCQUFVLEVBQUM7QUFBWixlQUFqRTtBQUFBLHdCQUNHLEtBQUt2QixLQUFMLENBQVdjLFFBQVgsQ0FBb0JXLEdBQXBCLENBQXlCQyxHQUFELGlCQUFPO0FBQVEscUJBQUssRUFBQyxJQUFkO0FBQUEsMkJBQW9CQSxHQUFHLEVBQUNsQixJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQS9CO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGLGVBK0JFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFFLEtBQUtSLEtBQUwsQ0FBV1g7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvQkYsZUFnQ0U7QUFBSyxtQkFBUyxFQUFDLDJDQUFmO0FBQUEsb0JBQ0csS0FBS1csS0FBTCxDQUFXVyxJQUFYLEdBQWtCLEtBQUtnQixHQUFMLEVBQWxCLEdBQStCO0FBRGxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQTRDRDs7QUEvR2lDOztBQWlIckIzQyxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGZpcmUgZnJvbSBcIi4uL2ZpcmUuanNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgUm93LFxuICBDb2wsXG4gIFNwaW5uZXIsXG4gIEJ1dHRvbixcbiAgRm9ybSxcbiAgSW5wdXQsXG4gIFRvYXN0LFxuICBUb2FzdEJvZHksXG4gIFRvYXN0SGVhZGVyLFxufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuLy8gaW1wb3J0IE5ldmJhciBmcm9tICcuL25ldmJhci5qcyc7XG5pbXBvcnQgQ29pbiBmcm9tIFwiLi9jb2luLmpzXCI7XG4vLyBpbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBGZWVkYmFjayBmcm9tIFwiLi9mZWVkYmFjay5qc1wiO1xudmFyIHNvY2tldDtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUO1xuLy8gY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9teWFwcC5henVyZXdlYnNpdGVzLm5ldDo4MDgwLyc7XG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcmljZTogXCIwXCIsXG4gICAgICBkYXRhOiBbXSxcbiAgICAgIGNvaW46IFwiXCIsXG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIHByaWNlOiAwLFxuICAgICAgcHJvZml0OiBcIlwiLFxuICAgICAgdGVzdDogXCJcIixcbiAgICAgIGZ1bGxkYXRhOltdLFxuICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgZmVlZDogZmFsc2UsXG4gICAgICBpc2xvYWRpbmc6IHRydWUsXG4gICAgfTtcbiAgICAvLyBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XG4gIH1cblxuICBjaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZGF0YS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG5cbiAgY2hhbmdlbmFtZSA9IChkYXRhKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IGRhdGEudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuICBzZWxlY3QgPSAoZGF0YSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb2luOiBkYXRhLnRhcmdldC52YWx1ZSB9KTtcbiAgICBmZXRjaChcImh0dHBzOi8vd3d3LnplYmFwaS5jb20vcHJvL3YxL21hcmtldFwiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlc3VsdFt0aGlzLnN0YXRlLmNvaW5dIH0pO1xuICAgICAgfSk7XG4gIH07XG4gIHN1Ym1pdCA9ICgpID0+IHtcbiAgICB2YXIgbmV3UG9zdEtleSA9IGZpcmVcbiAgICAgIC5yZWYoXCIvbWVzc2FnZXNcIilcbiAgICAgIC5wdXNoKHsgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLCBtZXNzYWdlOiB0aGlzLnN0YXRlLnZhbHVlIH0pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogXCJcIiwgbmFtZTogXCJcIiwgZmVlZDogdHJ1ZSB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmZWVkOiBmYWxzZSB9KTtcbiAgICB9LCAzMDAwKTtcbiAgfTtcbiAgUG9wID0gKCkgPT4gKFxuICAgIDxUb2FzdD5cbiAgICAgIDxUb2FzdEhlYWRlcj57dGhpcy5zdGF0ZS5kYXRhLnBhaXJ9PC9Ub2FzdEhlYWRlcj5cbiAgICAgIDxUb2FzdEJvZHk+YnV5IHByaWNlIHt0aGlzLnN0YXRlLmRhdGEuYnV5fTwvVG9hc3RCb2R5PlxuICAgIDwvVG9hc3Q+XG4gICk7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBjb2luOiAxOSwgaXNsb2FkaW5nOiBmYWxzZSB9KTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnplYmFwaS5jb20vcHJvL3YxL21hcmtldFwiKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGE6IHJlc3VsdFt0aGlzLnN0YXRlLmNvaW5dLGZ1bGxkYXRhOnJlc3VsdCB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmZ1bGxkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHByaWNlOiAodGhpcy5zdGF0ZS5kYXRhLnNlbGwgKiAwLjEwMDI2MDEpLnRvRml4ZWQoMiksXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9LCAxNTAwKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmlzbG9hZGluZyA/IChcbiAgICAgICAgICA8U3Bpbm5lciBjb2xvcj1cInByaW1hcnlcIiAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICB7LyogPE5ldmJhci8+ICovfVxuICAgICAgICAgICAgPGg0PkFrc2hheSBWYWRoZXI8L2g0PlxuICAgICAgICAgICAgPGg0PlplYnBheSBsaXZlIGNyeXB0byBjdXJyZW5jeSBwcmljZSBieSBhcGk8L2g0PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aDUgIHN0eWxlPXt7bWFyZ2luTGVmdDonMC44cmVtJ319Pnt0aGlzLnN0YXRlLnByaWNlfTwvaDU+e1wiIFwifVxuICAgICAgICAgICAgPGRpdiAgc3R5bGU9e3ttYXJnaW5MZWZ0OicwLjhyZW0nfX0+eyh0aGlzLnN0YXRlLnByaWNlIC0gMjUwMjQ5LjIxKS50b0ZpeGVkKDIpfTwvZGl2PlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCB4cz1cIjZcIj5cbiAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmVlZCA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIG15LTIgcm91bmRlZCBiZy1kb2NzLXRyYW5zcGFyZW50LWdyaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUb2FzdEhlYWRlcj5mZWVkYmFjazwvVG9hc3RIZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRvYXN0Qm9keT50aGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2s8L1RvYXN0Qm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9Ub2FzdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICBcIlwiXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3R9IHN0eWxlPXt7bWFyZ2luTGVmdDonMC44cmVtJ319PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZnVsbGRhdGEubWFwKCh2YWwpPT48b3B0aW9uIHZhbHVlPVwiMTlcIj57dmFsLHBhaXJ9PC9vcHRpb24+KX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvSW5wdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICB7LyogPGRpdj57dGhpcy5zdGF0ZS5mdWxsZGF0YS5tYXAoKHZhbCk9PjxkaXY+e3ZhbC5wYWlyfTwvZGl2Pil9PC9kaXY+ICovfVxuICAgICAgICAgICAgPENvaW4gbmFtZT17dGhpcy5zdGF0ZS5kYXRhfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbXktMiByb3VuZGVkIGJnLWRvY3MtdHJhbnNwYXJlbnQtZ3JpZFwiPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93ID8gdGhpcy5Qb3AoKSA6IFwiXCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})