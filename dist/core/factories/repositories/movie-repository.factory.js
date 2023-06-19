"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovieRepositoryFactory = void 0;
const local_movie_repository_1 = require("../../../infrastructure/repositories/local-movie.repository");
const createMovieRepositoryFactory = () => {
    return new local_movie_repository_1.LocalMovieRepository();
};
exports.createMovieRepositoryFactory = createMovieRepositoryFactory;
//# sourceMappingURL=movie-repository.factory.js.map