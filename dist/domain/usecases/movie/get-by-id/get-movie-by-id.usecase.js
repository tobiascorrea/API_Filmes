"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMovieByIdUseCase = void 0;
const movie_not_found_error_1 = require("../../../errors/movie-not-found.error");
class GetMovieByIdUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(movieId) {
        const movie = await this.repository.getById(movieId);
        if (!movie) {
            return new movie_not_found_error_1.MovieNotFoundError();
        }
        return movie;
    }
}
exports.GetMovieByIdUseCase = GetMovieByIdUseCase;
//# sourceMappingURL=get-movie-by-id.usecase.js.map