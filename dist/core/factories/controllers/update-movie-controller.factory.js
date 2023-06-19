"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieControllerFactory = void 0;
const update_movie_controller_1 = require("../../../infrastructure/http/controllers/movie/update-movie.controller");
const update_movie_usecase_factory_1 = require("../usecases/update-movie-usecase.factory");
const updateMovieControllerFactory = () => {
    return new update_movie_controller_1.UpdateMovieController((0, update_movie_usecase_factory_1.updateMovieUseCaseFactory)());
};
exports.updateMovieControllerFactory = updateMovieControllerFactory;
//# sourceMappingURL=update-movie-controller.factory.js.map