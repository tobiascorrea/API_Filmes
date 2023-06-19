"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieController = void 0;
const result_1 = require("../../../../core/errors/result");
const http_utils_1 = require("../../../protocols/http-utils");
class UpdateMovieController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle(request) {
        try {
            const { movieId, title, director, year } = request;
            const movieOrError = await this.usecase.execute(movieId, {
                title,
                director,
                year,
            });
            if ((0, result_1.isError)(movieOrError)) {
                return (0, http_utils_1.failure)(movieOrError);
            }
            return (0, http_utils_1.ok)(movieOrError);
        }
        catch (error) {
            return (0, http_utils_1.serverError)(error);
        }
    }
}
exports.UpdateMovieController = UpdateMovieController;
//# sourceMappingURL=update-movie.controller.js.map