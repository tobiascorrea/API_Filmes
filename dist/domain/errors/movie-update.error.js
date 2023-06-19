"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieUpdateError = void 0;
const application_error_1 = require("../../core/errors/application-error");
class MovieUpdateError extends application_error_1.AplicationError {
    constructor() {
        super(202, 'Não foi possível deletar o filme!');
    }
}
exports.MovieUpdateError = MovieUpdateError;
//# sourceMappingURL=movie-update.error.js.map