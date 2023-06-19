"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovieError = void 0;
const application_error_1 = require("../../core/errors/application-error");
class DeleteMovieError extends application_error_1.AplicationError {
    constructor() {
        super(202, 'Não foi possível deletar o filme!');
    }
}
exports.DeleteMovieError = DeleteMovieError;
//# sourceMappingURL=movie-delete.error.js.map