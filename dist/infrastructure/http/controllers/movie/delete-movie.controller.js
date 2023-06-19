"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovieController = void 0;
const result_1 = require("../../../../core/errors/result");
const http_utils_1 = require("../../../protocols/http-utils");
class DeleteMovieController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle({ movieId }) {
        try {
            const successOrError = await this.usecase.execute(movieId);
            if ((0, result_1.isError)(successOrError)) {
                return (0, http_utils_1.failure)(successOrError);
            }
            return (0, http_utils_1.ok)({ message: 'Filme deletado com sucesso' });
        }
        catch (error) {
            return (0, http_utils_1.serverError)(error);
        }
    }
}
exports.DeleteMovieController = DeleteMovieController;
//# sourceMappingURL=delete-movie.controller.js.map