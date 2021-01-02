webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fire.js */ \"./fire.js\");\n/* harmony import */ var _fire1_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fire1.js */ \"./fire1.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback.js */ \"./pages/feedback.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n\n\n\n\n // import Nevbar from './nevbar.js';\n\n // import socketIOClient from \"socket.io-client\";\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"change\", data => {\n      this.setState({\n        value: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"changename\", data => {\n      this.setState({\n        name: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.setState({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"submit\", () => {\n      var newPostKey = _fire_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ref('/messages').push({\n        name: this.state.name,\n        message: this.state.value\n      });\n      this.setState({\n        value: '',\n        feed: true\n      });\n      setTimeout(() => {\n        this.setState({\n          feed: false\n        });\n      }, 2000);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: '0',\n      data: [],\n      coin: '',\n      show: false,\n      test: '',\n      value: '',\n      name: '',\n      feed: false,\n      isloading: true\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19,\n      isloading: false\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    }, 1500);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n      children: this.state.isloading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Spinner\"], {\n        color: \"primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 1\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n            rel: \"shortcut icon\",\n            href: \"favicon.ico\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Akshay Vadher\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Zebpay live cryptocurrency price by api\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 55\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"6\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"select\",\n              name: \"select\",\n              onChange: this.select,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"19\",\n                children: \"BTC\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"40\",\n                children: \"XRP\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 21\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 9\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"8\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n              name: this.state.data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 21\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"4\",\n            children: [\"Feedback\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"text\",\n              value: this.state.name,\n              onChange: this.changename\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 80\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"textarea\",\n              rows: \"4\",\n              cols: \"50\",\n              value: this.state.value,\n              onChange: this.change\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n              color: \"primary\",\n              size: \"sm\",\n              onClick: this.submit,\n              children: \"Submit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 9\n            }, this), this.state.feed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n              children: \"thank you for your feedback\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 119,\n              columnNumber: 26\n            }, this) : '']\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n          children: this.state.show ? this.Pop() : ''\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 2\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwibmFtZSIsImNvaW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic3RhdGUiLCJuZXdQb3N0S2V5IiwiZmlyZSIsInJlZiIsInB1c2giLCJtZXNzYWdlIiwiZmVlZCIsInNldFRpbWVvdXQiLCJwYWlyIiwiYnV5IiwicHJpY2UiLCJzaG93IiwidGVzdCIsImlzbG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0SW50ZXJ2YWwiLCJyZW5kZXIiLCJzZWxlY3QiLCJjaGFuZ2VuYW1lIiwiY2hhbmdlIiwic3VibWl0IiwiUG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0NBRUE7O0FBQ0E7QUFDQSxJQUFJQSxNQUFKO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBekIsQyxDQUNBOztBQUNBLE1BQU1DLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQ2xDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQiw4R0FrQlhDLElBQUQsSUFBUTtBQUNiLFdBQUtDLFFBQUwsQ0FBYztBQUFDQyxhQUFLLEVBQUNGLElBQUksQ0FBQ0csTUFBTCxDQUFZRDtBQUFuQixPQUFkO0FBQ0QsS0FwQmtCOztBQUFBLGtIQXNCUEYsSUFBRCxJQUFRO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUFDRyxZQUFJLEVBQUNKLElBQUksQ0FBQ0csTUFBTCxDQUFZRDtB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O0FBQWdDLGtCQUFJLEVBQUMsSUFBckM7QUFBMEMsbUJBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXVCxLQUE1RDtBQUFtRSxzQkFBUSxFQUFFLEtBQUs0QjtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIQSxlQUlBLHFFQUFDLGlEQUFEO0FBQVEsbUJBQUssRUFBQyxTQUFkO0FBQXdCLGtCQUFJLEVBQUMsSUFBN0I7QUFBa0MscUJBQU8sRUFBRSxLQUFLQyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKQSxFQUtDLEtBQUtwQixLQUFMLENBQVdNLElBQVgsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFoQixHQUFxRCxFQUx0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRMLGVBMEJLO0FBQUssbUJBQVMsRUFBQywyQ0FBZjtBQUFBLG9CQUVDLEtBQUtOLEtBQUwsQ0FBV1csSUFBWCxHQUNQLEtBQUtVLEdBQUwsRUFETyxHQUNRO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBdUNDOztBQW5IaUM7O0FBcUhyQnJDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZpcmUgZnJvbSAnLi4vZmlyZS5qcydcbmltcG9ydCBzZWNvbmRhcnkgZnJvbSAnLi4vZmlyZTEuanMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCxTcGlubmVyLExhYmVsIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcblxuaW1wb3J0IHtCdXR0b24sRm9ybSxJbnB1dCxUb2FzdCwgVG9hc3RCb2R5LCBUb2FzdEhlYWRlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuLy8gaW1wb3J0IE5ldmJhciBmcm9tICcuL25ldmJhci5qcyc7XG5pbXBvcnQgQ29pbiBmcm9tICcuL2NvaW4uanMnO1xuLy8gaW1wb3J0IHNvY2tldElPQ2xpZW50IGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5pbXBvcnQgRmVlZGJhY2sgZnJvbSAnLi9mZWVkYmFjay5qcyc7XG52YXIgc29ja2V0O1xuY29uc3QgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlRcbi8vIGNvbnN0IGVuZHBvaW50ID0gJ2h0dHBzOi8vbXlhcHAuYXp1cmV3ZWJzaXRlcy5uZXQ6ODA4MC8nO1xuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcHJpY2U6JzAnLFxuICAgICAgZGF0YTpbXSxcbiAgICAgIGNvaW46JycsXG4gICAgICBzaG93OmZhbHNlLFxuICAgICAgdGVzdDonJyxcbiAgICAgIHZhbHVlOicnLFxuICAgICAgbmFtZTonJyxcbiAgICAgIGZlZWQ6ZmFsc2UsXG4gICAgICBpc2xvYWRpbmc6dHJ1ZVxuICAgIH07XG4gICAgLy8gc29ja2V0ID0gc29ja2V0SU9DbGllbnQoZW5kcG9pbnQpO1xuICAgXG4gICBcbiAgfVxuXG4gIGNoYW5nZT0oZGF0YSk9PntcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTpkYXRhLnRhcmdldC52YWx1ZX0pXG4gIH1cblxuICBjaGFuZ2VuYW1lPShkYXRhKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6ZGF0YS50YXJnZXQudmFsdWV9KVxuICB9XG4gIHNlbGVjdD0oZGF0YSk9PntcbiAgICB0aGlzLnNldFN0YXRlKHtjb2luOmRhdGEudGFyZ2V0LnZhbHVlfSlcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cuemViYXBpLmNvbS9wcm8vdjEvbWFya2V0XCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSA6IHJlc3VsdFt0aGlzLnN0YXRlLmNvaW5dXG4gICAgICAgICAgICAgIFxuICBcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKVxuICB9XG4gIHN1Ym1pdD0oKT0+e1xuICAgIHZhciBuZXdQb3N0S2V5ID0gZmlyZS5yZWYoJy9tZXNzYWdlcycpLnB1c2goe25hbWU6dGhpcy5zdGF0ZS5uYW1lLG1lc3NhZ2UgOiB0aGlzLnN0YXRlLnZhbHVlfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6JycsZmVlZDp0cnVlfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmVlZDpmYWxzZX0pXG4gICAgfSwgMjAwMCk7XG4gIH1cbiAgUG9wPSgpPT4oXG4gICAgXG4gICAgPFRvYXN0PlxuICA8VG9hc3RIZWFkZXI+XG4gICAge3RoaXMuc3RhdGUuZGF0YS5wYWlyfVxuICA8L1RvYXN0SGVhZGVyPlxuICA8VG9hc3RCb2R5PlxuICAgIGJ1eSBwcmljZSB7dGhpcy5zdGF0ZS5kYXRhLmJ1eX1cbiAgPC9Ub2FzdEJvZHk+XG4gIDwvVG9hc3Q+XG4gIClcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y29pbjoxOSxpc2xvYWRpbmc6ZmFsc2V9KVxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGZldGNoKFwiaHR0cHM6Ly93d3cuemViYXBpLmNvbS9wcm8vdjEvbWFya2V0XCIpXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YSA6IHJlc3VsdFt0aGlzLnN0YXRlLmNvaW5dXG4gICAgXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfSwgMTUwMCk7XG4gICBcbiAgICBcbiAgfVxucmVuZGVyKCl7XG4gIFxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7dGhpcy5zdGF0ZS5pc2xvYWRpbmc/XG48U3Bpbm5lciBjb2xvcj1cInByaW1hcnlcIiAvPlxuOjxkaXY+XG4gICAgICBcbiAgICAgIDxIZWFkPlxuICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJmYXZpY29uLmljb1wiIC8+XG4gICAgPC9IZWFkPlxuICAgICAgey8qIDxOZXZiYXIvPiAqL31cbiAgICAgIDxoND5Ba3NoYXkgVmFkaGVyPC9oND5cbiAgICAgIDxoND5aZWJwYXkgbGl2ZSBjcnlwdG9jdXJyZW5jeSBwcmljZSBieSBhcGk8L2g0Pjxici8+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPVwiNlwiPjxJbnB1dCB0eXBlPVwic2VsZWN0XCIgbmFtZT1cInNlbGVjdFwiIG9uQ2hhbmdlPXt0aGlzLnNlbGVjdH0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nMTknPkJUQzwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzQwJz5YUlA8L29wdGlvbj5cbiAgICAgICAgPC9JbnB1dD48L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz1cIjhcIj48Q29pbiBuYW1lPXt0aGlzLnN0YXRlLmRhdGF9Lz48L0NvbD5cbiAgICAgICAgPENvbCB4cz1cIjRcIj5GZWVkYmFja1xuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VuYW1lfS8+PGJyLz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIHJvd3M9XCI0XCIgY29scz1cIjUwXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZX0gLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nc20nIG9uQ2xpY2s9e3RoaXMuc3VibWl0fT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUuZmVlZD88aDU+dGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrPC9oNT46Jyd9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbXktMiByb3VuZGVkIGJnLWRvY3MtdHJhbnNwYXJlbnQtZ3JpZFwiPlxuXG4gICAgICB7dGhpcy5zdGF0ZS5zaG93ID8gXG50aGlzLlBvcCgpICAgIDonJ31cbjwvZGl2PjwvZGl2Pn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcblxuIFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})