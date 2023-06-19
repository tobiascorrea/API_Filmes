"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovieUseCaseFactory = void 0;
const delete_movie_usecase_1 = require("../../../domain/usecases/movie/delete/delete-movie.usecase");
const movie_repository_factory_1 = require("../repositories/movie-repository.factory");
const deleteMovieUseCaseFactory = () => {
    return new delete_movie_usecase_1.DeleteMovieUseCase((0, movie_repository_factory_1.createMovieRepositoryFactory)());
};
exports.deleteMovieUseCaseFactory = deleteMovieUseCaseFactory;
//# sourceMappingURL=delete-movie-usecase.factory.js.map