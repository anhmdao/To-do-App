"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst { Option  } = antd__WEBPACK_IMPORTED_MODULE_2__.Select;\nconst priorities = [\n    \"Low\",\n    \"Medium\",\n    \"High\"\n];\nconst priorityColors = [\n    {\n        key: \"Low\",\n        color: \"gray\"\n    },\n    {\n        key: \"Medium\",\n        color: \"blue\"\n    },\n    {\n        key: \"High\",\n        color: \"red\"\n    }\n];\nconst statuses = [\n    {\n        label: \"All\",\n        value: \"All\"\n    },\n    {\n        label: \"Completed\",\n        value: \"Completed\"\n    },\n    {\n        label: \"Todo\",\n        value: \"Todo\"\n    }\n];\nconst Todo = ()=>{\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [priority, setPriority] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Low\");\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [statusFilter, setStatusFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const [priorityFilter, setPriorityFilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (event)=>{\n        setInputValue(event.target.value);\n    };\n    const handlePriorityChange = (value)=>{\n        setPriority(value);\n    };\n    const handleAddTask = ()=>{\n        if (inputValue.trim() === \"\") return;\n        const newTask = {\n            id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n            name: inputValue.trim(),\n            priority: priority,\n            completed: false\n        };\n        setTasks([\n            ...tasks,\n            newTask\n        ]);\n        setInputValue(\"\");\n        setPriority(\"Low\");\n    };\n    const handleSearchChange = (event)=>{\n        setSearchValue(event.target.value.toLowerCase());\n    };\n    const handleStatusFilterChange = (e)=>{\n        setStatusFilter(e.target.value);\n    };\n    const handlePriorityFilterChange = (value)=>{\n        setPriorityFilter(value);\n    };\n    const handleTaskClick = (id)=>{\n        const updatedTasks = tasks.map((task)=>{\n            if (task.id === id) {\n                return {\n                    ...task,\n                    completed: !task.completed\n                };\n            }\n            return task;\n        });\n        setTasks(updatedTasks);\n    };\n    // const filteredTasks = tasks.filter((task) => {\n    //   const statusMatch =\n    //     statusFilter === \"All\"\n    //       ? true\n    //       : task.completed === (statusFilter === \"Completed\");\n    //   // const statusMatch = task.filter((task) => {\n    //   //   if (statusFilter === 'All') {\n    //   //     return true;\n    //   //   }\n    //   //   if (statusFilter === 'Completed') {\n    //   //     return task.completed;\n    //   //   }\n    //   //   if (statusFilter === 'To do') {\n    //   //     return !task.completed;\n    //   //   }\n    //   //   return false;\n    //   // });\n    //   const priorityMatch =\n    //     priorityFilter === \"All\"\n    //       ? true\n    //       : task.priority === priorityFilter.toLowerCase();\n    //   const searchMatch = task.name.toLowerCase().includes(searchValue);\n    //   return statusMatch && priorityMatch && searchMatch;\n    // });\n    const filteredTasks = tasks.filter((task)=>{\n        if (statusFilter === \"All\") {\n            return priorityFilter.length ? task.name.includes(searchValue) && priorityFilter.includes(task.priority) : task.name.includes(searchValue);\n        }\n        return task.name.includes(searchValue) && (statusFilter === \"Completed\" ? task.completed : !task.completed) && (priorityFilter.length ? priorityFilter.includes(task.priority) : true);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: \"400px\",\n            margin: \"100px auto\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    textAlign: \"center\",\n                    marginBottom: \"50px\",\n                    fontSize: \"30px\",\n                    fontStyle: \"bold\"\n                },\n                children: \"TODO APP\"\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Search:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Search, {\n                        placeholder: \"Search tasks\",\n                        value: searchValue,\n                        onChange: handleSearchChange,\n                        enterButton: true\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Filter by status:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 145,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Radio.Group, {\n                        options: statuses,\n                        value: statusFilter,\n                        onChange: handleStatusFilterChange\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginBottom: \"16px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Filter by priority:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 155,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                        mode: \"multiple\",\n                        allowClear: true,\n                        placeholder: \"Please select\",\n                        style: {\n                            width: \"100%\"\n                        },\n                        value: priorityFilter,\n                        onChange: handlePriorityFilterChange,\n                        children: priorities.map((priority)=>{\n                            var _priorityColors_find;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                value: priority,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                                    color: (_priorityColors_find = priorityColors.find((pri)=>priority === pri.key)) === null || _priorityColors_find === void 0 ? void 0 : _priorityColors_find.color,\n                                    children: priority\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, priority, false, {\n                                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 156,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                lineNumber: 154,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List, {\n                bordered: true,\n                dataSource: filteredTasks,\n                renderItem: (task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.List.Item, {\n                        style: {\n                            textDecoration: task.completed ? \"line-through\" : \"none\"\n                        },\n                        onClick: ()=>handleTaskClick(task.id),\n                        children: [\n                            task.name,\n                            \" \",\n                            task.priority\n                        ]\n                    }, void 0, true, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    marginTop: \"16px\",\n                    marginBottom: \"16px \"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        placeholder: \"Enter task\",\n                        value: inputValue,\n                        onChange: handleInputChange,\n                        style: {\n                            marginRight: \"8px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 195,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Select, {\n                        defaultValue: \"Low\",\n                        style: {\n                            width: \"150px\",\n                            marginRight: \"8px\"\n                        },\n                        onChange: handlePriorityChange,\n                        children: priorities.map((priority)=>{\n                            var _priorityColors_find;\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Option, {\n                                value: priority,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Tag, {\n                                    color: (_priorityColors_find = priorityColors.find((pri)=>priority === pri.key)) === null || _priorityColors_find === void 0 ? void 0 : _priorityColors_find.color,\n                                    children: priority\n                                }, void 0, false, {\n                                    fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                                    lineNumber: 208,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, priority, false, {\n                                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                                lineNumber: 207,\n                                columnNumber: 13\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 201,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        type: \"primary\",\n                        onClick: handleAddTask,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                        lineNumber: 219,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/user/Documents/Learn/To-do-App/src/pages/index.jsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Todo, \"jAF2yGmcRGsPu3O5s1N4/7C/COc=\");\n_c = Todo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\nvar _c;\n$RefreshReg$(_c, \"Todo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQ3pCO2dDQUlUWDswQ0FITixxRUFBQ0Y7Z0NBQXNCTyxPQUFPTTswQ0FDNUIsNEVBQUNkLHFDQUFHQTtvQ0FDRkssT0FDRUYsQ0FBQUEsdUJBQUFBLGVBQWU2RCxJQUFJLENBQUMsQ0FBQ0MsTUFBUW5ELGFBQWFtRCxJQUFJN0QsR0FBRyxlQUFqREQsa0NBQUFBLEtBQUFBLElBQUFBLHFCQUFvREUsS0FBSzs4Q0FHMURTOzs7Ozs7K0JBTlFBOzs7Ozs7Ozs7OztrQ0FZakIsOERBQUNsQix3Q0FBTUE7d0JBQUNnRixNQUFLO3dCQUFVTCxTQUFTN0M7a0NBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12RDtHQTlNTWpCO0tBQUFBO0FBZ05OLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBJbnB1dCwgQnV0dG9uLCBTZWxlY3QsIExpc3QsIFJhZGlvLCBUYWcgfSBmcm9tIFwiYW50ZFwiO1xuXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xuXG5jb25zdCBwcmlvcml0aWVzID0gW1wiTG93XCIsIFwiTWVkaXVtXCIsIFwiSGlnaFwiXTtcbmNvbnN0IHByaW9yaXR5Q29sb3JzID0gW1xuICB7IGtleTogXCJMb3dcIiwgY29sb3I6IFwiZ3JheVwiIH0sXG4gIHsga2V5OiBcIk1lZGl1bVwiLCBjb2xvcjogXCJibHVlXCIgfSxcbiAgeyBrZXk6IFwiSGlnaFwiLCBjb2xvcjogXCJyZWRcIiB9LFxuXTtcbmNvbnN0IHN0YXR1c2VzID0gW1xuICB7IGxhYmVsOiBcIkFsbFwiLCB2YWx1ZTogXCJBbGxcIiB9LFxuICB7IGxhYmVsOiBcIkNvbXBsZXRlZFwiLCB2YWx1ZTogXCJDb21wbGV0ZWRcIiB9LFxuICB7IGxhYmVsOiBcIlRvZG9cIiwgdmFsdWU6IFwiVG9kb1wiIH0sXG5dO1xuXG5jb25zdCBUb2RvID0gKCkgPT4ge1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmlvcml0eSwgc2V0UHJpb3JpdHldID0gdXNlU3RhdGUoXCJMb3dcIik7XG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdGF0dXNGaWx0ZXIsIHNldFN0YXR1c0ZpbHRlcl0gPSB1c2VTdGF0ZShcIkFsbFwiKTtcbiAgY29uc3QgW3ByaW9yaXR5RmlsdGVyLCBzZXRQcmlvcml0eUZpbHRlcl0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJbnB1dFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJpb3JpdHlDaGFuZ2UgPSAodmFsdWUpID0+IHtcbiAgICBzZXRQcmlvcml0eSh2YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkVGFzayA9ICgpID0+IHtcbiAgICBpZiAoaW5wdXRWYWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcblxuICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICBpZDogdXVpZHY0KCksXG4gICAgICBuYW1lOiBpbnB1dFZhbHVlLnRyaW0oKSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgfTtcblxuICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICAgIHNldElucHV0VmFsdWUoXCJcIik7XG4gICAgc2V0UHJpb3JpdHkoXCJMb3dcIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VhcmNoQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2VhcmNoVmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN0YXR1c0ZpbHRlckNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U3RhdHVzRmlsdGVyKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmlvcml0eUZpbHRlckNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHNldFByaW9yaXR5RmlsdGVyKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUYXNrQ2xpY2sgPSAoaWQpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkVGFza3MgPSB0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgIGlmICh0YXNrLmlkID09PSBpZCkge1xuICAgICAgICByZXR1cm4geyAuLi50YXNrLCBjb21wbGV0ZWQ6ICF0YXNrLmNvbXBsZXRlZCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfSk7XG4gICAgc2V0VGFza3ModXBkYXRlZFRhc2tzKTtcbiAgfTtcblxuICAvLyBjb25zdCBmaWx0ZXJlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gIC8vICAgY29uc3Qgc3RhdHVzTWF0Y2ggPVxuICAvLyAgICAgc3RhdHVzRmlsdGVyID09PSBcIkFsbFwiXG4gIC8vICAgICAgID8gdHJ1ZVxuICAvLyAgICAgICA6IHRhc2suY29tcGxldGVkID09PSAoc3RhdHVzRmlsdGVyID09PSBcIkNvbXBsZXRlZFwiKTtcbiAgLy8gICAvLyBjb25zdCBzdGF0dXNNYXRjaCA9IHRhc2suZmlsdGVyKCh0YXNrKSA9PiB7XG4gIC8vICAgLy8gICBpZiAoc3RhdHVzRmlsdGVyID09PSAnQWxsJykge1xuICAvLyAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAvLyAgIH1cbiAgLy8gICAvLyAgIGlmIChzdGF0dXNGaWx0ZXIgPT09ICdDb21wbGV0ZWQnKSB7XG4gIC8vICAgLy8gICAgIHJldHVybiB0YXNrLmNvbXBsZXRlZDtcbiAgLy8gICAvLyAgIH1cbiAgLy8gICAvLyAgIGlmIChzdGF0dXNGaWx0ZXIgPT09ICdUbyBkbycpIHtcbiAgLy8gICAvLyAgICAgcmV0dXJuICF0YXNrLmNvbXBsZXRlZDtcbiAgLy8gICAvLyAgIH1cbiAgLy8gICAvLyAgIHJldHVybiBmYWxzZTtcbiAgLy8gICAvLyB9KTtcbiAgLy8gICBjb25zdCBwcmlvcml0eU1hdGNoID1cbiAgLy8gICAgIHByaW9yaXR5RmlsdGVyID09PSBcIkFsbFwiXG4gIC8vICAgICAgID8gdHJ1ZVxuICAvLyAgICAgICA6IHRhc2sucHJpb3JpdHkgPT09IHByaW9yaXR5RmlsdGVyLnRvTG93ZXJDYXNlKCk7XG4gIC8vICAgY29uc3Qgc2VhcmNoTWF0Y2ggPSB0YXNrLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSk7XG4gIC8vICAgcmV0dXJuIHN0YXR1c01hdGNoICYmIHByaW9yaXR5TWF0Y2ggJiYgc2VhcmNoTWF0Y2g7XG4gIC8vIH0pO1xuICBjb25zdCBmaWx0ZXJlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgaWYgKHN0YXR1c0ZpbHRlciA9PT0gXCJBbGxcIikge1xuICAgICAgcmV0dXJuIHByaW9yaXR5RmlsdGVyLmxlbmd0aFxuICAgICAgICA/IHRhc2submFtZS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkgJiZcbiAgICAgICAgICAgIHByaW9yaXR5RmlsdGVyLmluY2x1ZGVzKHRhc2sucHJpb3JpdHkpXG4gICAgICAgIDogdGFzay5uYW1lLmluY2x1ZGVzKHNlYXJjaFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgdGFzay5uYW1lLmluY2x1ZGVzKHNlYXJjaFZhbHVlKSAmJlxuICAgICAgKHN0YXR1c0ZpbHRlciA9PT0gXCJDb21wbGV0ZWRcIiA/IHRhc2suY29tcGxldGVkIDogIXRhc2suY29tcGxldGVkKSAmJlxuICAgICAgKHByaW9yaXR5RmlsdGVyLmxlbmd0aCA/IHByaW9yaXR5RmlsdGVyLmluY2x1ZGVzKHRhc2sucHJpb3JpdHkpIDogdHJ1ZSlcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6IFwiNDAwcHhcIiwgbWFyZ2luOiBcIjEwMHB4IGF1dG9cIiB9fT5cbiAgICAgIDxoMVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiNTBweFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjMwcHhcIixcbiAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBUT0RPIEFQUFxuICAgICAgPC9oMT5cblxuICAgICAgey8qIFNlYWNoIHRhc2sgICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxuICAgICAgICA8aDQ+U2VhcmNoOjwvaDQ+XG4gICAgICAgIDxJbnB1dC5TZWFyY2hcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCB0YXNrc1wiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTZWFyY2hDaGFuZ2V9XG4gICAgICAgICAgZW50ZXJCdXR0b25cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogU3RhdHVzIHRhc2sgKi99XG4gICAgICB7LyogPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fT5cbiAgICAgICAgPGgzPkZpbHRlciBieSBzdGF0dXM6PC9oMz5cbiAgICAgICAgPFJhZGlvLkdyb3VwIG9wdGlvbnM9e3N0YXR1c2VzfSB2YWx1ZT17c3RhdHVzRmlsdGVyfSBvbkNoYW5nZT17aGFuZGxlU3RhdHVzRmlsdGVyQ2hhbmdlfT5cbiAgICAgICAgICA8UmFkaW8gdmFsdWU9XCJBbGxcIj5BbGw8L1JhZGlvPlxuICAgICAgICAgIDxSYWRpbyB2YWx1ZT1cIkNvbXBsZXRlZFwiPkNvbXBsZXRlZDwvUmFkaW8+XG4gICAgICAgICAgPFJhZGlvIHZhbHVlPVwiVG8gZG9cIj5Ub2RvPC9SYWRpbz5cbiAgICAgICAgPC9SYWRpby5Hcm91cD5cbiAgICAgIDwvZGl2PiAqL31cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjE2cHhcIiB9fT5cbiAgICAgICAgPGg0PkZpbHRlciBieSBzdGF0dXM6PC9oND5cbiAgICAgICAgPFJhZGlvLkdyb3VwXG4gICAgICAgICAgb3B0aW9ucz17c3RhdHVzZXN9XG4gICAgICAgICAgdmFsdWU9e3N0YXR1c0ZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RhdHVzRmlsdGVyQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBQcmlvcml0eSB0YXNrICovfVxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMTZweFwiIH19PlxuICAgICAgICA8aDQ+RmlsdGVyIGJ5IHByaW9yaXR5OjwvaDQ+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBtb2RlPVwibXVsdGlwbGVcIlxuICAgICAgICAgIGFsbG93Q2xlYXJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3RcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICAgIHZhbHVlPXtwcmlvcml0eUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlUHJpb3JpdHlGaWx0ZXJDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJpb3JpdGllcy5tYXAoKHByaW9yaXR5KSA9PiAoXG4gICAgICAgICAgICA8T3B0aW9uIGtleT17cHJpb3JpdHl9IHZhbHVlPXtwcmlvcml0eX0+XG4gICAgICAgICAgICAgIDxUYWdcbiAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICBwcmlvcml0eUNvbG9ycy5maW5kKChwcmkpID0+IHByaW9yaXR5ID09PSBwcmkua2V5KT8uY29sb3JcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cHJpb3JpdHl9XG4gICAgICAgICAgICAgIDwvVGFnPlxuICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU2VsZWN0PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxMaXN0XG4gICAgICAgIGJvcmRlcmVkXG4gICAgICAgIGRhdGFTb3VyY2U9e2ZpbHRlcmVkVGFza3N9XG4gICAgICAgIHJlbmRlckl0ZW09eyh0YXNrKSA9PiAoXG4gICAgICAgICAgPExpc3QuSXRlbVxuICAgICAgICAgICAgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IHRhc2suY29tcGxldGVkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwibm9uZVwiIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYXNrQ2xpY2sodGFzay5pZCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3Rhc2submFtZX0ge3Rhc2sucHJpb3JpdHl9XG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICAgICl9XG4gICAgICAvPlxuXG4gICAgICB7LyogY3JlYXRlIG5ldyB0YXNrICAqL31cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIG1hcmdpblRvcDogXCIxNnB4XCIsIG1hcmdpbkJvdHRvbTogXCIxNnB4IFwiIH19XG4gICAgICA+XG4gICAgICAgIDxJbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFza1wiXG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjhweFwiIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJMb3dcIlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIsIG1hcmdpblJpZ2h0OiBcIjhweFwiIH19XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByaW9yaXR5Q2hhbmdlfVxuICAgICAgICA+XG4gICAgICAgICAge3ByaW9yaXRpZXMubWFwKChwcmlvcml0eSkgPT4gKFxuICAgICAgICAgICAgPE9wdGlvbiBrZXk9e3ByaW9yaXR5fSB2YWx1ZT17cHJpb3JpdHl9PlxuICAgICAgICAgICAgICA8VGFnXG4gICAgICAgICAgICAgICAgY29sb3I9e1xuICAgICAgICAgICAgICAgICAgcHJpb3JpdHlDb2xvcnMuZmluZCgocHJpKSA9PiBwcmlvcml0eSA9PT0gcHJpLmtleSk/LmNvbG9yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3ByaW9yaXR5fVxuICAgICAgICAgICAgICA8L1RhZz5cbiAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NlbGVjdD5cblxuICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlQWRkVGFza30+XG4gICAgICAgICAgQWRkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ2NCIsInV1aWR2NCIsIklucHV0IiwiQnV0dG9uIiwiU2VsZWN0IiwiTGlzdCIsIlJhZGlvIiwiVGFnIiwiT3B0aW9uIiwicHJpb3JpdGllcyIsInByaW9yaXR5Q29sb3JzIiwia2V5IiwiY29sb3IiLCJzdGF0dXNlcyIsImxhYmVsIiwidmFsdWUiLCJUb2RvIiwidGFza3MiLCJzZXRUYXNrcyIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwicHJpb3JpdHkiLCJzZXRQcmlvcml0eSIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJzdGF0dXNGaWx0ZXIiLCJzZXRTdGF0dXNGaWx0ZXIiLCJwcmlvcml0eUZpbHRlciIsInNldFByaW9yaXR5RmlsdGVyIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZVByaW9yaXR5Q2hhbmdlIiwiaGFuZGxlQWRkVGFzayIsInRyaW0iLCJuZXdUYXNrIiwiaWQiLCJuYW1lIiwiY29tcGxldGVkIiwiaGFuZGxlU2VhcmNoQ2hhbmdlIiwidG9Mb3dlckNhc2UiLCJoYW5kbGVTdGF0dXNGaWx0ZXJDaGFuZ2UiLCJlIiwiaGFuZGxlUHJpb3JpdHlGaWx0ZXJDaGFuZ2UiLCJoYW5kbGVUYXNrQ2xpY2siLCJ1cGRhdGVkVGFza3MiLCJtYXAiLCJ0YXNrIiwiZmlsdGVyZWRUYXNrcyIsImZpbHRlciIsImxlbmd0aCIsImluY2x1ZGVzIiwiZGl2Iiwic3R5bGUiLCJtYXhXaWR0aCIsIm1hcmdpbiIsImgxIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJoNCIsIlNlYXJjaCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlbnRlckJ1dHRvbiIsIkdyb3VwIiwib3B0aW9ucyIsIm1vZGUiLCJhbGxvd0NsZWFyIiwid2lkdGgiLCJmaW5kIiwicHJpIiwiYm9yZGVyZWQiLCJkYXRhU291cmNlIiwicmVuZGVySXRlbSIsIkl0ZW0iLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uQ2xpY2siLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJkZWZhdWx0VmFsdWUiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});