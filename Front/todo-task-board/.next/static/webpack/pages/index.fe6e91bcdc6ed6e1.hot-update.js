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

/***/ "./src/Services/TarefaService.ts":
/*!***************************************!*\
  !*** ./src/Services/TarefaService.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TarefaService; }\n/* harmony export */ });\nclass TarefaService {\n    async tarefahandler(url, method, data) {\n        try {\n            const requestOptions = {\n                method,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            };\n            if (data) {\n                requestOptions.body = JSON.stringify(data);\n            }\n            const response = await fetch(url, requestOptions);\n            if (!response.ok) {\n                throw new Error(\"Request failed.\");\n            }\n            return await response.json();\n        } catch (error) {\n            throw new Error(\"Request failed.\");\n        }\n    }\n    async cadastrarTarefa(data) {\n        const url = \"\".concat(this.baseURL);\n        try {\n            return await this.tarefahandler(url, \"POST\", data);\n        } catch (error) {\n            throw new Error(\"Failed to register task.\");\n        }\n    }\n    async atualizarTarefa(data) {\n        const url = \"\".concat(this.baseURL);\n        try {\n            return await this.tarefahandler(url, \"PUT\", data);\n        } catch (error) {\n            throw new Error(\"Failed to update task.\");\n        }\n    }\n    async obterTarefa(id) {\n        const url = \"\".concat(this.baseURL, \"/\").concat(id);\n        try {\n            return await this.tarefahandler(url, \"GET\");\n        } catch (error) {\n            throw new Error(\"Failed to get task.\");\n        }\n    }\n    async obterTodos() {\n        const url = \"\".concat(this.baseURL, \"/obtertodos\");\n        try {\n            return await this.tarefahandler(url, \"GET\");\n        } catch (error) {\n            throw new Error(\"Failed to get task.\");\n        }\n    }\n    async obtertarefasEcards() {\n        const url = \"\".concat(this.baseURL, \"/obtertarefas-cards\");\n        try {\n            return await this.tarefahandler(url, \"GET\");\n        } catch (error) {\n            throw new Error(\"Failed to get task.\");\n        }\n    }\n    async excluirTarefa(id) {\n        const url = \"\".concat(this.baseURL, \"?Id=\").concat(id);\n        try {\n            return await this.tarefahandler(url, \"DELETE\");\n        } catch (error) {\n            throw new Error(\"Failed to delete task.\");\n        }\n    }\n    constructor(){\n        this.baseURL = \"https://localhost:7170/api/Tarefa\";\n        this.baseURL = this.baseURL;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2VydmljZXMvVGFyZWZhU2VydmljZS50cyIsIm1hcHBpbmdzIjoiOzs7O0FBR2UsTUFBTUE7SUFPbkIsTUFBY0MsY0FDWkMsR0FBVyxFQUNYQyxNQUFjLEVBQ2RDLElBQWEsRUFDTztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsaUJBQThCO2dCQUNsQ0Y7Z0JBQ0FHLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1lBRUEsSUFBSUYsTUFBTTtnQkFDUkMsZUFBZUUsSUFBSSxHQUFHQyxLQUFLQyxTQUFTLENBQUNMO1lBQ3ZDO1lBRUEsTUFBTU0sV0FBVyxNQUFNQyxNQUFNVCxLQUFLRztZQUVsQyxJQUFJLENBQUNLLFNBQVNFLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUEsT0FBTyxNQUFNSCxTQUFTSSxJQUFJO1FBQzVCLEVBQUUsT0FBT0MsT0FBTztZQUNkLE1BQU0sSUFBSUYsTUFBTTtRQUNsQjtJQUNGO0lBRUEsTUFBTUcsZ0JBQWdCWixJQUFZLEVBQTJCO1FBQzNELE1BQU1GLE1BQU0sR0FBZ0IsT0FBYixJQUFJLENBQUNlLE9BQU87UUFFM0IsSUFBSTtZQUNILE9BQU8sTUFBTSxJQUFJLENBQUNoQixhQUFhLENBQUNDLEtBQUssUUFBUUU7UUFDOUMsRUFBRSxPQUFPVyxPQUFPO1lBQ2QsTUFBTSxJQUFJRixNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxNQUFNSyxnQkFBZ0JkLElBQVksRUFBMkI7UUFDM0QsTUFBTUYsTUFBTSxHQUFnQixPQUFiLElBQUksQ0FBQ2UsT0FBTztRQUUzQixJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQ2hCLGFBQWEsQ0FBQ0MsS0FBSyxPQUFPRTtRQUM5QyxFQUFFLE9BQU9XLE9BQU87WUFDZCxNQUFNLElBQUlGLE1BQU07UUFDbEI7SUFDRjtJQUVBLE1BQU1NLFlBQVlDLEVBQVUsRUFBMkI7UUFDckQsTUFBTWxCLE1BQU0sR0FBbUJrQixPQUFoQixJQUFJLENBQUNILE9BQU8sRUFBQyxLQUFNLE9BQUhHO1FBRS9CLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDbkIsYUFBYSxDQUFDQyxLQUFLO1FBQ3ZDLEVBQUUsT0FBT2EsT0FBTztZQUNkLE1BQU0sSUFBSUYsTUFBTTtRQUNsQjtJQUNGO0lBRUEsTUFBTVEsYUFBd0M7UUFDNUMsTUFBTW5CLE1BQU0sR0FBZ0IsT0FBYixJQUFJLENBQUNlLE9BQU8sRUFBQztRQUU1QixJQUFJO1lBQ0YsT0FBTyxNQUFNLElBQUksQ0FBQ2hCLGFBQWEsQ0FBQ0MsS0FBSztRQUN2QyxFQUFFLE9BQU9hLE9BQU87WUFDZCxNQUFNLElBQUlGLE1BQU07UUFDbEI7SUFDRjtJQUVBLE1BQU1TLHFCQUFnRDtRQUNwRCxNQUFNcEIsTUFBTSxHQUFnQixPQUFiLElBQUksQ0FBQ2UsT0FBTyxFQUFDO1FBRTVCLElBQUk7WUFDRixPQUFPLE1BQU0sSUFBSSxDQUFDaEIsYUFBYSxDQUFDQyxLQUFLO1FBQ3ZDLEVBQUUsT0FBT2EsT0FBTztZQUNkLE1BQU0sSUFBSUYsTUFBTTtRQUNsQjtJQUNGO0lBRUEsTUFBTVUsY0FBY0gsRUFBVSxFQUEyQjtRQUN2RCxNQUFNbEIsTUFBTSxHQUFzQmtCLE9BQW5CLElBQUksQ0FBQ0gsT0FBTyxFQUFDLFFBQVMsT0FBSEc7UUFFbEMsSUFBSTtZQUNGLE9BQU8sTUFBTSxJQUFJLENBQUNuQixhQUFhLENBQUNDLEtBQUs7UUFDdkMsRUFBRSxPQUFPYSxPQUFPO1lBQ2QsTUFBTSxJQUFJRixNQUFNO1FBQ2xCO0lBQ0Y7SUEzRkFXLGFBQWM7YUFGTlAsVUFBa0I7UUFHeEIsSUFBSSxDQUFDQSxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO0lBQzdCO0FBMEZGO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL1NlcnZpY2VzL1RhcmVmYVNlcnZpY2UudHM/YjJlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXN1bHQgfSBmcm9tIFwiQC90eXBlcy9SZXN1bHRcIjtcbmltcG9ydCB7IFRhcmVmYSB9IGZyb20gXCJAL3R5cGVzL1RhcmVmYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXJlZmFTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBiYXNlVVJMOiBzdHJpbmcgPSBcImh0dHBzOi8vbG9jYWxob3N0OjcxNzAvYXBpL1RhcmVmYVwiO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYmFzZVVSTCA9IHRoaXMuYmFzZVVSTDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdGFyZWZhaGFuZGxlcjxUPihcbiAgICB1cmw6IHN0cmluZyxcbiAgICBtZXRob2Q6IHN0cmluZyxcbiAgICBkYXRhPzogVGFyZWZhXG4gICk6IFByb21pc2U8UmVzdWx0PFQ+PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICByZXF1ZXN0T3B0aW9ucy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucyk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVxdWVzdCBmYWlsZWQuXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0IGZhaWxlZC5cIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY2FkYXN0cmFyVGFyZWZhKGRhdGE6IFRhcmVmYSk6IFByb21pc2U8UmVzdWx0PFRhcmVmYT4+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9YDtcblxuICAgIHRyeSB7XG4gICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcmVmYWhhbmRsZXIodXJsLCBcIlBPU1RcIiwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZWdpc3RlciB0YXNrLlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhdHVhbGl6YXJUYXJlZmEoZGF0YTogVGFyZWZhKTogUHJvbWlzZTxSZXN1bHQ8VGFyZWZhPj4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcmVmYWhhbmRsZXIodXJsLCBcIlBVVFwiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB0YXNrLlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvYnRlclRhcmVmYShpZDogbnVtYmVyKTogUHJvbWlzZTxSZXN1bHQ8VGFyZWZhPj4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vJHtpZH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcmVmYWhhbmRsZXIodXJsLCBcIkdFVFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB0YXNrLlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvYnRlclRvZG9zKCk6IFByb21pc2U8UmVzdWx0PFRhcmVmYVtdPj4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vb2J0ZXJ0b2Rvc2A7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudGFyZWZhaGFuZGxlcih1cmwsIFwiR0VUXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhc2suXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9idGVydGFyZWZhc0VjYXJkcygpOiBQcm9taXNlPFJlc3VsdDxUYXJlZmFbXT4+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9L29idGVydGFyZWZhcy1jYXJkc2A7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudGFyZWZhaGFuZGxlcih1cmwsIFwiR0VUXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhc2suXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGV4Y2x1aXJUYXJlZmEoaWQ6IG51bWJlcik6IFByb21pc2U8UmVzdWx0PFRhcmVmYT4+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9P0lkPSR7aWR9YDtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50YXJlZmFoYW5kbGVyKHVybCwgXCJERUxFVEVcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBkZWxldGUgdGFzay5cIik7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiVGFyZWZhU2VydmljZSIsInRhcmVmYWhhbmRsZXIiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwicmVxdWVzdE9wdGlvbnMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJlcnJvciIsImNhZGFzdHJhclRhcmVmYSIsImJhc2VVUkwiLCJhdHVhbGl6YXJUYXJlZmEiLCJvYnRlclRhcmVmYSIsImlkIiwib2J0ZXJUb2RvcyIsIm9idGVydGFyZWZhc0VjYXJkcyIsImV4Y2x1aXJUYXJlZmEiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Services/TarefaService.ts\n"));

/***/ })

});