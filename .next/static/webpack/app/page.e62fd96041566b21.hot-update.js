"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-client)/./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"(app-client)/./node_modules/antd/es/select/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"(app-client)/./node_modules/antd/es/input/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ \"(app-client)/./node_modules/antd/es/radio/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"(app-client)/./node_modules/antd/es/tag/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"(app-client)/./node_modules/antd/es/list/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"(app-client)/./node_modules/antd/es/button/index.js\");\n/* __next_internal_client_entry_do_not_use__  auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst { Option  } = antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nconst priorities = [\n    \"Low\",\n    \"Medium\",\n    \"High\"\n];\nconst priorityColors = [\n    {\n        key: \"Low\",\n        color: \"gray\"\n    },\n    {\n        key: \"Medium\",\n        color: \"blue\"\n    },\n    {\n        key: \"Hight\",\n        color: \"red\"\n    }\n];\nconst statuses = [\n    {\n        label: \"All\",\n        value: \"All\"\n    },\n    {\n        label: \"Completed\",\n        value: \"Completed\"\n    },\n    {\n        label: \"Todo\",\n        value: \"Todo\"\n    }\n];\nconst Todo = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Low\");\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statusFilter, setStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [priorityFilter, setPriorityFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (event)=>{\n        setInputValue(event.target.value);\n    };\n    const handlePriorityChange = (value)=>{\n        setPriority(value);\n    };\n    const handleAddTask = ()=>{\n        if (inputValue.trim() === \"\") return;\n        const newTask = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n            name: inputValue.trim(),\n            priority: priority,\n            completed: false\n        };\n        setTasks([\n            ...tasks,\n            newTask\n        ]);\n        setInputValue(\"\");\n        setPriority(\"Low\");\n    };\n    const handleSearchChange = (event)=>{\n        setSearchValue(event.target.value.toLowerCase());\n    };\n    const handleStatusFilterChange = (e)=>{\n        setStatusFilter(e.target.value);\n    };\n    const handlePriorityFilterChange = (value)=>{\n        console.log(value);\n        setPriorityFilter(value);\n    };\n    const handleTaskClick = (id)=>{\n        const updatedTasks = tasks.map((task)=>{\n            if (task.id === id) {\n                return {\n                    ...task,\n                    completed: !task.completed\n                };\n            }\n            return task;\n        });\n        setTasks(updatedTasks);\n    };\n    // const filteredTasks = tasks.filter((task) => {\n    //   const statusMatch =\n    //     statusFilter === \"All\"\n    //       ? true\n    //       : task.completed === (statusFilter === \"Completed\");\n    //   // const statusMatch = task.filter((task) => {\n    //   //   if (statusFilter === 'All') {\n    //   //     return true;\n    //   //   }\n    //   //   if (statusFilter === 'Completed') {\n    //   //     return task.completed;\n    //   //   }\n    //   //   if (statusFilter === 'To do') {\n    //   //     return !task.completed;\n    //   //   }\n    //   //   return false;\n    //   // });\n    //   const priorityMatch =\n    //     priorityFilter === \"All\"\n    //       ? true\n    //       : task.priority === priorityFilter.toLowerCase();\n    //   const searchMatch = task.name.toLowerCase().includes(searchValue);\n    //   return statusMatch && priorityMatch && searchMatch;\n    // });\n    const filteredTasks = tasks.filter((task)=>{\n        if (statusFilter === \"All\") {\n            return priorityFilter.length ? task.name.includes(searchValue) && priorityFilter.includes(task.priority) : task.name.includes(searchValue);\n        }\n        return task.name.includes(searchValue) && (statusFilter === \"Completed\" ? task.completed : !task.completed) && (priorityFilter.length ? priorityFilter.includes(task.priority) : true);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: \"400px\",\n            margin: \"100px auto\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    textAlign: \"center\",\n                    marginBottom: \"50px\",\n                    fontSize: \"30px\",\n                    fontStyle: \"bold\"\n                },\n                children: \"TODO APP\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Search, {\n                        placeholder: \"Search tasks\",\n                        value: searchValue,\n                        onChange: handleSearchChange,\n                        enterButton: true\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 129,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Filter by status:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 147,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Group, {\n                        options: statuses,\n                        value: statusFilter,\n                        onChange: handleStatusFilterChange\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 148,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                lineNumber: 146,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Filter by priority:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 157,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        mode: \"multiple\",\n                        allowClear: true,\n                        placeholder: \"Please select\",\n                        style: {\n                            width: \"100%\"\n                        },\n                        value: priorityFilter,\n                        onChange: handlePriorityFilterChange,\n                        children: priorities.map((priority)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                value: priority,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    color: priorityColors.find((pri)=>priority === pri.key).color,\n                                    children: priority\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                                    lineNumber: 168,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, priority, false, {\n                                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                                lineNumber: 167,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 158,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                lineNumber: 156,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                bordered: true,\n                dataSource: filteredTasks,\n                renderItem: (task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].Item, {\n                        style: {\n                            textDecoration: task.completed ? \"line-through\" : \"none\"\n                        },\n                        onClick: ()=>handleTaskClick(task.id),\n                        children: [\n                            task.name,\n                            \" \",\n                            task.priority\n                        ]\n                    }, void 0, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    marginTop: \"16px\",\n                    marginBottom: \"16px \"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        style: {\n                            marginRight: \"8px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 195,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        defaultValue: \"low\",\n                        style: {\n                            width: \"120px\",\n                            marginRight: \"8px\"\n                        },\n                        onChange: handlePriorityChange,\n                        children: priorities.map((priority)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                value: priority,\n                                children: priority\n                            }, priority, false, {\n                                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                                lineNumber: 206,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 200,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        type: \"primary\",\n                        onClick: handleAddTask,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                        lineNumber: 212,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Learn/To-do-App/src/app/page.js\",\n        lineNumber: 114,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"jAF2yGmcRGsPu3O5s1N4/7C/COc=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dDQUFzQk8sT0FBT007MENBQzNCQTsrQkFEVUE7Ozs7Ozs7Ozs7a0NBTWpCLDhEQUFDbEIsNENBQU1BO3dCQUFDa0YsTUFBSzt3QkFBVUwsU0FBUy9DO2tDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkQ7R0F0TU1qQjtLQUFBQTtBQXdNTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcbmltcG9ydCB7IElucHV0LCBCdXR0b24sIFNlbGVjdCwgTGlzdCwgUmFkaW8sIFRhZyB9IGZyb20gXCJhbnRkXCI7XG5cbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XG5cbmNvbnN0IHByaW9yaXRpZXMgPSBbXCJMb3dcIiwgXCJNZWRpdW1cIiwgXCJIaWdoXCJdO1xuY29uc3QgcHJpb3JpdHlDb2xvcnMgPSBbXG4gIHsga2V5OiBcIkxvd1wiLCBjb2xvcjogXCJncmF5XCIgfSxcbiAgeyBrZXk6IFwiTWVkaXVtXCIsIGNvbG9yOiBcImJsdWVcIiB9LFxuICB7IGtleTogXCJIaWdodFwiLCBjb2xvcjogXCJyZWRcIiB9LFxuXTtcbmNvbnN0IHN0YXR1c2VzID0gW1xuICB7IGxhYmVsOiBcIkFsbFwiLCB2YWx1ZTogXCJBbGxcIiB9LFxuICB7IGxhYmVsOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJDb21wbGV0ZWRcIiB9LFxuICB7IGxhYmVsOiBcIlRvZG9cIiwgdmFsdWU6IFwiVG9kb1wiIH0sXG5dO1xuXG5jb25zdCBUb2RvID0gKCkgPT4ge1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmlvcml0eSwgc2V0UHJpb3JpdHldID0gdXNlU3RhdGUoXCJMb3dcIik7XG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgW3ByaW9yaXR5RmlsdGVyLCBzZXRQcmlvcml0eUZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJpb3JpdHlDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRQcmlvcml0eSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVGFzayA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBuYW1lOiBpbnB1dFZhbHVlLnRyaW0oKSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICAgIHNldElucHV0VmFsdWUoXCJcIik7XG4gICAgc2V0UHJpb3JpdHkoXCJMb3dcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VhcmNoVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN0YXR1c0ZpbHRlckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U3RhdHVzRmlsdGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmlvcml0eUZpbHRlckNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICBzZXRQcmlvcml0eUZpbHRlcih2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVGFza0NsaWNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4udGFzaywgY29tcGxldGVkOiAhdGFzay5jb21wbGV0ZWQgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXNrO1xuICAgIH0pO1xuICAgIHNldFRhc2tzKHVwZGF0ZWRUYXNrcyk7XG4gIH07XG5cbiAgLy8gY29uc3QgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAvLyAgIGNvbnN0IHN0YXR1c01hdGNoID1cbiAgLy8gICAgIHN0YXR1c0ZpbHRlciA9PT0gXCJBbGxcIlxuICAvLyAgICAgICA/IHRydWVcbiAgLy8gICAgICAgOiB0YXNrLmNvbXBsZXRlZCA9PT0gKHN0YXR1c0ZpbHRlciA9PT0gXCJDb21wbGV0ZWRcIik7XG4gIC8vICAgLy8gY29uc3Qgc3RhdHVzTWF0Y2ggPSB0YXNrLmZpbHRlcigodGFzaykgPT4ge1xuICAvLyAgIC8vICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gJ0FsbCcpIHtcbiAgLy8gICAvLyAgICAgcmV0dXJuIHRydWU7XG4gIC8vICAgLy8gICB9XG4gIC8vICAgLy8gICBpZiAoc3RhdHVzRmlsdGVyID09PSAnQ29tcGxldGVkJykge1xuICAvLyAgIC8vICAgICByZXR1cm4gdGFzay5jb21wbGV0ZWQ7XG4gIC8vICAgLy8gICB9XG4gIC8vICAgLy8gICBpZiAoc3RhdHVzRmlsdGVyID09PSAnVG8gZG8nKSB7XG4gIC8vICAgLy8gICAgIHJldHVybiAhdGFzay5jb21wbGV0ZWQ7XG4gIC8vICAgLy8gICB9XG4gIC8vICAgLy8gICByZXR1cm4gZmFsc2U7XG4gIC8vICAgLy8gfSk7XG4gIC8vICAgY29uc3QgcHJpb3JpdHlNYXRjaCA9XG4gIC8vICAgICBwcmlvcml0eUZpbHRlciA9PT0gXCJBbGxcIlxuICAvLyAgICAgICA/IHRydWVcbiAgLy8gICAgICAgOiB0YXNrLnByaW9yaXR5ID09PSBwcmlvcml0eUZpbHRlci50b0xvd2VyQ2FzZSgpO1xuICAvLyAgIGNvbnN0IHNlYXJjaE1hdGNoID0gdGFzay5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpO1xuICAvLyAgIHJldHVybiBzdGF0dXNNYXRjaCAmJiBwcmlvcml0eU1hdGNoICYmIHNlYXJjaE1hdGNoO1xuICAvLyB9KTtcbiAgY29uc3QgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgIGlmIChzdGF0dXNGaWx0ZXIgPT09IFwiQWxsXCIpIHtcbiAgICAgIHJldHVybiBwcmlvcml0eUZpbHRlci5sZW5ndGhcbiAgICAgICAgPyB0YXNrLm5hbWUuaW5jbHVkZXMoc2VhcmNoVmFsdWUpICYmXG4gICAgICAgICAgICBwcmlvcml0eUZpbHRlci5pbmNsdWRlcyh0YXNrLnByaW9yaXR5KVxuICAgICAgICA6IHRhc2submFtZS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIHRhc2submFtZS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkgJiZcbiAgICAgIChzdGF0dXNGaWx0ZXIgPT09IFwiQ29tcGxldGVkXCIgPyB0YXNrLmNvbXBsZXRlZCA6ICF0YXNrLmNvbXBsZXRlZCkgJiZcbiAgICAgIChwcmlvcml0eUZpbHRlci5sZW5ndGggPyBwcmlvcml0eUZpbHRlci5pbmNsdWRlcyh0YXNrLnByaW9yaXR5KSA6IHRydWUpXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiBcIjQwMHB4XCIsIG1hcmdpbjogXCIxMDBweCBhdXRvXCIgfX0+XG4gICAgICA8aDFcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjUwcHhcIixcbiAgICAgICAgICBmb250U2l6ZTogXCIzMHB4XCIsXG4gICAgICAgICAgZm9udFN0eWxlOiBcImJvbGRcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgVE9ETyBBUFBcbiAgICAgIDwvaDE+XG5cbiAgICAgIHsvKiBTZWFjaCB0YXNrICAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgPGg0PlNlYXJjaDwvaDQ+XG4gICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0YXNrc1wiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU3RhdHVzIHRhc2sgKi99XG4gICAgICB7LyogPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cbiAgICAgICAgPGgzPkZpbHRlciBieSBzdGF0dXM6PC9oMz5cbiAgICAgICAgPFJhZGlvLkdyb3VwIG9wdGlvbnM9e3N0YXR1c2VzfSB2YWx1ZT17c3RhdHVzRmlsdGVyfSBvbkNoYW5nZT17aGFuZGxlU3RhdHVzRmlsdGVyQ2hhbmdlfT5cbiAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJBbGxcIj5BbGw8L1JhZGlvPlxuICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIkNvbXBsZXRlZFwiPkNvbXBsZXRlZDwvUmFkaW8+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwiVG8gZG9cIj5Ub2RvPC9SYWRpbz5cbiAgICAgICAgPC9SYWRpby5Hcm91cD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgPGg0PkZpbHRlciBieSBzdGF0dXM6PC9oND5cbiAgICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgICAgb3B0aW9ucz17c3RhdHVzZXN9XG4gICAgICAgICAgdmFsdWU9e3N0YXR1c0ZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdHVzRmlsdGVyQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQcmlvcml0eSB0YXNrICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxuICAgICAgICA8aDQ+RmlsdGVyIGJ5IHByaW9yaXR5OjwvaDQ+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxuICAgICAgICAgIGFsbG93Q2xlYXJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIHZhbHVlPXtwcmlvcml0eUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJpb3JpdHlGaWx0ZXJDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiAoXG4gICAgICAgICAgICA8T3B0aW9uIGtleT17cHJpb3JpdHl9IHZhbHVlPXtwcmlvcml0eX0+XG4gICAgICAgICAgICAgIDxUYWdcbiAgICAgICAgICAgICAgICBjb2xvcj17cHJpb3JpdHlDb2xvcnMuZmluZCgocHJpKSA9PiBwcmlvcml0eSA9PT0gcHJpLmtleSkuY29sb3J9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJpb3JpdHl9XG4gICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxMaXN0XG4gICAgICAgIGJvcmRlcmVkXG4gICAgICAgIGRhdGFTb3VyY2U9e2ZpbHRlcmVkVGFza3N9XG4gICAgICAgIHJlbmRlckl0ZW09eyh0YXNrKSA9PiAoXG4gICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IHRhc2suY29tcGxldGVkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYXNrQ2xpY2sodGFzay5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Rhc2submFtZX0ge3Rhc2sucHJpb3JpdHl9XG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICl9XG4gICAgICAvPlxuXG4gICAgICB7LyogY3JlYXRlIG5ldyB0YXNrICAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIxNnB4XCIsIG1hcmdpbkJvdHRvbTogXCIxNnB4IFwiIH19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI4cHhcIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwibG93XCJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMjBweFwiLCBtYXJnaW5SaWdodDogXCI4cHhcIiB9fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQcmlvcml0eUNoYW5nZX1cbiAgICAgICAgPlxuICAgICAgICAgIHtwcmlvcml0aWVzLm1hcCgocHJpb3JpdHkpID0+IChcbiAgICAgICAgICAgIDxPcHRpb24ga2V5PXtwcmlvcml0eX0gdmFsdWU9e3ByaW9yaXR5fT5cbiAgICAgICAgICAgICAge3ByaW9yaXR5fVxuICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2VsZWN0PlxuXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVBZGRUYXNrfT5cbiAgICAgICAgICBBZGRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG87XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInY0IiwidXVpZHY0IiwiSW5wdXQiLCJCdXR0b24iLCJTZWxlY3QiLCJMaXN0IiwiUmFkaW8iLCJUYWciLCJPcHRpb24iLCJwcmlvcml0aWVzIiwicHJpb3JpdHlDb2xvcnMiLCJrZXkiLCJjb2xvciIsInN0YXR1c2VzIiwibGFiZWwiLCJ2YWx1ZSIsIlRvZG8iLCJ0YXNrcyIsInNldFRhc2tzIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJwcmlvcml0eSIsInNldFByaW9yaXR5Iiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInN0YXR1c0ZpbHRlciIsInNldFN0YXR1c0ZpbHRlciIsInByaW9yaXR5RmlsdGVyIiwic2V0UHJpb3JpdHlGaWx0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlUHJpb3JpdHlDaGFuZ2UiLCJoYW5kbGVBZGRUYXNrIiwidHJpbSIsIm5ld1Rhc2siLCJpZCIsIm5hbWUiLCJjb21wbGV0ZWQiLCJoYW5kbGVTZWFyY2hDaGFuZ2UiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZVN0YXR1c0ZpbHRlckNoYW5nZSIsImUiLCJoYW5kbGVQcmlvcml0eUZpbHRlckNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVUYXNrQ2xpY2siLCJ1cGRhdGVkVGFza3MiLCJtYXAiLCJ0YXNrIiwiZmlsdGVyZWRUYXNrcyIsImZpbHRlciIsImxlbmd0aCIsImluY2x1ZGVzIiwiZGl2Iiwic3R5bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImgxIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJoNCIsIlNlYXJjaCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlbnRlckJ1dHRvbiIsIkdyb3VwIiwib3B0aW9ucyIsIm1vZGUiLCJhbGxvd0NsZWFyIiwid2lkdGgiLCJmaW5kIiwicHJpIiwiYm9yZGVyZWQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIkl0ZW0iLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2xpY2siLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/page.js\n"));

/***/ })

});