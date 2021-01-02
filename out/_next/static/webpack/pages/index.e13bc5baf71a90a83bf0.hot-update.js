webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fire_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fire.js */ \"./fire.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _coin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coin.js */ \"./pages/coin.js\");\n/* harmony import */ var _feedback_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feedback.js */ \"./pages/feedback.js\");\n\n\nvar _jsxFileName = \"/home/akshay/react/client/pages/index.js\";\n\n\n\n\n\n\n // import Nevbar from './nevbar.js';\n\n // import socketIOClient from \"socket.io-client\";\n\n\nvar socket;\nconst port = process.env.PORT; // const endpoint = 'https://myapp.azurewebsites.net:8080/';\n\nclass Index extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"change\", data => {\n      this.setState({\n        value: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"changename\", data => {\n      this.setState({\n        name: data.target.value\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"select\", data => {\n      this.setState({\n        coin: data.target.value\n      });\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"submit\", () => {\n      var newPostKey = _fire_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ref('/messages').push({\n        name: this.state.name,\n        message: this.state.value\n      });\n      this.setState({\n        value: '',\n        name: '',\n        feed: true\n      });\n      setTimeout(() => {\n        this.setState({\n          feed: false\n        });\n      }, 2000);\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, \"Pop\", () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Toast\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"ToastHeader\"], {\n        children: this.state.data.pair\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 3\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"ToastBody\"], {\n        children: [\"buy price \", this.state.data.buy]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 3\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }, this));\n\n    this.state = {\n      price: '0',\n      data: [],\n      coin: '',\n      show: false,\n      test: '',\n      value: '',\n      name: '',\n      feed: false,\n      isloading: true\n    }; // socket = socketIOClient(endpoint);\n  }\n\n  componentDidMount() {\n    this.setState({\n      coin: 19,\n      isloading: false\n    });\n    setInterval(() => {\n      fetch(\"https://www.zebapi.com/pro/v1/market\").then(res => res.json()).then(result => {\n        this.setState({\n          data: result[this.state.coin]\n        });\n      });\n    }, 1500);\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n      children: this.state.isloading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Spinner\"], {\n        color: \"primary\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 1\n      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"link\", {\n            rel: \"shortcut icon\",\n            href: \"favicon.ico\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Akshay Vadher\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n          children: \"Zebpay live cryptocurrency price by api\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 55\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n            xs: \"6\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Input\"], {\n              type: \"select\",\n              name: \"select\",\n              onChange: this.select,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"19\",\n                children: \"BTC\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 107,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"option\", {\n                value: \"40\",\n                children: \"XRP\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 21\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 9\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Row\"], {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n            xs: \"8\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_coin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n              name: this.state.data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 21\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 9\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Col\"], {\n            xs: \"4\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h4\", {\n              children: \"Feedback\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 9\n            }, this), \" name       \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Input\"], {\n              type: \"text\",\n              value: this.state.name,\n              onChange: this.changename\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 26\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 97\n            }, this), \"feedback\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Input\"], {\n              type: \"textarea\",\n              rows: \"4\",\n              cols: \"50\",\n              value: this.state.value,\n              onChange: this.change\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(reactstrap__WEBPACK_IMPORTED_MODULE_6__[\"Button\"], {\n              color: \"primary\",\n              size: \"sm\",\n              onClick: this.submit,\n              children: \"Submit\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 9\n            }, this), this.state.feed ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h5\", {\n              children: \"thank you for your feedback\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 26\n            }, this) : '']\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 9\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 7\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"p-3 my-2 rounded bg-docs-transparent-grid\",\n          children: this.state.show ? this.Pop() : ''\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 7\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 2\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 5\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzb2NrZXQiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJJbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImRhdGEiLCJzZXRTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwibmFtZSIsImNvaW4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicmVzdWx0Iiwic3RhdGUiLCJuZXdQb3N0S2V5IiwiZmlyZSIsInJlZiIsInB1c2giLCJtZXNzYWdlIiwiZmVlZCIsInNldFRpbWVvdXQiLCJwYWlyIiwiYnV5IiwicHJpY2UiLCJzaG93IiwidGVzdCIsImlzbG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0SW50ZXJ2YWwiLCJyZW5kZXIiLCJzZWxlY3QiLCJjaGFuZ2VuYW1lIiwiY2hhbmdlIiwic3VibWl0IiwiUG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0NBR0E7O0NBRUE7O0FBQ0E7QUFDQSxJQUFJQSxNQUFKO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBekIsQyxDQUNBOztBQUNBLE1BQU1DLEtBQU4sU0FBb0JDLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQ2xDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQiw4R0FrQlhDLElBQUQsSUFBUTtBQUNiLFdBQUtDLFFBQUwsQ0FBYztBQUFDQyxhQUFLLEVBQUNGLElBQUksQ0FBQ0csTUFBTCxDQUFZRDtBQUFuQixPQUFkO0FBQ0QsS0FwQmtCOztBQUFBLGtIQXNCUEYsSUFBRCxJQUFRO0FBQ2pCLFdBQUtDLFFBQUwsQ0FBYztBQUFDRyxZQUFJLEVBQUNKLElBQUksQ0FBQ0csTUFBTCxDQUFZRDtBQUFsQixP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QUN3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUR4RiwyQkFFQSxxRUFBQyxnREFBRDtBQUFPLGtCQUFJLEVBQUMsVUFBWjtBQUF1QixrQkFBSSxFQUFDLEdBQTVCO0FBQWdDLGtCQUFJLEVBQUMsSUFBckM7QUFBMEMsbUJBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXVCxLQUE1RDtBQUFtRSxzQkFBUSxFQUFFLEtBQUs0QjtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZBLGVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIQSxlQUlBLHFFQUFDLGlEQUFEO0FBQVEsbUJBQUssRUFBQyxTQUFkO0FBQXdCLGtCQUFJLEVBQUMsSUFBN0I7QUFBa0MscUJBQU8sRUFBRSxLQUFLQyxNQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKQSxFQUtDLEtBQUtwQixLQUFMLENBQVdNLElBQVgsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFoQixHQUFxRCxFQUx0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRMLGVBMEJLO0FBQUssbUJBQVMsRUFBQywyQ0FBZjtBQUFBLG9CQUVDLEtBQUtOLEtBQUwsQ0FBV1csSUFBWCxHQUNQLEtBQUtVLEdBQUwsRUFETyxHQUNRO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkExQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBdUNDOztBQW5IaUM7O0FBcUhyQnJDLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZpcmUgZnJvbSAnLi4vZmlyZS5qcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLFNwaW5uZXIsTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJztcblxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuXG5pbXBvcnQge0J1dHRvbixGb3JtLElucHV0LFRvYXN0LCBUb2FzdEJvZHksIFRvYXN0SGVhZGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XG4vLyBpbXBvcnQgTmV2YmFyIGZyb20gJy4vbmV2YmFyLmpzJztcbmltcG9ydCBDb2luIGZyb20gJy4vY29pbi5qcyc7XG4vLyBpbXBvcnQgc29ja2V0SU9DbGllbnQgZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcbmltcG9ydCBGZWVkYmFjayBmcm9tICcuL2ZlZWRiYWNrLmpzJztcbnZhciBzb2NrZXQ7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVFxuLy8gY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly9teWFwcC5henVyZXdlYnNpdGVzLm5ldDo4MDgwLyc7XG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcmljZTonMCcsXG4gICAgICBkYXRhOltdLFxuICAgICAgY29pbjonJyxcbiAgICAgIHNob3c6ZmFsc2UsXG4gICAgICB0ZXN0OicnLFxuICAgICAgdmFsdWU6JycsXG4gICAgICBuYW1lOicnLFxuICAgICAgZmVlZDpmYWxzZSxcbiAgICAgIGlzbG9hZGluZzp0cnVlXG4gICAgfTtcbiAgICAvLyBzb2NrZXQgPSBzb2NrZXRJT0NsaWVudChlbmRwb2ludCk7XG4gICBcbiAgIFxuICB9XG5cbiAgY2hhbmdlPShkYXRhKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOmRhdGEudGFyZ2V0LnZhbHVlfSlcbiAgfVxuXG4gIGNoYW5nZW5hbWU9KGRhdGEpPT57XG4gICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTpkYXRhLnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgc2VsZWN0PShkYXRhKT0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvaW46ZGF0YS50YXJnZXQudmFsdWV9KVxuICAgICAgZmV0Y2goXCJodHRwczovL3d3dy56ZWJhcGkuY29tL3Byby92MS9tYXJrZXRcIilcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oXG4gICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhIDogcmVzdWx0W3RoaXMuc3RhdGUuY29pbl1cbiAgICAgICAgICAgICAgXG4gIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApXG4gIH1cbiAgc3VibWl0PSgpPT57XG4gICAgdmFyIG5ld1Bvc3RLZXkgPSBmaXJlLnJlZignL21lc3NhZ2VzJykucHVzaCh7bmFtZTp0aGlzLnN0YXRlLm5hbWUsbWVzc2FnZSA6IHRoaXMuc3RhdGUudmFsdWV9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTonJyxuYW1lOicnLGZlZWQ6dHJ1ZX0pXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ZlZWQ6ZmFsc2V9KVxuICAgIH0sIDIwMDApO1xuICB9XG4gIFBvcD0oKT0+KFxuICAgIFxuICAgIDxUb2FzdD5cbiAgPFRvYXN0SGVhZGVyPlxuICAgIHt0aGlzLnN0YXRlLmRhdGEucGFpcn1cbiAgPC9Ub2FzdEhlYWRlcj5cbiAgPFRvYXN0Qm9keT5cbiAgICBidXkgcHJpY2Uge3RoaXMuc3RhdGUuZGF0YS5idXl9XG4gIDwvVG9hc3RCb2R5PlxuICA8L1RvYXN0PlxuICApXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICAgIHRoaXMuc2V0U3RhdGUoe2NvaW46MTksaXNsb2FkaW5nOmZhbHNlfSlcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBmZXRjaChcImh0dHBzOi8vd3d3LnplYmFwaS5jb20vcHJvL3YxL21hcmtldFwiKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGEgOiByZXN1bHRbdGhpcy5zdGF0ZS5jb2luXVxuICAgIFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH0sIDE1MDApO1xuICAgXG4gICAgXG4gIH1cbnJlbmRlcigpe1xuICBcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAge3RoaXMuc3RhdGUuaXNsb2FkaW5nP1xuPFNwaW5uZXIgY29sb3I9XCJwcmltYXJ5XCIgLz5cbjo8ZGl2PlxuICAgICAgXG4gICAgICA8SGVhZD5cbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiZmF2aWNvbi5pY29cIiAvPlxuICAgIDwvSGVhZD5cbiAgICAgIHsvKiA8TmV2YmFyLz4gKi99XG4gICAgICA8aDQ+QWtzaGF5IFZhZGhlcjwvaDQ+XG4gICAgICA8aDQ+WmVicGF5IGxpdmUgY3J5cHRvY3VycmVuY3kgcHJpY2UgYnkgYXBpPC9oND48YnIvPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz1cIjZcIj48SW5wdXQgdHlwZT1cInNlbGVjdFwiIG5hbWU9XCJzZWxlY3RcIiBvbkNoYW5nZT17dGhpcy5zZWxlY3R9PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9JzE5Jz5CVEM8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSc0MCc+WFJQPC9vcHRpb24+XG4gICAgICAgIDwvSW5wdXQ+PC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgeHM9XCI4XCI+PENvaW4gbmFtZT17dGhpcy5zdGF0ZS5kYXRhfS8+PC9Db2w+XG4gICAgICAgIDxDb2wgeHM9XCI0XCI+PGg0PkZlZWRiYWNrPC9oND5cbiAgICAgICAgPGJyLz4gbmFtZSAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5jaGFuZ2VuYW1lfS8+PGJyLz5mZWVkYmFja1xuICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCIgcm93cz1cIjRcIiBjb2xzPVwiNTBcIiB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMuY2hhbmdlfSAvPlxuICAgICAgICA8YnIvPlxuICAgICAgICA8QnV0dG9uIGNvbG9yPSdwcmltYXJ5JyBzaXplPSdzbScgb25DbGljaz17dGhpcy5zdWJtaXR9PlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICB7dGhpcy5zdGF0ZS5mZWVkPzxoNT50aGFuayB5b3UgZm9yIHlvdXIgZmVlZGJhY2s8L2g1PjonJ31cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyBteS0yIHJvdW5kZWQgYmctZG9jcy10cmFuc3BhcmVudC1ncmlkXCI+XG5cbiAgICAgIHt0aGlzLnN0YXRlLnNob3cgPyBcbnRoaXMuUG9wKCkgICAgOicnfVxuPC9kaXY+PC9kaXY+fVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xuXG4gXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})