"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieController = void 0;
const result_1 = require("../../../../core/errors/result");
const http_utils_1 = require("../../../protocols/http-utils");
class CreateMovieController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle(request) {
        try {
            const { title, director, year } = request;
            const movieOrError = await this.usecase.execute({
                title,
                director,
                year,
            });
            if ((0, result_1.isError)(movieOrError)) {
                return (0, http_utils_1.failure)(movieOrError);
            }
            return (0, http_utils_1.created)(movieOrError);
        }
        catch (error) {
            return (0, http_utils_1.serverError)(error);
        }
    }
}
exports.CreateMovieController = CreateMovieController;
//# sourceMappingURL=create-movie.controller.js.map