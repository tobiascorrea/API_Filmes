"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovieUseCaseFactory = void 0;
const create_movie_usecase_1 = require("../../../domain/usecases/movie/create/create-movie.usecase");
const movie_repository_factory_1 = require("../repositories/movie-repository.factory");
const createMovieUseCaseFactory = () => {
    return new create_movie_usecase_1.CreateMovieUseCase((0, movie_repository_factory_1.createMovieRepositoryFactory)());
};
exports.createMovieUseCaseFactory = createMovieUseCaseFactory;
//# sourceMappingURL=create-movie-usecase.factory.js.map