"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviAlreadyExistError = void 0;
const application_error_1 = require("../../core/errors/application-error");
class MoviAlreadyExistError extends application_error_1.AplicationError {
    constructor(title) {
        super(400, `Filme ${title} já cadastrado!`);
    }
}
exports.MoviAlreadyExistError = MoviAlreadyExistError;
//# sourceMappingURL=movie-already-exist.error.js.map