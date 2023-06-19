"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMovieControllerFactory = void 0;
const create_movie_controller_1 = require("../../../infrastructure/http/controllers/movie/create-movie.controller");
const create_movie_usecase_factory_1 = require("../usecases/create-movie-usecase.factory");
const createMovieControllerFactory = () => {
    return new create_movie_controller_1.CreateMovieController((0, create_movie_usecase_factory_1.createMovieUseCaseFactory)());
};
exports.createMovieControllerFactory = createMovieControllerFactory;
//# sourceMappingURL=create-movie-controller.factory.js.map