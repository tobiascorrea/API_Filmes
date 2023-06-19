"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMovieByIdController = void 0;
const result_1 = require("../../../../core/errors/result");
const http_utils_1 = require("../../../protocols/http-utils");
class GetMovieByIdController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle(request) {
        try {
            const movieOrError = await this.usecase.execute(request.movieId);
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
exports.GetMovieByIdController = GetMovieByIdController;
//# sourceMappingURL=get-movie-by-id.controller.js.map