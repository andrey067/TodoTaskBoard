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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TarefaService; }\n/* harmony export */ });\nclass TarefaService {\n    async tarefahandler(url, method, data) {\n        try {\n            const requestOptions = {\n                method,\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            };\n            if (data) {\n                requestOptions.body = JSON.stringify(data);\n            }\n            const response = await fetch(url, requestOptions);\n            if (!response.ok) {\n                throw new Error(\"Request failed.\");\n            }\n            return await response.json();\n        } catch (error) {\n            throw new Error(\"Request failed.\");\n        }\n    }\n    async cadastrarTarefa(data) {\n        const url = \"\".concat(this.baseURL);\n        try {\n            return await this.tarefahandler(url, \"POST\", data);\n        } catch (error) {\n            throw new Error(\"Failed to register task.\");\n        }\n    }\n    async atualizarTarefa(data) {\n        const url = \"\".concat(this.baseURL);\n        try {\n            return await this.tarefahandler(url, \"PUT\", data);\n        } catch (error) {\n            throw new Error(\"Failed to update task.\");\n        }\n    }\n    async atualizarNomeTarefa(data) {\n        const url = \"\".concat(this.baseURL);\n        try {\n            return await this.tarefahandler(url, \"PATH\", data);\n        } catch (error) {\n            throw new Error(\"Failed to update task.\");\n        }\n    }\n    async obterTarefa(id) {\n        const url = \"\".concat(this.baseURL, \"/\").concat(id);\n        try {\n            return await this.tarefahandler(url, \"GET\");\n        } catch (error) {\n            throw new Error(\"Failed to get task.\");\n        }\n    }\n    async obterTodos() {\n        const url = \"\".concat(this.baseURL, \"/obtertodos\");\n        try {\n            return await this.tarefahandler(url, \"GET\");\n        } catch (error) {\n            throw new Error(\"Failed to get task.\");\n        }\n    }\n    async obtertarefasEcards() {\n        const url = \"\".concat(this.baseURL, \"/obtertarefas-cards\");\n        try {\n            return await this.tarefahandler(url, \"GET\");\n        } catch (error) {\n            throw new Error(\"Failed to get task.\");\n        }\n    }\n    async excluirTarefa(id) {\n        const url = \"\".concat(this.baseURL, \"?Id=\").concat(id);\n        try {\n            return await this.tarefahandler(url, \"DELETE\");\n        } catch (error) {\n            throw new Error(\"Failed to delete task.\");\n        }\n    }\n    constructor(){\n        this.baseURL = \"https://localhost:7170/api/Tarefa\";\n        this.baseURL = this.baseURL;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU87SUFDN0I7QUFvR0Y7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvU2VydmljZXMvVGFyZWZhU2VydmljZS50cz9iMmUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCJAL3R5cGVzL1Jlc3VsdFwiO1xuaW1wb3J0IHsgVGFyZWZhIH0gZnJvbSBcIkAvdHlwZXMvVGFyZWZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhcmVmYVNlcnZpY2Uge1xuICBwcml2YXRlIGJhc2VVUkw6IHN0cmluZyA9IFwiaHR0cHM6Ly9sb2NhbGhvc3Q6NzE3MC9hcGkvVGFyZWZhXCI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gdGhpcy5iYXNlVVJMO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyB0YXJlZmFoYW5kbGVyPFQ+KFxuICAgIHVybDogc3RyaW5nLFxuICAgIG1ldGhvZDogc3RyaW5nLFxuICAgIGRhdGE/OiBUYXJlZmFcbiAgKTogUHJvbWlzZTxSZXN1bHQ8VD4+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RJbml0ID0ge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIHJlcXVlc3RPcHRpb25zLmJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1ZXN0IGZhaWxlZC5cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVlc3QgZmFpbGVkLlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjYWRhc3RyYXJUYXJlZmEoZGF0YTogVGFyZWZhKTogUHJvbWlzZTxSZXN1bHQ8VGFyZWZhPj4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcmVmYWhhbmRsZXIodXJsLCBcIlBPU1RcIiwgZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZWdpc3RlciB0YXNrLlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhdHVhbGl6YXJUYXJlZmEoZGF0YTogVGFyZWZhKTogUHJvbWlzZTxSZXN1bHQ8VGFyZWZhPj4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcmVmYWhhbmRsZXIodXJsLCBcIlBVVFwiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHVwZGF0ZSB0YXNrLlwiKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhdHVhbGl6YXJOb21lVGFyZWZhKGRhdGE6IFRhcmVmYSk6IFByb21pc2U8UmVzdWx0PFRhcmVmYT4+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmJhc2VVUkx9YDtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50YXJlZmFoYW5kbGVyKHVybCwgXCJQQVRIXCIsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gdXBkYXRlIHRhc2suXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9idGVyVGFyZWZhKGlkOiBudW1iZXIpOiBQcm9taXNlPFJlc3VsdDxUYXJlZmE+PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS8ke2lkfWA7XG5cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMudGFyZWZhaGFuZGxlcih1cmwsIFwiR0VUXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZ2V0IHRhc2suXCIpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9idGVyVG9kb3MoKTogUHJvbWlzZTxSZXN1bHQ8VGFyZWZhW10+PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5iYXNlVVJMfS9vYnRlcnRvZG9zYDtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50YXJlZmFoYW5kbGVyKHVybCwgXCJHRVRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdGFzay5cIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb2J0ZXJ0YXJlZmFzRWNhcmRzKCk6IFByb21pc2U8UmVzdWx0PFRhcmVmYVtdPj4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0vb2J0ZXJ0YXJlZmFzLWNhcmRzYDtcblxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy50YXJlZmFoYW5kbGVyKHVybCwgXCJHRVRcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBnZXQgdGFzay5cIik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZXhjbHVpclRhcmVmYShpZDogbnVtYmVyKTogUHJvbWlzZTxSZXN1bHQ8VGFyZWZhPj4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuYmFzZVVSTH0/SWQ9JHtpZH1gO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLnRhcmVmYWhhbmRsZXIodXJsLCBcIkRFTEVURVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSB0YXNrLlwiKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUYXJlZmFTZXJ2aWNlIiwidGFyZWZhaGFuZGxlciIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJyZXF1ZXN0T3B0aW9ucyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsImVycm9yIiwiY2FkYXN0cmFyVGFyZWZhIiwiYmFzZVVSTCIsImF0dWFsaXphclRhcmVmYSIsImF0dWFsaXphck5vbWVUYXJlZmEiLCJvYnRlclRhcmVmYSIsImlkIiwib2J0ZXJUb2RvcyIsIm9idGVydGFyZWZhc0VjYXJkcyIsImV4Y2x1aXJUYXJlZmEiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Services/TarefaService.ts\n"));

/***/ })

});