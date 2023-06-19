"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieUseCaseFactory = void 0;
const update_movie_usecase_1 = require("../../../domain/usecases/movie/update/update-movie.usecase");
const movie_repository_factory_1 = require("../repositories/movie-repository.factory");
const updateMovieUseCaseFactory = () => {
    return new update_movie_usecase_1.UpdateMovieUseCase((0, movie_repository_factory_1.createMovieRepositoryFactory)());
};
exports.updateMovieUseCaseFactory = updateMovieUseCaseFactory;
//# sourceMappingURL=update-movie-usecase.factory.js.map