"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
const application_error_1 = require("./application-error");
class ServerError extends application_error_1.AplicationError {
    constructor(stack) {
        super(500, stack !== null && stack !== void 0 ? stack : 'Internal server error');
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=server-error.js.map