"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteMovieUseCase = void 0;
const movie_not_found_error_1 = require("../../../errors/movie-not-found.error");
const movie_delete_error_1 = require("../../../errors/movie-delete.error");
class DeleteMovieUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(movieId) {
        const movie = await this.repository.getById(movieId);
        if (!movie) {
            return new movie_not_found_error_1.MovieNotFoundError();
        }
        await this.repository.delete(movieId);
        const data = await this.repository.getById(movieId);
        if (data)
            return new movie_delete_error_1.DeleteMovieError();
        return true;
    }
}
exports.DeleteMovieUseCase = DeleteMovieUseCase;
//# sourceMappingURL=delete-movie.usecase.js.map