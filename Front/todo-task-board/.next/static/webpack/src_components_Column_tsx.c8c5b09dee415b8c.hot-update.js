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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n\n\n\nconst Column = (param)=>{\n    let { tarefa } = param;\n    var _tarefa_id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n        w: \"400px\",\n        h: \"620px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardHeader, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                        size: \"md\",\n                        children: [\n                            \" \",\n                            tarefa.nome,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {\n                        colorScheme: \"blue\",\n                        \"aria-label\": \"Search database\",\n                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WarningIcon, {\n                            w: 8,\n                            h: 8,\n                            color: \"red.500\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Droppable, {\n                droppableId: ((_tarefa_id = tarefa.id) === null || _tarefa_id === void 0 ? void 0 : _tarefa_id.toString()) || \"\",\n                children: (droppableProvided)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.CardBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n                            px: \"1.5rem\",\n                            flex: 1,\n                            flexDir: \"column\",\n                            divider: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.StackDivider, {}, void 0, false, void 0, void 0),\n                            spacing: \"2\",\n                            ref: droppableProvided.innerRef,\n                            ...droppableProvided.droppableProps,\n                            children: [\n                                tarefa.cards.sort((a, b)=>a.posicao - b.posicao).map((card, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_2__.Draggable, {\n                                        draggableId: \"\".concat(card.id),\n                                        index: index,\n                                        children: (draggableProvided, draggableSnapshot)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                                                bg: \"card-bg\",\n                                                outline: \"2px solid\",\n                                                outlineColor: draggableSnapshot.isDragging ? \"card-border\" : \"transparent\",\n                                                boxShadow: draggableSnapshot.isDragging ? \"0 5px 10px rgba(0, 0, 0, 0.6)\" : \"unset\",\n                                                ref: draggableProvided.innerRef,\n                                                ...draggableProvided.draggableProps,\n                                                ...draggableProvided.dragHandleProps,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {\n                                                        size: \"xs\",\n                                                        textTransform: \"uppercase\",\n                                                        children: card.nome\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                        lineNumber: 66,\n                                                        columnNumber: 25\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                                        pt: \"2\",\n                                                        fontSize: \"sm\",\n                                                        children: card.atividade\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 23\n                                            }, undefined)\n                                    }, card.id, false, {\n                                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 19\n                                    }, undefined)),\n                                droppableProvided.placeholder\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\components\\\\Column.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Column;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Column);\nvar _c;\n$RefreshReg$(_c, \"Column\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db2x1bW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQVkwQjtBQUNpQztBQUUzRCxNQUFNVyxTQUFnQztRQUFDLEVBQUVDLE1BQU0sRUFBRTtRQVluQkE7SUFYNUIscUJBQ0UsOERBQUNaLGtEQUFJQTtRQUFDYSxHQUFFO1FBQVFDLEdBQUU7OzBCQUNoQiw4REFBQ1osd0RBQVVBOztrQ0FDVCw4REFBQ0MscURBQU9BO3dCQUFDWSxNQUFLOzs0QkFBSzs0QkFBRUgsT0FBT0ksSUFBSTs0QkFBQzs7Ozs7OztrQ0FDakMsOERBQUNSLHdEQUFVQTt3QkFDTFMsYUFBWTt3QkFDWkMsY0FBVzt3QkFDWEMsb0JBQU0sOERBQUNDOzRCQUFZUCxHQUFHOzRCQUFHQyxHQUFHOzRCQUFHTyxPQUFNOzs7Ozs7Ozs7Ozs7OzBCQUk3Qyw4REFBQ1gsMERBQVNBO2dCQUFDWSxhQUFhVixFQUFBQSxhQUFBQSxPQUFPVyxFQUFFLGNBQVRYLGlDQUFBQSxXQUFXWSxRQUFRLE9BQU07MEJBQzlDLENBQUNDLGtDQUNBLDhEQUFDeEIsc0RBQVFBO2tDQUNQLDRFQUFDRyxtREFBS0E7NEJBQ0pzQixJQUFHOzRCQUNIQyxNQUFNOzRCQUNOQyxTQUFROzRCQUNSQyx1QkFBUyw4REFBQ3ZCLDBEQUFZQTs0QkFDdEJ3QixTQUFROzRCQUNSQyxLQUFLTixrQkFBa0JPLFFBQVE7NEJBQzlCLEdBQUdQLGtCQUFrQlEsY0FBYzs7Z0NBRW5DckIsT0FBT3NCLEtBQUssQ0FDVkMsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLE9BQU8sR0FBR0QsRUFBRUMsT0FBTyxFQUNwQ0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNWLDhEQUFDaEMsMERBQVNBO3dDQUVSaUMsYUFBYSxHQUFXLE9BQVJGLEtBQUtqQixFQUFFO3dDQUN2QmtCLE9BQU9BO2tEQUVOLENBQUNFLG1CQUFtQkMsa0NBQ25CLDhEQUFDckMsaURBQUdBO2dEQUNGc0MsSUFBRztnREFDSEMsU0FBUTtnREFDUkMsY0FDRUgsa0JBQWtCSSxVQUFVLEdBQ3hCLGdCQUNBO2dEQUVOQyxXQUNFTCxrQkFBa0JJLFVBQVUsR0FDeEIsa0NBQ0E7Z0RBRU5qQixLQUFLWSxrQkFBa0JYLFFBQVE7Z0RBQzlCLEdBQUdXLGtCQUFrQk8sY0FBYztnREFDbkMsR0FBR1Asa0JBQWtCUSxlQUFlOztrRUFFckMsOERBQUNoRCxxREFBT0E7d0RBQUNZLE1BQUs7d0RBQUtxQyxlQUFjO2tFQUM5QlosS0FBS3hCLElBQUk7Ozs7OztrRUFFWiw4REFBQ1gsa0RBQUlBO3dEQUFDZ0QsSUFBRzt3REFBSUMsVUFBUztrRUFDbkJkLEtBQUtlLFNBQVM7Ozs7Ozs7Ozs7Ozt1Q0ExQmhCZixLQUFLakIsRUFBRTs7Ozs7Z0NBZ0NqQkUsa0JBQWtCK0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUM7S0FuRU03QztBQXFFTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db2x1bW4udHN4PzBkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uUHJvcHMgfSBmcm9tIFwiQC90eXBlcy9Db2x1bW5Qcm9wc1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBDYXJkLFxyXG4gIENhcmRCb2R5LFxyXG4gIENhcmRIZWFkZXIsXHJcbiAgSGVhZGluZyxcclxuICBTdGFjayxcclxuICBUZXh0LFxyXG4gIFN0YWNrRGl2aWRlcixcclxuICBCb3gsXHJcbiAgSWNvbkJ1dHRvbixcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGUsIERyb3BwYWJsZSB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XHJcblxyXG5jb25zdCBDb2x1bW46IFJlYWN0LkZDPENvbHVtblByb3BzPiA9ICh7IHRhcmVmYSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIHc9XCI0MDBweFwiIGg9XCI2MjBweFwiPlxyXG4gICAgICA8Q2FyZEhlYWRlcj5cclxuICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIj4ge3RhcmVmYS5ub21lfSA8L0hlYWRpbmc+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICBjb2xvclNjaGVtZT1cImJsdWVcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWFyY2ggZGF0YWJhc2VcIlxyXG4gICAgICAgICAgICAgIGljb249ezxXYXJuaW5nSWNvbiB3PXs4fSBoPXs4fSBjb2xvcj1cInJlZC41MDBcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgIDwvQ2FyZEhlYWRlcj5cclxuICAgICAgPERyb3BwYWJsZSBkcm9wcGFibGVJZD17dGFyZWZhLmlkPy50b1N0cmluZygpIHx8IFwiXCJ9PlxyXG4gICAgICAgIHsoZHJvcHBhYmxlUHJvdmlkZWQpID0+IChcclxuICAgICAgICAgIDxDYXJkQm9keT5cclxuICAgICAgICAgICAgPFN0YWNrXHJcbiAgICAgICAgICAgICAgcHg9XCIxLjVyZW1cIlxyXG4gICAgICAgICAgICAgIGZsZXg9ezF9XHJcbiAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgZGl2aWRlcj17PFN0YWNrRGl2aWRlciAvPn1cclxuICAgICAgICAgICAgICBzcGFjaW5nPVwiMlwiXHJcbiAgICAgICAgICAgICAgcmVmPXtkcm9wcGFibGVQcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICB7Li4uZHJvcHBhYmxlUHJvdmlkZWQuZHJvcHBhYmxlUHJvcHN9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7dGFyZWZhLmNhcmRzXHJcbiAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wb3NpY2FvIC0gYi5wb3NpY2FvKVxyXG4gICAgICAgICAgICAgICAgLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2FyZC5pZH1cclxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGVJZD17YCR7Y2FyZC5pZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHsoZHJhZ2dhYmxlUHJvdmlkZWQsIGRyYWdnYWJsZVNuYXBzaG90KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnPVwiY2FyZC1iZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU9XCIycHggc29saWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lQ29sb3I9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZVNuYXBzaG90LmlzRHJhZ2dpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjYXJkLWJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidHJhbnNwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlU25hcHNob3QuaXNEcmFnZ2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ1bnNldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtkcmFnZ2FibGVQcm92aWRlZC5pbm5lclJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLmRyYWdnYWJsZVByb3ZpZGVkLmRyYWdnYWJsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uZHJhZ2dhYmxlUHJvdmlkZWQuZHJhZ0hhbmRsZVByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwieHNcIiB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQubm9tZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBwdD1cIjJcIiBmb250U2l6ZT1cInNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQuYXRpdmlkYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIHtkcm9wcGFibGVQcm92aWRlZC5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgIDwvQ2FyZEJvZHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wcGFibGU+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcclxuIl0sIm5hbWVzIjpbIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRIZWFkZXIiLCJIZWFkaW5nIiwiU3RhY2siLCJUZXh0IiwiU3RhY2tEaXZpZGVyIiwiQm94IiwiSWNvbkJ1dHRvbiIsIkRyYWdnYWJsZSIsIkRyb3BwYWJsZSIsIkNvbHVtbiIsInRhcmVmYSIsInciLCJoIiwic2l6ZSIsIm5vbWUiLCJjb2xvclNjaGVtZSIsImFyaWEtbGFiZWwiLCJpY29uIiwiV2FybmluZ0ljb24iLCJjb2xvciIsImRyb3BwYWJsZUlkIiwiaWQiLCJ0b1N0cmluZyIsImRyb3BwYWJsZVByb3ZpZGVkIiwicHgiLCJmbGV4IiwiZmxleERpciIsImRpdmlkZXIiLCJzcGFjaW5nIiwicmVmIiwiaW5uZXJSZWYiLCJkcm9wcGFibGVQcm9wcyIsImNhcmRzIiwic29ydCIsImEiLCJiIiwicG9zaWNhbyIsIm1hcCIsImNhcmQiLCJpbmRleCIsImRyYWdnYWJsZUlkIiwiZHJhZ2dhYmxlUHJvdmlkZWQiLCJkcmFnZ2FibGVTbmFwc2hvdCIsImJnIiwib3V0bGluZSIsIm91dGxpbmVDb2xvciIsImlzRHJhZ2dpbmciLCJib3hTaGFkb3ciLCJkcmFnZ2FibGVQcm9wcyIsImRyYWdIYW5kbGVQcm9wcyIsInRleHRUcmFuc2Zvcm0iLCJwdCIsImZvbnRTaXplIiwiYXRpdmlkYWRlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Column.tsx\n"));

/***/ })

});