"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Column_tsx",{

/***/ "./src/components/Column.tsx":
/*!***********************************!*\
  !*** ./src/components/Column.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\n\nconst Column = (param)=>{\n    let { tarefa } = param;\n    var _tarefa_id;\n    const deletarTarefaHandler = async ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        w: \"400px\",\n        h: \"620px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                display: \"flex\",\n                justifyContent: \"space-between\",\n                alignItems: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        size: \"md\",\n                        children: tarefa.nome\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.CloseIcon, {}, void 0, false, void 0, void 0),\n                        size: \"sm\",\n                        color: \"red.500\",\n                        onClick: ()=>deletarTarefaHandler,\n                        \"aria-label\": \"Close\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.Droppable, {\n                droppableId: ((_tarefa_id = tarefa.id) === null || _tarefa_id === void 0 ? void 0 : _tarefa_id.toString()) || \"\",\n                children: (droppableProvided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                            px: \"1.5rem\",\n                            flex: 1,\n                            flexDir: \"column\",\n                            divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StackDivider, {}, void 0, false, void 0, void 0),\n                            spacing: \"2\",\n                            ref: droppableProvided.innerRef,\n                            ...droppableProvided.droppableProps,\n                            children: [\n                                tarefa.cards.sort((a, b)=>a.posicao - b.posicao).map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.Draggable, {\n                                        draggableId: \"\".concat(card.id),\n                                        index: index,\n                                        children: (draggableProvided, draggableSnapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                                bg: \"card-bg\",\n                                                outline: \"2px solid\",\n                                                outlineColor: draggableSnapshot.isDragging ? \"card-border\" : \"transparent\",\n                                                boxShadow: draggableSnapshot.isDragging ? \"0 5px 10px rgba(0, 0, 0, 0.6)\" : \"unset\",\n                                                ref: draggableProvided.innerRef,\n                                                ...draggableProvided.draggableProps,\n                                                ...draggableProvided.dragHandleProps,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                                        size: \"xs\",\n                                                        textTransform: \"uppercase\",\n                                                        children: card.nome\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 25\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                                        pt: \"2\",\n                                                        fontSize: \"sm\",\n                                                        children: card.atividade\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                        lineNumber: 80,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 23\n                                            }, undefined)\n                                    }, card.id, false, {\n                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 19\n                                    }, undefined)),\n                                droppableProvided.placeholder\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDNkM7QUFXbkI7QUFDaUM7QUFFM0QsTUFBTVksU0FBZ0M7UUFBQyxFQUFFQyxNQUFNLEVBQUU7UUF1Qm5CQTtJQXJCOUIsTUFBTUMsdUJBQXVCLFdBRzdCO0lBRUUscUJBQ0UsOERBQUNiLGtEQUFJQTtRQUFDYyxHQUFFO1FBQVFDLEdBQUU7OzBCQUNoQiw4REFBQ2Isd0RBQVVBO2dCQUNUYyxTQUFRO2dCQUNSQyxnQkFBZTtnQkFDZkMsWUFBVzs7a0NBRVgsOERBQUNmLHFEQUFPQTt3QkFBQ2dCLE1BQUs7a0NBQU1QLE9BQU9RLElBQUk7Ozs7OztrQ0FDL0IsOERBQUNaLHdEQUFVQTt3QkFDVGEsb0JBQU0sOERBQUN0Qix1REFBU0E7d0JBQ2hCb0IsTUFBSzt3QkFDTEcsT0FBTTt3QkFDTkMsU0FBUyxJQUFNVjt3QkFDZlcsY0FBVzs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDZCwwREFBU0E7Z0JBQUNlLGFBQWFiLEVBQUFBLGFBQUFBLE9BQU9jLEVBQUUsY0FBVGQsaUNBQUFBLFdBQVdlLFFBQVEsT0FBTTswQkFDOUMsQ0FBQ0Msa0NBQ0EsOERBQUMzQixzREFBUUE7a0NBQ1AsNEVBQUNHLG1EQUFLQTs0QkFDSnlCLElBQUc7NEJBQ0hDLE1BQU07NEJBQ05DLFNBQVE7NEJBQ1JDLHVCQUFTLDhEQUFDMUIsMERBQVlBOzRCQUN0QjJCLFNBQVE7NEJBQ1JDLEtBQUtOLGtCQUFrQk8sUUFBUTs0QkFDOUIsR0FBR1Asa0JBQWtCUSxjQUFjOztnQ0FFbkN4QixPQUFPeUIsS0FBSyxDQUNWQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsT0FBTyxHQUFHRCxFQUFFQyxPQUFPLEVBQ3BDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1YsOERBQUNuQywwREFBU0E7d0NBRVJvQyxhQUFhLEdBQVcsT0FBUkYsS0FBS2pCLEVBQUU7d0NBQ3ZCa0IsT0FBT0E7a0RBRU4sQ0FBQ0UsbUJBQW1CQyxrQ0FDbkIsOERBQUN4QyxpREFBR0E7Z0RBQ0Z5QyxJQUFHO2dEQUNIQyxTQUFRO2dEQUNSQyxjQUNFSCxrQkFBa0JJLFVBQVUsR0FDeEIsZ0JBQ0E7Z0RBRU5DLFdBQ0VMLGtCQUFrQkksVUFBVSxHQUN4QixrQ0FDQTtnREFFTmpCLEtBQUtZLGtCQUFrQlgsUUFBUTtnREFDOUIsR0FBR1csa0JBQWtCTyxjQUFjO2dEQUNuQyxHQUFHUCxrQkFBa0JRLGVBQWU7O2tFQUVyQyw4REFBQ25ELHFEQUFPQTt3REFBQ2dCLE1BQUs7d0RBQUtvQyxlQUFjO2tFQUM5QlosS0FBS3ZCLElBQUk7Ozs7OztrRUFFWiw4REFBQ2Ysa0RBQUlBO3dEQUFDbUQsSUFBRzt3REFBSUMsVUFBUztrRUFDbkJkLEtBQUtlLFNBQVM7Ozs7Ozs7Ozs7Ozt1Q0ExQmhCZixLQUFLakIsRUFBRTs7Ozs7Z0NBZ0NqQkUsa0JBQWtCK0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUM7S0E5RU1oRDtBQWdGTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db2x1bW4udHN4PzBkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJvcHMgfSBmcm9tIFwiQC90eXBlcy9Db2x1bW5Qcm9wc1wiO1xyXG5pbXBvcnQgeyBDbG9zZUljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQge1xyXG4gIENhcmQsXHJcbiAgQ2FyZEJvZHksXHJcbiAgQ2FyZEhlYWRlcixcclxuICBIZWFkaW5nLFxyXG4gIFN0YWNrLFxyXG4gIFRleHQsXHJcbiAgU3RhY2tEaXZpZGVyLFxyXG4gIEJveCxcclxuICBJY29uQnV0dG9uLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IERyYWdnYWJsZSwgRHJvcHBhYmxlIH0gZnJvbSBcInJlYWN0LWJlYXV0aWZ1bC1kbmRcIjtcclxuXHJcbmNvbnN0IENvbHVtbjogUmVhY3QuRkM8Q29sdW1uUHJvcHM+ID0gKHsgdGFyZWZhIH0pID0+IHtcclxuXHJcbmNvbnN0IGRlbGV0YXJUYXJlZmFIYW5kbGVyID0gYXN5bmMgKCkgPT57XHJcblxyXG4gIFxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZCB3PVwiNDAwcHhcIiBoPVwiNjIwcHhcIj5cclxuICAgICAgPENhcmRIZWFkZXJcclxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiPnt0YXJlZmEubm9tZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGljb249ezxDbG9zZUljb24gLz59XHJcbiAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgY29sb3I9XCJyZWQuNTAwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0YXJUYXJlZmFIYW5kbGVyfSAgICAgICAgICBcclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPXt0YXJlZmEuaWQ/LnRvU3RyaW5nKCkgfHwgXCJcIn0+XHJcbiAgICAgICAgeyhkcm9wcGFibGVQcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICBweD1cIjEuNXJlbVwiXHJcbiAgICAgICAgICAgICAgZmxleD17MX1cclxuICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICBkaXZpZGVyPXs8U3RhY2tEaXZpZGVyIC8+fVxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9XCIyXCJcclxuICAgICAgICAgICAgICByZWY9e2Ryb3BwYWJsZVByb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgIHsuLi5kcm9wcGFibGVQcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0YXJlZmEuY2FyZHNcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2ljYW8gLSBiLnBvc2ljYW8pXHJcbiAgICAgICAgICAgICAgICAubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtgJHtjYXJkLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhkcmFnZ2FibGVQcm92aWRlZCwgZHJhZ2dhYmxlU25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJjYXJkLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZT1cIjJweCBzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVDb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlU25hcHNob3QuaXNEcmFnZ2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNhcmQtYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVTbmFwc2hvdC5pc0RyYWdnaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVuc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2RyYWdnYWJsZVByb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZHJhZ2dhYmxlUHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5kcmFnZ2FibGVQcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJ4c1wiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5ub21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHB0PVwiMlwiIGZvbnRTaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5hdGl2aWRhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAge2Ryb3BwYWJsZVByb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BwYWJsZT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xyXG4iXSwibmFtZXMiOlsiQ2xvc2VJY29uIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEhlYWRlciIsIkhlYWRpbmciLCJTdGFjayIsIlRleHQiLCJTdGFja0RpdmlkZXIiLCJCb3giLCJJY29uQnV0dG9uIiwiRHJhZ2dhYmxlIiwiRHJvcHBhYmxlIiwiQ29sdW1uIiwidGFyZWZhIiwiZGVsZXRhclRhcmVmYUhhbmRsZXIiLCJ3IiwiaCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJzaXplIiwibm9tZSIsImljb24iLCJjb2xvciIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIiwiZHJvcHBhYmxlSWQiLCJpZCIsInRvU3RyaW5nIiwiZHJvcHBhYmxlUHJvdmlkZWQiLCJweCIsImZsZXgiLCJmbGV4RGlyIiwiZGl2aWRlciIsInNwYWNpbmciLCJyZWYiLCJpbm5lclJlZiIsImRyb3BwYWJsZVByb3BzIiwiY2FyZHMiLCJzb3J0IiwiYSIsImIiLCJwb3NpY2FvIiwibWFwIiwiY2FyZCIsImluZGV4IiwiZHJhZ2dhYmxlSWQiLCJkcmFnZ2FibGVQcm92aWRlZCIsImRyYWdnYWJsZVNuYXBzaG90IiwiYmciLCJvdXRsaW5lIiwib3V0bGluZUNvbG9yIiwiaXNEcmFnZ2luZyIsImJveFNoYWRvdyIsImRyYWdnYWJsZVByb3BzIiwiZHJhZ0hhbmRsZVByb3BzIiwidGV4dFRyYW5zZm9ybSIsInB0IiwiZm9udFNpemUiLCJhdGl2aWRhZGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Column.tsx\n"));

/***/ })

});