"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMovieUseCase = void 0;
const movie_already_exist_error_1 = require("../../../errors/movie-already-exist.error");
class CreateMovieUseCase {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async execute(dto) {
        const movie = await this.movieRepository.getByTitle(dto.title);
        if (movie) {
            return new movie_already_exist_error_1.MoviAlreadyExistError(dto.title);
        }
        return this.movieRepository.create(dto);
    }
}
exports.CreateMovieUseCase = CreateMovieUseCase;
//# sourceMappingURL=create-movie.usecase.js.map