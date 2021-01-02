webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fire.js */ \"./fire.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback.js */ \"./pages/feedback.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n\n\n // import Nevbar from './nevbar.js';\n\n // import socketIOClient from \"socket.io-client\";\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"change\", data => {\n      this.setState({\n        value: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"changename\", data => {\n      this.setState({\n        name: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.setState({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"submit\", () => {\n      var newPostKey = _fire_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ref('/messages').push({\n        name: this.state.name,\n        message: this.state.value\n      });\n      this.setState({\n        value: '',\n        name: '',\n        feed: true\n      });\n      setTimeout(() => {\n        this.setState({\n          feed: false\n        });\n      }, 3000);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: '0',\n      data: [],\n      coin: '',\n      show: false,\n      price: 0,\n      profit: '',\n      test: '',\n      value: '',\n      name: '',\n      feed: false,\n      isloading: true\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19,\n      isloading: false\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      }).then(this.setState({\n        price: this.state.data.sell\n      }));\n    }, 1500);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n      children: this.state.isloading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Spinner\"], {\n        color: \"primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 1\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n            rel: \"shortcut icon\",\n            href: \"favicon.ico\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Akshay Vadher\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Zebpay live crypto currency price by api\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 56\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n          children: this.state.price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 7\n        }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          children: 250249.21 - this.state.price\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 35\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"6\",\n            children: [\" \", this.state.feed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Toast\"], {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastHeader\"], {\n                  children: \"feedback\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 114,\n                  columnNumber: 11\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"ToastBody\"], {\n                  children: \"thank you for your feedback\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 117,\n                  columnNumber: 11\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 113,\n                columnNumber: 9\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 40\n            }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"select\",\n              name: \"select\",\n              onChange: this.select,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"19\",\n                children: \"BTC\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"40\",\n                children: \"XRP\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 27\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 9\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Row\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"8\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              name: this.state.data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 127,\n              columnNumber: 21\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 127,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Col\"], {\n            xs: \"4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n              children: \"Feedback\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 131,\n              columnNumber: 8\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 9\n            }, this), \" name       \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"text\",\n              value: this.state.name,\n              onChange: this.changename\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 26\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 132,\n              columnNumber: 97\n            }, this), \"feedback\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Input\"], {\n              type: \"textarea\",\n              rows: \"4\",\n              cols: \"50\",\n              value: this.state.value,\n              onChange: this.change\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 133,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__[\"Button\"], {\n              color: \"primary\",\n              size: \"sm\",\n              onClick: this.submit,\n              children: \"Submit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 135,\n              columnNumber: 9\n            }, this), this.state.feed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n              children: \"thank you for your feedback\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 136,\n              columnNumber: 26\n            }, this) : '']\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n          children: this.state.show ? this.Pop() : ''\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 2\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 5\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwibmFtZSIsImNvaW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic3RhdGUiLCJuZXdQb3N0S2V5IiwiZmlyZSIsInJlZiIsInB1c2giLCJtZXNzYWdlIiwiZmVlZCIsInNldFRpbWVvdXQiLCJwYWlyIiwiYnV5IiwicHJpY2UiLCJzaG93IiwicHJvZml0IiwidGVzdCIsImlzbG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0SW50ZXJ2YWwiLCJzZWxsIiwicmVuZGVyIiwic2VsZWN0IiwiY2hhbmdlbmFtZSIsImNoYW5nZSIsInN1Ym1pdCIsIlBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FHQTs7Q0FFQTs7QUFDQTtBQUNBLElBQUlBLE1BQUo7QUFDQSxNQUFNQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUF6QixDLENBQ0E7O0FBQ0EsTUFBTUMsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDbENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47O0FBRGlCLDhHQW9CWEMsSUFBRCxJQUFRO0FBQ2IsV0FBS0MsUUFBTCxDQUFjO0FBQUNDLGFBQUssRUFBQ0YsSUFBSSxDQUFDRyxNQUFMLENBQVlEO0FBQW5CLE9BQWQ7QUFDRCxLQXRCa0I7O0FBQUEsa0hBd0JQRixJQUFELElBQVE7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQUNHLFlBQUksRUFBQ0osSUFBSSxDQUFDRyxNQUFMLENB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEEsRUFNQyxLQUFLdEIsS0FBTCxDQUFXTSxJQUFYLGdCQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBaEIsR0FBcUQsRUFOdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF2QkwsZUF1Q0s7QUFBSyxtQkFBUyxFQUFDLDJDQUFmO0FBQUEsb0JBRUMsS0FBS04sS0FBTCxDQUFXVyxJQUFYLEdBQ1AsS0FBS1ksR0FBTCxFQURPLEdBQ1E7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFvREM7O0FBdElpQzs7QUF3SXJCdkMsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZmlyZSBmcm9tICcuLi9maXJlLmpzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQge0NvbnRhaW5lciwgUm93LCBDb2wsU3Bpbm5lciAsQnV0dG9uLEZvcm0sSW5wdXQsVG9hc3QsIFRvYXN0Qm9keSwgVG9hc3RIZWFkZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcbi8vIGltcG9ydCBOZXZiYXIgZnJvbSAnLi9uZXZiYXIuanMnO1xuaW1wb3J0IENvaW4gZnJvbSAnLi9jb2luLmpzJztcbi8vIGltcG9ydCBzb2NrZXRJT0NsaWVudCBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IEZlZWRiYWNrIGZyb20gJy4vZmVlZGJhY2suanMnO1xudmFyIHNvY2tldDtcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUXG4vLyBjb25zdCBlbmRwb2ludCA9ICdodHRwczovL215YXBwLmF6dXJld2Vic2l0ZXMubmV0OjgwODAvJztcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByaWNlOicwJyxcbiAgICAgIGRhdGE6W10sXG4gICAgICBjb2luOicnLFxuICAgICAgc2hvdzpmYWxzZSxcbiAgICAgIHByaWNlOjAsXG4gICAgICBwcm9maXQ6JycsXG4gICAgICB0ZXN0OicnLFxuICAgICAgdmFsdWU6JycsXG4gICAgICBuYW1lOicnLFxuICAgICAgZmVlZDpmYWxzZSxcbiAgICAgIGlzbG9hZGluZzp0cnVlXG4gICAgfTtcbiAgICAvLyBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XG4gICBcbiAgIFxuICB9XG5cbiAgY2hhbmdlPShkYXRhKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmRhdGEudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIGNoYW5nZW5hbWU9KGRhdGEpPT57XG4gICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTpkYXRhLnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgc2VsZWN0PShkYXRhKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvaW46ZGF0YS50YXJnZXQudmFsdWV9KVxuICAgICAgZmV0Y2goXCJodHRwczovL3d3dy56ZWJhcGkuY29tL3Byby92MS9tYXJrZXRcIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oXG4gICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhIDogcmVzdWx0W3RoaXMuc3RhdGUuY29pbl1cbiAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApXG4gIH1cbiAgc3VibWl0PSgpPT57XG4gICAgdmFyIG5ld1Bvc3RLZXkgPSBmaXJlLnJlZignL21lc3NhZ2VzJykucHVzaCh7bmFtZTp0aGlzLnN0YXRlLm5hbWUsbWVzc2FnZSA6IHRoaXMuc3RhdGUudmFsdWV9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTonJyxuYW1lOicnLGZlZWQ6dHJ1ZX0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZWQ6ZmFsc2V9KVxuICAgIH0sIDMwMDApO1xuICB9XG4gIFBvcD0oKT0+KFxuICAgIFxuICAgIDxUb2FzdD5cbiAgPFRvYXN0SGVhZGVyPlxuICAgIHt0aGlzLnN0YXRlLmRhdGEucGFpcn1cbiAgPC9Ub2FzdEhlYWRlcj5cbiAgPFRvYXN0Qm9keT5cbiAgICBidXkgcHJpY2Uge3RoaXMuc3RhdGUuZGF0YS5idXl9XG4gIDwvVG9hc3RCb2R5PlxuICA8L1RvYXN0PlxuICApXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe2NvaW46MTksaXNsb2FkaW5nOmZhbHNlfSlcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnplYmFwaS5jb20vcHJvL3YxL21hcmtldFwiKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgOiByZXN1bHRbdGhpcy5zdGF0ZS5jb2luXVxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3ByaWNlOnRoaXMuc3RhdGUuZGF0YS5zZWxsfSlcbiAgICAgICAgKVxuICAgICAgfSwgMTUwMCk7XG4gICAgICBcbiAgIFxuICAgIFxuICB9XG5yZW5kZXIoKXtcbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHt0aGlzLnN0YXRlLmlzbG9hZGluZz9cbjxTcGlubmVyIGNvbG9yPVwicHJpbWFyeVwiIC8+XG46PGRpdj5cbiAgICAgIFxuICAgICAgPEhlYWQ+XG4gICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImZhdmljb24uaWNvXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgICB7LyogPE5ldmJhci8+ICovfVxuICAgICAgPGg0PkFrc2hheSBWYWRoZXI8L2g0PlxuICAgICAgPGg0PlplYnBheSBsaXZlIGNyeXB0byBjdXJyZW5jeSBwcmljZSBieSBhcGk8L2g0Pjxici8+XG4gICAgICA8aDU+e3RoaXMuc3RhdGUucHJpY2V9PC9oNT4gPGRpdj57MjUwMjQ5LjIxLXRoaXMuc3RhdGUucHJpY2V9PC9kaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPVwiNlwiPiB7IHRoaXMuc3RhdGUuZmVlZD88ZGl2IGNsYXNzTmFtZT1cInAtMyBteS0yIHJvdW5kZWQgYmctZG9jcy10cmFuc3BhcmVudC1ncmlkXCI+XG4gICAgICAgIDxUb2FzdD5cbiAgICAgICAgICA8VG9hc3RIZWFkZXI+XG4gICAgICAgICAgICBmZWVkYmFja1xuICAgICAgICAgIDwvVG9hc3RIZWFkZXI+XG4gICAgICAgICAgPFRvYXN0Qm9keT5cbiAgICAgICAgICAgIHRoYW5rIHlvdSBmb3IgeW91ciBmZWVkYmFja1xuICAgICAgICAgIDwvVG9hc3RCb2R5PlxuICAgICAgICA8L1RvYXN0PjwvZGl2PjonJ308SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3R9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE5Jz5CVEM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+WFJQPC9vcHRpb24+XG4gICAgICAgIDwvSW5wdXQ+PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICBcbiAgICAgICAgPENvbCB4cz1cIjhcIj48Q29pbiBuYW1lPXt0aGlzLnN0YXRlLmRhdGF9Lz48L0NvbD5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8Q29sIHhzPVwiNFwiPlxuICAgICAgIDxoND5GZWVkYmFjazwvaDQ+XG4gICAgICAgIDxici8+IG5hbWUgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlbmFtZX0vPjxici8+ZmVlZGJhY2tcbiAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0YXJlYVwiIHJvd3M9XCI0XCIgY29scz1cIjUwXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZX0gLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj0ncHJpbWFyeScgc2l6ZT0nc20nIG9uQ2xpY2s9e3RoaXMuc3VibWl0fT5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAge3RoaXMuc3RhdGUuZmVlZD88aDU+dGhhbmsgeW91IGZvciB5b3VyIGZlZWRiYWNrPC9oNT46Jyd9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbXktMiByb3VuZGVkIGJnLWRvY3MtdHJhbnNwYXJlbnQtZ3JpZFwiPlxuXG4gICAgICB7dGhpcy5zdGF0ZS5zaG93ID8gXG50aGlzLlBvcCgpICAgIDonJ31cbjwvZGl2PjwvZGl2Pn1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcblxuIFxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})