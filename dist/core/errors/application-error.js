"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AplicationError = void 0;
class AplicationError extends Error {
    constructor(statusCode, message = 'unexpected error') {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
    }
    serializeError() {
        return {
            error: {
                message: this.message,
            },
        };
    }
}
exports.AplicationError = AplicationError;
//# sourceMappingURL=application-error.js.map