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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\n\nconst Column = (param)=>{\n    let { tarefa } = param;\n    var _tarefa_id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        w: \"400px\",\n        h: \"620px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                    size: \"md\",\n                    children: [\n                        \" \",\n                        tarefa.nome,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.WarningIcon, {\n                            w: 2,\n                            h: 8,\n                            color: \"red.500\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.Droppable, {\n                droppableId: ((_tarefa_id = tarefa.id) === null || _tarefa_id === void 0 ? void 0 : _tarefa_id.toString()) || \"\",\n                children: (droppableProvided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                            px: \"1.5rem\",\n                            flex: 1,\n                            flexDir: \"column\",\n                            divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StackDivider, {}, void 0, false, void 0, void 0),\n                            spacing: \"2\",\n                            ref: droppableProvided.innerRef,\n                            ...droppableProvided.droppableProps,\n                            children: [\n                                tarefa.cards.sort((a, b)=>a.posicao - b.posicao).map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_3__.Draggable, {\n                                        draggableId: \"\".concat(card.id),\n                                        index: index,\n                                        children: (draggableProvided, draggableSnapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                                bg: \"card-bg\",\n                                                outline: \"2px solid\",\n                                                outlineColor: draggableSnapshot.isDragging ? \"card-border\" : \"transparent\",\n                                                boxShadow: draggableSnapshot.isDragging ? \"0 5px 10px rgba(0, 0, 0, 0.6)\" : \"unset\",\n                                                ref: draggableProvided.innerRef,\n                                                ...draggableProvided.draggableProps,\n                                                ...draggableProvided.dragHandleProps,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                                        size: \"xs\",\n                                                        textTransform: \"uppercase\",\n                                                        children: card.nome\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 25\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                                        pt: \"2\",\n                                                        fontSize: \"sm\",\n                                                        children: card.atividade\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 23\n                                            }, undefined)\n                                    }, card.id, false, {\n                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, undefined)),\n                                droppableProvided.placeholder\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMkQ7QUFXakM7QUFDaUM7QUFFM0QsTUFBTVcsU0FBZ0M7UUFBQyxFQUFFQyxNQUFNLEVBQUU7UUFVbkJBO0lBVDVCLHFCQUNFLDhEQUFDWCxrREFBSUE7UUFBQ1ksR0FBRTtRQUFRQyxHQUFFOzswQkFDaEIsOERBQUNYLHdEQUFVQTswQkFDVCw0RUFBQ0MscURBQU9BO29CQUFDVyxNQUFLOzt3QkFDWDt3QkFDQUgsT0FBT0ksSUFBSTtzQ0FDWiw4REFBQ2hCLHlEQUFXQTs0QkFBQ2EsR0FBRzs0QkFBR0MsR0FBRzs0QkFBR0csT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDUCwwREFBU0E7Z0JBQUNRLGFBQWFOLEVBQUFBLGFBQUFBLE9BQU9PLEVBQUUsY0FBVFAsaUNBQUFBLFdBQVdRLFFBQVEsT0FBTTswQkFDOUMsQ0FBQ0Msa0NBQ0EsOERBQUNuQixzREFBUUE7a0NBQ1AsNEVBQUNHLG1EQUFLQTs0QkFDSmlCLElBQUc7NEJBQ0hDLE1BQU07NEJBQ05DLFNBQVE7NEJBQ1JDLHVCQUFTLDhEQUFDbEIsMERBQVlBOzRCQUN0Qm1CLFNBQVE7NEJBQ1JDLEtBQUtOLGtCQUFrQk8sUUFBUTs0QkFDOUIsR0FBR1Asa0JBQWtCUSxjQUFjOztnQ0FFbkNqQixPQUFPa0IsS0FBSyxDQUNWQyxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsT0FBTyxHQUFHRCxFQUFFQyxPQUFPLEVBQ3BDQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQ1YsOERBQUM1QiwwREFBU0E7d0NBRVI2QixhQUFhLEdBQVcsT0FBUkYsS0FBS2pCLEVBQUU7d0NBQ3ZCa0IsT0FBT0E7a0RBRU4sQ0FBQ0UsbUJBQW1CQyxrQ0FDbkIsOERBQUNoQyxpREFBR0E7Z0RBQ0ZpQyxJQUFHO2dEQUNIQyxTQUFRO2dEQUNSQyxjQUNFSCxrQkFBa0JJLFVBQVUsR0FDeEIsZ0JBQ0E7Z0RBRU5DLFdBQ0VMLGtCQUFrQkksVUFBVSxHQUN4QixrQ0FDQTtnREFFTmpCLEtBQUtZLGtCQUFrQlgsUUFBUTtnREFDOUIsR0FBR1csa0JBQWtCTyxjQUFjO2dEQUNuQyxHQUFHUCxrQkFBa0JRLGVBQWU7O2tFQUVyQyw4REFBQzNDLHFEQUFPQTt3REFBQ1csTUFBSzt3REFBS2lDLGVBQWM7a0VBQzlCWixLQUFLcEIsSUFBSTs7Ozs7O2tFQUVaLDhEQUFDVixrREFBSUE7d0RBQUMyQyxJQUFHO3dEQUFJQyxVQUFTO2tFQUNuQmQsS0FBS2UsU0FBUzs7Ozs7Ozs7Ozs7O3VDQTFCaEJmLEtBQUtqQixFQUFFOzs7OztnQ0FnQ2pCRSxrQkFBa0IrQixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81QztLQWpFTXpDO0FBbUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbHVtbi50c3g/MGQ5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2x1bW5Qcm9wcyB9IGZyb20gXCJAL3R5cGVzL0NvbHVtblByb3BzXCI7XHJcbmltcG9ydCB7IFNlYXJjaEljb24sIFdhcm5pbmdJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdGFjayxcclxuICBUZXh0LFxyXG4gIFN0YWNrRGl2aWRlcixcclxuICBCb3gsXHJcbiAgSWNvbkJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcblxyXG5jb25zdCBDb2x1bW46IFJlYWN0LkZDPENvbHVtblByb3BzPiA9ICh7IHRhcmVmYSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHc9XCI0MDBweFwiIGg9XCI2MjBweFwiPlxyXG4gICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj5cclxuICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgIHt0YXJlZmEubm9tZX1cclxuICAgICAgICAgIDxXYXJuaW5nSWNvbiB3PXsyfSBoPXs4fSBjb2xvcj1cInJlZC41MDBcIiAvPlxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgPC9DYXJkSGVhZGVyPlxyXG4gICAgICA8RHJvcHBhYmxlIGRyb3BwYWJsZUlkPXt0YXJlZmEuaWQ/LnRvU3RyaW5nKCkgfHwgXCJcIn0+XHJcbiAgICAgICAgeyhkcm9wcGFibGVQcm92aWRlZCkgPT4gKFxyXG4gICAgICAgICAgPENhcmRCb2R5PlxyXG4gICAgICAgICAgICA8U3RhY2tcclxuICAgICAgICAgICAgICBweD1cIjEuNXJlbVwiXHJcbiAgICAgICAgICAgICAgZmxleD17MX1cclxuICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICBkaXZpZGVyPXs8U3RhY2tEaXZpZGVyIC8+fVxyXG4gICAgICAgICAgICAgIHNwYWNpbmc9XCIyXCJcclxuICAgICAgICAgICAgICByZWY9e2Ryb3BwYWJsZVByb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgIHsuLi5kcm9wcGFibGVQcm92aWRlZC5kcm9wcGFibGVQcm9wc31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt0YXJlZmEuY2FyZHNcclxuICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnBvc2ljYW8gLSBiLnBvc2ljYW8pXHJcbiAgICAgICAgICAgICAgICAubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXJkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZUlkPXtgJHtjYXJkLmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgeyhkcmFnZ2FibGVQcm92aWRlZCwgZHJhZ2dhYmxlU25hcHNob3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmc9XCJjYXJkLWJnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZT1cIjJweCBzb2xpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVDb2xvcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlU25hcHNob3QuaXNEcmFnZ2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImNhcmQtYm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0cmFuc3BhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVTbmFwc2hvdC5pc0RyYWdnaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInVuc2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e2RyYWdnYWJsZVByb3ZpZGVkLmlubmVyUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZHJhZ2dhYmxlUHJvdmlkZWQuZHJhZ2dhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5kcmFnZ2FibGVQcm92aWRlZC5kcmFnSGFuZGxlUHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJ4c1wiIHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5ub21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHB0PVwiMlwiIGZvbnRTaXplPVwic21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2FyZC5hdGl2aWRhZGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAge2Ryb3BwYWJsZVByb3ZpZGVkLnBsYWNlaG9sZGVyfVxyXG4gICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgPC9DYXJkQm9keT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BwYWJsZT5cclxuICAgIDwvQ2FyZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sdW1uO1xyXG4iXSwibmFtZXMiOlsiV2FybmluZ0ljb24iLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkSGVhZGVyIiwiSGVhZGluZyIsIlN0YWNrIiwiVGV4dCIsIlN0YWNrRGl2aWRlciIsIkJveCIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIkNvbHVtbiIsInRhcmVmYSIsInciLCJoIiwic2l6ZSIsIm5vbWUiLCJjb2xvciIsImRyb3BwYWJsZUlkIiwiaWQiLCJ0b1N0cmluZyIsImRyb3BwYWJsZVByb3ZpZGVkIiwicHgiLCJmbGV4IiwiZmxleERpciIsImRpdmlkZXIiLCJzcGFjaW5nIiwicmVmIiwiaW5uZXJSZWYiLCJkcm9wcGFibGVQcm9wcyIsImNhcmRzIiwic29ydCIsImEiLCJiIiwicG9zaWNhbyIsIm1hcCIsImNhcmQiLCJpbmRleCIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvdmlkZWQiLCJkcmFnZ2FibGVTbmFwc2hvdCIsImJnIiwib3V0bGluZSIsIm91dGxpbmVDb2xvciIsImlzRHJhZ2dpbmciLCJib3hTaGFkb3ciLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInRleHRUcmFuc2Zvcm0iLCJwdCIsImZvbnRTaXplIiwiYXRpdmlkYWRlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Column.tsx\n"));

/***/ })

});