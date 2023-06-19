"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovieControllerFactory = void 0;
const delete_movie_controller_1 = require("../../../infrastructure/http/controllers/movie/delete-movie.controller");
const delete_movie_usecase_factory_1 = require("../usecases/delete-movie-usecase.factory");
const deleteMovieControllerFactory = () => {
    return new delete_movie_controller_1.DeleteMovieController((0, delete_movie_usecase_factory_1.deleteMovieUseCaseFactory)());
};
exports.deleteMovieControllerFactory = deleteMovieControllerFactory;
//# sourceMappingURL=delete-movie-controller.factory.js.map