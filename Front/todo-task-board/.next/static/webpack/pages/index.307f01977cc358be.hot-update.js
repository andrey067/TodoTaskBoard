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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-beautiful-dnd */ \"./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Navbar */ \"./src/components/Navbar.tsx\");\n/* harmony import */ var _Services_TarefaService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Services/TarefaService */ \"./src/Services/TarefaService.ts\");\n/* harmony import */ var _Services_CardService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Services/CardService */ \"./src/Services/CardService.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst reordenarLista = async (sourceCol, startIndex, endIndex)=>{\n    let cardService = new _Services_CardService__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n    const newArrayCards = Array.from(sourceCol.cards);\n    const [removed] = newArrayCards.splice(startIndex, 1);\n    newArrayCards.splice(endIndex, 0, removed);\n    const newCards = newArrayCards.map((card, index)=>({\n            ...card,\n            posicao: sourceCol.cards[index].posicao\n        }));\n    let result = await Promise.all(newCards.map((card)=>cardService.atualizarCard(card)));\n    if (result.every((r)=>r.isSuccess)) {\n        const newColumn = {\n            ...sourceCol,\n            cards: newCards\n        };\n        return newColumn;\n    }\n};\nconst validarSeCardFoiMovimentadoValido = (destination, source)=>{\n    // Se o destino for desconhecido, não faz nada e retorna.\n    if (!destination) return true;\n    // Se o usuário arrastar e soltar no mesmo local de origem, não faz nada e retorna.\n    if (destination.droppableId === source.droppableId && destination.index === source.index) {\n        return true;\n    }\n    return false;\n};\nconst moverTarefaParaOutraColuna = async (sourceCol, destinationCol, sourceIndex, destinationIndex, tarefas)=>{\n    let tarefaService = new _Services_TarefaService__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    const cards = sourceCol.cards.slice();\n    const [removed] = cards.splice(sourceIndex, 1);\n    const cardsRetirado = cards.map((card)=>({\n            ...card,\n            posicao: card.posicao\n        }));\n    const cards2 = destinationCol.cards.slice();\n    cards2.splice(destinationIndex, 1, removed);\n    const cardsDestino = cards2.map((card)=>({\n            ...card,\n            posicao: card.posicao\n        }));\n    // const updatePromises = [];\n    // for (const tarefa of tarefas) {\n    //   if (tarefa.id === sourceCol.id) {\n    //     updatePromises.push(\n    //       tarefaService.atualizarTarefa({ ...tarefa, cards: cardsRetirado })\n    //     );\n    //   } else if (tarefa.id === destinationCol.id) {\n    //     updatePromises.push(\n    //       tarefaService.atualizarTarefa({ ...tarefa, cards: cardsDestino })\n    //     );\n    //   }\n    // }\n    // const resultPromises = await Promise.all(updatePromises);\n    const newTarefas = tarefas.map((t)=>{\n        if (t.id === sourceCol.id) {\n            return {\n                ...t,\n                cards: cardsRetirado\n            };\n        }\n        if (t.id === destinationCol.id) {\n            return {\n                ...t,\n                cards: cardsDestino\n            };\n        }\n        return t;\n    });\n    return newTarefas;\n};\nconst ColumnCompoent = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"src_components_Column_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/Column */ \"./src/components/Column.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.tsx -> \" + \"@/components/Column\"\n        ]\n    },\n    ssr: false\n});\n_c = ColumnCompoent;\nconst Home = ()=>{\n    _s();\n    const [tarefas, setTarefas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const tarefaService = new _Services_TarefaService__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const obterTarefas = async ()=>{\n            try {\n                let requestResult = await tarefaService.obtertarefasEcards();\n                console.log(\"requestResult\", requestResult);\n                setTarefas(requestResult.data);\n            } catch (error) {\n                console.error(\"Falha ao obter a tarefa:\");\n            }\n        };\n        obterTarefas();\n    }, []);\n    const onDragEnd = async (result)=>{\n        const { destination, source } = result;\n        if (validarSeCardFoiMovimentadoValido(destination, source)) return;\n        // Se o usuário arrastar e soltar no mesmo column (coluna) mas em uma posição diferente.\n        const sourceCol = tarefas[tarefas.findIndex((t)=>t.id === Number(source.droppableId))];\n        const destinationCol = tarefas[tarefas.findIndex((t)=>{\n            var _destination;\n            return t.id === Number((_destination = destination) === null || _destination === void 0 ? void 0 : _destination.droppableId);\n        })];\n        // Reordena a lista de tarefas na mesma coluna (coluna de destino).\n        if (sourceCol.id === destinationCol.id) {\n            const newColumnResult = await reordenarLista(sourceCol, source.index, destination.index);\n            if (newColumnResult) {\n                const newTarefas = tarefas.map((t)=>t.id === newColumnResult.id ? newColumnResult : t);\n                setTarefas(newTarefas);\n            }\n            return;\n        }\n        let newTarefas = await moverTarefaParaOutraColuna(sourceCol, destinationCol, source.index, destination.index, tarefas);\n        if (newTarefas) setTarefas(newTarefas);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext, {\n                onDragEnd: onDragEnd,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    flexDir: \"column\",\n                    bg: \"main-bg\",\n                    minH: \"100vh\",\n                    w: \"full\",\n                    color: \"white-text\",\n                    pb: \"2rem\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            py: \"4rem\",\n                            flexDir: \"column\",\n                            align: \"center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                fontSize: \"3xl\",\n                                fontWeight: 800,\n                                children: \"TaskBoard\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 191,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 190,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                            justify: \"space-between\",\n                            px: \"4rem\",\n                            children: tarefas.map((tarefa)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColumnCompoent, {\n                                    tarefa: tarefa\n                                }, tarefa.id, false, {\n                                    fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                                    lineNumber: 199,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 196,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 182,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 181,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Projetos Audrey\\\\ToDoTaskBoard_Inovati\\\\Front\\\\todo-task-board\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"k8w0e1KPLhWZJc25k9Lzni7t0no=\");\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"ColumnCompoent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V047WUFDYjtZQUNBO1FBQ0Y7UUFFQSxJQUFJQSxhQUFhLE1BQU1WLDJCQUNyQjNCLFdBQ0E0QixnQkFDQUgsT0FBT1osS0FBSyxFQUNaLFlBQW1DQSxLQUFLLEVBQ3hDa0I7UUFHRixJQUFJTSxZQUFZTSxXQUFXTjtJQUM3QjtJQUVBLHFCQUNFLDhEQUFDOUMsaURBQUdBOzswQkFDRiw4REFBQ0ssMERBQU1BOzs7OzswQkFDUCw4REFBQ0YsZ0VBQWVBO2dCQUFDeUQsV0FBV0E7MEJBQzFCLDRFQUFDM0Qsa0RBQUlBO29CQUNIK0QsU0FBUTtvQkFDUkMsSUFBRztvQkFDSEMsTUFBSztvQkFDTEMsR0FBRTtvQkFDRkMsT0FBTTtvQkFDTkMsSUFBRzs7c0NBRUgsOERBQUNwRSxrREFBSUE7NEJBQUNxRSxJQUFHOzRCQUFPTixTQUFROzRCQUFTTyxPQUFNO3NDQUNyQyw0RUFBQ3JFLHFEQUFPQTtnQ0FBQ3NFLFVBQVM7Z0NBQU1DLFlBQVk7MENBQUs7Ozs7Ozs7Ozs7O3NDQUszQyw4REFBQ3hFLGtEQUFJQTs0QkFBQ3lFLFNBQVE7NEJBQWdCQyxJQUFHO3NDQUM5Qm5DLFFBQVFwQixHQUFHLENBQUMsQ0FBQ3dEO2dDQUNaLHFCQUNFLDhEQUFDM0I7b0NBQStCMkIsUUFBUUE7bUNBQW5CQSxPQUFPNUIsRUFBRTs7Ozs7NEJBRWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aO0dBekZNRztNQUFBQTtBQTJGTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQge1xuICBEcmFnRHJvcENvbnRleHQsXG4gIERyYWdnYWJsZUxvY2F0aW9uLFxuICBEcm9wUmVzdWx0LFxufSBmcm9tIFwicmVhY3QtYmVhdXRpZnVsLWRuZFwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IHsgVGFyZWZhIH0gZnJvbSBcIkAvdHlwZXMvVGFyZWZhXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5pbXBvcnQgVGFyZWZhU2VydmljZSBmcm9tIFwiQC9TZXJ2aWNlcy9UYXJlZmFTZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIkAvdHlwZXMvQ2FyZFwiO1xuaW1wb3J0IENhcmRTZXJ2aWNlIGZyb20gXCJAL1NlcnZpY2VzL0NhcmRTZXJ2aWNlXCI7XG5cbmNvbnN0IHJlb3JkZW5hckxpc3RhID0gYXN5bmMgKFxuICBzb3VyY2VDb2w6IFRhcmVmYSxcbiAgc3RhcnRJbmRleDogbnVtYmVyLFxuICBlbmRJbmRleDogbnVtYmVyXG4pOiBQcm9taXNlPFRhcmVmYSB8IHZvaWQ+ID0+IHtcbiAgbGV0IGNhcmRTZXJ2aWNlID0gbmV3IENhcmRTZXJ2aWNlKCk7XG5cbiAgY29uc3QgbmV3QXJyYXlDYXJkcyA9IEFycmF5LmZyb20oc291cmNlQ29sLmNhcmRzKTtcbiAgY29uc3QgW3JlbW92ZWRdID0gbmV3QXJyYXlDYXJkcy5zcGxpY2Uoc3RhcnRJbmRleCwgMSk7XG4gIG5ld0FycmF5Q2FyZHMuc3BsaWNlKGVuZEluZGV4LCAwLCByZW1vdmVkKTtcblxuICBjb25zdCBuZXdDYXJkcyA9IG5ld0FycmF5Q2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKHtcbiAgICAuLi5jYXJkLFxuICAgIHBvc2ljYW86IHNvdXJjZUNvbC5jYXJkc1tpbmRleF0ucG9zaWNhbyxcbiAgfSkpO1xuXG4gIGxldCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBuZXdDYXJkcy5tYXAoKGNhcmQpID0+IGNhcmRTZXJ2aWNlLmF0dWFsaXphckNhcmQoY2FyZCkpXG4gICk7XG5cbiAgaWYgKHJlc3VsdC5ldmVyeSgocikgPT4gci5pc1N1Y2Nlc3MpKSB7XG4gICAgY29uc3QgbmV3Q29sdW1uOiBUYXJlZmEgPSB7XG4gICAgICAuLi5zb3VyY2VDb2wsXG4gICAgICBjYXJkczogbmV3Q2FyZHMsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3Q29sdW1uO1xuICB9XG59O1xuXG5jb25zdCB2YWxpZGFyU2VDYXJkRm9pTW92aW1lbnRhZG9WYWxpZG8gPSAoXG4gIGRlc3RpbmF0aW9uOiBEcmFnZ2FibGVMb2NhdGlvbiB8IG51bGwgfCB1bmRlZmluZWQsXG4gIHNvdXJjZTogRHJhZ2dhYmxlTG9jYXRpb25cbik6IGJvb2xlYW4gPT4ge1xuICAvLyBTZSBvIGRlc3Rpbm8gZm9yIGRlc2NvbmhlY2lkbywgbsOjbyBmYXogbmFkYSBlIHJldG9ybmEuXG4gIGlmICghZGVzdGluYXRpb24pIHJldHVybiB0cnVlO1xuXG4gIC8vIFNlIG8gdXN1w6FyaW8gYXJyYXN0YXIgZSBzb2x0YXIgbm8gbWVzbW8gbG9jYWwgZGUgb3JpZ2VtLCBuw6NvIGZheiBuYWRhIGUgcmV0b3JuYS5cbiAgaWYgKFxuICAgIGRlc3RpbmF0aW9uLmRyb3BwYWJsZUlkID09PSBzb3VyY2UuZHJvcHBhYmxlSWQgJiZcbiAgICBkZXN0aW5hdGlvbi5pbmRleCA9PT0gc291cmNlLmluZGV4XG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgbW92ZXJUYXJlZmFQYXJhT3V0cmFDb2x1bmEgPSBhc3luYyAoXG4gIHNvdXJjZUNvbDogVGFyZWZhLFxuICBkZXN0aW5hdGlvbkNvbDogVGFyZWZhLFxuICBzb3VyY2VJbmRleDogbnVtYmVyLFxuICBkZXN0aW5hdGlvbkluZGV4OiBudW1iZXIsXG4gIHRhcmVmYXM6IFRhcmVmYVtdXG4pID0+IHtcbiAgbGV0IHRhcmVmYVNlcnZpY2UgPSBuZXcgVGFyZWZhU2VydmljZSgpO1xuXG4gIGNvbnN0IGNhcmRzID0gc291cmNlQ29sLmNhcmRzLnNsaWNlKCk7XG4gIGNvbnN0IFtyZW1vdmVkXSA9IGNhcmRzLnNwbGljZShzb3VyY2VJbmRleCwgMSk7XG4gIGNvbnN0IGNhcmRzUmV0aXJhZG86IENhcmRbXSA9IGNhcmRzLm1hcCgoY2FyZCkgPT4gKHtcbiAgICAuLi5jYXJkLFxuICAgIHBvc2ljYW86IGNhcmQucG9zaWNhbyxcbiAgfSkpO1xuXG4gIGNvbnN0IGNhcmRzMiA9IGRlc3RpbmF0aW9uQ29sLmNhcmRzLnNsaWNlKCk7XG4gIGNhcmRzMi5zcGxpY2UoZGVzdGluYXRpb25JbmRleCwgMSwgcmVtb3ZlZCk7XG4gIGNvbnN0IGNhcmRzRGVzdGlubzogQ2FyZFtdID0gY2FyZHMyLm1hcCgoY2FyZCkgPT4gKHtcbiAgICAuLi5jYXJkLFxuICAgIHBvc2ljYW86IGNhcmQucG9zaWNhbyxcbiAgfSkpO1xuXG4gIC8vIGNvbnN0IHVwZGF0ZVByb21pc2VzID0gW107XG5cbiAgLy8gZm9yIChjb25zdCB0YXJlZmEgb2YgdGFyZWZhcykge1xuICAvLyAgIGlmICh0YXJlZmEuaWQgPT09IHNvdXJjZUNvbC5pZCkge1xuICAvLyAgICAgdXBkYXRlUHJvbWlzZXMucHVzaChcbiAgLy8gICAgICAgdGFyZWZhU2VydmljZS5hdHVhbGl6YXJUYXJlZmEoeyAuLi50YXJlZmEsIGNhcmRzOiBjYXJkc1JldGlyYWRvIH0pXG4gIC8vICAgICApO1xuICAvLyAgIH0gZWxzZSBpZiAodGFyZWZhLmlkID09PSBkZXN0aW5hdGlvbkNvbC5pZCkge1xuICAvLyAgICAgdXBkYXRlUHJvbWlzZXMucHVzaChcbiAgLy8gICAgICAgdGFyZWZhU2VydmljZS5hdHVhbGl6YXJUYXJlZmEoeyAuLi50YXJlZmEsIGNhcmRzOiBjYXJkc0Rlc3Rpbm8gfSlcbiAgLy8gICAgICk7XG4gIC8vICAgfVxuICAvLyB9XG5cbiAgLy8gY29uc3QgcmVzdWx0UHJvbWlzZXMgPSBhd2FpdCBQcm9taXNlLmFsbCh1cGRhdGVQcm9taXNlcyk7XG5cbiAgY29uc3QgbmV3VGFyZWZhcyA9IHRhcmVmYXMubWFwKCh0KSA9PiB7XG4gICAgaWYgKHQuaWQgPT09IHNvdXJjZUNvbC5pZCkge1xuICAgICAgcmV0dXJuIHsgLi4udCwgY2FyZHM6IGNhcmRzUmV0aXJhZG8gfTtcbiAgICB9XG4gICAgaWYgKHQuaWQgPT09IGRlc3RpbmF0aW9uQ29sLmlkKSB7XG4gICAgICByZXR1cm4geyAuLi50LCBjYXJkczogY2FyZHNEZXN0aW5vIH07XG4gICAgfVxuICAgIHJldHVybiB0O1xuICB9KTtcblxuICByZXR1cm4gbmV3VGFyZWZhcztcbn07XG5cbmNvbnN0IENvbHVtbkNvbXBvZW50ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCJAL2NvbXBvbmVudHMvQ29sdW1uXCIpLCB7XG4gIHNzcjogZmFsc2UsXG59KTtcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt0YXJlZmFzLCBzZXRUYXJlZmFzXSA9IHVzZVN0YXRlPFRhcmVmYVtdPihbXSk7XG4gIGNvbnN0IHRhcmVmYVNlcnZpY2UgPSBuZXcgVGFyZWZhU2VydmljZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb2J0ZXJUYXJlZmFzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlcXVlc3RSZXN1bHQgPSBhd2FpdCB0YXJlZmFTZXJ2aWNlLm9idGVydGFyZWZhc0VjYXJkcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3RSZXN1bHRcIiwgcmVxdWVzdFJlc3VsdCk7XG4gICAgICAgIHNldFRhcmVmYXMocmVxdWVzdFJlc3VsdC5kYXRhIGFzIFRhcmVmYVtdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWxoYSBhbyBvYnRlciBhIHRhcmVmYTpcIik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9idGVyVGFyZWZhcygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgb25EcmFnRW5kID0gYXN5bmMgKHJlc3VsdDogRHJvcFJlc3VsdCkgPT4ge1xuICAgIGNvbnN0IHsgZGVzdGluYXRpb24sIHNvdXJjZSB9ID0gcmVzdWx0O1xuXG4gICAgaWYgKHZhbGlkYXJTZUNhcmRGb2lNb3ZpbWVudGFkb1ZhbGlkbyhkZXN0aW5hdGlvbiwgc291cmNlKSkgcmV0dXJuO1xuXG4gICAgLy8gU2UgbyB1c3XDoXJpbyBhcnJhc3RhciBlIHNvbHRhciBubyBtZXNtbyBjb2x1bW4gKGNvbHVuYSkgbWFzIGVtIHVtYSBwb3Npw6fDo28gZGlmZXJlbnRlLlxuICAgIGNvbnN0IHNvdXJjZUNvbCA9XG4gICAgICB0YXJlZmFzW3RhcmVmYXMuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSBOdW1iZXIoc291cmNlLmRyb3BwYWJsZUlkKSldO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uQ29sID1cbiAgICAgIHRhcmVmYXNbXG4gICAgICAgIHRhcmVmYXMuZmluZEluZGV4KCh0KSA9PiB0LmlkID09PSBOdW1iZXIoZGVzdGluYXRpb24/LmRyb3BwYWJsZUlkKSlcbiAgICAgIF07XG5cbiAgICAvLyBSZW9yZGVuYSBhIGxpc3RhIGRlIHRhcmVmYXMgbmEgbWVzbWEgY29sdW5hIChjb2x1bmEgZGUgZGVzdGlubykuXG4gICAgaWYgKHNvdXJjZUNvbC5pZCA9PT0gZGVzdGluYXRpb25Db2wuaWQpIHtcbiAgICAgIGNvbnN0IG5ld0NvbHVtblJlc3VsdCA9IGF3YWl0IHJlb3JkZW5hckxpc3RhKFxuICAgICAgICBzb3VyY2VDb2wsXG4gICAgICAgIHNvdXJjZS5pbmRleCxcbiAgICAgICAgKGRlc3RpbmF0aW9uIGFzIERyYWdnYWJsZUxvY2F0aW9uKS5pbmRleFxuICAgICAgKTtcblxuICAgICAgaWYgKG5ld0NvbHVtblJlc3VsdCkge1xuICAgICAgICBjb25zdCBuZXdUYXJlZmFzID0gdGFyZWZhcy5tYXAoKHQpID0+XG4gICAgICAgICAgdC5pZCA9PT0gbmV3Q29sdW1uUmVzdWx0LmlkID8gbmV3Q29sdW1uUmVzdWx0IDogdFxuICAgICAgICApO1xuXG4gICAgICAgIHNldFRhcmVmYXMobmV3VGFyZWZhcyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IG5ld1RhcmVmYXMgPSBhd2FpdCBtb3ZlclRhcmVmYVBhcmFPdXRyYUNvbHVuYShcbiAgICAgIHNvdXJjZUNvbCxcbiAgICAgIGRlc3RpbmF0aW9uQ29sLFxuICAgICAgc291cmNlLmluZGV4LFxuICAgICAgKGRlc3RpbmF0aW9uIGFzIERyYWdnYWJsZUxvY2F0aW9uKS5pbmRleCxcbiAgICAgIHRhcmVmYXNcbiAgICApO1xuXG4gICAgaWYgKG5ld1RhcmVmYXMpIHNldFRhcmVmYXMobmV3VGFyZWZhcyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPERyYWdEcm9wQ29udGV4dCBvbkRyYWdFbmQ9e29uRHJhZ0VuZH0+XG4gICAgICAgIDxGbGV4XG4gICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgICAgYmc9XCJtYWluLWJnXCJcbiAgICAgICAgICBtaW5IPVwiMTAwdmhcIlxuICAgICAgICAgIHc9XCJmdWxsXCJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlLXRleHRcIlxuICAgICAgICAgIHBiPVwiMnJlbVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RmxleCBweT1cIjRyZW1cIiBmbGV4RGlyPVwiY29sdW1uXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiM3hsXCIgZm9udFdlaWdodD17ODAwfT5cbiAgICAgICAgICAgICAgVGFza0JvYXJkXG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBweD1cIjRyZW1cIj4gICAgICAgICAgIFxuICAgICAgICAgICAge3RhcmVmYXMubWFwKCh0YXJlZmEpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Q29sdW1uQ29tcG9lbnQga2V5PXt0YXJlZmEuaWR9IHRhcmVmYT17dGFyZWZhIGFzIFRhcmVmYX0gLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9EcmFnRHJvcENvbnRleHQ+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCb3giLCJGbGV4IiwiSGVhZGluZyIsIkRyYWdEcm9wQ29udGV4dCIsImR5bmFtaWMiLCJOYXZiYXIiLCJUYXJlZmFTZXJ2aWNlIiwiQ2FyZFNlcnZpY2UiLCJyZW9yZGVuYXJMaXN0YSIsInNvdXJjZUNvbCIsInN0YXJ0SW5kZXgiLCJlbmRJbmRleCIsImNhcmRTZXJ2aWNlIiwibmV3QXJyYXlDYXJkcyIsIkFycmF5IiwiZnJvbSIsImNhcmRzIiwicmVtb3ZlZCIsInNwbGljZSIsIm5ld0NhcmRzIiwibWFwIiwiY2FyZCIsImluZGV4IiwicG9zaWNhbyIsInJlc3VsdCIsIlByb21pc2UiLCJhbGwiLCJhdHVhbGl6YXJDYXJkIiwiZXZlcnkiLCJyIiwiaXNTdWNjZXNzIiwibmV3Q29sdW1uIiwidmFsaWRhclNlQ2FyZEZvaU1vdmltZW50YWRvVmFsaWRvIiwiZGVzdGluYXRpb24iLCJzb3VyY2UiLCJkcm9wcGFibGVJZCIsIm1vdmVyVGFyZWZhUGFyYU91dHJhQ29sdW5hIiwiZGVzdGluYXRpb25Db2wiLCJzb3VyY2VJbmRleCIsImRlc3RpbmF0aW9uSW5kZXgiLCJ0YXJlZmFzIiwidGFyZWZhU2VydmljZSIsInNsaWNlIiwiY2FyZHNSZXRpcmFkbyIsImNhcmRzMiIsImNhcmRzRGVzdGlubyIsIm5ld1RhcmVmYXMiLCJ0IiwiaWQiLCJDb2x1bW5Db21wb2VudCIsInNzciIsIkhvbWUiLCJzZXRUYXJlZmFzIiwib2J0ZXJUYXJlZmFzIiwicmVxdWVzdFJlc3VsdCIsIm9idGVydGFyZWZhc0VjYXJkcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZXJyb3IiLCJvbkRyYWdFbmQiLCJmaW5kSW5kZXgiLCJOdW1iZXIiLCJuZXdDb2x1bW5SZXN1bHQiLCJmbGV4RGlyIiwiYmciLCJtaW5IIiwidyIsImNvbG9yIiwicGIiLCJweSIsImFsaWduIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwianVzdGlmeSIsInB4IiwidGFyZWZhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});