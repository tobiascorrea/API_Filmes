"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieByIdUseCaseFactory = void 0;
const get_movie_by_id_usecase_1 = require("../../../domain/usecases/movie/get-by-id/get-movie-by-id.usecase");
const movie_repository_factory_1 = require("../repositories/movie-repository.factory");
const getMovieByIdUseCaseFactory = () => {
    return new get_movie_by_id_usecase_1.GetMovieByIdUseCase((0, movie_repository_factory_1.createMovieRepositoryFactory)());
};
exports.getMovieByIdUseCaseFactory = getMovieByIdUseCaseFactory;
//# sourceMappingURL=get-movie-by-id-usecase.factory.js.map