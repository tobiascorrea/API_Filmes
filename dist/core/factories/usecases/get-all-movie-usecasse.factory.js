"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMovieUseCaseFactory = void 0;
const get_all_movie_usecase_1 = require("../../../domain/usecases/movie/get-all/get-all-movie.usecase");
const movie_repository_factory_1 = require("../repositories/movie-repository.factory");
const getAllMovieUseCaseFactory = () => {
    return new get_all_movie_usecase_1.GetAllMovieUseCase((0, movie_repository_factory_1.createMovieRepositoryFactory)());
};
exports.getAllMovieUseCaseFactory = getAllMovieUseCaseFactory;
//# sourceMappingURL=get-all-movie-usecasse.factory.js.map