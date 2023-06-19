"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMovieByIdControllerFactory = void 0;
const get_movie_by_id_controller_1 = require("../../../infrastructure/http/controllers/movie/get-movie-by-id.controller");
const get_movie_by_id_usecase_factory_1 = require("../usecases/get-movie-by-id-usecase.factory");
const getMovieByIdControllerFactory = () => {
    return new get_movie_by_id_controller_1.GetMovieByIdController((0, get_movie_by_id_usecase_factory_1.getMovieByIdUseCaseFactory)());
};
exports.getMovieByIdControllerFactory = getMovieByIdControllerFactory;
//# sourceMappingURL=get-movie-by-id-controller.factory.js.map