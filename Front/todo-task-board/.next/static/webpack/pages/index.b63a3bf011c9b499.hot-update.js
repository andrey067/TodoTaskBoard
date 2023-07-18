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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var _Services_TarefaService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Services/TarefaService */ \"./src/Services/TarefaService.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ColumnCompoent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"src_components_Column_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/Column */ \"./src/components/Column.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"@/components/Column\"\n        ]\n    },\n    ssr: false\n});\n_c1 = ColumnCompoent;\nconst reorderColumnList = (sourceCol, startIndex, endIndex)=>{\n    const newTaskIds = Array.from(sourceCol.taskIds);\n    const [removed] = newTaskIds.splice(startIndex, 1);\n    newTaskIds.splice(endIndex, 0, removed);\n    const newColumn = {\n        ...sourceCol,\n        taskIds: newTaskIds\n    };\n    return newColumn;\n};\nconst Home = ()=>{\n    _s();\n    const [tarefas, setTarefa] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const tarefaService = new _Services_TarefaService__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const obterTarefas = async ()=>{\n            try {\n                let requestResult = await tarefaService.obterTodos();\n                setTarefa(requestResult.data);\n                console.log(\"requestResult\", requestResult);\n            } catch (error) {\n                console.error(\"Falha ao obter a tarefa:\");\n            }\n        };\n        obterTarefas();\n    }, []);\n    const [columns, setColumns] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: \"column-1\",\n            title: \"TO-DO\",\n            taskIds: [\n                1,\n                2,\n                3,\n                4,\n                5,\n                6\n            ]\n        },\n        {\n            id: \"column-2\",\n            title: \"IN-PROGRESS\",\n            taskIds: []\n        },\n        {\n            id: \"column-3\",\n            title: \"COMPLETED\",\n            taskIds: []\n        }\n    ]);\n    const onDragEnd = (result)=>{\n        const { destination, source } = result;\n        if (!destination) return;\n        if (destination.droppableId === source.droppableId && destination.index === source.index) {\n            return;\n        }\n        const startColumnIndex = columns.findIndex((col)=>col.id === source.droppableId);\n        const sourceCol = columns[startColumnIndex];\n        const destinationColumnIndex = columns.findIndex((col)=>col.id === destination.droppableId);\n        const destinationCol = columns[destinationColumnIndex];\n        if (sourceCol.id === destinationCol.id) {\n            const newColumn = reorderColumnList(sourceCol, source.index, destination.index);\n            const newColumns = [\n                ...columns\n            ];\n            newColumns[startColumnIndex] = newColumn;\n            setColumns(newColumns);\n            return;\n        }\n        const startTaskIds = Array.from(sourceCol.taskIds);\n        const [removed] = startTaskIds.splice(source.index, 1);\n        const newStartCol = {\n            ...sourceCol,\n            taskIds: startTaskIds\n        };\n        const endTaskIds = Array.from(destinationCol.taskIds);\n        endTaskIds.splice(destination.index, 0, removed);\n        const newEndCol = {\n            ...destinationCol,\n            taskIds: endTaskIds\n        };\n        const newColumns = [\n            ...columns\n        ];\n        newColumns[startColumnIndex] = newStartCol;\n        newColumns[destinationColumnIndex] = newEndCol;\n        setColumns(newColumns);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_6__.DragDropContext, {\n                onDragEnd: onDragEnd,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    flexDir: \"column\",\n                    bg: \"main-bg\",\n                    minH: \"100vh\",\n                    w: \"full\",\n                    color: \"white-text\",\n                    pb: \"2rem\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            py: \"4rem\",\n                            flexDir: \"column\",\n                            align: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                fontSize: \"3xl\",\n                                fontWeight: 800,\n                                children: \"TaskBoard\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 134,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 133,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                            justify: \"space-between\",\n                            px: \"4rem\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 139,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"RJcLp5Zd1PM1b47/bTwqPaj1yxc=\");\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ColumnCompoent$dynamic\");\n$RefreshReg$(_c1, \"ColumnCompoent\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWUcsS0FBSyxFQUFFLEdBQUd2QjtRQUN4QyxNQUFNaUMsWUFBb0I7WUFDeEIsR0FBR0wsY0FBYztZQUNqQjdCLFNBQVNpQztRQUNYO1FBRUEsTUFBTUgsYUFBYTtlQUFJZjtTQUFRO1FBQy9CZSxVQUFVLENBQUNMLGlCQUFpQixHQUFHTztRQUMvQkYsVUFBVSxDQUFDRix1QkFBdUIsR0FBR007UUFDckNsQixXQUFXYztJQUNiO0lBRUEscUJBQ0UsOERBQUM5QyxpREFBR0E7OzBCQUNGLDhEQUFDSywwREFBTUE7Ozs7OzBCQUNQLDhEQUFDRixnRUFBZUE7Z0JBQUNnQyxXQUFXQTswQkFDMUIsNEVBQUNsQyxrREFBSUE7b0JBQ0hrRCxTQUFRO29CQUNSQyxJQUFHO29CQUNIQyxNQUFLO29CQUNMQyxHQUFFO29CQUNGQyxPQUFNO29CQUNOQyxJQUFHOztzQ0FFSCw4REFBQ3ZELGtEQUFJQTs0QkFBQ3dELElBQUc7NEJBQU9OLFNBQVE7NEJBQVNPLE9BQU07c0NBQ3JDLDRFQUFDeEQscURBQU9BO2dDQUFDeUQsVUFBUztnQ0FBTUMsWUFBWTswQ0FBSzs7Ozs7Ozs7Ozs7c0NBSzNDLDhEQUFDM0Qsa0RBQUlBOzRCQUFDNEQsU0FBUTs0QkFBZ0JDLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0IzQztHQTlITTFDO01BQUFBO0FBZ0lOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IERyYWdEcm9wQ29udGV4dCwgRHJvcFJlc3VsdCB9IGZyb20gXCJyZWFjdC1iZWF1dGlmdWwtZG5kXCI7XG5pbXBvcnQgeyBDb2x1bW4gfSBmcm9tIFwiQC90eXBlcy9Db2x1bW5cIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiQC90eXBlcy9UYXNrXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgVGFyZWZhU2VydmljZSBmcm9tIFwiQC9TZXJ2aWNlcy9UYXJlZmFTZXJ2aWNlXCI7XG5cbmNvbnN0IENvbHVtbkNvbXBvZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvQ29sdW1uXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgcmVvcmRlckNvbHVtbkxpc3QgPSAoXG4gIHNvdXJjZUNvbDogQ29sdW1uLFxuICBzdGFydEluZGV4OiBudW1iZXIsXG4gIGVuZEluZGV4OiBudW1iZXJcbik6IENvbHVtbiA9PiB7XG4gIGNvbnN0IG5ld1Rhc2tJZHMgPSBBcnJheS5mcm9tKHNvdXJjZUNvbC50YXNrSWRzKTtcbiAgY29uc3QgW3JlbW92ZWRdID0gbmV3VGFza0lkcy5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gIG5ld1Rhc2tJZHMuc3BsaWNlKGVuZEluZGV4LCAwLCByZW1vdmVkKTtcblxuICBjb25zdCBuZXdDb2x1bW46IENvbHVtbiA9IHtcbiAgICAuLi5zb3VyY2VDb2wsXG4gICAgdGFza0lkczogbmV3VGFza0lkcyxcbiAgfTtcblxuICByZXR1cm4gbmV3Q29sdW1uO1xufTtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YXJlZmFzLCBzZXRUYXJlZmFdID0gdXNlU3RhdGU8VGFza1tdPihbXSk7XG4gIGNvbnN0IHRhcmVmYVNlcnZpY2UgPSBuZXcgVGFyZWZhU2VydmljZSgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG9idGVyVGFyZWZhcyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXF1ZXN0UmVzdWx0ID0gYXdhaXQgdGFyZWZhU2VydmljZS5vYnRlclRvZG9zKCk7XG4gICAgICAgIHNldFRhcmVmYShyZXF1ZXN0UmVzdWx0LmRhdGEgYXMgVGFza1tdKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXF1ZXN0UmVzdWx0XCIsIHJlcXVlc3RSZXN1bHQpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFsaGEgYW8gb2J0ZXIgYSB0YXJlZmE6XCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBvYnRlclRhcmVmYXMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IFtjb2x1bW5zLCBzZXRDb2x1bW5zXSA9IHVzZVN0YXRlPEFycmF5PENvbHVtbj4+KFtcbiAgICB7XG4gICAgICBpZDogXCJjb2x1bW4tMVwiLFxuICAgICAgdGl0bGU6IFwiVE8tRE9cIixcbiAgICAgIHRhc2tJZHM6IFsxLCAyLCAzLCA0LCA1LCA2XSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImNvbHVtbi0yXCIsXG4gICAgICB0aXRsZTogXCJJTi1QUk9HUkVTU1wiLFxuICAgICAgdGFza0lkczogW10sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJjb2x1bW4tM1wiLFxuICAgICAgdGl0bGU6IFwiQ09NUExFVEVEXCIsXG4gICAgICB0YXNrSWRzOiBbXSxcbiAgICB9LFxuICBdKTtcblxuICBjb25zdCBvbkRyYWdFbmQgPSAocmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgY29uc3QgeyBkZXN0aW5hdGlvbiwgc291cmNlIH0gPSByZXN1bHQ7XG5cbiAgICBpZiAoIWRlc3RpbmF0aW9uKSByZXR1cm47XG5cbiAgICBpZiAoXG4gICAgICBkZXN0aW5hdGlvbi5kcm9wcGFibGVJZCA9PT0gc291cmNlLmRyb3BwYWJsZUlkICYmXG4gICAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4XG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc3RhcnRDb2x1bW5JbmRleCA9IGNvbHVtbnMuZmluZEluZGV4KFxuICAgICAgKGNvbCkgPT4gY29sLmlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWRcbiAgICApO1xuICAgIGNvbnN0IHNvdXJjZUNvbCA9IGNvbHVtbnNbc3RhcnRDb2x1bW5JbmRleF07XG5cbiAgICBjb25zdCBkZXN0aW5hdGlvbkNvbHVtbkluZGV4ID0gY29sdW1ucy5maW5kSW5kZXgoXG4gICAgICAoY29sKSA9PiBjb2wuaWQgPT09IGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkXG4gICAgKTtcbiAgICBjb25zdCBkZXN0aW5hdGlvbkNvbCA9IGNvbHVtbnNbZGVzdGluYXRpb25Db2x1bW5JbmRleF07XG5cbiAgICBpZiAoc291cmNlQ29sLmlkID09PSBkZXN0aW5hdGlvbkNvbC5pZCkge1xuICAgICAgY29uc3QgbmV3Q29sdW1uID0gcmVvcmRlckNvbHVtbkxpc3QoXG4gICAgICAgIHNvdXJjZUNvbCxcbiAgICAgICAgc291cmNlLmluZGV4LFxuICAgICAgICBkZXN0aW5hdGlvbi5pbmRleFxuICAgICAgKTtcblxuICAgICAgY29uc3QgbmV3Q29sdW1ucyA9IFsuLi5jb2x1bW5zXTtcbiAgICAgIG5ld0NvbHVtbnNbc3RhcnRDb2x1bW5JbmRleF0gPSBuZXdDb2x1bW47XG4gICAgICBzZXRDb2x1bW5zKG5ld0NvbHVtbnMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0VGFza0lkcyA9IEFycmF5LmZyb20oc291cmNlQ29sLnRhc2tJZHMpO1xuICAgIGNvbnN0IFtyZW1vdmVkXSA9IHN0YXJ0VGFza0lkcy5zcGxpY2Uoc291cmNlLmluZGV4LCAxKTtcbiAgICBjb25zdCBuZXdTdGFydENvbDogQ29sdW1uID0ge1xuICAgICAgLi4uc291cmNlQ29sLFxuICAgICAgdGFza0lkczogc3RhcnRUYXNrSWRzLFxuICAgIH07XG5cbiAgICBjb25zdCBlbmRUYXNrSWRzID0gQXJyYXkuZnJvbShkZXN0aW5hdGlvbkNvbC50YXNrSWRzKTtcbiAgICBlbmRUYXNrSWRzLnNwbGljZShkZXN0aW5hdGlvbi5pbmRleCwgMCwgcmVtb3ZlZCk7XG4gICAgY29uc3QgbmV3RW5kQ29sOiBDb2x1bW4gPSB7XG4gICAgICAuLi5kZXN0aW5hdGlvbkNvbCxcbiAgICAgIHRhc2tJZHM6IGVuZFRhc2tJZHMsXG4gICAgfTtcblxuICAgIGNvbnN0IG5ld0NvbHVtbnMgPSBbLi4uY29sdW1uc107XG4gICAgbmV3Q29sdW1uc1tzdGFydENvbHVtbkluZGV4XSA9IG5ld1N0YXJ0Q29sO1xuICAgIG5ld0NvbHVtbnNbZGVzdGluYXRpb25Db2x1bW5JbmRleF0gPSBuZXdFbmRDb2w7XG4gICAgc2V0Q29sdW1ucyhuZXdDb2x1bW5zKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxCb3g+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8RHJhZ0Ryb3BDb250ZXh0IG9uRHJhZ0VuZD17b25EcmFnRW5kfT5cbiAgICAgICAgPEZsZXhcbiAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgICBiZz1cIm1haW4tYmdcIlxuICAgICAgICAgIG1pbkg9XCIxMDB2aFwiXG4gICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgIGNvbG9yPVwid2hpdGUtdGV4dFwiXG4gICAgICAgICAgcGI9XCIycmVtXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGbGV4IHB5PVwiNHJlbVwiIGZsZXhEaXI9XCJjb2x1bW5cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCIzeGxcIiBmb250V2VpZ2h0PXs4MDB9PlxuICAgICAgICAgICAgICBUYXNrQm9hcmRcbiAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIHB4PVwiNHJlbVwiPlxuICAgICAgICAgICAgey8qIHtjb2x1bW5zLm1hcCgoY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2tzSW5Db2x1bW4gPSBjb2x1bW4udGFza0lkcy5tYXAoKHRhc2tJZCkgPT5cbiAgICAgICAgICAgICAgICB0YXJlZmFzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29sdW1uQ29tcG9lbnRcbiAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmlkfVxuICAgICAgICAgICAgICAgICAgY29sdW1uPXtjb2x1bW59XG4gICAgICAgICAgICAgICAgICB0YXNrcz17dGFza3NJbkNvbHVtbiBhcyBUYXNrW119XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfSAqL31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvRHJhZ0Ryb3BDb250ZXh0PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQm94IiwiRmxleCIsIkhlYWRpbmciLCJEcmFnRHJvcENvbnRleHQiLCJkeW5hbWljIiwiTmF2YmFyIiwiVGFyZWZhU2VydmljZSIsIkNvbHVtbkNvbXBvZW50Iiwic3NyIiwicmVvcmRlckNvbHVtbkxpc3QiLCJzb3VyY2VDb2wiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJuZXdUYXNrSWRzIiwiQXJyYXkiLCJmcm9tIiwidGFza0lkcyIsInJlbW92ZWQiLCJzcGxpY2UiLCJuZXdDb2x1bW4iLCJIb21lIiwidGFyZWZhcyIsInNldFRhcmVmYSIsInRhcmVmYVNlcnZpY2UiLCJvYnRlclRhcmVmYXMiLCJyZXF1ZXN0UmVzdWx0Iiwib2J0ZXJUb2RvcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJjb2x1bW5zIiwic2V0Q29sdW1ucyIsImlkIiwidGl0bGUiLCJvbkRyYWdFbmQiLCJyZXN1bHQiLCJkZXN0aW5hdGlvbiIsInNvdXJjZSIsImRyb3BwYWJsZUlkIiwiaW5kZXgiLCJzdGFydENvbHVtbkluZGV4IiwiZmluZEluZGV4IiwiY29sIiwiZGVzdGluYXRpb25Db2x1bW5JbmRleCIsImRlc3RpbmF0aW9uQ29sIiwibmV3Q29sdW1ucyIsInN0YXJ0VGFza0lkcyIsIm5ld1N0YXJ0Q29sIiwiZW5kVGFza0lkcyIsIm5ld0VuZENvbCIsImZsZXhEaXIiLCJiZyIsIm1pbkgiLCJ3IiwiY29sb3IiLCJwYiIsInB5IiwiYWxpZ24iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJqdXN0aWZ5IiwicHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});