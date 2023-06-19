"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieNotFoundError = void 0;
const application_error_1 = require("../../core/errors/application-error");
class MovieNotFoundError extends application_error_1.AplicationError {
    constructor() {
        super(404, 'Nenhum filme encontrado!');
    }
}
exports.MovieNotFoundError = MovieNotFoundError;
//# sourceMappingURL=movie-not-found.error.js.map