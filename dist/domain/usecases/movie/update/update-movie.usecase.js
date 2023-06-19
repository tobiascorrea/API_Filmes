"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMovieUseCase = void 0;
const movie_not_found_error_1 = require("../../../errors/movie-not-found.error");
const movie_update_error_1 = require("../../../errors/movie-update.error");
class UpdateMovieUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(movieId, dto) {
        const data = await this.repository.getById(movieId);
        if (!data) {
            return new movie_not_found_error_1.MovieNotFoundError();
        }
        const newMovie = await this.repository.update(movieId, dto);
        if (!newMovie) {
            return new movie_update_error_1.MovieUpdateError();
        }
        return newMovie;
    }
}
exports.UpdateMovieUseCase = UpdateMovieUseCase;
//# sourceMappingURL=update-movie.usecase.js.map