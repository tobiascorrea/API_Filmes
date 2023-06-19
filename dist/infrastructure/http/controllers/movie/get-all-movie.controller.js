"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMovieController = void 0;
const result_1 = require("../../../../core/errors/result");
const http_utils_1 = require("../../../protocols/http-utils");
class GetAllMovieController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle() {
        try {
            const moviesOrError = await this.usecase.execute();
            if ((0, result_1.isError)(moviesOrError)) {
                return (0, http_utils_1.failure)(moviesOrError);
            }
            return (0, http_utils_1.ok)(moviesOrError);
        }
        catch (error) {
            return (0, http_utils_1.serverError)(error);
        }
    }
}
exports.GetAllMovieController = GetAllMovieController;
//# sourceMappingURL=get-all-movie.controller.js.map