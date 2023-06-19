"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.failure = exports.created = exports.ok = void 0;
const server_error_1 = require("../../core/errors/server-error");
const ok = (body) => {
    return {
        statusCode: 200,
        body,
    };
};
exports.ok = ok;
const created = (body) => {
    return {
        statusCode: 201,
        body,
    };
};
exports.created = created;
const failure = (error) => {
    return {
        statusCode: error.statusCode,
        body: error.serializeError(),
    };
};
exports.failure = failure;
const serverError = (error) => {
    return {
        statusCode: 500,
        body: new server_error_1.ServerError(error === null || error === void 0 ? void 0 : error.stack).serializeError(),
    };
};
exports.serverError = serverError;
//# sourceMappingURL=http-utils.js.map