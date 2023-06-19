"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllMovieUseCase = void 0;
const movie_not_found_error_1 = require("../../../errors/movie-not-found.error");
class GetAllMovieUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute() {
        const movies = await this.repository.getAll();
        if (movies.length === 0) {
            return new movie_not_found_error_1.MovieNotFoundError();
        }
        return movies;
    }
}
exports.GetAllMovieUseCase = GetAllMovieUseCase;
//# sourceMappingURL=get-all-movie.usecase.js.map