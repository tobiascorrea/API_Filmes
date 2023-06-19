"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMovieControllerFactory = void 0;
const get_all_movie_controller_1 = require("../../../infrastructure/http/controllers/movie/get-all-movie.controller");
const get_all_movie_usecasse_factory_1 = require("../usecases/get-all-movie-usecasse.factory");
const getAllMovieControllerFactory = () => {
    return new get_all_movie_controller_1.GetAllMovieController((0, get_all_movie_usecasse_factory_1.getAllMovieUseCaseFactory)());
};
exports.getAllMovieControllerFactory = getAllMovieControllerFactory;
//# sourceMappingURL=get-all-movie-controller.factory.js.map